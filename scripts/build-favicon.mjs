import fs from 'fs/promises';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const svgPath = new URL('../public/placeholder.svg', import.meta.url);
const outPath = new URL('../public/favicon.ico', import.meta.url);

try {
  const svg = await fs.readFile(svgPath);
  const sizes = [16, 32, 48, 64, 128];
  const pngBuffers = await Promise.all(
    sizes.map(s =>
      sharp(svg)
        .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );

  const icoBuffer = await pngToIco(pngBuffers);
  await fs.writeFile(outPath, icoBuffer);
  console.log('Wrote', outPath.pathname);
} catch (err) {
  console.error('Failed to build favicon:', err);
  process.exit(1);
}
