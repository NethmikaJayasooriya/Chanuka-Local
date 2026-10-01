const { spawn } = require('child_process');
const http = require('http');

(async () => {
  const port = 9239;
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=502,750'
  ]);
  await new Promise(r => setTimeout(r, 1500));
  const versionInfo = await new Promise((res, rej) => http.get(`http://127.0.0.1:${port}/json/version`, r => {
    let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
  }).on('error', rej));

  const pageTarget = (await new Promise((res, rej) => http.get(`http://127.0.0.1:${port}/json/list`, r => {
    let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
  }).on('error', rej))).find(t => t.type === 'page');

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
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

  await send('Emulation.setDeviceMetricsOverride', {
    width: 502,
    height: 750,
    deviceScaleFactor: 1,
    mobile: true
  });

  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2000));

  const result = await send('Runtime.evaluate', {
    expression: `(() => {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      
      const bar = document.querySelector('div.fixed.bottom-0');
      const r = bar.getBoundingClientRect();
      
      // Let's check all borders and outline on bar
      const cs = window.getComputedStyle(bar);
      return {
        barRect: r,
        borderTop: cs.borderTop,
        borderBottom: cs.borderBottom,
        outline: cs.outline,
        boxShadow: cs.boxShadow,
        backgroundColor: cs.backgroundColor,
        // Check if there are other fixed or absolute elements near the bottom
        allFixed: Array.from(document.querySelectorAll('*')).filter(el => {
          const s = window.getComputedStyle(el);
          return (s.position === 'fixed' || s.position === 'sticky') && el !== bar;
        }).map(el => ({
          tag: el.tagName,
          id: el.id,
          cls: el.className,
          rect: el.getBoundingClientRect(),
          bg: window.getComputedStyle(el).backgroundColor
        }))
      };
    })()`,
    returnByValue: true
  });
  console.log('Result:', JSON.stringify(result.result.value, null, 2));

  ws.close();
  chrome.kill();
})();
