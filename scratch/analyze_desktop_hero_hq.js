const sharp = require('sharp');
const path = require('path');

async function analyzeDesktopHeroHq() {
  const meta = await sharp('public/images/chanuka-hero-hq.png').metadata();
  console.log('chanuka-hero-hq.png:', meta.width, meta.height);
  const raw = await sharp('public/images/chanuka-hero-hq.png').raw().toBuffer({ resolveWithObject: true });
  const { data, info } = raw;

  function sample(x, y) {
    const idx = (y * info.width + x) * info.channels;
    return { r: data[idx], g: data[idx+1], b: data[idx+2] };
  }

  console.log('Top row across X:');
  for (let x = 0; x < info.width; x += 200) {
    console.log(`x=${x}, y=0:`, sample(x, 0));
  }

  console.log('\nNear top (y=20) across X:');
  for (let x = 0; x < info.width; x += 200) {
    console.log(`x=${x}, y=20:`, sample(x, 20));
  }

  console.log('\nTop edge vertical gradient at x=400 (blank background area):');
  for (let y = 0; y < 200; y += 20) {
    console.log(`x=400, y=${y}:`, sample(400, y));
  }

  console.log('\nTop edge vertical gradient at x=1400 (above Chanuka):');
  for (let y = 0; y < 100; y += 10) {
    console.log(`x=1400, y=${y}:`, sample(1400, y));
  }
}

analyzeDesktopHeroHq().catch(console.error);
