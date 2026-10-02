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

async function testMobileVariations() {
  const port = 9382;
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

    // Test 3 scales: 1.15, 1.25, 1.35
    for (const scale of [1.15, 1.25, 1.35]) {
      await pageClient.send('Runtime.evaluate', {
        expression: `(() => {
          const mobSection = document.querySelector('section.lg\\:hidden');
          const hGrad = mobSection.querySelector('div.hidden.sm\\:block');
          if (hGrad) hGrad.remove();
          const img = mobSection.querySelector('img');
          if (img) {
            img.style.objectPosition = '74% 0%';
            img.style.transform = 'scale(${scale})';
            img.style.transformOrigin = '74% 0%';
          }
          const vGrad = mobSection.querySelector('div[aria-hidden].bg-gradient-to-b');
          if (vGrad) {
            vGrad.className = 'absolute inset-x-0 top-[230px] bottom-0 bg-gradient-to-b from-transparent via-[#efe4d9]/90 via-30% to-[#efe4d9]';
          }
          const textContainer = mobSection.querySelector('.container-page');
          if (textContainer) {
            textContainer.className = 'container-page relative pt-[240px] pb-10';
          }
        })()`
      });
      await new Promise(r => setTimeout(r, 400));
      const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, `mobile_scale_${scale}.png`), Buffer.from(shot.data, 'base64'));
      console.log(`Saved mobile_scale_${scale}.png`);
    }

    pageClient.close();
    client.close();
  } finally {
    chrome.kill();
  }
}

testMobileVariations();
