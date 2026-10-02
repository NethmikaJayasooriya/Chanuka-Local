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
  const port = 9370;
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
      deviceScaleFactor: 1,
      mobile: false
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

// Option A: Clean Stacked Layout for all mobile & tablet (<1024px)
// Background image has NO horizontal haze. Chanuka is character-focused at top.
// Clean vertical fade below chin. Text cleanly underneath.
const applyCleanStacked = () => {
  const mobSection = document.querySelector('section.lg\\:hidden');
  if (!mobSection) return;

  // 1. Remove the milky horizontal gradient completely
  const hGrad = mobSection.querySelector('div.hidden.sm\\:block');
  if (hGrad) hGrad.remove();

  // 2. Mobile image container:
  // Center Chanuka's head at top, scale appropriately so his head is clear and crisp
  const img = mobSection.querySelector('img');
  if (img) {
    img.style.objectPosition = '74% 0%';
    img.style.transform = 'scale(1.35)';
    img.style.transformOrigin = '74% 0%';
  }

  // 3. Vertical fade starts below chin and cleanly reaches 100% solid cream
  const vGrad = mobSection.querySelector('div[aria-hidden].bg-gradient-to-b');
  if (vGrad) {
    vGrad.className = 'absolute inset-x-0 top-[240px] sm:top-[260px] bottom-0 bg-gradient-to-b from-transparent via-[#efe4d9]/90 via-30% to-[#efe4d9]';
  }

  // 4. Section padding
  const textContainer = mobSection.querySelector('.container-page');
  if (textContainer) {
    textContainer.className = 'container-page relative pt-[240px] sm:pt-[255px] pb-10 sm:pb-12';
    const maxW = textContainer.querySelector('.max-w-\\[540px\\]');
    if (maxW) maxW.style.maxWidth = '500px';
  }
};

async function run() {
  await captureScreen(375, 812, 'comp_stacked_375', applyCleanStacked);
  await captureScreen(768, 1024, 'comp_stacked_768', applyCleanStacked);
  await captureScreen(932, 907, 'comp_stacked_932', applyCleanStacked);
}

run();
