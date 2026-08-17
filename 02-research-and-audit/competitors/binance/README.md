# ممیزی بایننس برای زبان بصری و Patternهای شمش

وضعیت: `Active / G2-G4 complete as evidence + candidate mapping / 29 corroborated patterns / Owner review pending`
تاریخ شروع: ۲۵ مرداد ۱۴۰۵ / 16 Aug 2026
تصمیم مرجع: D-163

## هدف

این پوشه مسیر رسمی استخراج Patternهای قابل‌انتقال از Binance iOS در Mobbin است تا وایرفریم‌های شمش به یک رابط تمیز، سفید، مینیمال، منظم و مالی تبدیل شوند؛ بدون اینکه ساختار محصول، قواعد بیزینس یا هویت شمش با بایننس جایگزین شود.

قاعده مادر:

> ساختار و رفتار از وایرفریم شمش، نظم و مینیمالیسم از شواهد تکرارشونده بایننس، و شخصیت/اعتماد از هویت و مزیت‌های واقعی شمش می‌آید.

## اسناد این مسیر

- [`binance-reference-index.md`](binance-reference-index.md): Snapshot منبع، Census خانواده‌ها، معیار ورود و ثبت Evidence.
- [`binance-flow-shortlist.md`](binance-flow-shortlist.md): فهرست جریان‌ها و Batchهای نمونه‌گیری با اولویت `Core / Supporting / Pattern-only / Exclude`.
- [`binance-cross-batch-evidence-ledger-g2.md`](binance-cross-batch-evidence-ledger-g2.md): Dedupe و Observationهای A/B/C/D؛ ۱۷۳ Screen خام و ۱۵۸ Unique درون-Batch، بدون ادعای Global Unique.
- [`binance-trade-batch-c-evidence-ledger.md`](binance-trade-batch-c-evidence-ledger.md): Dedupe و Ledger اسکرین‌به‌اسکرین هشت Flow معامله؛ ۴۱ Screen خام و ۳۸ Screen منحصربه‌فرد.
- [`binance-trade-pattern-proof-g3.md`](binance-trade-pattern-proof-g3.md): اثبات هشت Pattern معامله با تکرار، State depth، Counter-example و محدودیت انتقال.
- [`binance-global-ui-pattern-proof-g3.md`](binance-global-ui-pattern-proof-g3.md): اثبات ۲۴ Candidate سراسری و حل آن‌ها به ۲۱ Pattern تازه به‌علاوه توسعه دامنه `BN-P-003/007`.
- [`binance-pattern-catalog.md`](binance-pattern-catalog.md): کاتالوگ Patternهای تکرارشونده در Foundation، Component، Composition، Behavior و State.
- [`binance-global-ui-language-matrix-v0.1.md`](binance-global-ui-language-matrix-v0.1.md): سنتز سراسری Candidate برای انتخاب `Inline / Sheet / Page / Modal`، Surface/Border/Divider، Title، Color، Action، State و Component taxonomy در Home، Settings، Markets، Assets، Auth/KYC، Security، Payment و Deposit.
- [`binance-to-shemsh-mapping.md`](binance-to-shemsh-mapping.md): نگاشت هر Pattern به وایرفریم، سیستم طراحی و تصمیم `Adopt / Adapt / Reject / Defer`.
- [`binance-global-to-shemsh-mapping-g4.md`](binance-global-to-shemsh-mapping-g4.md): نگاشت سراسری ۲۱ Pattern تازه و توسعه‌های `BN-P-003/007` به Foundation، Component و Composition شمش؛ `9 Adopt + 13 Adapt + 1 Defer` در ۲۳ رکورد.

## ترتیب اجرا

1. Census خانواده‌ها و فلوها.
2. Shortlist براساس ارتباط با شمش، نه براساس محبوبیت قابلیت بایننس.
3. نمونه‌گیری لایه‌ای و حذف اسکرین‌های تکراری.
4. استخراج Observation با لینک منبع.
5. اثبات Pattern با تکرار در سه Context یا یک Flow کامل.
6. تبدیل Pattern به Rule قابل تست.
7. نگاشت Rule به وایرفریم و Design System فعلی شمش.
8. ساخت Visual Direction Contract و Foundation Candidate تازه.
9. آزمون در Pilot معامله، خانه/دارایی و اعتماد/رسید.
10. Promote فقط پس از QA انسانی، RTL/PWA/Responsive و Governance.

## نقش ابزارها

- **Mobbin MCP:** جست‌وجوی معنایی Flowها، دریافت لینک/شناسه/تعداد Screen و بازبینی Previewهای واقعی.
- **Browser MCP:** کنترل Snapshot کلان، عدد ۴۶۹ Flow و Taxonomy کامل Filter در Session واردشده Mobbin.
- **Markdown این مخزن:** منبع حقیقت تحلیل، Confidence، تصمیم و Gate.
- **Figma MCP:** بعد از تثبیت Ruleها برای Reference board، Candidate، Pilot و مقایسه؛ نه برای استخراج خام.

## مرزها

- Mobbin منبع ثالث و Snapshot مشاهده‌شده است؛ این پوشه «دیزاین سیستم رسمی بایننس» نامیده نمی‌شود.
- رفتار رقیب قانون شمش نیست.
- رنگ زرد بایننس، Taxonomy کریپتو، Futures، Web3، Social و Creator به‌صورت پیش‌فرض وارد شمش نمی‌شوند.
- iOS مرجع Geometry نهایی PWA نیست؛ هر Rule باید برای Touch، RTL، فارسی، تومان/گرم، Safe Area، Keyboard و Desktop progressive enhancement بازتفسیر شود.
- تصاویر به‌صورت انبوه دانلود یا بازنشر نمی‌شوند؛ Evidence با لینک مستقیم، شرح مشاهده و در صورت نیاز شناسه Screen/Flow ثبت می‌شود.
- تا Gate کاتالوگ، هیچ بازطراحی تخریبی یا Promote تازه صرفاً با استناد به بایننس انجام نمی‌شود.

## Gateها

| Gate | معیار | وضعیت |
|---|---|---|
| G0 — Workflow | منبع، روش، برچسب‌ها، Batchها و خروجی‌ها روشن باشند | `Complete` |
| G1 — Census | خانواده‌های مرتبط و Shortlist اولیه ثبت شوند | `Complete — 17 families / 32 flows / 173 raw screens` |
| G2 — Evidence | نمونه هدف با لینک، Context و حذف تکرار پوشش داده شود | `Complete within batches — A 42/39، B 44/39، C 41/38، D 46/42؛ Global union not claimed` |
| G3 — Pattern | هر Rule شاهد تکرار، Confidence و Counter-example داشته باشد | `Complete — 29 corroborated؛ 21 new cross-batch patterns + scope extension of BN-P-003/007` |
| G4 — Mapping | اثر هر Rule روی وایرفریم و DS فعلی مشخص باشد | `Complete as candidate mapping — Trade 8 records + Global 23 records؛ Owner review pending` |
| G5 — Pilot-ready | قرارداد بصری قابل تست برای Trade/Home/Trust آماده باشد | `Trade candidate built in HTML + Figma / Owner review pending؛ Home/Trust pending` |

Gate فعلی: `G4 global mapping complete as candidate / Sufficient for owner review؛ G5 Visual Direction Contract پیش از هر انتقال تازه Home/DS لازم است`.
