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

const HREFLANG_HOME = [
  { lang: "ko", href: `${SITE}/` },
  { lang: "ja", href: `${SITE}/ja/` },
  { lang: "en", href: `${SITE}/en/` },
  { lang: "x-default", href: `${SITE}/` },
];

const HREFLANG_FAQ = [
  { lang: "ko", href: `${SITE}/faq` },
  { lang: "ja", href: `${SITE}/ja/faq` },
  { lang: "en", href: `${SITE}/en/faq` },
  { lang: "x-default", href: `${SITE}/faq` },
];

const routes = [
  {
    url: "/",
    lang: "ko",
    htmlLang: "ko",
    ogLocale: "ko_KR",
    outputDir: distPublic,
    title: "일본 탈퇴일시금·소득세 환급 대행 | TaxGo",
    description: "일본 후생연금 탈퇴일시금 신청 및 소득세(20.42%) 환급 대행. 납세관리인 대행까지 원스톱 서비스.",
    keywords: "탈퇴일시금, 탈퇴일시금 대행, 일본 연금 환급, 소득세 환급, 납세관리인, 일본 연금 탈퇴, 환급 대행, TaxGo, 脱退一時金, 所得税還付",
    canonical: `${SITE}/`,
    ogUrl: `${SITE}/`,
    hreflang: HREFLANG_HOME,
  },
  {
    url: "/faq",
    lang: "ko",
    htmlLang: "ko",
    ogLocale: "ko_KR",
    outputDir: path.join(distPublic, "faq"),
    title: "자주 묻는 질문 | 탈퇴일시금·소득세 환급 대행 TaxGo",
    description: "탈퇴일시금 신청 기간, 수령 금액, 소득세 환급, 납세관리인 선임 등 자주 묻는 질문을 확인하세요. 일본 귀국 후 2년 이내 신청 가능.",
    keywords: "탈퇴일시금 FAQ, 탈퇴일시금 신청방법, 소득세 환급 방법, 납세관리인, 일본 연금 질문, 탈퇴일시금 기간",
    canonical: `${SITE}/faq`,
    ogUrl: `${SITE}/faq`,
    hreflang: HREFLANG_FAQ,
  },
  {
    url: "/ja",
    lang: "ja",
    htmlLang: "ja",
    ogLocale: "ja_JP",
    outputDir: path.join(distPublic, "ja"),
    title: "脱退一時金・所得税還付代行【実績多数】| TaxGo",
    description: "厚生年金 脱退一時金申請・所得税（20.42%）還付代行。納税管理人代行まで一括サポート。",
    keywords: "脱退一時金, 脱退一時金代行, 所得税還付, 源泉徴収 還付, 納税管理人, 年金 外国人 帰国, 脱退一時金 申請代行, TaxGo",
    canonical: `${SITE}/ja/`,
    ogUrl: `${SITE}/ja/`,
    hreflang: HREFLANG_HOME,
  },
  {
    url: "/ja/faq",
    lang: "ja",
    htmlLang: "ja",
    ogLocale: "ja_JP",
    outputDir: path.join(distPublic, "ja", "faq"),
    title: "よくある質問 | 脱退一時金・所得税還付代行 TaxGo",
    description: "脱退一時金の申請期限・受給額・所得税還付・納税管理人についてよくある質問をご確認ください。帰国後2年以内に申請可能。",
    keywords: "脱退一時金 FAQ, 脱退一時金 申請方法, 所得税還付 方法, 納税管理人, 年金 外国人 質問, 脱退一時金 期限",
    canonical: `${SITE}/ja/faq`,
    ogUrl: `${SITE}/ja/faq`,
    hreflang: HREFLANG_FAQ,
  },
  {
    url: "/en",
    lang: "en",
    htmlLang: "en",
    ogLocale: "en_US",
    outputDir: path.join(distPublic, "en"),
    title: "Japan Pension Lump-sum Withdrawal & Tax Refund Agency | TaxGo",
    description: "Japan Employees' Pension Lump-sum Withdrawal and income tax (20.42%) refund agency. Tax Agent (Nouzei Kanrinin) representation included. One-stop service.",
    keywords: "Japan pension refund, lump-sum withdrawal, Japan income tax refund, 脱退一時金, pension withdrawal agency, Japan tax agent, withholding tax refund Japan, TaxGo",
    canonical: `${SITE}/en/`,
    ogUrl: `${SITE}/en/`,
    hreflang: HREFLANG_HOME,
  },
  {
    url: "/en/faq",
    lang: "en",
    htmlLang: "en",
    ogLocale: "en_US",
    outputDir: path.join(distPublic, "en", "faq"),
    title: "FAQ | Japan Pension Lump-sum Withdrawal & Tax Refund — TaxGo",
    description: "FAQ on Japan pension lump-sum withdrawal: eligibility, deadlines, refund amounts, income tax refund, and tax agent requirements. Apply within 2 years of leaving Japan.",
    keywords: "Japan pension FAQ, lump-sum withdrawal questions, Japan income tax refund FAQ, tax agent Japan, pension withdrawal eligibility",
    canonical: `${SITE}/en/faq`,
    ogUrl: `${SITE}/en/faq`,
    hreflang: HREFLANG_FAQ,
  },
];

/**
 * Extract <script type="application/ld+json">...</script> blocks from HTML string.
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
    <meta property="og:locale" content="${route.ogLocale}" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />${jsonLd}`;
}

for (const route of routes) {
  console.log(`Pre-rendering: ${route.url} [${route.lang}]`);

  let result;
  try {
    result = await render(route.url, route.lang);
  } catch (err) {
    console.error(`  ✗ Render failed for ${route.url}:`, err.message);
    console.error(err.stack);
    process.exit(1);
  }

  const { jsonLdBlocks, remaining: appHtmlWithoutJsonLd } = extractJsonLd(result.appHtml);
  const cleanAppHtml = stripInlineHeadTags(appHtmlWithoutJsonLd);
  const headAdditions = buildHead(route, jsonLdBlocks);

  let html = BASE_TEMPLATE
    // Fix <html lang> attribute
    .replace(/(<html[^>]*)\slang="[^"]*"/, `$1 lang="${route.htmlLang}"`)
    // Fix og:locale (remove all existing og:locale tags, inject correct one via buildHead)
    .replace(/<meta\s+property="og:locale(?::alternate)?"[^>]*>/g, "")
    .replace(/<title>[^<]*<\/title>/, "")
    .replace(/<meta\s+name="description"[^>]*>/, "")
    .replace(/<meta\s+name="keywords"[^>]*>/, "")
    .replace(/<link\s+rel="canonical"[^>]*>/, "")
    .replace(/<meta\s+property="og:url"[^>]*>/, "")
    .replace(/<meta\s+property="og:title"[^>]*>/, "")
    .replace(/<meta\s+property="og:description"[^>]*>/, "")
    .replace(/<meta\s+name="twitter:title"[^>]*>/, "")
    .replace(/<meta\s+name="twitter:description"[^>]*>/, "")
    .replace("<!--app-head-->", headAdditions)
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
