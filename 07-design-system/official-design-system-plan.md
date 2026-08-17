# برنامه رسمی مرحله ۷ — سیستم طراحی شمش

وضعیت: `Active / Sufficient to proceed`

تاریخ شروع رسمی: ۱۷ مرداد ۱۴۰۵ / 8 Aug 2026

تصمیم مرجع: D-102

## هدف

ساخت زبان بصری و رفتاری رسمی، قابل تکرار و قابل تحویل برای محصول مالی-طلایی شمش؛ با تکیه بر شواهد موج ۱ و دریافت کنترل‌شده نیازهای موج‌های بعدی.

## مدل اجرا

- مرحله رسمی فعال: مرحله ۷.
- موج ۱: بسته برای عبور موج‌محور و اولین ورودی واقعی سیستم طراحی.
- موج‌های ۲ تا ۸: جریان ورودی موازی؛ هر نیاز تازه با فلو، State، محتوا و نتیجه تست وارد Inventory می‌شود.
- Gate 6 کل: `Sufficient to proceed by wave` و هنوز `Complete` نیست.
- قانون بلوغ: فقط خروجی دارای شواهد کافی می‌تواند از `Draft` به `Candidate`، `Tested` و سپس `Stable` برسد.

## فازها

### فاز ۰ — انتقال رسمی

- [x] بسته‌شدن موج ۱ برای عبور موج‌محور ثبت شد.
- [x] D-102 در Decision Log ثبت شد.
- [x] مرحله ۷ در نقشه راه و وضعیت پروژه فعال شد.
- [x] وضعیت مراحل ۶ و ۷ همگام شد.
- [x] وابستگی Foundations با OQ-052 ثبت شد.

Gate: `Complete`

### فاز ۱ — زبان بصری و Foundations واقعی

- [x] تصویب Workflow رسمی استخراج Pattern از Binance iOS و ثبت مسیر Evidence/Shortlist/Catalog/Mapping — D-163.
- [x] تکمیل Census هر ۱۷ خانواده و Shortlist ۳۲ Flow / ۱۷۳ Screen خام بایننس.
- [x] اجرای Dedupe و استخراج Foundation/Component/Composition/Behavior/State برای Batch C معامله؛ ۸ Flow / ۴۱ Raw / ۳۸ Unique و Counter-exampleهای Spot در برابر مسیرهای Amount-first ثبت شد.
- [x] اثبات هشت Candidate معامله در G3؛ Rule، Variant، Counter-example، Confidence و Evidence gap ثبت و هر هشت مورد `Corroborated` شدند.
- [x] نگاشت `BN-P-001..008` در G4 معامله با نتیجه `3 Adopt + 5 Adapt`.
- [x] ساخت Pilot غیرمخرب G4 در کپی HTML و Duplicate مستقل Figma؛ فایل‌ها و Componentهای مرجع تغییر نکردند.
- [ ] ادامه Dedupe برای Batchهای A/B/D و رسیدن به Saturation هدف.
- [x] تکمیل نگاشت `Adopt / Adapt / Reject / Defer` معامله به وایرفریم و Candidateهای فعلی پیش از بازتنظیم گسترده Visual Foundation.
- [x] ممیزی اولیه خروجی‌های Prep و موج ۱ با نتیجه `Promote / Revise / Keep Draft` در `foundations/phase-1-input-audit.md`.
- [x] ممیزی کامل PDF برندگاید قبلی و ثبت Candidateها در `foundations/legacy-brand-candidate-map.md`.
- [x] ساخت Candidate Set نسخه ۰.۱ برای Color و Typography.
- [x] تعیین Candidate تایپوگرافی و قرارداد اعداد مالی.
- [x] تعیین Candidate پالت روشن و تیره و نقش کنترل‌شده Gold.
- [x] تست اولیه RTL، Light/Dark، محتوای واقعی فارسی و عرض‌های ۳۲۰ و ۳۶۰ پیکسل در `foundations/candidate-v0.1-test-report.md`.
- [x] ممیزی Sandbox و تأیید جهت `Black-neutral` و استفاده مجدد از Primitive/Semantic/State — D-117.
- [x] ممیزی دوباره Button و تأیید قرارداد ۱۰۸ Variant با محورهای مستقل Emphasis و Tone — D-122.
- [x] ساخت صفحه `10 Button` و Pilot شش‌حالته، اتصال Propertyها و Variableها و پاس Technical/Stress audit.
- [x] تأیید بصری مالک محصول برای Pilot.
- [x] Expand به ۱۰۸ Variant و Final technical/agent visual audit؛ صفر خطای ساختاری و صفر mismatch در ۶۶۶ Paint متصل.
- [ ] تأیید بصری نهایی مالک محصول روی ماتریس کامل پیش از Promote به `Tested Candidate`.
- [x] تبدیل روش موفق Button به Workflow رسمی Component Set.
- [x] تدوین قرارداد Draft v0.1 برای Icon Button و ثبت گزینه‌های Variant، Accessibility، RTL و Iconography.
- [x] Review و تأیید قرارداد Icon Button پیش از ساخت Pilot — D-129.
- [x] ساخت و QA Pilot شش‌حالته Icon Button `Tertiary / Medium`؛ صفحه `11 Icon Button`، QA board و Audit بدون Issue — D-132.
- [x] تأیید بصری مالک محصول و Expand کنترل‌شده به ۷۲ Variant؛ Final audit بدون Issue — D-133.
- [ ] تأیید بصری نهایی ماتریس کامل Icon Button پیش از Promote به `Tested Candidate`.
- [x] ساخت Set کامل Checkbox با ۱۲ Variant، سه Property عمومی و Final audit بدون Issue.
- [ ] تأیید بصری Checkbox پیش از Promote و شروع Radio.
- [x] ساخت Set کامل Radio با ۸ Variant، سه Property عمومی و Final audit بدون Issue.
- [x] تأیید بصری Radio و Promote به `Tested Candidate` — D-134.
- [x] ساخت Set کامل Switch با ۱۰ Variant، سه Property عمومی، Touch target ۴۸ و Final audit بدون Issue.
- [x] تأیید بصری Switch و Promote به `Tested Candidate` — D-136.
- [x] ساخت Set کامل Text Input با ۱۴ Variant، ۱۲ Property عمومی، ارتفاع‌های ۴۸/۵۶ و Final audit بدون Issue.
- [ ] تأیید بصری Text Input پیش از Promote.
- [x] بازسازی Set کامل Amount Input با ۱۶ Variant، ۷ Property متنی، ۵ Toggle نمایشی، قرارداد مشترک Input family و Validation ساختاری/بصری صفر Issue — D-143.
- [x] ادغام Text Input، Amount Input و رفرنس UNTITLED در صفحه واحد `15 Inputs` با مستندات و لیبل‌های State/Size — D-143.
- [ ] تأیید بصری Amount Input پیش از Promote و شروع OTP Input.
- [ ] بازنگاشت Color Candidate از Purple/Blue Primary به Black-neutral و همگام‌سازی Text Styleها با Yekan Bakh.
- [ ] ساخت و تست Candidate Set برای Spacing، Grid، Radius، Border و Elevation.
- [ ] تعیین Iconography، تصویر و Motion foundation.
- [ ] اجرای تست‌های باقی‌مانده Dynamic Type تا ۲۰۰٪، Fallback، Screen Reader و Device واقعی پیش از `Stable`.

Gate: Foundations دارای مقدار، منبع، وضعیت بلوغ و نتیجه تست باشند؛ هیچ مقدار حل‌نشده `Stable` اعلام نشود.

### فاز ۲ — زیرساخت رسمی Figma

- استفاده و اصلاح Collections و Modeهای موجود Sandbox به‌جای ساخت دوباره.
- اتصال Primitive، Semantic، State و Component tokenها.
- ساخت صفحات Foundations، Sandbox، Documentation، Changelog و Deprecated.
- ثبت نگاشت اولیه Design و Code.

Gate: Library بدون مقدار محلی حل‌نشده و با نام‌گذاری قابل Audit آماده ساخت Component باشد.

### فاز ۳ — Base componentها

- Button و Icon Button.
- Text Input، Amount Input و OTP Input.
- Selection controls.
- Alert، Badge، Toast و Inline feedback.
- Bottom Sheet، Dialog و Overlay.
- Navigation، Card، List Item، Divider و Skeleton.

Button موجود با ۷۲ Variant به‌عنوان مرجع تاریخی `Needs revision` حفظ و حذف نمی‌شود. Candidate تازه با `Emphasis=3 × Tone=2 × Size=3 × State=6` و دقیقاً ۱۰۸ Variant ساخته می‌شود و به Setهای کوچک‌تر تقسیم نخواهد شد — D-122.

Gate هر Component طبق D-086: `Pilot → Technical preflight → Visual QA → Stress test → Expand → Final dual audit`.

### فاز ۴ — Patternهای واقعی موج ۱

- App Shell و Navigation.
- Auth، Password، OTP و KYC.
- صندوق طلا و کیف پول.
- Amount/Gold entry و نرخ.
- Calculator، Preview، Pending، Result و Receipt.
- Recovery کمبود موجودی و تاریخچه عملیات.

Gate: مسیر موفق، خطا، انتظار، لغو و بازیابی با State واقعی پوشش داده شود.

### فاز ۵ — ورودی موج‌های بعدی

هر ورودی باید نیاز، منبع فلو، Stateها، محتوای واقعی، خطا/بازیابی و وابستگی تصمیم را ثبت کند. تصمیم خروجی یکی از این موارد است: استفاده مجدد، Variant، Pattern ترکیبی یا Component جدید.

Gate: مورد فاقد فلو و State واقعی از `Candidate` فراتر نمی‌رود.

### فاز ۶ — مستندسازی، QA و تحویل

- Component specification و Behavior contract.
- Accessibility و Responsive guidance.
- RTL، BiDi، Light/Dark و Content guidance.
- Design–development mapping، QA report، Changelog و Deprecated list.

Gate: معیارهای `07-design-system/README.md` پوشش داده و Findingهای Critical/High حل یا آگاهانه پذیرفته شده باشند.

## زیرتسک فعال

فاز ۱ — G4 معامله با هشت Pattern نگاشت‌شده، کپی HTML قابل تست و برد مستقل Figma کامل است. زیرتسک بعدی Review مالک محصول روی Pilot معامله و سپس تدوین G5 Visual Direction Contract برای Surface/Border/Spacing/Radius/Typography است؛ Dedupe Batchهای A/B/D و Pilotهای Home/Trust موازی باز می‌مانند. Reviewهای بصری Candidateهای فعلی باز است و هیچ Promote/Demote خودکاری انجام نمی‌شود — D-163.

## Guardrailها

- برند قدیمی ورودی تحقیق است، نه قانون خودکار ریدیزاین.
- Gold جایگزین معنای Primary، Success یا Trust نیست.
- هیچ Component مالی بدون فلو و State واقعی `Stable` نمی‌شود.
- Light/Dark، RTL، دسترس‌پذیری و محتوای واقعی بخشی از Definition of Done هستند.
- خروجی Agent بدون Audit انسانی `Stable` نمی‌شود.
- موج‌های موازی اجازه تغییر خاموش توکن، Variant یا Pattern رسمی را ندارند؛ تغییر از Governance عبور می‌کند.
- Competitor evidence بدون تکرار، Counter-example، نگاشت به Context شمش و Review مالک محصول مجوز Candidate یا Promote نیست — D-163.

## وضعیت Gate

فاز ۰: `Complete`

فاز ۱: `In progress / Sufficient to proceed` — Color/Typography، Radio و Switch در وضعیت `Tested Candidate` هستند؛ Button کامل ۱۰۸تایی، Icon Button کامل ۷۲تایی، Checkbox ۱۲تایی و خانواده Input Final audit صفر Issue را پاس کرده‌اند. مسیر استخراج بایننس G4 معامله را با هشت Mapping و Pilot HTML/Figma بسته است؛ G2 Batchهای A/B/D، Pilotهای Home/Trust، G5 Visual Direction Contract و تأیید بصری مالک محصول بازند و هیچ Foundation یا Component هنوز `Stable` نیست.

مرحله ۷: `Sufficient to proceed`
