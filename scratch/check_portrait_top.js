const sharp = require('sharp');
const path = require('path');

async function analyzePortrait() {
  const meta = await sharp('public/images/chanuka-portrait.jpg').metadata();
  console.log('chanuka-portrait.jpg:', meta.width, meta.height);
  const raw = await sharp('public/images/chanuka-portrait.jpg').raw().toBuffer({ resolveWithObject: true });
  const { data, info } = raw;

  let maxVal = 0;
  let nonBlackCount = 0;
  // Check top 150 rows
  for (let y = 0; y < 150; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 10 || g > 10 || b > 10) {
        nonBlackCount++;
        maxVal = Math.max(maxVal, r, g, b);
      }
    }
  }
  console.log('Top 150 rows non-black (>10) pixels count:', nonBlackCount, 'maxVal:', maxVal);
}

analyzePortrait().catch(console.error);
