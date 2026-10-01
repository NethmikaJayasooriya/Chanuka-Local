const sharp = require('sharp');
const path = require('path');

async function checkDesktopHeaderHero() {
  const imgPath = path.resolve('C:/Users/Himasara/.gemini/antigravity-ide/brain/92efecff-d091-4b47-8cb7-f8c5bac0e0e5/desktop_header_top_1790844373172.png');
  const image = sharp(imgPath);
  const meta = await image.metadata();
  console.log(`Image size: ${meta.width}x${meta.height}`);

  // Header is 64px high (h-16).
  // Let's sample y = 60 (inside header), y = 64 (header border), y = 68 (top of hero), y = 80 (hero near header)
  const raw = await image.raw().toBuffer({ resolveWithObject: true });
  const { data, info } = raw;
  const channels = info.channels;

  function getPixel(x, y) {
    const idx = (y * info.width + x) * channels;
    return `rgb(${data[idx]}, ${data[idx+1]}, ${data[idx+2]})`;
  }

  console.log('\n--- X = 100 (Left / Text side) ---');
  console.log('y=60 (Header):', getPixel(100, 60));
  console.log('y=64 (Border):', getPixel(100, 64));
  console.log('y=68 (Hero top):', getPixel(100, 68));
  console.log('y=80 (Hero top):', getPixel(100, 80));

  console.log('\n--- X = 600 (Middle) ---');
  console.log('y=60 (Header):', getPixel(600, 60));
  console.log('y=64 (Border):', getPixel(600, 64));
  console.log('y=68 (Hero top):', getPixel(600, 68));
  console.log('y=80 (Hero top):', getPixel(600, 80));

  console.log('\n--- X = 1000 (Right / Chanuka image side) ---');
  console.log('y=60 (Header):', getPixel(1000, 60));
  console.log('y=64 (Border):', getPixel(1000, 64));
  console.log('y=68 (Hero top):', getPixel(1000, 68));
  console.log('y=80 (Hero top):', getPixel(1000, 80));

  // Extract a crop of y: 40 to 140 (spanning header into hero)
  await sharp(imgPath)
    .extract({ left: 0, top: 40, width: meta.width, height: 100 })
    .toFile(path.resolve('scratch/header_hero_seam_desktop.png'));
  console.log('Saved scratch/header_hero_seam_desktop.png');
}

checkDesktopHeaderHero().catch(console.error);
