import sharp from "sharp";

await sharp("/tmp/portfolio-v2.png")
  .webp({ quality: 82 })
  .toFile("public/projects/portfolio.webp");

const meta = await sharp("public/projects/portfolio.webp").metadata();
console.log("wrote public/projects/portfolio.webp", meta.width, "x", meta.height);
