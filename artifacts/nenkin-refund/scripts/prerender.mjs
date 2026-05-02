import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const artifactDir = path.resolve(__dirname, "..");
const distPublic = path.resolve(artifactDir, "dist/public");
const distServer = path.resolve(artifactDir, "dist/server");

const serverEntry = path.join(distServer, "entry-server.js");
if (!fs.existsSync(serverEntry)) {
  console.error("SSR build not found. Run SSR build first.");
  process.exit(1);
}

const { render } = await import(serverEntry);

const template = fs.readFileSync(
  path.resolve(distPublic, "index.html"),
  "utf-8"
);

const routes = [
  { url: "/", outputDir: distPublic },
  { url: "/faq", outputDir: path.join(distPublic, "faq") },
];

for (const { url, outputDir } of routes) {
  console.log(`Pre-rendering: ${url}`);

  let result;
  try {
    result = await render(url);
  } catch (err) {
    console.error(`  ✗ Render failed for ${url}:`, err.message);
    console.error(err.stack);
    process.exit(1);
  }

  const { appHtml } = result;

  const html = template
    .replace("<!--app-head-->", "")
    .replace("<!--app-html-->", appHtml);

  fs.mkdirSync(outputDir, { recursive: true });
  const outputFile = path.join(outputDir, "index.html");
  fs.writeFileSync(outputFile, html, "utf-8");

  console.log(`  ✓ Written: ${outputFile}`);
}

console.log("\nPre-rendering complete.");
