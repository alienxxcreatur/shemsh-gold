# دفتر شواهد Batch C — معامله بایننس

وضعیت: `G2 Batch C complete / 41 raw → 38 unique / G3 proof completed`
تاریخ Snapshot: ۲۵ مرداد ۱۴۰۵ / 16 Aug 2026
دامنه: `BN-F-017..024`

## هدف و مرز

این سند Dedupe و مشاهده مستقیم هشت Flow معاملاتی Binance iOS در Mobbin را ثبت می‌کند. این خروجی «قاعده شمش» یا «Design System رسمی بایننس» نیست؛ ورودی قابل‌ردیابی برای اثبات Pattern در G3 است.

- **Observed fact:** مجموع شمارش خام هشت Flow برابر ۴۱ Screen است.
- **Observed fact:** دو Screen ID میان Flowها تکرار شده‌اند و پس از حذف سه تکرار، ۳۸ Screen منحصربه‌فرد باقی مانده است.
- **Observed fact:** ۳۷ Screen منحصربه‌فرد از Asset خود صفحه Flow با تصویر کامل بررسی شد. Screen هفتم `Changing spot preferences` از Preview واقعی Mobbin بررسی شد، زیرا Asset کامل آن در Session بارگذاری نشد.
- **Design assumption:** برای خرید و فروش روزمره شمش، Counter-example ساده‌ی `Convert / Buying with USD` از Composition حرفه‌ای Spot مرتبط‌تر است؛ این فرض در G4 باید با وایرفریم شمش آزمون شود.
- **Risk:** Snapshot مربوط به iOS و محصول کریپتویی است؛ Geometry، رنگ‌های Buy/Sell و تراکم آن مستقیماً به PWA فارسی/RTL منتقل نمی‌شوند.

## پوشش Flowها

| Flow ID | Flow | Raw | Unique contribution | سطح بررسی | نتیجه اصلی |
|---|---|---:|---:|---|---|
| BN-F-017 | [Spot (Trade)](https://mobbin.com/flows/bc38bca9-9437-4e55-91a1-03211d12f0fe) | 4 | 4 | Asset مستقیم | Workspace حرفه‌ای، Order book/Form و Stateهای Open orders/Holdings/Grid |
| BN-F-018 | [Buying a spot](https://mobbin.com/flows/24426295-aae8-4bbd-8fd4-0e7bfd0cc0de) | 8 | 7 | Asset مستقیم | ورود مقدار، Progressive disclosure برای TP/SL، Toast و Order row |
| BN-F-019 | [Showing a chart](https://mobbin.com/flows/346ea7fa-f8e6-4e2f-a221-2ee8ed5819ff) | 2 | 1 | Asset مستقیم | بازشدن Chart بدون ترک Context معامله |
| BN-F-020 | [Changing order & chart display](https://mobbin.com/flows/ce6face1-9a50-413e-b0be-c9184aadaa99) | 3 | 3 | Asset مستقیم | Sheet انتخاب نمایش و نتیجه در Chart کامل |
| BN-F-021 | [Changing spot preferences](https://mobbin.com/flows/b47272cd-714e-4c13-9260-c3e417be6a5d) | 7 | 6 | 5 Asset + 1 Preview | Preferences، Switch و Layout choice تصویری |
| BN-F-022 | [Convert](https://mobbin.com/flows/99674169-de0b-4eee-98cf-9dd247432d90) | 2 | 2 | Asset مستقیم | Entry ساده Instant و نسخه Recurring |
| BN-F-023 | [Converting a coin](https://mobbin.com/flows/b1659013-18d9-4af4-8b73-4430f425fd02) | 6 | 6 | Asset مستقیم | انتخاب دارایی، Amount، Preview، Confirm زمان‌دار و Receipt |
| BN-F-024 | [Buying with USD](https://mobbin.com/flows/9d499db5-05ac-4c6d-a668-094099eafdc5) | 9 | 9 | Asset مستقیم | Amount-first، Keypad، Fee review، Processing و Success |
| **Total** | — | **41** | **38** | **37 Asset + 1 Preview** | دو مدل معامله ساده و حرفه‌ای از هم قابل تفکیک‌اند |

## Dedupe

| Screen ID | حضور در Flowها | مرجع اصلی | تکرار حذف‌شده |
|---|---|---|---:|
| `ee71bd55-fa2d-4069-9568-b3a281f7deb7` | Spot (Trade)، Buying a spot، Showing a chart | BN-F-017 / Screen 1 | 2 |
| `c3dd256b-7064-4402-9983-bf5e778893cf` | Showing a chart، Changing spot preferences | BN-F-019 / Screen 2 | 1 |
| **Total** | — | — | **3** |

## Ledger اسکرین‌های منحصربه‌فرد

### BN-F-017 — Spot (Trade)

| # | Screen ID | Layer / State | Observation مستقیم | Evidence resolution |
|---:|---|---|---|---|
| 1 | `ee71bd55-fa2d-4069-9568-b3a281f7deb7` | Composition / Empty-funds | Order book در چپ و Form خرید در راست هم‌زمان دیده می‌شوند؛ Buy/Sell، نوع سفارش، Price/Amount/Total، TP/SL، موجودی و CTA در یک View متراکم‌اند | Asset مستقیم |
| 2 | `986d57c5-e776-4d32-ae55-35705f216f19` | State / Empty orders | Header جفت‌ارز و Tabهای Open Orders/Holdings/Spot Grid حفظ شده‌اند؛ Empty state عنوان، توضیح و CTA ثانویه دارد | Asset مستقیم |
| 3 | `104727ef-a615-4230-85b9-d188db2dda71` | Composition / Holdings | Holdingها بدون Cardهای سنگین و با Divider نمایش داده می‌شوند؛ PnL، Balance، Avg. Cost و Last Price سلسله‌مراتب عددی مشخص دارند | Asset مستقیم |
| 4 | `56e133dd-3647-4288-a2ad-6cd4848074e6` | Composition / Suggestions | پیشنهادهای Spot Grid در Cardهای محدود با PNL، ROI و CTA `Copy` آمده‌اند؛ سطح پایه همچنان سفید است | Asset مستقیم |

### BN-F-018 — Buying a spot

Screen 1 همان `ee71...` است و دوباره شمرده نشده است.

| # | Screen ID | Layer / State | Observation مستقیم | Evidence resolution |
|---:|---|---|---|---|
| 2 | `c690f0c6-e30b-46a7-9578-183a990c19f0` | Behavior / Ready | Price و Amount مقدار گرفته‌اند و CTA از حالت غیرفعال به فعال تغییر کرده؛ Context Order book همچنان دیده می‌شود | Asset مستقیم |
| 3 | `a677df80-f766-4336-aeda-0bde0416571e` | Behavior / Advanced-enabled | فعال‌شدن TP/SL کنترل‌های پیشرفته را داخل همان Form آشکار می‌کند و Layout اصلی حفظ می‌شود | Asset مستقیم |
| 4 | `35dd8bbe-7c99-4450-953e-ed9cb29f21b0` | Component / Sheet-empty | جزئیات Take Profit و Stop Loss در Bottom sheet جدا با Fieldهای خالی و CTA Confirm قرار می‌گیرند | Asset مستقیم |
| 5 | `6b85aeee-df7e-42f4-aaa6-4da1a1890d1a` | Component / Sheet-ready | مقدارها و Offset درصدی در Sheet پر شده‌اند؛ CTA Confirm آماده و Context پشت Sheet کم‌رنگ شده است | Asset مستقیم |
| 6 | `bdd1f108-87e5-433c-89e9-dd95ff7ea8d0` | Behavior / Advanced-summary | پس از تأیید Sheet، خلاصه TP/SL در Form اصلی نمایش داده می‌شود و کاربر برای سفارش از Context خارج نمی‌شود | Asset مستقیم |
| 7 | `550a4de9-3bf8-4251-a6cf-39659b6485a3` | State / Submitted | ثبت سفارش با Toast گذرا روی همان Workspace تأیید می‌شود؛ صفحه نتیجه مستقل در این Flow استفاده نشده است | Asset مستقیم |
| 8 | `404a678e-decd-42c0-9812-a14f3126e1cc` | State / Open order | سفارش باز در List با مقدار، Price، Progress صفر، Cancel و امکان ویرایش قیمت قابل پیگیری است | Asset مستقیم |

### BN-F-019 — Showing a chart

Screen 1 همان `ee71...` است و دوباره شمرده نشده است.

| # | Screen ID | Layer / State | Observation مستقیم | Evidence resolution |
|---:|---|---|---|---|
| 2 | `c3dd256b-7064-4402-9983-bf5e778893cf` | Composition / Chart expanded | Form و Order book در نیمه بالا حفظ می‌شوند و Candlestick chart با Time range و Indicatorها در نیمه پایین باز می‌شود | Asset مستقیم |

### BN-F-020 — Changing order & chart display

| # | Screen ID | Layer / State | Observation مستقیم | Evidence resolution |
|---:|---|---|---|---|
| 1 | `1d326236-4da1-4c0b-960d-f33ec4dbeefe` | Component / Choice sheet | Sheet ابزار Chart با Tileهای Tutorial/Indicators/Drawing/Style/Date/More و گزینه‌های Order/Chart display دیده می‌شود؛ انتخاب فعال با Border و Check مشخص است | Asset مستقیم |
| 2 | `3d6f78a0-222a-4abd-a50e-e3dacd5c4893` | Component / Multi-selected | همان Sheet چند انتخاب فعال را با Border مشکی و Check هم‌زمان نمایش می‌دهد؛ رنگ تنها نشانه انتخاب نیست | Asset مستقیم |
| 3 | `9b97d39f-55a2-44e6-8082-bfc02fcee9af` | Composition / Chart result | Chart کامل Bid/Ask، درصد، Countdown، Volume و Indicatorها را نشان می‌دهد؛ Buy/Sell بزرگ پایین صفحه ثابت مانده‌اند | Asset مستقیم |

### BN-F-021 — Changing spot preferences

Screen 1 همان `c3dd...` است و دوباره شمرده نشده است.

| # | Screen ID | Layer / State | Observation مستقیم | Evidence resolution |
|---:|---|---|---|---|
| 2 | `b2cccef3-bc9c-4320-b7c0-e495dd4c3627` | Component / Feature sheet | منوی ثانویه در Bottom sheet، Featureها را به Grid آیکن‌دار و Tabهای Features/Learn/Announcements تقسیم می‌کند | Asset مستقیم |
| 3 | `d59347ea-0b47-4949-a362-5aaab1069c89` | Component / Settings | Preferences با Section heading، توضیح، Info icon، Divider و Switchهای مستقل برای Notification و Confirmation ساخته شده است | Asset مستقیم |
| 4 | `907726a4-d642-400b-9c6a-57710ed7323d` | Component / Layout choice | انتخاب محل K-line و Place order با Preview تصویری سه‌گزینه‌ای انجام می‌شود؛ انتخاب فعال Border برجسته دارد | Asset مستقیم |
| 5 | `069ec53d-4e8c-4158-9d7c-5e130886096a` | Component / Layout variant | Variant دیگری از همان Choiceها انتخاب K-line بالا و Order entry راست را نمایش می‌دهد | Asset مستقیم؛ رزولوشن ۳۶۰ |
| 6 | `ff72b01e-e5cd-426f-850b-2f0806cbf42b` | Component / Layout variant | Choiceها K-line بالا و Place order افقی را به‌عنوان ترکیب فعال نشان می‌دهند | Asset مستقیم |
| 7 | `da92cdb3-fc65-409d-bd4b-8494fd3beca7` | Composition / Applied layout | نتیجه Preference، چینش Workspace معامله را تغییر می‌دهد و محتوا/کنترل‌ها را حفظ می‌کند | Preview واقعی Mobbin |

### BN-F-022 — Convert

| # | Screen ID | Layer / State | Observation مستقیم | Evidence resolution |
|---:|---|---|---|---|
| 1 | `598fde4e-11e5-42dd-ae40-7e0d3367f7da` | Composition / Instant-empty | Chart خلاصه، نرخ، بازه زمانی، From/To، Available/Max و CTA Preview در یک مسیر خطی دیده می‌شوند؛ CTA تا ورود Amount غیرفعال است | Asset مستقیم |
| 2 | `39a082af-4e3f-4105-a520-98d43e175e08` | Composition / Recurring-empty | Recurring همان مدل From/To را با Frequency، مقصد دارایی و Advanced options ادامه می‌دهد؛ CTA `Create a plan` حالت غیرفعال دارد | Asset مستقیم |

### BN-F-023 — Converting a coin

| # | Screen ID | Layer / State | Observation مستقیم | Evidence resolution |
|---:|---|---|---|---|
| 1 | `99159604-b5d6-476c-b356-7e79a033ea4b` | State / Risk notice | هشدار ریسک، نوسان، Slippage و Fee زیر Form و پیش از CTA قرار دارد و از سطح هشدار کم‌رنگ مجزا استفاده می‌کند | Asset مستقیم |
| 2 | `3030a3c7-893f-445a-b2c1-cf8141fa37fa` | Component / Asset picker | انتخاب دارایی مقصد در Bottom sheet با Search و List آیکن‌دار انجام می‌شود | Asset مستقیم |
| 3 | `0e53c46f-4a0b-4201-86a0-12e463f0404d` | State / Empty supported pair | پس از انتخاب BTC، حداقل Amount و خروجی تخمینی خاکستری‌اند و Preview هنوز غیرفعال است | Asset مستقیم |
| 4 | `a858e322-15a6-4956-a476-f7aa574d8db2` | State / Quote ready | با ورود Amount، مقدار مقصد و Rate نمایش داده و CTA Preview فعال می‌شود | Asset مستقیم |
| 5 | `38bc026c-202d-41ac-9797-db0fb6df5de0` | Component / Timed review | Confirm order در Bottom sheet، From/To، Type، Fee، Rate و زمان اعتبار ۹ ثانیه‌ای را پیش از اقدام نهایی نشان می‌دهد | Asset مستقیم |
| 6 | `f137c391-70ad-4860-9946-5d17a687a25c` | State / Receipt | Conversion Details مقدار مقصد، Completed، Type، حساب پرداخت، Rate، Fee و تاریخ معامله را در یک Receipt پایدار نشان می‌دهد | Asset مستقیم |

### BN-F-024 — Buying with USD

| # | Screen ID | Layer / State | Observation مستقیم | Evidence resolution |
|---:|---|---|---|---|
| 1 | `a0683b76-647a-4db3-ba1c-06a5ba899948` | Composition / Home-before | Home موجودی صفر و CTA `Add Funds` را قبل از خرید نشان می‌دهد | Asset مستقیم |
| 2 | `22656c35-619c-4530-b422-dccf9bc1bf5b` | Component / Funding sheet | Add Funds در Bottom sheet دو گزینه اصلی `Buy with USD` و `On-Chain Deposit` را با توضیح کوتاه نشان می‌دهد | Asset مستقیم |
| 3 | `258e5b01-b33d-4997-8c5b-2eed3ecf1578` | Component / Expanded choices | `View More` همان Sheet را با Receive via Binance Pay و Buy with USD (P2P) گسترش می‌دهد | Asset مستقیم |
| 4 | `b15ab66c-72c7-4520-8e7b-e0a384ef4012` | Behavior / Amount-empty | Instant Order با Buy/Sell، عدد بزرگ، واحد، دارایی مقصد، روش پرداخت، Presetهای Min/$50/Max و Keypad داخلی شروع می‌شود | Asset مستقیم |
| 5 | `1ee320bc-ceba-4849-af4a-3adfac967e6d` | State / Amount-ready | Amount واردشده و معادل دارایی هم‌زمان نمایش داده می‌شوند؛ نبود Card، CTA را به `Add New Card` تغییر می‌دهد | Asset مستقیم |
| 6 | `f8916d73-e26f-4ec9-9ad7-1ea61802ca1b` | State / Review | Confirm Order مقدار دریافتی، Rate، Payment method، Fee، Total Spend، تأیید Terms و CTA نهایی را یکجا نشان می‌دهد | Asset مستقیم |
| 7 | `702a0300-21ac-4f70-bb48-12e92ef4acd5` | State / Processing | Processing در صفحه مستقل، زمان تقریبی حداکثر ۳۰ ثانیه را کنار وضعیت انتظار بیان می‌کند | Asset مستقیم |
| 8 | `2590a9bf-1c34-4451-ab36-7a213529088c` | State / Success | صفحه Success مقدار نهایی، مقصد Spot account، CTA `Check Assets` و پیشنهادهای ثانویه را نشان می‌دهد | Asset مستقیم |
| 9 | `ff356e59-29b7-46c6-8a47-0c7ffa062688` | Composition / Home-after | بازگشت به Home با افزایش Est. Total Value، تغییر محتوای Card و حفظ Shell اصلی انجام می‌شود | Asset مستقیم |

## Observationهای بین‌فلو

### ۱. دو مدل معامله، نه یک Template واحد

- **Observed fact:** Spot یک Workspace حرفه‌ای با داده هم‌زمان و کنترل‌های کوچک است.
- **Observed fact:** Convert و Buying with USD مسیر خطی Amount-first با CTA روشن، Review و Result دارند.
- **Inference:** زبان بصری بایننس را نباید با کپی Composition Spot یکی دانست؛ برای شمش باید سطح ساده مسیر اصلی و سطح حرفه‌ای فقط در صورت نیاز واقعی جدا شوند.

### ۲. سطح سفید با Grouping انتخابی

- **Observed fact:** سطح پایه تقریباً همه Flowهای Batch C سفید است.
- **Observed fact:** خاکستری روشن برای Input، Tab فعال کم‌تأکید، Sheet choice و Grouping محدود استفاده می‌شود.
- **Observed fact:** Border بیشتر برای Choice/Selection و Cardهای قابل‌تفکیک دیده می‌شود، نه دور هر Section.
- **Inference:** «مینیمال بایننس» بیشتر نتیجه سلسله‌مراتب، whitespace، Divider و Surface محدود است تا حذف کامل Border یا Card.

### ۳. Progressive disclosure برای پیچیدگی

- **Observed fact:** TP/SL ابتدا Toggle/Checkbox است، سپس Detail در Sheet و بعد Summary داخل Form برمی‌گردد.
- **Observed fact:** More options در Funding sheet و Advanced options در Recurring به‌صورت collapsed شروع می‌شوند.
- **Inference:** کنترل‌های پیشرفته شمش باید پس از اقدام یا انتخاب مرتبط آشکار شوند، نه هم‌زمان با Entry پایه.

### ۴. State-led action و نتیجه قابل‌ردیابی

- **Observed fact:** CTA در حالت Empty/Ready تغییر بصری و گاهی تغییر Label دارد.
- **Observed fact:** Convert مرور زمان‌دار و Receipt پایدار دارد؛ خرید USD Processing و Success مستقل دارد؛ Spot Toast و سپس Order row دارد.
- **Inference:** نوع Feedback باید با ماهیت عملیات هماهنگ باشد: سفارش باز با State پیگیری، عملیات فوری با Review/Processing/Receipt.

## Counter-exampleها و مواردی که مستقیم منتقل نمی‌شوند

| موضوع | شاهد موافق | Counter-example | پیام برای G3/G4 |
|---|---|---|---|
| Amount-first | Buying with USD، Convert | Spot حرفه‌ای با Price/Amount/Order book | یک Composition واحد برای همه معامله‌ها نسازیم |
| صفحه نتیجه مستقل | Buying with USD و Convert | Spot فقط Toast + Open order دارد | Feedback به قطعیت/آنی‌بودن عملیات وابسته است |
| Card | Spot Grid و Home | Holding، Preferences و Receipt عمدتاً بدون Card سنگین‌اند | Card فقط وقتی مرز یک Object/Choice واقعی است |
| Bottom sheet | TP/SL، Asset picker، Funding و Confirm | Preferences طولانی Full page است | تصمیم کوتاه/زمینه‌ای Sheet؛ تنظیمات بلند Page |
| رنگ | Buy/Sell و Market data | Choiceها Border+Check و Stateها Text/Icon هم دارند | رنگ هرگز تنها حامل معنی نباشد |

## ریسک‌های دسترس‌پذیری و PWA/RTL

- **Risk:** Order book، Iconهای Header و بعضی کنترل‌های Chart در Spot احتمالاً کوچک‌تر از Touch target هدف ۴۴×۴۴ شمش‌اند.
- **Risk:** فاصله کنترل‌های متراکم Spot برای عرض ۳۲۰ و متن فارسی امن نیست.
- **Risk:** اتکای کریپتویی به سبز/قرمز برای Buy/Sell و رشد/افت نباید به `Success/Error` شمش نگاشت شود؛ Label، Icon یا ساختار مکمل لازم است.
- **Risk:** Keypad داخلی در PWA باید با Keyboard viewport، Numeric input واقعی، Paste، Screen reader و Desktop keyboard آزمون شود.
- **Risk:** Chart باید Summary متنی/Data table، Legend قابل‌فهم، Contrast مستقل از رنگ و Reduced Motion برای داده زنده داشته باشد.
- **Risk:** چیدمان دو ستون Spot در RTL باید ترتیب خواندن، محور اعداد، علامت منفی، واحد تومان/گرم و BiDi را جداگانه تست کند.

## Candidateهای آماده ورود به G3

1. Context-preserving trade workspace.
2. Amount-first retail transaction.
3. Progressive advanced controls.
4. Explicit source/destination pair.
5. State-led CTA and transaction feedback.
6. Chart separation between simple and professional modes.
7. White base with selective surface/border grouping.
8. Review of rate/fee/risk close to the irreversible action.

این Candidateها در G3 بررسی و هر هشت مورد به‌عنوان Pattern بایننس `Corroborated` شدند. Proof در [`binance-trade-pattern-proof-g3.md`](binance-trade-pattern-proof-g3.md) ثبت شده است؛ تا G4 هیچ‌کدام Rule شمش نیستند.

## Gate

- G2 برای **Batch C**: `Complete`.
- G2 کل Audit: `Complete within batches`؛ Ledger سراسری در [`binance-cross-batch-evidence-ledger-g2.md`](binance-cross-batch-evidence-ledger-g2.md) ثبت شده است.
- G3 برای Batch C: `Complete — 8 Corroborated`؛ G4 معامله نیز برای هر هشت Pattern کامل است.
- G3 سراسری: `Complete — 29 Corroborated`؛ G4 سراسری Patternهای `BN-P-009..029` باز است.
