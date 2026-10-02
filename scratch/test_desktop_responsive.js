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

async function testDesktop() {
  const viewports = [
    { name: 'perfect_1024', width: 1024, height: 768 },
    { name: 'perfect_1280', width: 1280, height: 800 },
    { name: 'perfect_1440', width: 1440, height: 900 }
  ];

  for (const vp of viewports) {
    const port = 9293;
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
        mobile: false
      });

      await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
      await new Promise(r => setTimeout(r, 2000));

      await pageClient.send('Runtime.evaluate', {
        expression: `
          (() => {
            const sec = document.querySelector('section.hidden.lg\\\\:block');
            if (!sec) return;

            // Warm seamless gradient
            const grad = sec.querySelector('div[aria-hidden]');
            if (grad) {
              grad.style.background = 'linear-gradient(90deg, #efe4d9 0%, #efe4d9 26%, rgba(239,228,217,0.85) 36%, rgba(239,228,217,0.15) 46%, transparent 54%)';
            }

            // Responsive text container
            const textBox = sec.querySelector('.container-page > div');
            if (textBox) {
              textBox.style.maxWidth = '${vp.width <= 1024 ? '440px' : vp.width <= 1280 ? '560px' : '700px'}';
            }

            const h1 = sec.querySelector('h1');
            if (h1) {
              h1.style.fontSize = '${vp.width <= 1024 ? '2.15rem' : vp.width <= 1280 ? '2.75rem' : '3.6rem'}';
              h1.style.lineHeight = '1.1';
              h1.style.maxWidth = '${vp.width <= 1024 ? '12ch' : '15ch'}';
            }

            const p = sec.querySelector('p.rise.d1');
            if (p) {
              p.style.maxWidth = '${vp.width <= 1024 ? '420px' : '520px'}';
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

testDesktop();
