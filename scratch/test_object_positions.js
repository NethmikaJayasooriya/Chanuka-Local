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

async function testPositions() {
  const configs = [
    { label: 'top', objPos: 'right top' },
    { label: 'top_15', objPos: '100% 15%' },
    { label: 'top_20', objPos: '100% 20%' },
    { label: '85_top', objPos: '85% top' },
  ];

  const widths = [1024, 1440, 1920, 2560];

  for (const cfg of configs) {
    for (const w of widths) {
      const h = w > 1600 ? 1080 : (w > 1200 ? 900 : 768);
      const port = 9310;
      const chrome = spawn(chromePath, [
        '--headless=new',
        `--remote-debugging-port=${port}`,
        '--disable-gpu',
        '--no-sandbox',
        `--window-size=${w},${h}`
      ]);

      try {
        await new Promise(r => setTimeout(r, 1200));
        const versionInfo = await getJson(`http://127.0.0.1:${port}/json/version`);
        const client = new CDPClient(versionInfo.webSocketDebuggerUrl);
        await client.ready;

        const targets = await getJson(`http://127.0.0.1:${port}/json/list`);
        const pageTarget = targets.find(t => t.type === 'page');
        const pageClient = new CDPClient(pageTarget.webSocketDebuggerUrl);
        await pageClient.ready;

        await pageClient.send('Page.enable');
        await pageClient.send('Emulation.setDeviceMetricsOverride', {
          width: w,
          height: h,
          deviceScaleFactor: 2,
          mobile: false
        });

        await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
        await new Promise(r => setTimeout(r, 1500));

        // Dynamically set object-position on the desktop image
        await pageClient.send('Runtime.evaluate', {
          expression: `(() => {
            const img = document.querySelector('section.hidden.lg\\\\:block img');
            if (img) img.style.objectPosition = '${cfg.objPos}';
          })()`
        });
        await new Promise(r => setTimeout(r, 200));

        const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
        const outPath = path.join(artifactDir, `pos_${cfg.label}_${w}.png`);
        fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
        console.log(`Saved pos_${cfg.label}_${w}.png`);

        pageClient.close();
        client.close();
      } catch (e) {
        console.error(`Error on ${cfg.label} ${w}:`, e.message);
      } finally {
        chrome.kill();
        await new Promise(r => setTimeout(r, 200));
      }
    }
  }
}

testPositions();
