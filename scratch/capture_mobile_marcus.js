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
  const port = 9227;
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=390,844'
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
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });

    console.log('Navigating to http://localhost:3000 ...');
    await pageClient.send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise(r => setTimeout(r, 3000));

    // Capture top viewport
    const topShot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
    const topPath = path.join(artifactDir, 'marcus_mobile_top.png');
    fs.writeFileSync(topPath, Buffer.from(topShot.data, 'base64'));
    console.log('Saved top screenshot to:', topPath);

    // Scroll down 480px
    await pageClient.send('Runtime.evaluate', {
      expression: 'window.scrollTo(0, 480)'
    });
    await new Promise(r => setTimeout(r, 1000));

    // Capture reviews viewport
    const bottomShot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
    const bottomPath = path.join(artifactDir, 'marcus_mobile_bottom.png');
    fs.writeFileSync(bottomPath, Buffer.from(bottomShot.data, 'base64'));
    console.log('Saved bottom screenshot to:', bottomPath);

    // Scroll down 900px
    await pageClient.send('Runtime.evaluate', {
      expression: 'window.scrollTo(0, 900)'
    });
    await new Promise(r => setTimeout(r, 1000));

    // Capture proof viewport
    const proofShot = await pageClient.send('Page.captureScreenshot', { format: 'png' });
    const proofPath = path.join(artifactDir, 'marcus_mobile_proof.png');
    fs.writeFileSync(proofPath, Buffer.from(proofShot.data, 'base64'));
    console.log('Saved proof screenshot to:', proofPath);

    pageClient.close();
    client.close();
  } catch (err) {
    console.error('Error:', err);
  } finally {
    chrome.kill();
  }
}

run();
