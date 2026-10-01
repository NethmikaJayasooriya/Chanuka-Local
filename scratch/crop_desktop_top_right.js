const sharp = require('sharp');
const path = require('path');

async function cropTopRight() {
  const imgPath = path.resolve('C:/Users/Himasara/.gemini/antigravity-ide/brain/92efecff-d091-4b47-8cb7-f8c5bac0e0e5/desktop_1440_fixed.png');
  const meta = await sharp(imgPath).metadata();

  // Crop top right from x: 800 to end, y: 0 to 400
  await sharp(imgPath)
    .extract({ left: 800, top: 0, width: meta.width - 800, height: 400 })
    .toFile(path.resolve('scratch/desktop_top_right_fixed_crop.png'));

  console.log('Saved scratch/desktop_top_right_fixed_crop.png');
}

cropTopRight().catch(console.error);
