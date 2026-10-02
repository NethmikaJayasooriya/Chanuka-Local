const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Himasara\\.gemini\\antigravity-ide\\brain\\92efecff-d091-4b47-8cb7-f8c5bac0e0e5';

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 1;
    this.callbacks = new Map();
    this.ready = new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
  }

  send(method, params = {}) {
    const id = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.ws.close();
  }
}

async function testSmallMobile() {
  const viewports = [
    { name: 'fix_320', width: 320, height: 600 },
    { name: 'fix_360', width: 360, height: 740 }
  ];

  for (const vp of viewports) {
    const port = 9294;
    const chrome = spawn(chromePath, [
      '--headless=new',
      `--remote-debugging-port=${port}`,
      '--disable-gpu',
      '--no-sandbox',
      `--window-size=${vp.width},${vp.height}`
    ]);

    try {
      await new Promise(r => setTimeout(r, 1500));
      const versionInfo = await getJson(`http://127.0.0.1:${port}/json/version`);
      const client = new CDPClient(versionInfo.webSocketDebuggerUrl);
      await client.ready;

      const targets = await getJson(`http://127.0.0.1:${port}/json/list`);
      const pageTarget = targets.find(t => t.type === 'page');
      const pageClient = new CDPClient(pageTarget.webSocketDebuggerUrl);
      await pageClient.ready;

      await pageClient.send('Page.enable');
      await pageClient.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: true
      });

      await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
      await new Promise(r => setTimeout(r, 2000));

      await pageClient.send('Runtime.evaluate', {
        expression: `
          (() => {
            const sec = document.querySelector('section.lg\\\\:hidden');
            if (!sec) return;

            // Change clamp font size and translation
            const spans = sec.querySelectorAll('h1 span');
            spans.forEach(s => {
              if (s.textContent.includes('Land Interviews') || s.textContent.includes('Global') || s.textContent.includes('Markets')) {
                s.style.fontSize = 'clamp(1.65rem, 8.2vw, 3.5rem)';
              }
            });

            const globalSpan = Array.from(spans).find(s => s.textContent.trim() === 'Global');
            if (globalSpan) {
              globalSpan.style.transform = 'translateX(-12px)';
            }
          })()
        `
      });

      await new Promise(r => setTimeout(r, 400));
      const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
      const outPath = path.join(artifactDir, `${vp.name}.png`);
      fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
      console.log(`Saved ${vp.name}.png`);

      pageClient.close();
      client.close();
    } catch (err) {
      console.error(`Error on ${vp.name}:`, err);
    } finally {
      chrome.kill();
    }
  }
}

testSmallMobile();
