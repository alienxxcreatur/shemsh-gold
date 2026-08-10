# Workflow رسمی ساخت Component Set — v1.0

وضعیت: `Approved operational method / Not a maturity shortcut`

تاریخ: 9 Aug 2026  
مبنای تصمیم: D-086  
Pilot مرجع: `Button` — D-122

## هدف

این Workflow روش مشترک ساخت هر Component Set در سیستم طراحی شمش است. هدف آن جلوگیری از ماتریس ناقص، Property جاافتاده، Token binding اشتباه، Component Set شکسته و توسعه‌ی کامل پیش از مشاهده‌ی خروجی واقعی است.

عبور از این Workflow به‌تنهایی هیچ خروجی را `Stable` نمی‌کند؛ بلوغ همچنان طبق `governance.md` از `Draft → Candidate → Tested → Stable` ارزیابی می‌شود.

## اصل اجرایی

هر Component فقط با این مسیر ساخته می‌شود:

`Evidence → Contract → Token preflight → Pilot → Technical preflight → Visual QA → Stress test → Human approval → Expand → Final dual audit → Promote`

## مرحله ۱ — Evidence و Inventory

- مصرف واقعی Component در فلو، وایرفریم و معماری تجربه استخراج شود.
- Component، Pattern و ترکیب محلی از هم تفکیک شوند.
- نمونه‌های موجود Figma، Libraryهای متصل و Duplicateها به‌صورت read-only ممیزی شوند.
- State یا Variant بدون سناریوی واقعی فقط برای پرکردن ماتریس ساخته نشود.
- وابستگی باز با برچسب `Open question` یا `Design assumption` ثبت شود.

خروجی: فهرست مصرف، Stateهای واقعی، محدودیت محتوا و وابستگی‌ها.

## مرحله ۲ — Contract freeze

پیش از Figma این موارد در یک سند نسخه‌دار ثبت می‌شوند:

- هدف و دامنه مصرف
- Anatomy
- Variant axisها و تعداد دقیق ترکیب‌ها
- Component propertyها
- State behavior
- Size، Touch target و Icon size
- RTL و BiDi
- Light/Dark و Token mapping
- Accessibility و Accessible name
- موارد خارج از Scope
- Pilot نماینده و Stress scenarioها

اگر بیش از یک مدل Variant معتبر باشد، گزینه‌ها و پیشنهاد طراحی ثبت و قبل از ساخت تأیید می‌شوند.

Gate: `Contract approved for Pilot`

## مرحله ۳ — Token preflight

- Token موجود قبل از ساخت Token تازه بررسی شود.
- Primitive مستقیماً در Component مصرف نشود.
- Alias، Scope، Mode، Code syntax و fallback هر Variable بررسی شود.
- Token gap قبل از Pilot بسته و در Ledger ثبت شود.
- Light/Dark هر نقش معنایی مقدار معتبر داشته باشد.

Gate: `No unresolved token required by Pilot`

## مرحله ۴ — Pilot

- فقط یک ترکیب نماینده از محورهای معنایی ساخته شود.
- تمام Stateهای ضروری همان ترکیب ساخته شوند؛ معمولاً شش State `Default / Hover / Pressed / Focus / Disabled / Loading`.
- Anatomy، Auto Layout، absolute layerها، Propertyها و Variable binding از ابتدا واقعی باشند.
- Master و Instance هر دو بررسی شوند.

ساخت کل ماتریس پیش از عبور Pilot ممنوع است.

## مرحله ۵ — Technical preflight

حداقل کنترل‌ها:

- Node واقعاً `COMPONENT_SET` باشد.
- Variant tupleها یکتا و قابل شمارش باشند.
- Property definition و reference همه Stateها کامل باشد.
- Auto Layout، Hug/Fill/Fixed و absolute positioning معتبر باشد.
- Variable binding و fallback با مقدار resolved تطبیق داشته باشد.
- Icon source، Swap و RTL source روشن باشد.
- هیچ Node بی‌نام، detached یا خارج از Bounds نباشد.

Gate: `Technical preflight pass`

## مرحله ۶ — Visual QA و Stress test

Screenshot واقعی Master و Instance اجباری است. QA board حداقل این موارد را پوشش می‌دهد:

- Light و Dark
- RTL و آیکن جهت‌دار
- متن یا مقدار بلند، در صورت وجود
- Touch target و Focus ring
- Hover، Pressed، Disabled و Loading
- Icon swap و اندازه‌های مختلف
- Hug و Fill، در صورت پشتیبانی
- عرض موبایل ۳۲۰/۳۶۰ و تراکم چند کنترل کنار هم
- Tooltip، Accessible label یا Error/Status مرتبط

تناقض Screenshot با Audit فنی یعنی `Needs revision`.

Gate: `Pilot ready for human visual review`

## مرحله ۷ — Human approval

- مالک محصول/طراح Screenshot و رفتار Pilot را بازبینی می‌کند.
- Approval فقط مجوز Expand است و به معنی `Stable` شدن نیست.
- Finding ردشده باید پیش از Expand اصلاح و دوباره Audit شود.

Gate: `Expand authorized`

## مرحله ۸ — Expand کنترل‌شده

- Variantها در Batchهای کوچک، idempotent و قابل Audit ساخته شوند.
- هر Batch قبل از Batch بعدی شمارش و از نظر tuple یکتا کنترل شود.
- Property referenceها پس از Clone/Reparent دوباره اعتبارسنجی شوند.
- Component Set موجود درجا توسعه یابد؛ Duplicate موازی بدون دلیل ساخته نشود.
- Variantهای نامعتبر صرفاً برای کامل‌کردن ضرب محورها ایجاد نشوند.

## مرحله ۹ — Final dual audit

پس از Expand:

- تعداد هدف و tupleهای یکتا
- Anatomy همه Variantها
- Property definition/reference
- State visibility و رفتار
- Size و Geometry
- RTL order و Icon mirroring
- Paint/Variable fallback و resolved value
- Light/Dark
- Screenshot کامل Set و QA board

هر Audit باید عدد، نتیجه و Node ID بدهد؛ عبارت کلی «QA شد» کافی نیست.

Gate: `Candidate ready for final human review`

## مرحله ۱۰ — Promote و تحویل

- نتیجه در State Ledger ثبت شود.
- `component-inventory.md` و `project-status.md` همگام شوند.
- Finding و وابستگی باز در منبع حقیقت باقی بماند.
- `Candidate → Tested` فقط با مصرف/QA واقعی انجام شود.
- `Tested → Stable` فقط پس از RTL، Light/Dark، Accessibility، مستندات و بازبینی انسانی مجاز است.

## Stop conditionها

در این وضعیت‌ها کار متوقف و اصلاح می‌شود:

- Contract یا تعداد Variant مبهم است.
- Token ضروری وجود ندارد یا Mode آن ناقص است.
- Pilot در Master و Instance خروجی متفاوت دارد.
- Property reference پس از Clone از بین رفته است.
- Screenshot با داده فنی تناقض دارد.
- Library آیکن یا مجوز/Code parity برای Component وابسته نامعلوم است.
- Expand نیازمند ساخت Variant بدون مصرف واقعی است.

## Artifactهای اجباری هر Component

1. `*-component-contract-v*.md`
2. صفحه مستقل Figma
3. Pilot Component Set
4. QA board
5. `*-figma-state-ledger-v*.md`
6. Final audit manifest
7. وضعیت همگام در Inventory و Project status

## آموخته‌های Button که به Workflow تبدیل شدند

- تعداد Variant زیاد به‌خودی‌خود خطا نیست؛ ماتریس باید از قرارداد معنایی بیاید.
- اتصال Variable بدون برابری fallback و resolved مقدار قابل اعتماد نیست.
- Clone و Reparent می‌تواند Component property reference را از بین ببرد.
- Focus ring باید مستقل از Surface و خارج از clipping بررسی شود.
- Stress test متن بلند و Fill می‌تواند خطایی را نشان دهد که Audit ساختاری نمی‌بیند.
- بازبینی بصری انسانی قبل از Expand و Promote قابل حذف نیست.

Gate این سند: `Complete / Approved operational method`
