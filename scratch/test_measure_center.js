const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

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

async function testPositionAndMeasure(w, posX, scale, name) {
  const port = 9388;
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    `--window-size=${w},812`
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
      height: 812,
      deviceScaleFactor: 1,
      mobile: true
    });

    await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 1500));

    await pageClient.send('Runtime.evaluate', {
      expression: `(() => {
        const mobSection = document.querySelector('section.lg\\:hidden');
        const img = mobSection.querySelector('img');
        if (img) {
          img.style.objectPosition = '${posX}% 0%';
          img.style.transform = 'scale(${scale})';
          img.style.transformOrigin = '50% 0%';
        }
      })()`
    });
    await new Promise(r => setTimeout(r, 300));

    const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
    const imgBuf = Buffer.from(shot.data, 'base64');
    fs.writeFileSync(path.join(artifactDir, `${name}.png`), imgBuf);

    // Measure the actual center of his dark hair between y=90 and y=160
    const raw = await sharp(imgBuf).raw().toBuffer({ resolveWithObject: true });
    const { data, info } = raw;
    let minX = w, maxX = 0;
    for (let y = 90; y < 160; y += 2) {
      for (let x = 0; x < w; x += 1) {
        const idx = (y * info.width + x) * info.channels;
        const r = data[idx], g = data[idx+1], b = data[idx+2];
        if (r < 70 && g < 70 && b < 70) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
        }
      }
    }
    const detectedCenter = (minX + maxX) / 2;
    const screenCenter = w / 2;
    console.log(`${name} (${w}px, posX=${posX}%, scale=${scale}): detectedCenter=${detectedCenter.toFixed(1)}, screenCenter=${screenCenter}, diff=${(detectedCenter - screenCenter).toFixed(1)}px`);

    pageClient.close();
    client.close();
  } finally {
    chrome.kill();
    await new Promise(r => setTimeout(r, 200));
  }
}

async function run() {
  await testPositionAndMeasure(375, 75, 1.15, 'measure_375_75');
  await testPositionAndMeasure(375, 77, 1.15, 'measure_375_77');
  await testPositionAndMeasure(375, 79, 1.15, 'measure_375_79');
  await testPositionAndMeasure(390, 77, 1.15, 'measure_390_77');
  await testPositionAndMeasure(414, 78, 1.15, 'measure_414_78');
}

run();
