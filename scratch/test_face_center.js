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
  close() { this.ws.close(); }
}

async function testPosition(posOptions, name) {
  const port = 9387;
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=375,812'
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
      width: 375,
      height: 812,
      deviceScaleFactor: 1,
      mobile: true
    });

    await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 1500));

    // Also draw a subtle red vertical center line at x=187.5px so we can see EXACTLY if the face is centered!
    await pageClient.send('Runtime.evaluate', {
      expression: `(() => {
        const mobSection = document.querySelector('section.lg\\:hidden');
        const img = mobSection.querySelector('img');
        if (img) {
          img.style.objectPosition = '${posOptions.objectPosition}';
          img.style.transform = '${posOptions.transform || 'none'}';
          img.style.transformOrigin = '${posOptions.transformOrigin || 'center top'}';
        }
        // Draw vertical center guideline
        let guide = document.getElementById('debug-center-guide');
        if (!guide) {
          guide = document.createElement('div');
          guide.id = 'debug-center-guide';
          guide.style.position = 'fixed';
          guide.style.top = '0';
          guide.style.bottom = '0';
          guide.style.left = '50%';
          guide.style.width = '2px';
          guide.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
          guide.style.zIndex = '9999';
          guide.style.pointerEvents = 'none';
          document.body.appendChild(guide);
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 300));

    const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(artifactDir, `${name}.png`), Buffer.from(shot.data, 'base64'));
    console.log(`Saved ${name}.png`);

    pageClient.close();
    client.close();
  } finally {
    chrome.kill();
    await new Promise(r => setTimeout(r, 200));
  }
}

async function run() {
  // Let's test a few candidate objectPositions with scale
  // With scale(1.15) and origin matching objectPosition:
  await testPosition({ objectPosition: '70% 0%', transform: 'scale(1.15)', transformOrigin: '70% 0%' }, 'center_test_70');
  await testPosition({ objectPosition: '74% 0%', transform: 'scale(1.15)', transformOrigin: '74% 0%' }, 'center_test_74');
  await testPosition({ objectPosition: '77% 0%', transform: 'scale(1.15)', transformOrigin: '77% 0%' }, 'center_test_77');
  await testPosition({ objectPosition: '80% 0%', transform: 'scale(1.15)', transformOrigin: '80% 0%' }, 'center_test_80');
}

run();
