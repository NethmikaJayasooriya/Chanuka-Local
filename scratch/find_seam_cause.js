const sharp = require('sharp');
const path = require('path');

async function checkVerticalSeam() {
  const imgPath = path.resolve('scratch/desktop_top_right_inspect.png');
  const raw = await sharp(imgPath).raw().toBuffer({ resolveWithObject: true });
  const { data, info } = raw;

  function getPixel(x, y) {
    const idx = (y * info.width + x) * info.channels;
    return { r: data[idx], g: data[idx+1], b: data[idx+2] };
  }

  console.log('Vertical strip at x=400 (corresponds to ~1200 in full image, above Chanuka head):');
  for (let y = 50; y <= 120; y += 5) {
    const p = getPixel(400, y);
    console.log(`y=${y}: rgb(${p.r}, ${p.g}, ${p.b}) hex=#${p.r.toString(16).padStart(2,'0')}${p.g.toString(16).padStart(2,'0')}${p.b.toString(16).padStart(2,'0')}`);
  }

  console.log('\nVertical strip at x=550 (corresponds to ~1350 in full image, under Start order):');
  for (let y = 50; y <= 120; y += 5) {
    const p = getPixel(550, y);
    console.log(`y=${y}: rgb(${p.r}, ${p.g}, ${p.b}) hex=#${p.r.toString(16).padStart(2,'0')}${p.g.toString(16).padStart(2,'0')}${p.b.toString(16).padStart(2,'0')}`);
  }
}

checkVerticalSeam().catch(console.error);
