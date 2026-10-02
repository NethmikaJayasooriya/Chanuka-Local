const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

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

async function debugImg() {
  const port = 9390;
  const chrome = spawn(chromePath, ['--headless=new', `--remote-debugging-port=${port}`, '--disable-gpu', '--no-sandbox', '--window-size=375,812']);
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
    await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 1500));

    const res = await pageClient.send('Runtime.evaluate', {
      expression: `(() => {
        const mobSection = document.querySelector('section.lg\\:hidden');
        const img = mobSection.querySelector('img');
        const computed = window.getComputedStyle(img);
        return {
          src: img.src,
          className: img.className,
          styleObjectPosition: img.style.objectPosition,
          computedObjectPosition: computed.objectPosition,
          computedTransform: computed.transform
        };
      })()`,
      returnByValue: true
    });
    console.log('Img info:', res.result.value);

    pageClient.close();
    client.close();
  } finally {
    chrome.kill();
  }
}
debugImg();
