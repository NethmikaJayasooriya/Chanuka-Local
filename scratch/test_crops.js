const sharp = require('sharp');
const path = require('path');

async function testCrops() {
  const meta = await sharp('public/images/chanuka-hero-hq.png').metadata();
  console.log('Original:', meta.width, meta.height); // 1678 x 937

  // If container is 390 x 600 (aspect ratio 0.65):
  // At height 937, width would be 937 * 0.65 = 609px.
  // Chanuka is located around x = 900 to 1550.
  // Center of Chanuka is around x = 1180.
  // 1180 - 609/2 = 875.
  // Let's test different center X positions: 70%, 75%, 80%

  for (const pct of [68, 72, 76, 80]) {
    const left = Math.round((meta.width * pct / 100) - (609 / 2));
    const safeLeft = Math.max(0, Math.min(meta.width - 609, left));
    await sharp('public/images/chanuka-hero-hq.png')
      .extract({ left: safeLeft, top: 0, width: 609, height: 937 })
      .resize(390, 600)
      .toFile(path.resolve(`scratch/crop_${pct}.png`));
    console.log(`Saved scratch/crop_${pct}.png (left: ${safeLeft})`);
  }
}

testCrops().catch(console.error);
