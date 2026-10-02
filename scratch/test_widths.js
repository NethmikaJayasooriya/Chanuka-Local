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

async function testWidths() {
  const widths = [
    { w: 375, h: 812, name: 'view_375' },
    { w: 390, h: 844, name: 'view_390' },
    { w: 502, h: 750, name: 'view_502' }
  ];

  for (const item of widths) {
    const port = 9285;
    const chrome = spawn(chromePath, [
      '--headless=new',
      `--remote-debugging-port=${port}`,
      '--disable-gpu',
      '--no-sandbox',
      `--window-size=${item.w},${item.h}`
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
        width: item.w,
        height: item.h,
        deviceScaleFactor: 2,
        mobile: true
      });

      await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
      await new Promise(r => setTimeout(r, 2000));

      await pageClient.send('Runtime.evaluate', {
        expression: `
          (() => {
            const img = document.querySelector('section.lg\\\\:hidden img');
            if (img) {
              img.style.objectPosition = "74% 0%";
              img.style.transform = "scale(1.38)";
              img.style.transformOrigin = "74% 0%";
            }
            const grad = document.querySelector('section.lg\\\\:hidden div[aria-hidden]');
            if (grad) {
              grad.style.top = "260px";
            }
            const content = document.querySelector('section.lg\\\\:hidden .container-page');
            if (content) {
              content.style.paddingTop = "270px";
            }
          })()
        `
      });

      await new Promise(r => setTimeout(r, 400));
      const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
      const outPath = path.join(artifactDir, `${item.name}_test.png`);
      fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
      console.log(`Saved ${item.name}_test.png`);

      pageClient.close();
      client.close();
    } catch (err) {
      console.error('Error on width', item.w, err);
    } finally {
      chrome.kill();
    }
  }
}

testWidths();
