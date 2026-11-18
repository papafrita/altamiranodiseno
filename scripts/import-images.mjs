// Downloads the original images from the current Canva site (altamiranodiseno.com)
// and writes optimized WebP copies to src/assets/img using the names in images.json.
//
//   npm run images            # only processes missing files
//   npm run images -- --force # re-processes everything

import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = 'https://altamiranodiseno.com/_assets/media/';
const CACHE_DIR = path.join(root, '.cache/canva');
const OUT_DIR = path.join(root, 'src/assets/img');
const MAX_SIZE = 2000;
const force = process.argv.includes('--force');

const manifest = JSON.parse(await readFile(path.join(root, 'scripts/images.json'), 'utf8'));

const exists = (p) => access(p).then(() => true, () => false);

async function fetchOriginal(file) {
  const cached = path.join(CACHE_DIR, file);
  if (await exists(cached)) return readFile(cached);
  const res = await fetch(SOURCE + file);
  if (!res.ok) throw new Error(`${res.status} al descargar ${file}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(cached, buf);
  return buf;
}

async function processOne(name, { src, trim }) {
  const out = path.join(OUT_DIR, `${name}.webp`);
  if (!force && (await exists(out))) return 'skip';
  await mkdir(path.dirname(out), { recursive: true });

  let img = sharp(await fetchOriginal(src)).rotate();
  if (trim) img = img.trim({ threshold: 10 });
  // trim() must be materialized before resizing, otherwise sharp resizes the untrimmed canvas.
  const buf = await img.toBuffer();
  await sharp(buf)
    .resize({ width: MAX_SIZE, height: MAX_SIZE, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, alphaQuality: 90, effort: 5 })
    .toFile(out);
  return 'ok';
}

await mkdir(CACHE_DIR, { recursive: true });
const entries = Object.entries(manifest);
let done = 0;
const queue = [...entries];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const [name, entry] = queue.shift();
      try {
        const r = await processOne(name, entry);
        done++;
        if (r === 'ok') console.log(`[${done}/${entries.length}] ${name}`);
      } catch (err) {
        console.error(`✗ ${name}: ${err.message}`);
        process.exitCode = 1;
      }
    }
  }),
);
console.log(`Listo: ${entries.length} imágenes en src/assets/img`);
