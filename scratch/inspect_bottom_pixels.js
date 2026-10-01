const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

(async () => {
  const port = 9237;
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=390,844'
  ]);
  await new Promise(r => setTimeout(r, 1500));
  const versionInfo = await new Promise((res, rej) => http.get(`http://127.0.0.1:${port}/json/version`, r => {
    let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
  }).on('error', rej));

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

  const targets = await new Promise((res, rej) => http.get(`http://127.0.0.1:${port}/json/list`, r => {
    let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
  }).on('error', rej));

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

  await pSend('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });

  await pSend('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2000));

  // Capture bottom 20px of viewport
  const bottomCrop = await pSend('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 830, width: 390, height: 14, scale: 2 }
  });
  fs.writeFileSync('scratch/bottom_edge.png', Buffer.from(bottomCrop.data, 'base64'));

  const pixelData = await pSend('Runtime.evaluate', {
    expression: `(() => {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const bar = document.querySelector('div.fixed.bottom-0');
      const r = bar.getBoundingClientRect();
      return {
        innerHeight: window.innerHeight,
        barTop: r.top,
        barBottom: r.bottom,
        barHeight: r.height,
        diff: window.innerHeight - r.bottom
      };
    })()`,
    returnByValue: true
  });
  console.log('Pixel inspect:', pixelData.result.value);

  ws.close();
  pageWs.close();
  chrome.kill();
})();
