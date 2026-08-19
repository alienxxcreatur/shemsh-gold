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
- `stage-7-controlled-pilot-plan-v0.1.md`
- `binance-ten-view-mapping-v0.1.md`
- `visual-direction-contract-g5-v0.1.md`
- `foundations/navy-first-palette-candidate-v0.3.md`
- `navy-first-direct-migration-ledger-v0.1.md`
- `sources/shemsh-color-palette-v2-2026-08-17.pdf`
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

## وضعیت پس از D-202، D-122 و D-221

- فاز ۱: تثبیت زبان بصری و Foundations واقعی
- ورودی اصلی: خروجی بسته‌شده موج ۱ و اسناد `Design System Prep`
- روش بلوغ: `Draft → Candidate → Tested → Stable` طبق `governance.md`
- گیت ساخت Component: `Pilot → Technical preflight → Visual QA → Stress test → Expand → Final dual audit` طبق D-086
- خروجی‌های فاز ۱ تا اینجا: ممیزی ورودی، نقشه Candidateهای برند، `foundations/color-candidate-v0.1.md`، `foundations/typography-candidate-v0.1.md` و `foundations/candidate-v0.1-test-report.md`
- وضعیت Color/Typography: `Tested Candidate / Not Stable`
- Typography و معماری توکن‌های عمومی به‌عنوان Candidate قابل استفاده مجدد باقی می‌مانند.
- مالک محصول جهت `Black-neutral` را کنار گذاشت و `Navy-first` را برای Candidate عمومی تأیید کرد. PDF پالت v2 ورودی هویتی است، اما Rampها و چند جفت کنتراست ناقص‌اند؛ مرجع جاری `foundations/navy-first-palette-candidate-v0.3.md` است. Statusها معنایی و Accent فلزها کمکی باقی می‌مانند — D-202.
- مسیر Evidence D-163 و نگاشت G4 کامل است. با D-177، `visual-direction-contract-g5-v0.1.md` چهار موضوع P0 و قواعد Surface/Card/Title/Numeric/Grouping/Overlay را با Pilot value بسته است. Pilotهای Home/Assets و Trust/Receipt هنوز بازند. این مسیر Candidateهای موجود را خودکار Demote/Promote نمی‌کند و رفتار رقیب قانون شمش نیست.
- Sandbox موجود مبنای اجرایی است. ممیزی تازه Button فعلی ۷۲تایی، ۱۴۰ ناسازگاری fallback/resolved و ساختار Focus ناهماهنگ یافت؛ این Set حفظ می‌شود اما `Needs revision` است. قرارداد Candidate تازه با ۱۰۸ Variant در `button-component-contract-v0.3.md` تأیید شده است — D-122.
- ساخت Foundations و Base componentهای مستقل از فلز فعال است. Gold/Metal Accent، نمودار چندسری، نمادگذاری فلز و Asset selector پیش از OQ-056 `Stable` نمی‌شوند.
- Motion، Foundation، Responsive، سه Grid Style و Tier 0 شامل Spinner، Progress، Status Badge و Divider در Figma ساخته شده‌اند.
- صفحه `10 Button` و Pilot شش‌حالته `Primary / Neutral / Medium` ساخته شده‌اند. Technical audit، resolved token audit و Stress testهای RTL، متن بلند، Icon، Loading، Focus و Hug/Fill پاس شده‌اند؛ State Ledger در `button-figma-state-ledger-v0.1.md` است.
- Pilot توسط مالک محصول تأیید بصری شد و Expand کنترل‌شده انجام شد. Component Set اصلی اکنون ۱۰۸ Variant یکتا دارد و Final technical/agent visual audit با ۶۶۶ Paint متصل و صفر mismatch پاس شده است. قدم بعدی تأیید بصری نهایی مالک محصول و سپس Icon Button، Selection controlها، Input و Feedback است.
- Workflow موفق Button به روش رسمی `component-set-workflow-v1.0.md` تبدیل شده است. Pilot شش‌حالته `Tertiary / Medium` Icon Button در صفحه `11 Icon Button` تأیید بصری شد و Set کامل ۷۲تایی ساخته شد؛ Final structural/token/agent-visual audit بدون Issue پاس شد. Ledger در `icon-button-figma-state-ledger-v0.1.md` است و تأیید بصری نهایی مالک محصول پیش از Promote باز می‌ماند — D-129/D-132/D-133.
- Checkbox در صفحه `12 Checkbox` با ۱۲ Variant `Selection × State`، سه Property عمومی و Touch target موبایل ساخته شد؛ Final audit صفر Issue داشت و Ledger در `checkbox-figma-state-ledger-v0.1.md` ثبت شده است. تأیید بصری مالک محصول پیش از Promote باز است.
- Radio در صفحه `13 Radio` با ۸ Variant `Selection × State`، سه Property عمومی و Touch target موبایل ساخته شد؛ Final audit صفر Issue داشت و پس از تأیید بصری مالک محصول به `Tested Candidate` ارتقا یافت — D-134. Ledger در `radio-figma-state-ledger-v0.1.md` ثبت شده است.
- Switch در صفحه `14 Switch` با ۱۰ Variant `Selection × State`، سه Property عمومی، Touch target ۴۸، Focus و Loading کامل ساخته شد؛ Final audit صفر Issue و تأیید بصری مالک محصول را پاس کرد و به `Tested Candidate` ارتقا یافت — D-136. Ledger در `switch-figma-state-ledger-v0.1.md` ثبت شده است.
- خانواده Input طبق D-143 در صفحه واحد `15 Inputs` با ID `325:229` و Section اصلی `353:1254` مستند شده است؛ رفرنس UNTITLED نیز در Section جدا روی همین صفحه حفظ می‌شود. قرارداد مشترک شامل عرض ۳۲۰، ارتفاع Field برابر ۴۸/۵۶، Padding افقی ۱۶، Radius ثابت ۱۴ با `semantic/dimension/radius/input`، ساختار `Label row / Field shell / Field / Focus ring`، Typography Semantic و RTL کامل است.
- Text Input با ۱۴ Variant `Size × State`، ۱۲ Property عمومی و Stateهای `Empty/Filled/Hover/Focus/Error/Disabled/Read-only` حفظ شد؛ Label/Value/Placeholder/Helper به Text Styleهای Semantic وصل، محتوای visible به Fill/Right-aligned اصلاح و Field/Focus ring در تمام Variantها به Radius token مشترک متصل شدند.
- Amount Input به ۱۶ Variant گسترش یافت: همان هفت State مشترک خانواده به‌علاوه `Loading`. `Invalid` به `Error` تغییر کرد؛ پوسته Amount با Text Input هم‌ساخت شد، Hardcodeهای Geometry/Fill/Stroke/Spacing/Radius حذف شدند، Helper و Balance hint راست‌چین و Propertyهای Show label/action به Container درست متصل شدند و Loading در همه Variantها هندسه ثابت `16×4` دارد. Audit نهایی ۳۰ Variant و Screenshot کامل صفحه صفر Issue است. Ledger مشترک در `inputs-family-figma-state-ledger-v0.1.md` و Ledgerهای جزئی حفظ شده‌اند.
- OTP Input با ID `385:1398` روی همان صفحه به Set کامل ۳۲تایی `Digits=4/6 × Size=Medium/Large × State=Empty/Partial/Filled/Hover/Focus/Error/Disabled/Success` گسترش یافت. Cellها حداقل ۴۸، Radius مشترک ۱۴ و Token binding کامل دارند؛ ۱۶ تعریف Property شامل `Success message`، مستندات مستقل و Final technical audit صفر Issue ثبت شده است. Success با Border/متن Semantic موفقیت تا لحظه Redirect نمایش داده می‌شود — D-148. Pilot بصری پاس شد، اما Screenshot سرویس برای Set کامل timeout داد و تأیید بصری مالک محصول پیش از Promote باز است. Ledger در `otp-input-figma-state-ledger-v0.1.md` است.
- Search Input با ID `402:1498` روی همان صفحه به Set کامل ۱۲تایی `Size=Medium/Large × State=Empty/Filled/Hover/Focus/Disabled/Loading` اضافه شد. قرارداد Geometry/Radius ۱۴/Typography/RTL خانواده حفظ شده، Search icon همیشه حاضر، Clear فقط در Filled و Loading فقط در State متناظر نمایش داده می‌شود. هفت Property عمومی، مستندات مستقل با ID `402:1509` و Final technical/agent-visual audit صفر Issue ثبت شده‌اند. Ledger در `search-input-figma-state-ledger-v0.1.md` است.
- Alert در صفحه مستقل `16 Alert` با ID `411:344` به Set کامل ۱۰تایی `Tone=Neutral/Info/Success/Warning/Danger × Layout=Inline/Stacked` اضافه شد. رنگ‌ها از `semantic/color/status/{tone}/*`، Radius از `semantic/dimension/radius/container` و Typography از Styleهای Semantic می‌آید؛ Propertyهای عمومی `Title`، `Description`، `Action label`، `Show action`، `Show dismiss`، `Show icon` و `Icon` وصل شده‌اند. Final structural/agent-visual audit صفر Issue است و Ledger در `alert-figma-state-ledger-v0.1.md` ثبت شد.
- Toast در صفحه مستقل `17 Toast` با Page ID `424:269` و Set ID `426:1647` به Set کامل ۵تایی `Tone=Neutral/Info/Success/Warning/Danger` اضافه شد. `Message` متنی، `Action` و `Dismiss` بولی و `Icon` از نوع Instance Swap است؛ رنگ‌ها از `semantic/color/status/{tone}/*`، Typography از Styleهای Semantic `Yekan Bakh FaNum` و Geometry از Tokenهای معنایی می‌آید. Final technical audit صفر Issue و Visual QA واقعی Light/Dark/RTL/متن بلند پاس شد؛ Ledger در `toast-figma-state-ledger-v0.1.md` است.

وضعیت: `Paused for Figma write / Foundations preserved` با D-223. Migration رنگ D-221 حذف نشده است، اما Home default/zero در Page `20 Screen-led / Home` و تمام Building blockهای همان موج ردشده و `Non-authoritative` هستند. هیچ Write، استخراج یا Promote تازه در Figma تا دستور صریح مالک محصول مجاز نیست.

نتیجه D-223: Baseline D-219 و Foundationهای موجود حفظ‌اند، اما ادامه‌ی بصری از `../08-final-design-and-handoff/artifacts/multi-metal-high-fidelity-v0.1.html` انجام می‌شود. نخست Patternهای تکرارشونده در Context واقعی HTML Review می‌شوند؛ فقط پس از تأیید مالک می‌توان درباره بازگشت به DS یا Figma تصمیم گرفت. G5 v0.1 فقط Evidence است.
