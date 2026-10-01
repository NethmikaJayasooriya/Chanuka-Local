const sharp = require('sharp');
const path = require('path');

async function inspectImage(filePath) {
  const meta = await sharp(filePath).metadata();
  console.log('--- Inspecting:', filePath, `${meta.width}x${meta.height}`);

  // Sample top edge (y=0 to 10), top-left, top-middle, top-right
  const raw = await sharp(filePath).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = raw;
  const channels = info.channels;

  function getPixel(x, y) {
    const idx = (y * info.width + x) * channels;
    return {
      r: data[idx],
      g: data[idx + 1],
      b: data[idx + 2],
      a: channels === 4 ? data[idx + 3] : 255
    };
  }

  console.log('Top-Left (x=5, y=5):', getPixel(5, 5));
  console.log('Top-Center (x=' + Math.floor(info.width / 2) + ', y=5):', getPixel(Math.floor(info.width / 2), 5));
  console.log('Top-Right (x=' + (info.width - 6) + ', y=5):', getPixel(info.width - 6, 5));
  console.log('Mid-Left (x=5, y=' + Math.floor(info.height / 2) + '):', getPixel(5, Math.floor(info.height / 2)));
  console.log('Mid-Right (x=' + (info.width - 6) + ', y=' + Math.floor(info.height / 2) + '):', getPixel(info.width - 6, Math.floor(info.height / 2)));
  console.log('Bottom-Center (x=' + Math.floor(info.width / 2) + ', y=' + (info.height - 6) + '):', getPixel(Math.floor(info.width / 2), info.height - 6));
}

async function run() {
  await inspectImage(path.resolve('public/images/chanuka-hero-hq.png'));
  await inspectImage(path.resolve('public/images/chanuka-portrait.jpg'));
}

run().catch(console.error);
