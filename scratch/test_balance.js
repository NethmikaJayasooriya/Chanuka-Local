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

async function testBalance() {
  const viewports = [
    { name: 'b_320', width: 320, height: 600, mobile: true },
    { name: 'b_360', width: 360, height: 740, mobile: true },
    { name: 'b_375', width: 375, height: 812, mobile: true },
    { name: 'b_390', width: 390, height: 844, mobile: true },
    { name: 'b_430', width: 430, height: 932, mobile: true },
    { name: 'b_640', width: 640, height: 800, mobile: true },
    { name: 'b_768', width: 768, height: 1024, mobile: false },
    { name: 'b_820', width: 820, height: 1180, mobile: false },
    { name: 'b_912', width: 912, height: 1368, mobile: false },
    { name: 'b_1023', width: 1023, height: 800, mobile: false },
    { name: 'b_1024', width: 1024, height: 768, mobile: false },
    { name: 'b_1280', width: 1280, height: 800, mobile: false },
    { name: 'b_1440', width: 1440, height: 900, mobile: false },
    { name: 'b_1920', width: 1920, height: 1080, mobile: false }
  ];

  const results = [];

  for (const vp of viewports) {
    const port = 9295;
    const chrome = spawn(chromePath, [
      '--headless=new',
      `--remote-debugging-port=${port}`,
      '--disable-gpu',
      '--no-sandbox',
      `--window-size=${vp.width},${vp.height}`
    ]);

    try {
      await new Promise(r => setTimeout(r, 1400));
      const versionInfo = await getJson(`http://127.0.0.1:${port}/json/version`);
      const client = new CDPClient(versionInfo.webSocketDebuggerUrl);
      await client.ready;

      const targets = await getJson(`http://127.0.0.1:${port}/json/list`);
      const pageTarget = targets.find(t => t.type === 'page');
      const pageClient = new CDPClient(pageTarget.webSocketDebuggerUrl);
      await pageClient.ready;

      await pageClient.send('Page.enable');
      await pageClient.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: vp.mobile
      });

      await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
      await new Promise(r => setTimeout(r, 1800));

      // Evaluate element metrics
      const evalRes = await pageClient.send('Runtime.evaluate', {
        expression: `(() => {
          const body = document.body;
          const hero = document.querySelector('section');
          const h1 = hero ? hero.querySelector('h1') : null;
          const buttons = hero ? hero.querySelectorAll('a[href="#build"], a[href="/packages"]') : [];
          const ribbon = document.querySelector('.rounded-\\[24px\\]') || hero?.querySelector('.rounded-\\[24px\\]');
          
          const docScrollWidth = document.documentElement.scrollWidth;
          const docClientWidth = document.documentElement.clientWidth;
          const hasHScroll = docScrollWidth > docClientWidth;

          let h1Text = h1 ? h1.innerText.replace(/\\n+/g, ' | ') : '';
          let h1Rect = h1 ? h1.getBoundingClientRect() : null;
          let btnRects = Array.from(buttons).map(b => ({
            text: b.innerText.trim(),
            width: Math.round(b.getBoundingClientRect().width),
            height: Math.round(b.getBoundingClientRect().height),
            top: Math.round(b.getBoundingClientRect().top)
          }));

          return {
            hasHScroll,
            docScrollWidth,
            docClientWidth,
            h1Text,
            h1Rect: h1Rect ? { top: Math.round(h1Rect.top), height: Math.round(h1Rect.height), width: Math.round(h1Rect.width) } : null,
            btnRects,
            heroHeight: hero ? Math.round(hero.getBoundingClientRect().height) : null
          };
        })()`,
        returnByValue: true
      });

      // Capture screenshot
      const shot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
      const outPath = path.join(artifactDir, `${vp.name}.png`);
      fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));

      results.push({ vp: vp.name, width: vp.width, ...evalRes.result.value });

      pageClient.close();
      client.close();
    } catch (e) {
      console.error(`Error on ${vp.name}:`, e.message);
    } finally {
      chrome.kill();
      await new Promise(r => setTimeout(r, 300));
    }
  }

  console.log(JSON.stringify(results, null, 2));
}

testBalance();
