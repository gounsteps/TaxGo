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

const BASE_TEMPLATE = fs.readFileSync(
  path.resolve(distPublic, "index.html"),
  "utf-8"
);

const SITE = "https://taxgo.jp";

const routes = [
  {
    url: "/",
    outputDir: distPublic,
    title: "일본 탈퇴일시금·소득세 환급 대행 | TaxGo",
    description:
      "일본 후생연금 탈퇴일시금 신청 및 소득세(20.42%) 환급 대행. 납세관리인 대행까지 원스톱 서비스.",
    keywords:
      "탈퇴일시금, 탈퇴일시금 대행, 일본 연금 환급, 소득세 환급, 납세관리인, 일본 연금 탈퇴, 환급 대행, TaxGo, 脱退一時金, 所得税還付",
    canonical: `${SITE}/`,
    ogUrl: `${SITE}/`,
    hreflang: [
      { lang: "ko", href: `${SITE}/` },
      { lang: "ja", href: `${SITE}/?lang=ja` },
      { lang: "en", href: `${SITE}/?lang=en` },
      { lang: "x-default", href: `${SITE}/` },
    ],
  },
  {
    url: "/faq",
    outputDir: path.join(distPublic, "faq"),
    title: "자주 묻는 질문 | 탈퇴일시금·소득세 환급 대행 TaxGo",
    description:
      "탈퇴일시금 신청 기간, 수령 금액, 소득세 환급, 납세관리인 선임 등 자주 묻는 질문을 확인하세요. 일본 귀국 후 2년 이내 신청 가능.",
    keywords:
      "탈퇴일시금 FAQ, 탈퇴일시금 신청방법, 소득세 환급 방법, 납세관리인, 일본 연금 질문, 탈퇴일시금 기간",
    canonical: `${SITE}/faq`,
    ogUrl: `${SITE}/faq`,
    hreflang: [
      { lang: "ko", href: `${SITE}/faq` },
      { lang: "ja", href: `${SITE}/faq?lang=ja` },
      { lang: "en", href: `${SITE}/faq?lang=en` },
      { lang: "x-default", href: `${SITE}/faq` },
    ],
  },
];

/**
 * Extract <script type="application/ld+json">...</script> blocks from HTML string.
 * Returns { jsonLdBlocks: string[], remaining: string }
 */
function extractJsonLd(html) {
  const jsonLdBlocks = [];
  const remaining = html.replace(
    /<script\s+type="application\/ld\+json"[\s\S]*?<\/script>/gi,
    (match) => {
      jsonLdBlocks.push(match);
      return "";
    }
  );
  return { jsonLdBlocks, remaining };
}

/**
 * Strip meta/title/link tags that React 19 injects into the body.
 * These duplicate what's already in <head>.
 */
function stripInlineHeadTags(html) {
  return html
    .replace(/<title>[^<]*<\/title>/gi, "")
    .replace(/<meta\s[^>]*\/>/gi, "")
    .replace(/<meta\s[^>]*>/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/<link\s+rel="alternate"[^>]*>/gi, "")
    .replace(/<link\s+rel="icon"[^>]*>/gi, "");
}

/**
 * Build the <head> section specific to this route.
 */
function buildHead(route, jsonLdBlocks) {
  const hreflangTags = route.hreflang
    .map(
      ({ lang, href }) =>
        `    <link rel="alternate" hreflang="${lang}" href="${href}" />`
    )
    .join("\n");

  const jsonLd = jsonLdBlocks.length
    ? "\n    " + jsonLdBlocks.join("\n    ")
    : "";

  return `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="keywords" content="${route.keywords}" />
    <link rel="canonical" href="${route.canonical}" />
${hreflangTags}
    <meta property="og:url" content="${route.ogUrl}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />${jsonLd}`;
}

for (const route of routes) {
  console.log(`Pre-rendering: ${route.url}`);

  let result;
  try {
    result = await render(route.url);
  } catch (err) {
    console.error(`  ✗ Render failed for ${route.url}:`, err.message);
    console.error(err.stack);
    process.exit(1);
  }

  // 1. Extract JSON-LD from rendered body
  const { jsonLdBlocks, remaining: appHtmlWithoutJsonLd } = extractJsonLd(
    result.appHtml
  );

  // 2. Strip duplicate meta/title/link tags React 19 injects into body
  const cleanAppHtml = stripInlineHeadTags(appHtmlWithoutJsonLd);

  // 3. Build route-specific head additions
  const headAdditions = buildHead(route, jsonLdBlocks);

  // 4. Remove the static title/description/canonical from the base template
  //    (we replace them with route-specific ones via <!--app-head-->)
  let html = BASE_TEMPLATE
    // Remove static title (replaced below)
    .replace(/<title>[^<]*<\/title>/, "")
    // Remove static description
    .replace(/<meta\s+name="description"[^>]*>/, "")
    // Remove static keywords
    .replace(/<meta\s+name="keywords"[^>]*>/, "")
    // Remove static canonical
    .replace(/<link\s+rel="canonical"[^>]*>/, "")
    // Remove static og:url / og:title / og:description
    .replace(/<meta\s+property="og:url"[^>]*>/, "")
    .replace(/<meta\s+property="og:title"[^>]*>/, "")
    .replace(/<meta\s+property="og:description"[^>]*>/, "")
    // Remove static twitter:title / twitter:description
    .replace(/<meta\s+name="twitter:title"[^>]*>/, "")
    .replace(/<meta\s+name="twitter:description"[^>]*>/, "")
    // Inject route-specific head content
    .replace("<!--app-head-->", headAdditions)
    // Inject pre-rendered body
    .replace("<!--app-html-->", cleanAppHtml);

  fs.mkdirSync(route.outputDir, { recursive: true });
  const outputFile = path.join(route.outputDir, "index.html");
  fs.writeFileSync(outputFile, html, "utf-8");

  console.log(`  ✓ title: ${route.title}`);
  console.log(`  ✓ canonical: ${route.canonical}`);
  console.log(`  ✓ JSON-LD blocks moved to <head>: ${jsonLdBlocks.length}`);
  console.log(`  ✓ Written: ${outputFile}`);
}

console.log("\nPre-rendering complete.");
