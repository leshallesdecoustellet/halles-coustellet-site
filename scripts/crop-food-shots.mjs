import sharp from "sharp";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

// Fractional crop boxes (0-1), estimated from the source photos, applied
// after EXIF auto-orientation so they match what browsers actually render.
const jobs = [
  {
    src: "public/images/stands/burger-tacos/carte.jpg",
    out: "public/images/stands/burger-tacos/burger-plat.jpg",
    box: { x0: 0.205, x1: 0.345, y0: 0.21, y1: 0.33 },
  },
  {
    src: "public/images/stands/thailandaise/carte-comptoir.jpg",
    out: "public/images/stands/thailandaise/salade-papaye.jpg",
    box: { x0: 0.77, x1: 0.9, y0: 0.37, y1: 0.61 },
  },
];

for (const job of jobs) {
  const srcPath = path.join(root, job.src);
  const outPath = path.join(root, job.out);
  const image = sharp(srcPath).rotate();
  const meta = await image.metadata();
  const w = meta.width;
  const h = meta.height;
  const left = Math.round(job.box.x0 * w);
  const top = Math.round(job.box.y0 * h);
  const width = Math.round((job.box.x1 - job.box.x0) * w);
  const height = Math.round((job.box.y1 - job.box.y0) * h);

  await sharp(srcPath)
    .rotate()
    .extract({ left, top, width, height })
    .resize({ width: width * 3, height: height * 3, kernel: "lanczos3" })
    .jpeg({ quality: 88 })
    .toFile(outPath);

  console.log(`Cropped ${job.src} -> ${job.out} (${width}x${height} -> ${width * 3}x${height * 3})`);
}
