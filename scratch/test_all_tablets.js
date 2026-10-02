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
  const port = 9360;
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

const applyTabletOpt1 = () => {
  const mobSection = document.querySelector('section.lg\\:hidden');
  if (!mobSection) return;

  // Remove the milky horizontal gradient
  const hGrad = mobSection.querySelector('div.hidden.sm\\:block');
  if (hGrad) hGrad.remove();

  // Adjust image container
  const imgContainer = mobSection.querySelector('.pointer-events-none.absolute');
  if (imgContainer) {
    imgContainer.className = 'pointer-events-none absolute right-0 top-0 w-full sm:w-[50%] md:w-[52%] h-[540px] sm:h-full overflow-hidden -z-10 bg-[#cab29d]';
    const img = imgContainer.querySelector('img');
    if (img) {
      img.className = 'object-cover object-[74%_0%] scale-[1.38] origin-[74%_0%] sm:scale-[1.12] sm:object-[72%_top] sm:origin-[72%_10%]';
    }
    // Gradient
    const vGrad = imgContainer.querySelector('div[aria-hidden]');
    if (vGrad) {
      vGrad.className = 'absolute inset-0 bg-gradient-to-b from-transparent via-[#efe4d9]/85 via-35% to-[#efe4d9] sm:bg-none sm:bg-gradient-to-r sm:from-[#efe4d9] sm:via-[#efe4d9]/40 sm:via-20% sm:to-transparent';
    }
  }

  // Adjust text container padding
  const textContainer = mobSection.querySelector('.container-page');
  if (textContainer) {
    textContainer.className = 'container-page relative pt-[255px] sm:pt-8 md:pt-10 pb-8 sm:pb-10';
    const maxW = textContainer.querySelector('.max-w-\\[540px\\]');
    if (maxW) {
      maxW.className = 'max-w-[540px] sm:max-w-[390px] md:max-w-[430px]';
    }
  }
};

async function testAllTablets() {
  const viewports = [
    { w: 640, h: 800 },
    { w: 768, h: 1024 },
    { w: 834, h: 1112 },
    { w: 932, h: 907 },
    { w: 1000, h: 800 },
  ];

  for (const vp of viewports) {
    await captureScreen(vp.w, vp.h, `tab_opt1_${vp.w}`, applyTabletOpt1);
  }
}

testAllTablets();
