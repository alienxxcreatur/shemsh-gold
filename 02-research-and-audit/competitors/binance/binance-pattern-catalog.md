# کاتالوگ Patternهای بایننس

وضعیت: `G3 cross-batch complete / 29 corroborated patterns / G4 Trade + Global candidate mapping complete`

## هدف

این سند Observationهای اثبات‌شده را به Ruleهای قابل‌آزمون تبدیل می‌کند. نام این سند به معنی رسمی‌بودن یا کامل‌بودن Design System بایننس نیست؛ فقط Patternهای مشاهده‌شده در Snapshot Mobbin را ثبت می‌کند.

Proof کامل Batch C در [`binance-trade-pattern-proof-g3.md`](binance-trade-pattern-proof-g3.md) و Proof سراسری A/B/D در [`binance-global-ui-pattern-proof-g3.md`](binance-global-ui-pattern-proof-g3.md) ثبت شده است. `Corroborated` یعنی Pattern بایننس از آستانه شواهد عبور کرده؛ هنوز به معنی `Adopt` برای شمش نیست.

## لایه‌های کاتالوگ

| Layer | نمونه موضوع |
|---|---|
| Foundation | Surface، Neutral، Spacing، Radius، Border، Divider، Elevation، Typography، Density |
| Component | Button، Input، Tab، List row، Card، Sheet، Dialog، Alert، Toast، Keypad، Navigation |
| Composition | App Shell، Home، Portfolio، Market، Trade، Asset detail، Receipt |
| Behavior | Asset switch، Buy/Sell، Amount entry، Unit change، Confirmation، Privacy |
| State | Empty، Loading، Disabled، Error، Success، Pending، Offline، Stale data |

## قالب Pattern

هر Pattern باید این اجزا را داشته باشد:

- `Pattern ID`: `BN-P-###`
- نام کوتاه و خنثی
- Problem/Context
- Evidence IDها و لینک‌ها
- Observationهای مستقیم
- Rule استنباط‌شده
- Variants و استثناها
- Counter-example
- Accessibility/Touch/Keyboard note
- iOS → PWA/RTL adaptation note
- Confidence
- وضعیت: `Candidate / Corroborated / Mapped / Rejected`

## ماتریس کاتالوگ

| ID | Layer | Pattern | Evidence | Rule candidate | Exception | Confidence | Status |
|---|---|---|---|---|---|---|---|
| BN-P-001 | Composition | Context-preserving trade workspace | BN-E-012، BN-E-013، BN-E-014 | در معامله حرفه‌ای، Context قیمت/سفارش هنگام بازکردن کنترل پیشرفته و Chart حفظ شود | Amount-first retail flow | High | `Corroborated` |
| BN-P-002 | Behavior | Amount-first retail transaction | BN-E-015، BN-E-016 | مسیر روزمره با Amount/Unit شروع و به Quote/Review/Result خطی برسد | Spot حرفه‌ای | High | `Corroborated` |
| BN-P-003 | Behavior | Progressive advanced controls | BN-E-013، BN-E-014، BN-E-016؛ Cross-batch G2 ledger | Detail کوتاه Inline، تصمیم Contextual در Sheet و Preference/Form پایدار در Full page آشکار شود؛ Summary انتخاب به Context اصلی برگردد | Preferences بلند Full page | High | `Corroborated / scope extended` |
| BN-P-004 | Composition | Explicit source/destination pair | BN-E-015، BN-E-016 | مبدأ، مقصد، واحد و امکان Swap/Change پیش از Preview واضح بمانند | Spot با جفت‌ارز ثابت | High | `Corroborated` |
| BN-P-005 | State | State-led CTA and feedback | BN-E-013، BN-E-015، BN-E-016 | Empty/Ready/Review/Processing/Success یا Open-order باید CTA و Feedback متناسب داشته باشند | Error/Offline هنوز Evidence gap است | High برای Scope دیده‌شده | `Corroborated / scoped` |
| BN-P-006 | Composition | Tiered chart complexity | BN-E-012، BN-E-014، BN-E-015، BN-E-016 | سطح Chart از No chart تا Summary و Full analysis متناسب با Task تغییر کند | نیاز حرفه‌ای و روزمره یکسان نیست | Medium | `Corroborated` |
| BN-P-007 | Foundation | White base with selective grouping | BN-E-017؛ Cross-batch G2 ledger | سطح سفید Baseline و نردبان Grouping برابر Whitespace → Label → Divider/Surface → Border/Card → Overlay elevation باشد | Report خاکستری، Spot Grid و Home/content cardها | High | `Corroborated / scope extended` |
| BN-P-008 | Behavior | Rate, fee and risk near commitment | BN-E-015، BN-E-016، BN-E-018 | Risk قبل Commitment، Rate/Fee/Total در Review و جزئیات در Receipt دیده شوند | Spot order باز و قابل لغو | High | `Corroborated` |
| BN-P-009 | Composition | Four interaction containers | Cross-batch G2 ledger | Inline، Sheet، Full page و Center modal براساس استقلال Task، حفظ Context، عمق Navigation و هزینه تصمیم انتخاب شوند | طول محتوا به‌تنهایی تعیین‌کننده نیست | High | `Corroborated` |
| BN-P-010 | Composition | Sheet for context, page for ownership | Add Funds، History، Deposit، Settings، KYC، Asset detail | تصمیم مکمل صفحه مادر در Sheet؛ Object/Form/Result مستقل در Page | Login/Signup در High sheet Context-preserving | High | `Corroborated` |
| BN-P-011 | Component | Adaptive-height sheet | Add Funds، Assets history، Network، Address، Auth | Sheet از کوتاه تا Full-height با محتوا رشد کند و Parent context را حفظ کند | Asset search مستقل Full page است | High | `Corroborated` |
| BN-P-012 | Component | Single-decision interrupt modal | Password restriction، Account blocked، Login expired | Modal فقط پیام کوتاه و یک تصمیم/تأیید پرریسک با حداکثر دو Action را نگه دارد | Requirement list و Form به Sheet/Page می‌روند | High | `Corroborated` |
| BN-P-013 | Foundation | Selective card taxonomy | KYC، Security، Payment، Home، Report | Card فقط برای Choice، Object یا Module مستقل؛ Rowهای تکراری Flat بمانند | Analytical report عمداً Card-heavy است | High | `Corroborated` |
| BN-P-014 | Foundation | Three-level title hierarchy | Root tabs، Settings، Asset detail، Auth/KYC | Root با Anchor/Tab، Utility/detail با App-bar title و Task با Large title + subtitle معرفی شود | Processing می‌تواند Title را حذف کند | High | `Corroborated` |
| BN-P-015 | Component | Tabs define peer scope | Markets، Assets، Coin detail | Tab فقط Viewهای هم‌سطح را عوض کند؛ Active state با Indicator ظریف و Content پیوسته باشد | Filter و Action موقت Tab نیستند | High | `Corroborated` |
| BN-P-016 | Component | Flat aligned data row | Markets، Holdings، History، Settings، Privacy | Rowهای هم‌نوع با Grid، alignment، rhythm و secondary text سازمان یابند، نه Card wrapper | Choice/Object مستقل Border می‌گیرد | High | `Corroborated` |
| BN-P-017 | Foundation | Semantic color restraint | Home، Markets، Security، Payment، Trade | زرد برای Brand/CTA/Warning، سبز/قرمز برای Status/Delta و Gray برای Field/Secondary؛ رنگ ساختار نسازد | Chart و Illustration Palette گسترده‌تر دارند | High | `Corroborated` |
| BN-P-018 | Behavior | One primary action per commitment | KYC، Password، Payment، Empty states | هر سطح Commitment یک Primary action روشن داشته باشد | Buy/Sell و Confirm/Cancel دوشاخه واقعی‌اند | High | `Corroborated` |
| BN-P-019 | Composition | Task-dependent bottom action | Form، Asset detail، Empty state، Root، Report | محل و پایداری Action از نوع Task پیروی کند: CTA، Action bar، Bottom nav یا Module action | یک Bottom bar سراسری برای همه Contextها وجود ندارد | High | `Corroborated` |
| BN-P-020 | Component | Filled field, bordered choice | KYC، Password، Payment، Network | Field ورود داده Filled-gray و Choice/Object سفید با Border/Check باشد | Setting row ساده هیچ‌کدام نیست | High | `Corroborated` |
| BN-P-021 | Component | Helper near control, instruction in panel | Password، KYC، Deposit، Bank form | Helper کوتاه نزدیک کنترل و Instruction/Operational risk چندخطی در Panel مستقل باشد | Warning کوتاه می‌تواند Alert باشد | High | `Corroborated` |
| BN-P-022 | State | Soft warning, localized error | Security، Password، Deposit، PNL/Market | Warning با Surface زرد کم‌رنگ؛ Error/Negative به پیام، عدد یا Icon مربوط محدود شود | Buy/Sell trading direction رنگ قوی‌تری دارد | High | `Corroborated` |
| BN-P-023 | State | Minimal processing state | Liveness، Passkey، Face verification | در عملیات غیرتعاملی UI به Indicator و پیام لازم کاهش یابد | Timeout/Cancel در همه Flowها دیده نشده | Medium | `Corroborated / scoped` |
| BN-P-024 | State | Outcome result versus evidence receipt | Onboarding، Unlock، Trade/Convert | Result برای فهم Outcome؛ Receipt برای مدرک و پیگیری پایدار باشد | Success همیشه Receipt نیست | High | `Corroborated` |
| BN-P-025 | Foundation | One numeric anchor per view | Home، Assets، Coin detail، Market list | یک عدد Anchor و ارزش/واحد/PNL ثانویه با Scale/Position پایین‌تر نمایش داده شوند | Report چند Anchor محلی دارد | High | `Corroborated` |
| BN-P-026 | Behavior | Layout-stable privacy masking | Hide value، Hide PNL، balance controls | Mask کردن مقدار Geometry را تغییر ندهد و Control نزدیک Scope همان مقدار باشد | Screen-reader behavior اثبات نشده | Medium | `Corroborated / scoped` |
| BN-P-027 | Behavior | Context-preserving navigation | Root nav، Detail، Sheet، Settings scroll | هر تغییر سطح، Parent/destination/back context را قابل‌فهم نگه دارد | External handoff پوشش کامل ندارد | High | `Corroborated` |
| BN-P-028 | Composition | Analytical report exception | Assets report + daily Assets counter-example | Gray canvas و White cards فقط برای Moduleهای تحلیلی با منطق/کنترل مستقل استفاده شوند | Home/List ساده نباید از آن تقلید کند | High | `Corroborated / scoped` |
| BN-P-029 | Composition | Content/social boundary | Home campaign، Square، Discover | Feed/Card/Floating create فقط در Context محتوایی/اجتماعی Pattern پایه باشد | Form/Asset/Settings خارج از Scope | High | `Corroborated / scoped` |

## سرنخ‌های Census — وضعیت تاریخی

این Leadها ورودی اولیه ممیزی بودند. پس از G3 Cross-batch، منطق معتبر آن‌ها در `BN-P-003/007/009..029` ادغام شده است؛ جدول برای Traceability حفظ می‌شود و هیچ‌کدام تا G4 Mapping Rule شمش نیستند.

## Gate Cross-batch

- G3: `Complete — 29 Corroborated patterns`.
- G4: `Complete as candidate mapping`؛ معامله در [`binance-to-shemsh-mapping.md`](binance-to-shemsh-mapping.md) و Scope سراسری در [`binance-global-to-shemsh-mapping-g4.md`](binance-global-to-shemsh-mapping-g4.md) ثبت شده‌اند؛ Owner review هنوز باز است.
- Evidence gapهای محدودکننده: Tokenهای دقیق، Dynamic Type/VoiceOver/Keyboard/Motion، Global cross-batch unique count و رفتار واقعی PWA/RTL.
- قدم بعدی: Pilot غیرمخرب Home/Assets طبق G5 v0.1 و سپس ثبت Findingها؛ بدون Migration یا Promote/Demote خودکار — D-177.

| Lead | مشاهده اولیه | Flowهای شروع بررسی | Counter-example موردنیاز |
|---|---|---|---|
| L-01 — White base / selective grouping | سطح پایه عمدتاً سفید است؛ Card و Surface خاکستری برای Grouping انتخابی استفاده می‌شوند | Home، Assets، Settings | Trade متراکم و Full-screen auth |
| L-02 — Border restraint | بسیاری از Listها بدون Card و با فاصله/Divider گروه‌بندی می‌شوند؛ Border در Form و Choice برجسته‌تر است | Settings، Privacy، KYC | Home card grid و Sheetها |
| L-03 — Numeric hierarchy | عدد اصلی و CTAها وزن بصری بالا دارند و Labelهای زمینه‌ای کم‌رنگ‌ترند | Home، Assets، Buying with USD، Convert | Data-dense Trade و Report |
| L-04 — Contextual navigation | Bottom navigation در سطوح اصلی پایدار است و در Auth/Review/Detailهای حساس حذف یا جایگزین می‌شود | Home، Markets، Assets، Trade، Login | Nested detail و Modal states |
| L-05 — Amount-first vs pro trade | خرید ساده با عدد بزرگ و Keypad داخلی شروع می‌شود؛ Spot از Composition متراکم Order book/Form استفاده می‌کند | Buying with USD، Convert، Spot | فروش ساده شمش و عرض ۳۲۰ RTL |
| L-06 — Sheets for secondary decisions | انتخاب History، TP/SL و جزئیات ثانویه در Sheet انجام می‌شود | Assets history، Buying a spot | انتخاب‌هایی که Full page لازم دارند |
| L-07 — Risk close to action | Warning، Verification و Pending نزدیک اقدام حساس یا نتیجه نمایش داده می‌شوند | Transfer، KYC، Login، Convert | پیام‌های کم‌ریسک و Informational |
| L-08 — State-led CTA | Disabled/ready/loading/result با تغییر واضح CTA و Context همراه است | Onboarding، Convert، Buying with USD، KYC | Error و Offline کامل |

## معیار Confidence

- `High`: سه Context مستقل یا یک Flow کامل، بدون تعارض مهم.
- `Medium`: دو Context یا یک Pattern قوی با Counter-example ثبت‌شده.
- `Low`: یک Screen یا Highlight؛ فقط Lead و غیرقابل‌استفاده برای تصمیم.

## معیارهای UX اجباری هنگام استخراج

- Contrast و عدم اتکا به رنگ تنها.
- Touch target حداقل ۴۴×۴۴ برای تطبیق شمش.
- Feedback برای Loading/Pressed/Disabled.
- Navigation و Back قابل پیش‌بینی.
- Focus و Keyboard برای PWA/Desktop.
- Safe Area و Keyboard viewport موبایل.
- Label واضح برای Input و Error نزدیک Field.
- Chart با Label/Legend و معادل متنی لازم.
- Motion معنادار و Reduced Motion.

## چیزهایی که Pattern شمش نمی‌شوند

- رنگ برند زرد فقط به‌دلیل تکرار.
- نگاشت Buy=Success یا Sell=Error.
- Taxonomy کریپتو، چند کیف داخلی و اصطلاحات Coin/Token.
- Feature promotion، Campaign و Social layout بدون نیاز محصولی شمش.
- Geometry مخصوص iOS که در RTL/PWA/عرض ۳۲۰ شکست می‌خورد.
