# فهرست مرجع و Census بایننس

وضعیت: `Census complete / G3 Batch C complete / G4 Trade mapping next`
تاریخ Snapshot: ۲۵ مرداد ۱۴۰۵ / 16 Aug 2026

## منبع اصلی

- [Binance iOS در Mobbin — Screens](https://mobbin.com/apps/binance-ios-ce9958de-3b6f-4f7a-ae1d-273d4e162c14/e19d2eba-703f-4f6e-bf74-323f9bddbce9/screens)
- [UI Elements](https://mobbin.com/apps/binance-ios-ce9958de-3b6f-4f7a-ae1d-273d4e162c14/e19d2eba-703f-4f6e-bf74-323f9bddbce9/ui-elements)
- [Flows](https://mobbin.com/apps/binance-ios-ce9958de-3b6f-4f7a-ae1d-273d4e162c14/e19d2eba-703f-4f6e-bf74-323f9bddbce9/flows)

## Snapshot مشاهده‌شده

- **Observed fact:** صفحه Screens عدد `1,452 screens` را نشان داد.
- **Observed fact:** صفحه Flows عدد `469 flows` را نشان داد.
- **Observed fact:** صفحه UI Elements نیز در Snapshot اولیه `1,452 UI elements` نشان داد؛ بنابراین به‌تنهایی دامنه را کوچک نمی‌کند و باید با Filter/جست‌وجو استفاده شود.
- **Observed fact:** فلوها در ۱۷ خانواده سطح بالا گروه‌بندی شده‌اند.
- **Risk:** محتوا و شمارش Mobbin ممکن است بعداً تغییر کند؛ تاریخ Snapshot کنار همه Countهای کلان حفظ شود.

## نتیجه اجرای Census

- **Observed fact:** Filter صفحه Flows هر ۱۷ خانواده و شاخه‌های داخلی آن‌ها را در Snapshot جاری نمایش داد؛ بنابراین دسته‌بندی فقط از نام نتایج جست‌وجو استنباط نشده است.
- **Observed fact:** ۳۲ Flow برای Shortlist انتخاب و Preview واقعی همه آن‌ها بررسی شد؛ مجموع شمارش خام آن‌ها ۱۷۳ Screen است.
- **Observed fact:** هم‌پوشانی Screen ID میان Flowهای والد/فرزند وجود دارد؛ عدد ۱۷۳ «Raw» است و Unique count در G2 با Dedupe ثبت می‌شود.
- **Observed fact:** در Batch C، هشت Flow و ۴۱ Screen خام با Screen ID Dedupe شدند؛ دو ID مشترک سه تکرار ایجاد می‌کردند و نتیجه ۳۸ Screen منحصربه‌فرد است.
- **Observed fact:** Ledger معامله ۳۷ Screen منحصربه‌فرد را با Asset مستقیم و یک Screen را با Preview واقعی Mobbin پوشش می‌دهد.
- **Observed fact:** G3 هر هشت Candidate معامله را با آستانه تکرار/Flow کامل، Counter-example و Confidence سنجید و هر هشت مورد به‌عنوان Pattern بایننس `Corroborated` شدند؛ هیچ موردی هنوز به شمش Mapped نشده است.
- **Design assumption:** بازه ۱۲۰–۱۶۰ Screen منحصربه‌فرد پس از Dedupe همچنان تخمین عملی مناسبی است؛ Saturation معیار توقف نهایی می‌ماند.
- **Evidence gap:** جست‌وجوی هدفمند برای Fiat/Cash withdrawal Flow نتیجه مستقیم نداد. این نتیجه نبودن Flow یا نبودن قابلیت را ثابت نمی‌کند و برای Pattern برداشت به منبع دیگری نیاز است.

## خانواده‌های سطح بالا

| خانواده Mobbin | برچسب Census | دامنه بررسی | نتیجه |
|---|---|---|---|
| Onboarding | Supporting | Auth، KYC، آموزش ضروری و Permission | وارد Shortlist |
| Home — Exchange | Core | Shell، Home، خرید با پول، نرخ، Profile و Menu | وارد Shortlist |
| Markets | Core | Asset list، Detail، Chart، Sort و Favorite | وارد Shortlist |
| Trade | Core | Convert، Spot، Entry، Order، Detail و Preferences | وارد Shortlist؛ Deep audit اول |
| Assets | Core | Overview، History، Report، Privacy و Holding | وارد Shortlist |
| Settings — Exchange | Supporting | Payment method، Language، Theme، Support و Privacy | وارد Shortlist |
| Logging in | Supporting | Login، Recovery و Lock state | وارد Shortlist |
| Home — Wallet | Pattern-only | Receive، Buy with card و Common tools | فقط دو Flow هدفمند |
| Markets — Wallet | Pattern-only | List/Detail/Filter قابل‌انتقال | Watchlist؛ خارج از Shortlist فعلی |
| Trade — Wallet | Pattern-only | Swap فقط برای رفتار تبدیل | Watchlist؛ خارج از Shortlist فعلی |
| Assets — Wallet | Pattern-only | Send/token list در صورت هم‌پوشانی | Watchlist؛ خارج از Shortlist فعلی |
| Settings — Wallet | Pattern-only | Wallet management و Address | Watchlist؛ خارج از Shortlist فعلی |
| Futures | Pattern-only | Stress/density و Data table | خارج از Shortlist فعلی |
| Discover — Wallet | Exclude | Airdrop و محتوای Web3 | حذف |
| Live Activities | Exclude | الگوی سیستم‌عامل | حذف از Baseline PWA |
| Dynamic Island | Exclude | الگوی سیستم‌عامل | حذف از Baseline PWA |
| Widgets | Exclude | سطح خارج از اپ | حذف از Baseline فعلی |

## واحد Evidence

هر Evidence باید این فیلدها را داشته باشد:

| فیلد | قرارداد |
|---|---|
| `Evidence ID` | `BN-E-###` |
| Source | URL مستقیم Screen یا Flow |
| Snapshot date | تاریخ مشاهده |
| Binance context | خانواده، Flow و State |
| Shemsh context | Home / Trade / Assets / Global / Supporting |
| Layer | Foundation / Component / Composition / Behavior / State |
| Observation | فقط آنچه واقعاً دیده شده |
| Inference | برداشت تحلیلی جدا از Observation |
| Repetition | تعداد Context یا Flow پشتیبان |
| Counter-example | مورد ناسازگار یا استثنا، در صورت وجود |
| Confidence | High / Medium / Low |
| Reviewer | Agent / Owner / Both |

## آستانه اثبات Pattern

یک Observation وقتی وارد `binance-pattern-catalog.md` می‌شود که حداقل یکی از شرایط زیر برقرار باشد:

1. در سه Context مستقل تکرار شده باشد؛ یا
2. در یک Flow کامل و چند State متوالی منسجم باشد؛ یا
3. یک Pattern سیستمی روشن باشد و Counter-exampleهای آن ثبت شده باشند.

اسکرین منفرد، Highlight و Latest feed فقط Lead تحقیق است و به‌تنهایی Rule محسوب نمی‌شود.

## ثبت Evidence

| ID | Source | Context | Layer | Observation | Repetition | Confidence | Status |
|---|---|---|---|---|---:|---|---|
| BN-E-001 | [Buying a spot](https://mobbin.com/flows/24426295-aae8-4bbd-8fd4-0e7bfd0cc0de) | Trade / Spot | Behavior | Flow اصلی خرید Spot در Snapshot شامل ۸ Screen است و با Flowهای والد/فرزند Chart، Order type و Information مرتبط است | 1 Flow chain | High | `Census evidence` |
| BN-E-002 | [Home](https://mobbin.com/flows/cf688b7d-77fa-4231-aa1c-57f1f79b59d4) | Home / Exchange | Composition | Flow والد Home شامل ۱۱ Screen و چند Surface متفاوت است؛ Social/Content screenهای داخل آن باید از Shell مالی جدا شوند | 1 parent flow | High | `Census evidence` |
| BN-E-003 | [Coin detail](https://mobbin.com/flows/e15bb0c1-01c2-4365-827d-e42e101266ac) | Markets / Detail | Composition | Flow جزئیات Coin شامل ۷ Screen و شاخه‌های Price، Info، Trading data و Actionهای ثابت است | 1 flow + children | High | `Census evidence` |
| BN-E-004 | [Overview (Assets)](https://mobbin.com/flows/6198373a-3786-4fc1-97a5-3729972017d6) | Assets / Overview | Composition | Flow دارایی ۴ Screen دارد و Summary، Chart، Action group و Holdings list را در Stateهای مختلف نشان می‌دهد | 1 flow + related flows | High | `Census evidence` |
| BN-E-005 | [Assets report](https://mobbin.com/flows/8f84b566-e945-4c9a-98b7-294fdca74c4c) | Assets / Report | Composition | Flow گزارش دارایی ۹ Screen دارد و Summary، بازه زمانی، Allocation، تحلیل و Share را در یک صفحه بلند ترکیب می‌کند | 1 full flow | High | `Census evidence` |
| BN-E-006 | [Converting a coin](https://mobbin.com/flows/b1659013-18d9-4af4-8b73-4430f425fd02) | Trade / Convert | Behavior | Flow تبدیل ۶ Screen، Entry دو دارایی، Preview و Conversion detail/result را پوشش می‌دهد | 1 full flow | High | `Census evidence` |
| BN-E-007 | [Buying with USD](https://mobbin.com/flows/9d499db5-05ac-4c6d-a668-094099eafdc5) | Home / Fiat buy | Behavior | Flow خرید با پول ۹ Screen و Amount-first entry، Payment method، Verification و بازگشت به Home دارد | 1 full flow | High | `Census evidence` |
| BN-E-008 | [Onboarding](https://mobbin.com/flows/c801a715-f530-4db5-a5e7-c214a129fd7d) | Onboarding / KYC | Behavior | Flow ۱۴ Screen ثبت‌نام، OTP، رمز، شروع KYC، Under review و محدودیت دسترسی را کنار هم نشان می‌دهد | 1 full flow | High | `Census evidence` |
| BN-E-009 | [Logging in](https://mobbin.com/flows/fd12b82b-5719-4580-b81f-4adc6755c427) | Login / Security | Behavior | Flow ورود ۱۰ Screen و Password، چند روش Verification، Recovery state و ورود به Home را پوشش می‌دهد | 1 full flow | High | `Census evidence` |
| BN-E-010 | [Settings](https://mobbin.com/flows/49c585a7-877f-420e-a7b5-432da8bb06f6) | Settings / Exchange | Composition | Flow تنظیمات سه Screen و ساختار List-based برای Appearance، Payment، Support و Privacy دارد | 1 parent flow + children | High | `Census evidence` |
| BN-E-011 | [Batch C evidence ledger](binance-trade-batch-c-evidence-ledger.md) | Trade / Dedupe | State | هشت Flow معامله ۴۱ Screen خام دارند؛ `ee71...` در سه Flow و `c3dd...` در دو Flow تکرار شده و Count منحصربه‌فرد ۳۸ است | 8 flows | High | `G2 evidence` |
| BN-E-012 | [Spot (Trade)](https://mobbin.com/flows/bc38bca9-9437-4e55-91a1-03211d12f0fe) | Trade / Professional workspace | Composition | Order book، Form، Buy/Sell، Order state و Tabهای Open Orders/Holdings/Grid در Workspace زمینه‌حفظ‌کن کنار هم قرار می‌گیرند | 4 screens + related flows | High | `G2 evidence` |
| BN-E-013 | [Buying a spot](https://mobbin.com/flows/24426295-aae8-4bbd-8fd4-0e7bfd0cc0de) | Trade / Advanced order | Behavior | TP/SL از کنترل inline به Sheet جزئیات، Summary داخل Form، Toast ثبت و Order row قابل پیگیری پیش می‌رود | 1 full 8-screen flow | High | `G2 evidence` |
| BN-E-014 | [Chart display](https://mobbin.com/flows/ce6face1-9a50-413e-b0be-c9184aadaa99) و [Spot preferences](https://mobbin.com/flows/b47272cd-714e-4c13-9260-c3e417be6a5d) | Trade / Chart and layout | Component | Sheet انتخاب Chart و صفحه Preferences از Tile preview، Border، Check و Switch برای کنترل نمایش و تراکم استفاده می‌کنند | 2 flows / 10 raw screens | High | `G2 evidence` |
| BN-E-015 | [Converting a coin](https://mobbin.com/flows/b1659013-18d9-4af4-8b73-4430f425fd02) | Trade / Convert | Behavior | مسیر From/To از انتخاب دارایی و Amount به Quote، Review زمان‌دار و Receipt شامل Rate/Fee/Date می‌رسد | 1 full 6-screen flow + 2-screen parent | High | `G2 evidence` |
| BN-E-016 | [Buying with USD](https://mobbin.com/flows/9d499db5-05ac-4c6d-a668-094099eafdc5) | Trade / Retail fiat buy | Behavior | مسیر Amount-first با Keypad، Payment method، Fee/Total review، Processing، Success و Home-after پوشش داده شده است | 1 full 9-screen flow | High | `G2 evidence` |
| BN-E-017 | [Batch C evidence ledger](binance-trade-batch-c-evidence-ledger.md#observationهای-بینفلو) | Trade / Surface hierarchy | Foundation | سطح پایه سفید، Surface خاکستری برای Field/Grouping و Border برجسته برای Choice/Card واقعی در چند Context تکرار می‌شوند | 8 flows / 38 unique screens | High | `G2 evidence` |
| BN-E-018 | [Batch C evidence ledger](binance-trade-batch-c-evidence-ledger.md#ریسکهای-دسترسپذیری-و-pwartl) | Trade / Accessibility | Component | تراکم Spot، کنترل‌های کوچک، سبز/قرمز و Chart بدون معادل متنی مستقیم برای PWA فارسی/RTL ریسک انتقال دارند | 4 trade contexts | Medium | `G2 risk evidence` |

## معیار پایان Census

- [x] همه ۱۷ خانواده برچسب دامنه دارند.
- [x] Shortlist اولیه ۳۲ Flow مرتبط ساخته شده است.
- [x] Flowهای واضحاً خارج از Scope حذف و Parent/Child overlap ثبت شده است.
- [x] Batch و مسیر Review هر Flow مشخص است.
- [x] Dedupe و استخراج Evidence لایه‌ای Batch C در سطح Screen ID — ۴۱ Raw / ۳۸ Unique.
- [x] Proof هشت Pattern Batch C در G3 — هشت Corroborated / صفر Mapped.
- [ ] Dedupe و استخراج Evidence Batchهای A/B/D؛ G2 کل Audit هنوز باز است.
