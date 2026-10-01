const sharp = require('sharp');
const path = require('path');

async function checkMobileHeader() {
  const imgPath = path.resolve('C:/Users/Himasara/.gemini/antigravity-ide/brain/92efecff-d091-4b47-8cb7-f8c5bac0e0e5/mobile_header_top_1790844430200.png');
  const image = sharp(imgPath);
  const meta = await image.metadata();

  // Crop top 200px
  await sharp(imgPath)
    .extract({ left: 0, top: 0, width: meta.width, height: 200 })
    .toFile(path.resolve('scratch/mobile_header_seam.png'));
  console.log('Saved scratch/mobile_header_seam.png');
}

checkMobileHeader().catch(console.error);
