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
  const port = 9340;
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

async function run() {
  // Test 1: Remove horizontal gradient overlay completely
  await captureScreen(932, 907, 'test1_no_horiz_grad', () => {
    const hGrad = document.querySelector('section.lg\\:hidden div.hidden.sm\\:block');
    if (hGrad) hGrad.remove();
  });

  // Test 2: Two-column layout on tablet (640px - 1023px)
  // Where text is max-w-[400px] on left, Chanuka is anchored right
  await captureScreen(932, 907, 'test2_tablet_two_column', () => {
    const mobSection = document.querySelector('section.lg\\:hidden');
    const dskSection = document.querySelector('section.hidden.lg\\:block');
    if (mobSection && dskSection) {
      mobSection.style.display = 'none';
      dskSection.style.display = 'block';
      // Adjust desktop layout to fit 932px gracefully:
      const container = dskSection.querySelector('.container-page > div');
      if (container) {
        container.style.maxWidth = '420px';
      }
      const h1 = dskSection.querySelector('h1');
      if (h1) {
        h1.style.fontSize = '2.2rem';
        h1.style.lineHeight = '1.1';
      }
      const p = dskSection.querySelector('p');
      if (p) {
        p.style.fontSize = '14.5px';
        p.style.maxWidth = '380px';
      }
      const img = dskSection.querySelector('img');
      if (img) {
        img.style.objectPosition = 'right top';
      }
    }
  });

  // Test 3: What does the mobile portrait style look like if we keep Chanuka focused on top with text below, but adjusted for 932px?
  await captureScreen(932, 907, 'test3_tablet_stacked', () => {
    const mobImg = document.querySelector('section.lg\\:hidden img');
    const hGrad = document.querySelector('section.lg\\:hidden div.hidden.sm\\:block');
    if (hGrad) hGrad.remove();
    if (mobImg) {
      mobImg.style.transform = 'scale(1.25)';
      mobImg.style.transformOrigin = '70% 0%';
      mobImg.style.objectPosition = '70% 0%';
    }
    const bgContainer = document.querySelector('section.lg\\:hidden > div.pointer-events-none');
    if (bgContainer) {
      bgContainer.style.height = '480px';
    }
    const textContainer = document.querySelector('section.lg\\:hidden .container-page');
    if (textContainer) {
      textContainer.style.paddingTop = '260px';
    }
  });
}

run();
