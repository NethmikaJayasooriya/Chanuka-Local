const sharp = require('sharp');
const path = require('path');

async function findHorizontalLine() {
  const imgPath = path.resolve('scratch/desktop_top_right_inspect.png');
  const raw = await sharp(imgPath).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = raw;

  function getPixel(x, y) {
    const idx = (y * info.width + x) * info.channels;
    return { r: data[idx], g: data[idx+1], b: data[idx+2] };
  }

  console.log('Vertical scan at x=550 from y=80 to y=250:');
  let prev = getPixel(550, 80);
  for (let y = 81; y <= 250; y++) {
    const curr = getPixel(550, y);
    const diff = Math.abs(curr.r - prev.r) + Math.abs(curr.g - prev.g) + Math.abs(curr.b - prev.b);
    if (diff > 5) {
      console.log(`Step jump at y=${y}: prev=rgb(${prev.r},${prev.g},${prev.b}) curr=rgb(${curr.r},${curr.g},${curr.b}) diff=${diff}`);
    }
    prev = curr;
  }

  console.log('Vertical scan at x=400 (above head) from y=80 to y=250:');
  prev = getPixel(400, 80);
  for (let y = 81; y <= 250; y++) {
    const curr = getPixel(400, y);
    const diff = Math.abs(curr.r - prev.r) + Math.abs(curr.g - prev.g) + Math.abs(curr.b - prev.b);
    if (diff > 5) {
      console.log(`Step jump at y=${y}: prev=rgb(${prev.r},${prev.g},${prev.b}) curr=rgb(${curr.r},${curr.g},${curr.b}) diff=${diff}`);
    }
    prev = curr;
  }
}

findHorizontalLine().catch(console.error);
