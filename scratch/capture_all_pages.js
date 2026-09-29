const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Himasara\\.gemini\\antigravity-ide\\brain\\ccce3725-669a-4b69-91ae-d64391319d73';

const pages = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/pricing', name: 'pricing' },
  { path: '/reviews', name: 'reviews' },
  { path: '/catalogue', name: 'catalogue' },
  { path: '/ebooks', name: 'ebooks' },
  { path: '/resources', name: 'resources' },
  { path: '/about', name: 'about' },
  { path: '/faq', name: 'faq' },
  { path: '/contact', name: 'contact' },
  { path: '/free-ats-cv-template', name: 'template' },
  { path: '/free-ats-cv-checklist', name: 'checklist' },
  { path: '/free-linkedin-headline-formula', name: 'headline' }
];

console.log(`Starting scan of ${pages.length} pages...`);

for (const pg of pages) {
  // Desktop
  const deskFile = path.join(artifactDir, `shot_${pg.name}_desktop.png`);
  spawnSync(chromePath, [
    '--headless=new',
    '--disable-gpu',
    `--screenshot=${deskFile}`,
    '--window-size=1920,1080',
    '--virtual-time-budget=2000',
    `http://localhost:3000${pg.path}`
  ]);
  
  // Mobile
  const mobFile = path.join(artifactDir, `shot_${pg.name}_mobile.png`);
  spawnSync(chromePath, [
    '--headless=new',
    '--disable-gpu',
    `--screenshot=${mobFile}`,
    '--window-size=390,844',
    '--virtual-time-budget=2000',
    `http://localhost:3000${pg.path}`
  ]);

  console.log(`✅ ${pg.name}: desk=${fs.existsSync(deskFile)} (${fs.statSync(deskFile).size}B), mob=${fs.existsSync(mobFile)} (${fs.statSync(mobFile).size}B)`);
}

console.log('All screenshots captured!');
