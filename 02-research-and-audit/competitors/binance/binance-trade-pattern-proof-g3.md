# اثبات Patternهای معامله بایننس — G3 Batch C

وضعیت: `Complete / 8 corroborated / 0 mapped to Shemsh`
تاریخ: ۲۵ مرداد ۱۴۰۵ / 16 Aug 2026
ورودی اصلی: [`binance-trade-batch-c-evidence-ledger.md`](binance-trade-batch-c-evidence-ledger.md)

## هدف و Guardrail

این سند هشت Candidate استخراج‌شده از ۳۸ Screen منحصربه‌فرد Batch C را با آستانه رسمی G3 می‌سنجد. نتیجه فقط می‌گوید یک Pattern در Snapshot بایننس به‌اندازه کافی تکرار یا در یک Flow کامل منسجم بوده است؛ به معنی مناسب‌بودن خودکار آن برای شمش نیست.

- **Observed fact:** هشت Candidate با Evidence ID، تکرار، Counter-example و دامنه اعتبار بررسی شدند.
- **Observed fact:** هر هشت Candidate حداقل یکی از آستانه‌های «سه Context مستقل» یا «یک Flow کامل و چند State متوالی» را پاس کردند.
- **Business decision:** هیچ تصمیم تازه‌ای درباره محصول یا Design System شمش در این مرحله گرفته نشده است.
- **Design assumption:** نگاشت Patternهای Corroborated به شمش فقط در G4 و با مرجع‌بودن وایرفریم نهایی انجام می‌شود.
- **Risk:** `Corroborated` بودن Pattern بایننس مجوز کپی Geometry، رنگ، Taxonomy یا تراکم آن نیست.

## روش اثبات

هر Pattern با پنج سؤال سنجیده شد:

1. آیا Observation مستقیم و Evidence قابل‌ردیابی دارد؟
2. آیا در سه Context مستقل تکرار شده یا در یک Flow کامل چند State پیوسته دارد؟
3. آیا Counter-example ناسازگار ثبت و به‌عنوان Variant یا محدودیت توضیح داده شده است؟
4. آیا Rule از Observation فراتر نمی‌رود و مقدار دقیقِ دیده‌نشده اختراع نمی‌کند؟
5. آیا ریسک‌های Touch، Keyboard، RTL، PWA، رنگ و Chart جدا از Pattern ثبت شده‌اند؟

## نتیجه Gate

| Pattern | Context/State پشتیبان | آستانه پاس‌شده | Counter-example | Confidence | نتیجه |
|---|---|---|---|---|---|
| BN-P-001 — Context-preserving trade workspace | Spot root، TP/SL، Chart expand، Preferences/result | ۴ Flow مرتبط + State chain | Convert و Buying with USD خطی‌اند | High | `Corroborated` |
| BN-P-002 — Amount-first retail transaction | Convert parent/full، Buying with USD full | دو Flow کامل و چند State | Spot با Price/Order book شروع می‌شود | High | `Corroborated` |
| BN-P-003 — Progressive advanced controls | TP/SL، Funding More، Recurring advanced، Preferences | ۴ Context مستقل | Preferences بلند Full page است | High | `Corroborated` |
| BN-P-004 — Explicit source/destination pair | Convert instant، recurring، coin conversion، fiat buy | ۳ Context + یک Flow کامل | Spot جفت‌ارز ثابت دارد | High | `Corroborated` |
| BN-P-005 — State-led CTA and feedback | Spot submit/open order، Convert، Fiat buy | ۳ Flow و بیش از ۱۰ State | Error/Offline پوشش کامل ندارد | High برای Stateهای دیده‌شده | `Corroborated / scoped` |
| BN-P-006 — Tiered chart complexity | Spot embedded، Chart full، Convert summary، Fiat buy بدون Chart | ۴ Context مستقل | نیاز حرفه‌ای و روزمره یکسان نیست | Medium | `Corroborated` |
| BN-P-007 — White base with selective grouping | هر ۸ Flow و ۳۸ Screen Unique | تکرار سیستمی گسترده | Grid/Cardهای Objectمحور | High | `Corroborated` |
| BN-P-008 — Rate, fee and risk near commitment | Convert warning/review/receipt، Fiat review، Spot fee context | ۳ Flow + دو Flow کامل | Spot order باز و قابل لغو است | High | `Corroborated` |

## BN-P-001 — Context-preserving trade workspace

**Problem / Context:** کاربر حرفه‌ای هم‌زمان به نرخ بازار، Order book، Form و وضعیت سفارش نیاز دارد؛ بازکردن کنترل ثانویه نباید Context را از بین ببرد.

**Evidence:** BN-E-012، BN-E-013، BN-E-014.

**Observation مستقیم:**

- Spot root، Order book و Form را کنار هم نگه می‌دارد.
- Chart در همان Workspace باز می‌شود.
- TP/SL در Sheet تنظیم و Summary آن به Form اصلی برمی‌گردد.
- نتیجه سفارش باز با Toast و سپس Order row در همان Context قابل پیگیری است.

**Rule استنباط‌شده:** در حالت حرفه‌ای، بازکردن Chart یا تنظیمات کوتاه باید Context نرخ و سفارش را حفظ کند؛ Sheet، disclosure داخلی یا Expand مجاز است، اما بازگشت باید State قبلی را نگه دارد.

**Variant / Exception:** مسیر روزمره Convert و خرید با USD عمداً Workspace حرفه‌ای ندارند و خطی‌اند. این Counter-example Pattern را رد نمی‌کند؛ دامنه آن را به معامله حرفه‌ای محدود می‌کند.

**Accessibility / PWA / RTL:** حفظ Context نباید به دو ستون ریز و کنترل‌های زیر ۴۴×۴۴ منجر شود. در عرض ۳۲۰ و RTL، ترتیب خواندن، Focus order و واحد/عدد BiDi باید از ترتیب بصری مستقل تست شوند.

**Confidence:** High. **Status:** `Corroborated`.

## BN-P-002 — Amount-first retail transaction

**Problem / Context:** کاربر روزمره ابتدا می‌خواهد بداند «چقدر می‌پردازم/تبدیل می‌کنم»، نه اینکه با Order book و نوع سفارش شروع کند.

**Evidence:** BN-E-015، BN-E-016.

**Observation مستقیم:**

- Buying with USD با عدد بزرگ، واحد، دارایی مقصد و Keypad شروع می‌شود.
- Convert با From/To، Available/Max و CTA Preview خطی است.
- هر دو مسیر پس از ورود Amount، Quote و CTA آماده را نشان می‌دهند و سپس Review/Result دارند.

**Rule استنباط‌شده:** مسیر خرده‌فروشی باید Amount و Unit را نقطه تمرکز اولیه کند؛ دارایی، منبع پرداخت و Quote در اطراف آن قرار گیرند و Flow بدون Order book به Review و Result برسد.

**Variant / Exception:** Spot برای کاربر حرفه‌ای و سفارش محدود، Price/Amount/Order book را هم‌زمان نشان می‌دهد.

**Accessibility / PWA / RTL:** Input باید Label دائمی، `inputmode` مناسب، Paste و Keyboard واقعی داشته باشد. Keypad سفارشی نباید تنها راه ورود عدد باشد و با Keyboard viewport یا Screen reader تداخل کند.

**Confidence:** High. **Status:** `Corroborated`.

## BN-P-003 — Progressive advanced controls

**Problem / Context:** نمایش هم‌زمان گزینه‌های پیشرفته، مسیر اصلی را متراکم و خطاپذیر می‌کند.

**Evidence:** BN-E-013، BN-E-014، BN-E-016.

**Observation مستقیم:**

- TP/SL ابتدا یک Trigger داخل Form است، جزئیاتش در Sheet باز می‌شود و Summary به Form برمی‌گردد.
- Funding sheet با `View More` گزینه‌های کمترمتداول را بعداً آشکار می‌کند.
- Recurring دارای `Advanced options` بسته است.
- Preferences طولانی در صفحه مستقل و نه Sheet کوتاه قرار دارد.

**Rule استنباط‌شده:** Default فقط نیازهای مسیر اصلی را نشان دهد. تصمیم کوتاه و وابسته به Context در Sheet/Disclosure باز شود؛ تنظیمات بلند، پایدار یا چندبخشی Full page باشد؛ نتیجه انتخاب به صفحه مادر برگردد.

**Variant / Exception:** تنظیمات طولانی Preferences Full page است؛ بنابراین «همه چیز در Sheet» Rule نیست.

**Accessibility / PWA / RTL:** Trigger باید Label و State باز/بسته قابل‌اعلان داشته باشد. Focus پس از بازشدن Overlay وارد آن و پس از بسته‌شدن به Trigger برگردد؛ Back و Escape رفتار قابل‌پیش‌بینی داشته باشند.

**Confidence:** High. **Status:** `Corroborated`.

## BN-P-004 — Explicit source/destination pair

**Problem / Context:** در تبدیل دارایی، ابهام میان چیزی که کاربر می‌دهد و چیزی که دریافت می‌کند خطای مالی ایجاد می‌کند.

**Evidence:** BN-E-015، BN-E-016.

**Observation مستقیم:**

- Convert از Labelهای `From` و `To`، نام/آیکن دارایی، Available/Max و کنترل Swap استفاده می‌کند.
- Buying with USD مبلغ/واحد پرداخت، دارایی مقصد و روش پرداخت را جدا نشان می‌دهد.
- Review دوباره دو سمت و Rate را پیش از Confirm تکرار می‌کند.

**Rule استنباط‌شده:** مبدأ، مقصد، Unit، مقدار و منبع پرداخت باید با Label صریح و نه فقط جایگاه یا رنگ قابل تشخیص باشند؛ Review باید رابطه آن‌ها و Rate را دوباره بیان کند.

**Variant / Exception:** Spot جفت‌ارز ثابتی دارد و به‌جای From/To از Buy/Sell و Pair استفاده می‌کند.

**Accessibility / PWA / RTL:** ترتیب DOM، خواندن Screen reader و BiDi عدد/واحد باید با معنای مبدأ و مقصد هماهنگ باشد. Swap نباید فقط Icon بدون نام دسترس‌پذیر باشد.

**Confidence:** High. **Status:** `Corroborated`.

## BN-P-005 — State-led CTA and transaction feedback

**Problem / Context:** عملیات مالی بدون State روشن می‌تواند باعث Double submit، ابهام قطعیت یا گم‌شدن نتیجه شود.

**Evidence:** BN-E-013، BN-E-015، BN-E-016.

**Observation مستقیم:**

- CTAهای Convert و Fiat buy در Empty غیرفعال و پس از Amount آماده می‌شوند.
- Review پیش از Confirm نمایش داده می‌شود.
- Buying with USD صفحه Processing و سپس Success مستقل دارد.
- Convert Review زمان‌دار و Receipt پایدار دارد.
- Spot ثبت را با Toast و سفارش باز را با Row قابل لغو/پیگیری نشان می‌دهد.

**Rule استنباط‌شده:** CTA و Feedback باید قرارداد State داشته باشند: `Empty/Invalid → Ready → Review → Processing/Pending → Success/Failure یا Persistent operation state`. هنگام Processing اقدام دوباره بسته و وضعیت سیستم آشکار باشد.

**Variant / Exception:** عملیات فوری به Success/Receipt می‌رسد؛ سفارش باز به Row پیگیری‌پذیر. نوع نتیجه تابع قطعیت عملیات است، نه یک Template واحد.

**Evidence gap:** Batch C مسیر کامل Error، Offline، Quote expired و Recovery را نشان نمی‌دهد؛ این بخش از Rule بایننس اثبات نشده است.

**Accessibility / PWA / RTL:** Loading باید برای عملیات بیش از حدود ۳۰۰ms دیده/اعلام شود، Button در ارسال دوباره غیرفعال شود، Success یا Error فقط رنگی نباشد و Error نزدیک Field همراه مسیر Recovery قرار گیرد.

**Confidence:** High برای Stateهای مشاهده‌شده. **Status:** `Corroborated / scoped`.

## BN-P-006 — Tiered chart complexity

**Problem / Context:** همه کاربران و همه عملیات به Candlestick، Indicator و Order book نیاز ندارند.

**Evidence:** BN-E-012، BN-E-014، BN-E-015، BN-E-016.

**Observation مستقیم:**

- Spot یک Chart قابل Expand در Workspace دارد.
- Chart کامل ابزار، Indicator، Volume و Bid/Ask ارائه می‌کند.
- Convert فقط Summary chart و بازه‌های محدود نشان می‌دهد.
- Buying with USD اصلاً Chart را وارد مسیر خرید نمی‌کند.

**Rule استنباط‌شده:** پیچیدگی Chart باید Tier داشته باشد: `No chart` برای Task صرفاً پرداخت، `Summary trend` برای Context نرخ، `Expandable/full analysis` برای معامله حرفه‌ای.

**Variant / Exception:** وجود Chart در محصول مالی به‌خودی‌خود ارزش نیست؛ سطح آن تابع سؤال کاربر است.

**Accessibility / PWA / RTL:** Candlestick به Summary عددی و OHLC/Data table نیاز دارد؛ رنگ تنها نشانه صعود/نزول نباشد؛ Legend و Label روشن، Focus/Zoom قابل کنترل و Reduced Motion برای داده زنده لازم است.

**Confidence:** Medium؛ Tierها روشن‌اند اما نیاز واقعی هر Tier در شمش باید در G4 تعیین شود. **Status:** `Corroborated`.

## BN-P-007 — White base with selective grouping

**Problem / Context:** «مینیمال و سفید» بدون قرارداد Grouping می‌تواند یا بیش از حد تخت و مبهم شود یا دوباره به Card/Borderهای زیاد برگردد.

**Evidence:** BN-E-017 و کل Ledger Batch C.

**Observation مستقیم:**

- سطح پایه در هشت Flow سفید است.
- Input و Grouping محدود از Surface خاکستری روشن استفاده می‌کنند.
- Listها و Preferences عمدتاً با Whitespace و Divider بخش‌بندی می‌شوند.
- Border برجسته برای Choice فعال، Tile preview یا Card یک Object مستقل استفاده می‌شود.
- Sheet با Scrim و سطح سفید از Background جدا می‌شود.

**Rule استنباط‌شده:** Baseline از Canvas سفید، Whitespace و Divider ساخته شود. Surface خاکستری برای Field/Grouping محدود و Border برای Selection یا Object مستقل به‌کار رود؛ Card نباید Wrapper پیش‌فرض هر Section باشد.

**Variant / Exception:** Spot Grid، Home card و انتخاب‌های تصویری برای Object/Choice واقعی Card یا Border دارند.

**حد اعتبار:** Batch C مقدار دقیق Spacing، Radius، Border width یا رنگ Neutral را اثبات نمی‌کند؛ فقط سلسله‌مراتب استفاده را اثبات می‌کند.

**Accessibility / PWA / RTL:** خاکستری کم‌رنگ باید Contrast متن و مرز Interactive را حفظ کند. Selected state باید علاوه بر Border/Color با Check، Label یا State قابل‌اعلان مشخص شود.

**Confidence:** High. **Status:** `Corroborated`.

## BN-P-008 — Rate, fee and risk near commitment

**Problem / Context:** کاربر باید قبل از اقدام مالی بداند چه مقدار می‌دهد/می‌گیرد، Rate و Fee چیست و چه ریسک مرتبطی وجود دارد.

**Evidence:** BN-E-015، BN-E-016، BN-E-018.

**Observation مستقیم:**

- Convert هشدار ریسک را زیر Entry و پیش از Preview نشان می‌دهد.
- Confirm تبدیل From/To، Type، Fee، Rate و زمان اعتبار را نزدیک CTA نهایی تکرار می‌کند.
- خرید USD در Review، مقدار دریافتی، Payment method، Fee و Total spend را نمایش می‌دهد.
- Receipt مقدار، Rate، Fee و تاریخ را پس از Completion نگه می‌دارد.

**Rule استنباط‌شده:** اطلاعات تصمیم مالی باید در سه لحظه Contextual باشد: ریسک قبل از Commitment، Rate/Fee/Total در Review نزدیک CTA، و جزئیات پایدار در Receipt پس از نتیجه.

**Variant / Exception:** Spot order باز و قابل لغو است و Feedback آن به Order state می‌رود؛ همان صفحه Success عملیات فوری را لازم ندارد.

**Accessibility / PWA / RTL:** Fee و Total باید Text واقعی و قابل خواندن باشند، نه Tooltip/Hover-only. زمان انقضای Quote باید اعلام و Recovery پس از Expiry مشخص شود. Checkbox حقوقی نباید جایگزین ارائه قابل‌فهم اطلاعات شود.

**Confidence:** High. **Status:** `Corroborated`.

## کنترل کیفی مستقل از بایننس

راهنمای UX داخلی `ui-ux-pro-max` برای جلوگیری از انتقال ضعف‌های مرجع روی این Ruleها اعمال شد:

- Touch target حداقل ۴۴×۴۴ و فاصله حداقل ۸px میان اهداف مجاور.
- Label دائمی Input و Keyboard عددی مناسب؛ Placeholder به‌تنهایی Label نیست.
- Loading آشکار، بستن Double submit و Success/Error قابل‌اعلان.
- Error نزدیک Field همراه Recovery؛ نه Border قرمزِ تنها.
- Candlestick فقط برای Context حرفه‌ای و همراه Summary/OHLC table؛ رنگ به‌تنهایی حامل معنی نیست.

این موارد Evidence رفتار بایننس نیستند؛ معیار کنترل کیفیت برای G4 و Pilot شمش‌اند.

## Patternهایی که عمداً اثبات نشدند

- مقدار دقیق Radius، Spacing، Border width، Elevation یا رنگ Neutral.
- Buy=Success و Sell=Error یا هر نگاشت معنایی سبز/قرمز.
- مناسب‌بودن Order book، TP/SL، Iceberg، Bot یا Indicator برای شمش.
- رفتار Error، Offline، Quote expiry recovery و فروش ساده شمش.
- Geometry مخصوص iOS و Bottom navigation در همه سطوح.

## خروجی برای G4

G4 باید برای هر `BN-P-001..008` این تصمیم‌ها را جدا ثبت کند:

1. `Adopt / Adapt / Reject / Defer` برای شمش.
2. محل دقیق اثر در وایرفریم Home/Trade/Assets/Trust.
3. اثر روی Candidateهای فعلی Figma و نیاز به حفظ/اصلاح/جایگزینی.
4. Acceptance criteria برای RTL، عرض ۳۲۰، PWA keyboard، Touch و Accessibility.

## Gate

- G3 برای **Batch C**: `Complete`.
- نتیجه تاریخی این سند: `8 Corroborated / 0 Rejected as Binance patterns`.
- وضعیت بعدی: G4 معامله برای هر هشت Pattern کامل و Mapped شده است.
- G2/G3 کل Audit نیز در [`binance-cross-batch-evidence-ledger-g2.md`](binance-cross-batch-evidence-ledger-g2.md) و [`binance-global-ui-pattern-proof-g3.md`](binance-global-ui-pattern-proof-g3.md) کامل شده است؛ G4 سراسری باز می‌ماند.
