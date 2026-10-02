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

async function captureScreen(w, h, name, injectFn) {
  const port = 9320;
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
      mobile: w < 1024
    });

    await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 1500));

    if (injectFn) {
      await pageClient.send('Runtime.evaluate', { expression: `(${injectFn.toString()})()` });
      await new Promise(r => setTimeout(r, 300));
    }

    const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
    const outPath = path.join(artifactDir, `${name}.png`);
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
    console.log(`Saved ${name}.png`);

    pageClient.close();
    client.close();
  } catch (e) {
    console.error(`Error on ${name}:`, e.message);
  } finally {
    chrome.kill();
    await new Promise(r => setTimeout(r, 200));
  }
}

async function main() {
  // Test tablet styles:
  // Option A: unscaled on sm/md, anchored right top or 75% top, with subtle left fade on sm
  const testTablet = () => {
    const mobImg = document.querySelector('section.lg\\:hidden img');
    if (mobImg) {
      // simulate tablet responsive styles
      mobImg.style.transform = 'scale(1)';
      mobImg.style.objectPosition = 'right top';
    }
    // Also check if adding a horizontal fade helps text contrast on tablet
    const container = document.querySelector('section.lg\\:hidden > div.pointer-events-none');
    if (container) {
      const grad = document.createElement('div');
      grad.setAttribute('aria-hidden', 'true');
      grad.className = 'absolute inset-0 bg-gradient-to-r from-[#efe4d9] via-[#efe4d9]/70 via-40% to-transparent pointer-events-none';
      container.appendChild(grad);
    }
  };

  await captureScreen(768, 1024, 'tab_optA_768', testTablet);
  await captureScreen(834, 1112, 'tab_optA_834', testTablet);
  await captureScreen(900, 1200, 'tab_optA_900', testTablet);

  // Option B: slightly scaled (1.1x), anchored 75% top
  const testTabletB = () => {
    const mobImg = document.querySelector('section.lg\\:hidden img');
    if (mobImg) {
      mobImg.style.transform = 'scale(1.15)';
      mobImg.style.transformOrigin = '75% 0%';
      mobImg.style.objectPosition = '75% 0%';
    }
    const container = document.querySelector('section.lg\\:hidden > div.pointer-events-none');
    if (container) {
      const grad = document.createElement('div');
      grad.setAttribute('aria-hidden', 'true');
      grad.className = 'absolute inset-0 bg-gradient-to-r from-[#efe4d9] via-[#efe4d9]/75 via-45% to-transparent pointer-events-none';
      container.appendChild(grad);
    }
  };

  await captureScreen(768, 1024, 'tab_optB_768', testTabletB);
  await captureScreen(834, 1112, 'tab_optB_834', testTabletB);
  await captureScreen(900, 1200, 'tab_optB_900', testTabletB);
}

main();
