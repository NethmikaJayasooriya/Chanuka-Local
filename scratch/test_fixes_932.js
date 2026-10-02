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
  const port = 9350;
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
  // Option 1: Mobile hero at 932px with character focus on right side, clean background on left, NO milky fog
  // The image is anchored right-top, scale 1.1 or 1.2 on right half
  await captureScreen(932, 907, 'fix_opt1_right_portrait', () => {
    const mobSection = document.querySelector('section.lg\\:hidden');
    // Remove the milky horizontal gradient
    const hGrad = mobSection.querySelector('div.hidden.sm\\:block');
    if (hGrad) hGrad.remove();

    // Adjust image container to be absolute right-0 w-[55%] or w-[500px]
    const imgContainer = mobSection.querySelector('.pointer-events-none.absolute');
    if (imgContainer) {
      imgContainer.className = 'pointer-events-none absolute right-0 top-0 w-[50%] h-full overflow-hidden -z-10 bg-[#cab29d]';
      const img = imgContainer.querySelector('img');
      if (img) {
        img.style.objectPosition = '72% top';
        img.style.transform = 'scale(1.15)';
        img.style.transformOrigin = '72% 10%';
      }
      // Add a fade from left of the image to blend into section bg
      const vGrad = imgContainer.querySelector('div[aria-hidden]');
      if (vGrad) {
        vGrad.className = 'absolute inset-0 bg-gradient-to-r from-[#efe4d9] via-[#efe4d9]/40 via-20% to-transparent';
      }
    }

    // Set text container to left side with normal padding
    const textContainer = mobSection.querySelector('.container-page');
    if (textContainer) {
      textContainer.style.paddingTop = '40px';
      const maxW = textContainer.querySelector('.max-w-\\[540px\\]');
      if (maxW) maxW.style.maxWidth = '460px';
    }
  });

  // Option 2: What if we show the desktop layout starting from md (768px) with proper responsive sizing?
  await captureScreen(932, 907, 'fix_opt2_desktop_at_md', () => {
    const mobSection = document.querySelector('section.lg\\:hidden');
    const dskSection = document.querySelector('section.hidden.lg\\:block');
    mobSection.style.display = 'none';
    dskSection.style.display = 'block';

    // In dskSection, let's make it look balanced at 932px:
    const textCol = dskSection.querySelector('.max-w-\\[460px\\]');
    if (textCol) {
      textCol.style.maxWidth = '420px';
    }
    const h1 = dskSection.querySelector('h1');
    if (h1) {
      h1.style.fontSize = '2.4rem';
      h1.style.lineHeight = '1.08';
    }
    const p = dskSection.querySelector('p');
    if (p) {
      p.style.fontSize = '15px';
      p.style.maxWidth = '390px';
    }
    const img = dskSection.querySelector('img');
    if (img) {
      img.style.objectPosition = 'right top';
    }
    // Gradient: ensure it fades nicely without touching Chanuka
    const grad = dskSection.querySelector('div.bg-\\[linear-gradient\\(90deg\\,#efe4d9_0\\%\\,#efe4d9_26\\%\\,rgba\\(239\\,228\\,217\\,0\\.85\\)_36\\%\\,rgba\\(239\\,228\\,217\\,0\\.15\\)_46\\%\\,transparent_54\\%\\)\\]');
    if (grad) {
      grad.style.background = 'linear-gradient(90deg, #efe4d9 0%, #efe4d9 38%, rgba(239,228,217,0.85) 48%, rgba(239,228,217,0.15) 56%, transparent 64%)';
    }
  });
}

run();
