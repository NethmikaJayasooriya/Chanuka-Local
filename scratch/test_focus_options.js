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

async function run() {
  const port = 9281;
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=390,844'
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
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });

    await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 2000));

    // Test configurations
    const configs = [
      {
        name: 'opt_current',
        style: 'object-position: 73% 8%; transform: scale(1.32); transform-origin: 73% 15%;',
        gradTop: '245px'
      },
      {
        name: 'opt_maximized_clean_1',
        // Lower the vertical focal point to 14% so hair starts below header, scale 1.4 for maximized character
        style: 'object-position: 73% 13%; transform: scale(1.4); transform-origin: 73% 18%;',
        gradTop: '260px',
        contentPt: '275px'
      },
      {
        name: 'opt_maximized_clean_2',
        // Scale 1.45, centered on Chanuka's face
        style: 'object-position: 73% 15%; transform: scale(1.45); transform-origin: 73% 20%;',
        gradTop: '270px',
        contentPt: '280px'
      },
      {
        name: 'opt_maximized_clean_3',
        // Scale 1.38, slight right balance 74%
        style: 'object-position: 74% 14%; transform: scale(1.38); transform-origin: 74% 18%;',
        gradTop: '260px',
        contentPt: '270px'
      }
    ];

    for (const c of configs) {
      await pageClient.send('Runtime.evaluate', {
        expression: `
          (() => {
            const img = document.querySelector('section.lg\\\\:hidden img');
            if (img) {
              img.style.cssText = "${c.style}";
            }
            const grad = document.querySelector('section.lg\\\\:hidden div[aria-hidden]');
            if (grad && "${c.gradTop || ''}") {
              grad.style.top = "${c.gradTop}";
            }
            const content = document.querySelector('section.lg\\\\:hidden .container-page');
            if (content && "${c.contentPt || ''}") {
              content.style.paddingTop = "${c.contentPt}";
            }
          })()
        `
      });

      await new Promise(r => setTimeout(r, 400));
      const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
      const outPath = path.join(artifactDir, `${c.name}.png`);
      fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
      console.log(`Saved ${c.name}.png`);
    }

    pageClient.close();
    client.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
  }
}

run();
