const { spawn } = require('child_process');
const http = require('http');

function getJson(url) {
  return new Promise((res, rej) => http.get(url, r => {
    let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
  }).on('error', rej));
}

(async () => {
  const port = 9235;
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

  const info = await pSend('Runtime.evaluate', {
    expression: `(() => {
      const bar = document.querySelector('div.fixed.bottom-0');
      const rect = bar.getBoundingClientRect();
      const elBelow = document.elementFromPoint(195, window.innerHeight - 1);
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      return {
        windowHeight: window.innerHeight,
        windowInnerWidth: window.innerWidth,
        barRect: { top: rect.top, bottom: rect.bottom, height: rect.height },
        barStyles: {
          bottom: window.getComputedStyle(bar).bottom,
          paddingBottom: window.getComputedStyle(bar).paddingBottom,
          borderBottomWidth: window.getComputedStyle(bar).borderBottomWidth,
          borderBottomColor: window.getComputedStyle(bar).borderBottomColor,
        },
        elBelowTag: elBelow ? elBelow.tagName : null,
        elBelowClass: elBelow ? elBelow.className : null,
        bodyBg: window.getComputedStyle(document.body).backgroundColor,
        htmlBg: window.getComputedStyle(document.documentElement).backgroundColor,
      };
    })()`,
    returnByValue: true
  });
  console.log('Bottom info:', info.result.value);

  ws.close();
  pageWs.close();
  chrome.kill();
})();
