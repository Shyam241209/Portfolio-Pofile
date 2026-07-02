import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const root = process.cwd();
const assets = [
  'src/assets/project-ecommerce.svg',
  'src/assets/project-civic.svg',
  'src/assets/project-portfolio.svg',
];

async function convert() {
  for (const rel of assets) {
    const inPath = path.resolve(root, rel);
    const outPath = inPath.replace(/\.svg$/, '.jpg');
    try {
      const svg = await fs.readFile(inPath);
      await sharp(svg)
        .resize(1400, 800, { fit: 'cover' })
        .jpeg({ quality: 92 })
        .toFile(outPath);
      console.log('Converted', rel, '->', path.relative(root, outPath));
    } catch (err) {
      console.error('Failed to convert', rel, err.message);
      process.exitCode = 1;
    }
  }
}

convert();
