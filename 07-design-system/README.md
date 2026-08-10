# مرحله ۷ — زبان بصری و سیستم طراحی

## هدف

ساخت زبان بصری و رفتاری قابل تکرار برای محصول مالی دقیق، قابل اعتماد، روزمره و کمی پریمیوم.

## منابع

- `legacy-brand/`: دارایی‌ها و گایدلاین قدیمی؛ منبع تحقیق است، نه قانون خودکار ریدیزاین.
- `design-principles.md`
- `foundations.md`
- `component-inventory.md`
- `interaction-patterns.md`
- `accessibility-checklist.md`
- `official-design-system-plan.md`
- `base-components-candidate-v0.2.md`
- `component-set-workflow-v1.0.md`
- `icon-button-component-contract-v0.1.md`

## Gate 7

- [ ] اصول بصری با جایگاه محصول هم‌راستا باشند.
- [ ] رنگ، تایپ، فاصله، Radius، Elevation و Motion توکن داشته باشند.
- [ ] کامپوننت‌های مالی همه Stateهای واقعی را پوشش دهند.
- [ ] کنتراست، Dynamic Type، Keyboard/Screen Reader و لمس مناسب باشند.
- [ ] موبایل، تبلت و وب رفتار Responsive مشخص داشته باشند.
- [ ] UI با محتوای واقعی فارسی و اعداد واقعی تست شده باشد.

## وضعیت پس از D-117 و D-122

- فاز ۱: تثبیت زبان بصری و Foundations واقعی
- ورودی اصلی: خروجی بسته‌شده موج ۱ و اسناد `Design System Prep`
- روش بلوغ: `Draft → Candidate → Tested → Stable` طبق `governance.md`
- گیت ساخت Component: `Pilot → Technical preflight → Visual QA → Stress test → Expand → Final dual audit` طبق D-086
- خروجی‌های فاز ۱ تا اینجا: ممیزی ورودی، نقشه Candidateهای برند، `foundations/color-candidate-v0.1.md`، `foundations/typography-candidate-v0.1.md` و `foundations/candidate-v0.1-test-report.md`
- وضعیت Color/Typography: `Tested Candidate / Not Stable`
- Typography و معماری توکن‌های عمومی به‌عنوان Candidate قابل استفاده مجدد باقی می‌مانند.
- جهت Candidate عمومی به `Black-neutral` تغییر کرده و Purple دیگر Primary پیش‌فرض نیست؛ Statusها معنایی و Accent فلزها کمکی باقی می‌مانند — D-117.
- Sandbox موجود مبنای اجرایی است. ممیزی تازه Button فعلی ۷۲تایی، ۱۴۰ ناسازگاری fallback/resolved و ساختار Focus ناهماهنگ یافت؛ این Set حفظ می‌شود اما `Needs revision` است. قرارداد Candidate تازه با ۱۰۸ Variant در `button-component-contract-v0.3.md` تأیید شده است — D-122.
- ساخت Foundations و Base componentهای مستقل از فلز فعال است. Gold/Metal Accent، نمودار چندسری، نمادگذاری فلز و Asset selector پیش از OQ-056 `Stable` نمی‌شوند.
- Motion، Foundation، Responsive، سه Grid Style و Tier 0 شامل Spinner، Progress، Status Badge و Divider در Figma ساخته شده‌اند.
- صفحه `10 Button` و Pilot شش‌حالته `Primary / Neutral / Medium` ساخته شده‌اند. Technical audit، resolved token audit و Stress testهای RTL، متن بلند، Icon، Loading، Focus و Hug/Fill پاس شده‌اند؛ State Ledger در `button-figma-state-ledger-v0.1.md` است.
- Pilot توسط مالک محصول تأیید بصری شد و Expand کنترل‌شده انجام شد. Component Set اصلی اکنون ۱۰۸ Variant یکتا دارد و Final technical/agent visual audit با ۶۶۶ Paint متصل و صفر mismatch پاس شده است. قدم بعدی تأیید بصری نهایی مالک محصول و سپس Icon Button، Selection controlها، Input و Feedback است.
- Workflow موفق Button به روش رسمی `component-set-workflow-v1.0.md` تبدیل شده است. Pilot شش‌حالته `Tertiary / Medium` Icon Button در صفحه `11 Icon Button` تأیید بصری شد و Set کامل ۷۲تایی ساخته شد؛ Final structural/token/agent-visual audit بدون Issue پاس شد. Ledger در `icon-button-figma-state-ledger-v0.1.md` است و تأیید بصری نهایی مالک محصول پیش از Promote باز می‌ماند — D-129/D-132/D-133.
- Checkbox در صفحه `12 Checkbox` با ۱۲ Variant `Selection × State`، سه Property عمومی و Touch target موبایل ساخته شد؛ Final audit صفر Issue داشت و Ledger در `checkbox-figma-state-ledger-v0.1.md` ثبت شده است. تأیید بصری مالک محصول پیش از Promote باز است.
- Radio در صفحه `13 Radio` با ۸ Variant `Selection × State`، سه Property عمومی و Touch target موبایل ساخته شد؛ Final audit صفر Issue داشت و پس از تأیید بصری مالک محصول به `Tested Candidate` ارتقا یافت — D-134. Ledger در `radio-figma-state-ledger-v0.1.md` ثبت شده است.
- Switch در صفحه `14 Switch` با ۱۰ Variant `Selection × State`، سه Property عمومی، Touch target ۴۸، Focus و Loading کامل ساخته شد؛ Final audit صفر Issue و تأیید بصری مالک محصول را پاس کرد و به `Tested Candidate` ارتقا یافت — D-136. Ledger در `switch-figma-state-ledger-v0.1.md` ثبت شده است.
- Text Input در صفحه `15 Text Input` با ۱۴ Variant `Size × State`، ده Property عمومی، ارتفاع‌های ۴۸/۵۶ و پوشش Empty/Filled/Hover/Focus/Error/Disabled/Read-only ساخته شد؛ Final audit صفر Issue داشت. Ledger در `text-input-figma-state-ledger-v0.1.md` ثبت شده و تأیید بصری مالک محصول پیش از Promote باز است.

وضعیت: `In progress / Sufficient to proceed` با D-117/D-122. Radio و Switch در وضعیت `Tested Candidate` هستند؛ Button، Icon Button، Checkbox و Text Input در وضعیت `Candidate / Awaiting owner visual review` باقی می‌مانند و تا عبور QA انسانی و وابستگی‌های ثبت‌شده `Stable` اعلام نمی‌شوند.
