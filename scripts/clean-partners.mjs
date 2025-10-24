import Jimp from 'jimp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';

async function run() {
  const srcDir = join(process.cwd(), 'public', 'partners');
  const outDir = join(process.cwd(), 'public', 'partners-clean');
  await mkdir(outDir, { recursive: true });
  const files = await readdir(srcDir);
  const imgs = files.filter((f) => /\.(png|jpg|jpeg)$/i.test(f));
  for (const f of imgs) {
    const inPath = join(srcDir, f);
    const outPath = join(outDir, f.replace(/\.jpe?g$/i, '.png'));
    const image = await Jimp.read(inPath);
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const threshold = 245; // near white -> transparent
      if (r >= threshold && g >= threshold && b >= threshold) {
        this.bitmap.data[idx + 3] = 0;
      }
    });
    await image.writeAsync(outPath);
    console.log('cleaned', f);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

