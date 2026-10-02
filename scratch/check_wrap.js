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

async function checkWrap() {
  const port = 9392;
  const chrome = spawn(chromePath, ['--headless=new', `--remote-debugging-port=${port}`, '--disable-gpu', '--no-sandbox', '--window-size=932,907']);
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
        const span = document.querySelector('section.lg\\:hidden h1 span');
        const container = span.closest('.max-w-\\[540px\\]');
        return {
          spanText: span.innerText,
          spanWidth: span.offsetWidth,
          spanHeight: span.offsetHeight,
          containerWidth: container ? container.offsetWidth : null,
          fontSize: window.getComputedStyle(span).fontSize,
          lineHeight: window.getComputedStyle(span).lineHeight
        };
      })()`,
      returnByValue: true
    });
    console.log('Wrap info at 932px:', res.result.value);

    pageClient.close();
    client.close();
  } finally {
    chrome.kill();
  }
}
checkWrap();
