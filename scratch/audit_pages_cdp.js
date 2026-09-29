const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Himasara\\.gemini\\antigravity-ide\\brain\\ccce3725-669a-4b69-91ae-d64391319d73';

const pages = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/pricing', name: 'pricing' },
  { path: '/reviews', name: 'reviews' },
  { path: '/catalogue', name: 'catalogue' },
  { path: '/ebooks', name: 'ebooks' },
  { path: '/resources', name: 'resources' },
  { path: '/about', name: 'about' },
  { path: '/faq', name: 'faq' },
  { path: '/contact', name: 'contact' },
  { path: '/free-ats-cv-template', name: 'template' },
  { path: '/free-ats-cv-checklist', name: 'checklist' },
  { path: '/free-linkedin-headline-formula', name: 'headline' }
];

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
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=1920,1080'
  ]);

  await new Promise(r => setTimeout(r, 1200));

  try {
    const tabs = await getJson('http://127.0.0.1:9222/json/list');
    const tab = tabs.find(t => t.type === 'page') || tabs[0];
    if (!tab) throw new Error('No page tab found');

    const client = new CDPClient(tab.webSocketDebuggerUrl);
    await client.ready;
    await client.send('Page.enable');
    await client.send('DOM.enable');

    console.log('--- STARTING CDP COMPREHENSIVE SCAN ---');

    for (const pg of pages) {
      const url = `http://localhost:3000${pg.path}`;
      await client.send('Page.navigate', { url });
      await new Promise(r => setTimeout(r, 1200));

      // 1. DESKTOP AUDIT (1920x1080)
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
        mobile: false
      });
      await new Promise(r => setTimeout(r, 300));

      const deskEval = await client.send('Runtime.evaluate', {
        expression: `
          (() => {
            const docWidth = document.documentElement.scrollWidth;
            const winWidth = window.innerWidth;
            return {
              scrollWidth: docWidth,
              innerWidth: winWidth,
              hasOverflow: docWidth > winWidth
            };
          })()
        `,
        returnByValue: true
      });

      const deskShot = await client.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, `cdp_${pg.name}_desktop.png`), Buffer.from(deskShot.data, 'base64'));

      // 2. MOBILE AUDIT (390x844 iPhone 14 style)
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        mobile: true
      });
      await new Promise(r => setTimeout(r, 400));

      const mobEval = await client.send('Runtime.evaluate', {
        expression: `
          (() => {
            const docWidth = document.documentElement.scrollWidth;
            const winWidth = window.innerWidth;
            const overflowing = [];
            document.querySelectorAll('*').forEach(el => {
              const r = el.getBoundingClientRect();
              if (r.right > winWidth + 1) {
                overflowing.push({
                  tag: el.tagName,
                  class: (el.className || '').toString().slice(0, 50),
                  right: Math.round(r.right),
                  width: Math.round(r.width)
                });
              }
            });
            return {
              scrollWidth: docWidth,
              innerWidth: winWidth,
              hasOverflow: docWidth > winWidth,
              overflowCount: overflowing.length,
              topOverflows: overflowing.slice(0, 3)
            };
          })()
        `,
        returnByValue: true
      });

      const mobShot = await client.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(artifactDir, `cdp_${pg.name}_mobile.png`), Buffer.from(mobShot.data, 'base64'));

      const dRes = deskEval.result.value;
      const mRes = mobEval.result.value;

      console.log(`[${pg.name}] DESK: scrollW=${dRes.scrollWidth} (over:${dRes.hasOverflow}) | MOB: scrollW=${mRes.scrollWidth}, winW=${mRes.innerWidth} (over:${mRes.hasOverflow}, count:${mRes.overflowCount})`);
      if (mRes.hasOverflow && mRes.topOverflows.length > 0) {
        console.log(`   🚨 Overflow elements on ${pg.name}:`, JSON.stringify(mRes.topOverflows));
      }
    }

    client.close();
  } catch (err) {
    console.error('CDP error:', err);
  } finally {
    chrome.kill();
  }
}

run();
