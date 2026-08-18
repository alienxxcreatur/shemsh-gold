import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outputRoot = join(projectRoot, "dist-wireframes");

const filesToPublish = [
  "06-wireframes-and-testing/artifacts/multi-metal-waves-1-and-3-wireframe.html",
  "06-wireframes-and-testing/artifacts/wave-1-auth-kyc-wireframe.html",
  "06-wireframes-and-testing/artifacts/password-policy.js",
  "07-design-system/legacy-brand/typogaphy/YekanBakh3 - Pro  Plus/Yekan Bakh Variable/webfonts/YekanBakhFaNum-VF.woff2",
];

const landingPage = `<!doctype html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex,nofollow" />
    <title>وایرفریم‌های شمش</title>
    <style>
      @font-face {
        font-family: "Yekan Bakh";
        src: url("./07-design-system/legacy-brand/typogaphy/YekanBakh3%20-%20Pro%20%20Plus/Yekan%20Bakh%20Variable/webfonts/YekanBakhFaNum-VF.woff2") format("woff2");
        font-display: swap;
      }
      :root { color-scheme: light; font-family: "Yekan Bakh", system-ui, sans-serif; }
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f5f3ee; color: #1d1b18; }
      main { width: min(92vw, 720px); padding: 48px 24px; }
      h1 { margin: 0 0 8px; font-size: clamp(28px, 6vw, 44px); }
      p { margin: 0 0 28px; color: #6c665d; line-height: 1.9; }
      .links { display: grid; gap: 14px; }
      a { display: block; padding: 20px; border: 1px solid #ddd7cc; border-radius: 18px; background: #fff; color: inherit; text-decoration: none; box-shadow: 0 8px 28px rgba(52, 45, 34, .06); transition: transform .18s ease, border-color .18s ease; }
      a:hover { transform: translateY(-2px); border-color: #a88b55; }
      a:focus-visible { outline: 3px solid #c7a668; outline-offset: 3px; }
      strong { display: block; margin-bottom: 6px; font-size: 19px; }
      span { color: #777066; line-height: 1.7; }
    </style>
  </head>
  <body>
    <main>
      <h1>وایرفریم‌های شمش</h1>
      <p>نسخهٔ به‌روز مراجع رسمی برای مرور و ارائهٔ مدیریتی</p>
      <div class="links">
        <a href="./06-wireframes-and-testing/artifacts/multi-metal-waves-1-and-3-wireframe.html">
          <strong>وایرفریم اصلی محصول</strong>
          <span>فلوهای چندفلزی، فلو سبز و سناریوهای متصل</span>
        </a>
        <a href="./06-wireframes-and-testing/artifacts/wave-1-auth-kyc-wireframe.html">
          <strong>ورود و احراز هویت</strong>
          <span>ورود، ثبت‌نام و KYC</span>
        </a>
      </div>
    </main>
  </body>
</html>`;

await rm(outputRoot, { recursive: true, force: true });

for (const relativePath of filesToPublish) {
  const sourcePath = join(projectRoot, relativePath);
  const destinationPath = join(outputRoot, relativePath);
  await mkdir(dirname(destinationPath), { recursive: true });
  await cp(sourcePath, destinationPath);
}

await cp(join(projectRoot, "scripts/wireframe-price-worker.js"), join(outputRoot, "_worker.js"));

await mkdir(outputRoot, { recursive: true });
await writeFile(join(outputRoot, "index.html"), landingPage, "utf8");
await writeFile(join(outputRoot, "_headers"), "/*\n  X-Robots-Tag: noindex, nofollow\n", "utf8");
// An empty file explicitly confirms that publishing _worker.js is intentional.
await writeFile(join(outputRoot, ".assetsignore"), "", "utf8");

console.log(`Wireframe share build created at ${outputRoot}`);
