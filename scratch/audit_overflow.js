const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=390,844'
  ]);

  // wait for chrome to start
  await new Promise(r => setTimeout(r, 1500));

  const getJson = (url) => new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  try {
    const list = await getJson('http://127.0.0.1:9222/json/list');
    console.log('Chrome tabs:', list.length);
  } catch (e) {
    console.error('Error connecting to Chrome:', e.message);
  } finally {
    chrome.kill();
  }
}

run();
