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
  const port = 9284;
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

    // Test top-pinned origin with various scales and horizontal centers
    const tests = [
      {
        name: 'pin_top_scale135_x74',
        objPos: '74% 0%',
        transform: 'scale(1.35)',
        origin: '74% 0%',
        gradTop: '255px',
        contentPt: '270px'
      },
      {
        name: 'pin_top_scale142_x73',
        objPos: '73% 0%',
        transform: 'scale(1.42)',
        origin: '73% 0%',
        gradTop: '265px',
        contentPt: '275px'
      },
      {
        name: 'pin_top_scale148_x73',
        objPos: '73% 0%',
        transform: 'scale(1.48)',
        origin: '73% 0%',
        gradTop: '275px',
        contentPt: '280px'
      },
      {
        name: 'pin_top_scale135_orig5_x73',
        // Slight 5% origin for perfect natural framing
        objPos: '73% 0%',
        transform: 'scale(1.36)',
        origin: '73% 5%',
        gradTop: '255px',
        contentPt: '270px'
      }
    ];

    for (const t of tests) {
      await pageClient.send('Runtime.evaluate', {
        expression: `
          (() => {
            const img = document.querySelector('section.lg\\\\:hidden img');
            if (img) {
              img.style.objectPosition = "${t.objPos}";
              img.style.transform = "${t.transform}";
              img.style.transformOrigin = "${t.origin}";
            }
            const grad = document.querySelector('section.lg\\\\:hidden div[aria-hidden]');
            if (grad && "${t.gradTop || ''}") {
              grad.style.top = "${t.gradTop}";
            }
            const content = document.querySelector('section.lg\\\\:hidden .container-page');
            if (content && "${t.contentPt || ''}") {
              content.style.paddingTop = "${t.contentPt}";
            }
          })()
        `
      });

      await new Promise(r => setTimeout(r, 400));
      const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
      const outPath = path.join(artifactDir, `${t.name}.png`);
      fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
      console.log(`Saved ${t.name}.png`);
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
