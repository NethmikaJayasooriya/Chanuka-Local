const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Himasara\\.gemini\\antigravity-ide\\brain\\ccce3725-669a-4b69-91ae-d64391319d73';

function takeScreenshot(urlPath, filename, width = 1920, height = 1080) {
  const outPath = path.join(artifactDir, filename);
  const url = `http://localhost:3000${urlPath}`;
  
  const args = [
    '--headless=new',
    '--disable-gpu',
    `--screenshot=${outPath}`,
    `--window-size=${width},${height}`,
    '--virtual-time-budget=3000',
    url
  ];

  console.log(`Capturing ${url} -> ${filename} (${width}x${height})...`);
  const res = spawnSync(chromePath, args);
  if (res.error) {
    console.error('Error:', res.error);
  } else {
    console.log(`Success! File exists: ${fs.existsSync(outPath)}, size: ${fs.existsSync(outPath) ? fs.statSync(outPath).size : 0}`);
  }
  return outPath;
}

const p = takeScreenshot('/', 'home_test.png');
console.log('Done:', p);
