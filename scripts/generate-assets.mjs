/**
 * Generates PNG brand assets from the SVGs in /public.
 * Run: npm run assets:generate
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out = (name) => path.join(root, "public", name);

const tasks = [
  ["favicon.svg", "favicon-16x16.png", 16],
  ["favicon.svg", "favicon-32x32.png", 32],
  ["favicon.svg", "apple-touch-icon.png", 180],
  ["og-image.svg", "og-image.png", null], // keep 1200x630 source size
];

for (const [src, dest, size] of tasks) {
  let pipeline = sharp(path.join(root, "public", src));
  if (size) pipeline = pipeline.resize(size, size);
  await pipeline.png().toFile(out(dest));
  console.log(`Generated public/${dest}`);
}
