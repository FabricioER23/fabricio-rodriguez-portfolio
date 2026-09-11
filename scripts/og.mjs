import sharp from "sharp";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const size = 430;
const circle = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`,
);

const photo = await sharp(path.join(root, "src/assets/images/fr-profile.png"))
  .resize(size, size, { fit: "cover", position: "centre" })
  .composite([{ input: circle, blend: "dest-in" }])
  .png()
  .toBuffer();

const svg = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0f0f10"/>
  <text x="72" y="268" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="78" fill="#d1c5ad">Fabricio</text>
  <text x="72" y="360" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="78" fill="#d1c5ad">Rodriguez</text>
  <text x="74" y="430" font-family="Segoe UI, Arial, sans-serif" font-weight="500" font-size="26" fill="#c8c8c8">Software and product developer</text>
  <text x="74" y="474" font-family="Segoe UI, Arial, sans-serif" font-weight="400" font-size="22" fill="#8a8a8a">Games, systems, and playful digital work</text>
</svg>`);

await sharp(svg)
  .png()
  .composite([{ input: photo, left: 700, top: 100 }])
  .toFile(path.join(root, "public/og.png"));

console.log("wrote public/og.png");
