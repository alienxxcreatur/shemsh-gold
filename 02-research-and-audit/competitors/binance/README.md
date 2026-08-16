# ممیزی بایننس برای زبان بصری و Patternهای شمش

وضعیت: `Active / Sufficient to start extraction`  
تاریخ شروع: ۲۵ مرداد ۱۴۰۵ / 16 Aug 2026  
تصمیم مرجع: D-163

## هدف

این پوشه مسیر رسمی استخراج Patternهای قابل‌انتقال از Binance iOS در Mobbin است تا وایرفریم‌های شمش به یک رابط تمیز، سفید، مینیمال، منظم و مالی تبدیل شوند؛ بدون اینکه ساختار محصول، قواعد بیزینس یا هویت شمش با بایننس جایگزین شود.

قاعده مادر:

> ساختار و رفتار از وایرفریم شمش، نظم و مینیمالیسم از شواهد تکرارشونده بایننس، و شخصیت/اعتماد از هویت و مزیت‌های واقعی شمش می‌آید.

## اسناد این مسیر

- [`binance-reference-index.md`](binance-reference-index.md): Snapshot منبع، Census خانواده‌ها، معیار ورود و ثبت Evidence.
- [`binance-flow-shortlist.md`](binance-flow-shortlist.md): فهرست جریان‌ها و Batchهای نمونه‌گیری با اولویت `Core / Supporting / Pattern-only / Exclude`.
- [`binance-pattern-catalog.md`](binance-pattern-catalog.md): کاتالوگ Patternهای تکرارشونده در Foundation، Component، Composition، Behavior و State.
- [`binance-to-shemsh-mapping.md`](binance-to-shemsh-mapping.md): نگاشت هر Pattern به وایرفریم، سیستم طراحی و تصمیم `Adopt / Adapt / Reject / Defer`.

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

- **Browser MCP:** مشاهده Session واردشده Mobbin، جست‌وجوی Flow، خواندن تعداد/رابطه‌ها، بازکردن Screen و ثبت Evidence.
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
| G1 — Census | خانواده‌های مرتبط و Shortlist اولیه ثبت شوند | `In progress` |
| G2 — Evidence | نمونه هدف با لینک، Context و حذف تکرار پوشش داده شود | `Not started` |
| G3 — Pattern | هر Rule شاهد تکرار، Confidence و Counter-example داشته باشد | `Not started` |
| G4 — Mapping | اثر هر Rule روی وایرفریم و DS فعلی مشخص باشد | `Not started` |
| G5 — Pilot-ready | قرارداد بصری قابل تست برای Trade/Home/Trust آماده باشد | `Not started` |

Gate فعلی: `Sufficient to start extraction`.
