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

async function run() {
  const port = 9238;
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=502,750'
  ]);

  try {
    await new Promise(r => setTimeout(r, 1500));
    const versionInfo = await getJson(`http://127.0.0.1:${port}/json/version`);
    const client = new CDPClient(versionInfo.webSocketDebuggerUrl);
    await client.ready;

    const targets = await getJson(`http://127.0.0.1:${port}/json/list`);
    const pageTarget = targets.find(t => t.type === 'page');
    const pageClient = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await pageClient.ready;

    await pageClient.send('Page.enable');
    await pageClient.send('Emulation.setDeviceMetricsOverride', {
      width: 502,
      height: 750,
      deviceScaleFactor: 1,
      mobile: true
    });

    await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 2500));

    // Capture user viewport screenshot
    const userShot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
    const userPath = path.join(artifactDir, 'user_viewport_502x750.png');
    fs.writeFileSync(userPath, Buffer.from(userShot.data, 'base64'));
    console.log('Saved user viewport screenshot to:', userPath);

    // Evaluate elements at the bottom
    const evalData = await pageClient.send('Runtime.evaluate', {
      expression: `(() => {
        const bar = document.querySelector('div.fixed.bottom-0');
        const r = bar.getBoundingClientRect();
        return {
          windowH: window.innerHeight,
          barTop: r.top,
          barBottom: r.bottom,
          barHeight: r.height,
          barStyles: {
            bottom: window.getComputedStyle(bar).bottom,
            paddingBottom: window.getComputedStyle(bar).paddingBottom,
            borderBottomWidth: window.getComputedStyle(bar).borderBottomWidth,
            borderBottomColor: window.getComputedStyle(bar).borderBottomColor,
            borderTopWidth: window.getComputedStyle(bar).borderTopWidth,
            borderTopColor: window.getComputedStyle(bar).borderTopColor,
          }
        };
      })()`,
      returnByValue: true
    });
    console.log('Eval data:', evalData.result.value);

    pageClient.close();
    client.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
  }
}

run();
