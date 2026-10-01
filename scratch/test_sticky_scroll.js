const { spawn } = require('child_process');
const http = require('http');

function getJson(url) {
  return new Promise((res, rej) => http.get(url, r => {
    let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
  }).on('error', rej));
}

(async () => {
  const port = 9232;
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=390,844'
  ]);
  await new Promise(r => setTimeout(r, 1500));
  const versionInfo = await getJson(`http://127.0.0.1:${port}/json/version`);
  const ws = new WebSocket(versionInfo.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const curId = id++;
    const handler = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === curId) { ws.removeEventListener('message', handler); res(msg.result); }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  const targets = await getJson(`http://127.0.0.1:${port}/json/list`);
  const page = targets.find(t => t.type === 'page');
  const pageWs = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => pageWs.onopen = r);
  const pSend = (method, params = {}) => new Promise(res => {
    const curId = id++;
    const handler = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === curId) { pageWs.removeEventListener('message', handler); res(msg.result); }
    };
    pageWs.addEventListener('message', handler);
    pageWs.send(JSON.stringify({ id: curId, method, params }));
  });

  await pSend('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2000));

  const atTop = await pSend('Runtime.evaluate', {
    expression: `(() => {
      const bar = document.querySelector('div.fixed.bottom-0');
      return bar ? {
        cls: bar.className,
        bg: window.getComputedStyle(bar).backgroundColor,
        border: window.getComputedStyle(bar).borderTopColor
      } : null;
    })()`,
    returnByValue: true
  });

  await pSend('Runtime.evaluate', { expression: 'window.scrollTo(0, 1200)' });
  await new Promise(r => setTimeout(r, 600));

  const atTrustBar = await pSend('Runtime.evaluate', {
    expression: `(() => {
      const bar = document.querySelector('div.fixed.bottom-0');
      return bar ? {
        bg: window.getComputedStyle(bar).backgroundColor,
        border: window.getComputedStyle(bar).borderTopColor
      } : null;
    })()`,
    returnByValue: true
  });

  console.log('StickyBar at top:', atTop.result.value);
  console.log('StickyBar at scroll 1200:', atTrustBar.result.value);

  ws.close();
  pageWs.close();
  chrome.kill();
})();
