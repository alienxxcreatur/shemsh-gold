# کاتالوگ Patternهای بایننس

وضعیت: `G3 Batch C complete / 8 corroborated / G4 Trade mapping next`

## هدف

این سند Observationهای اثبات‌شده را به Ruleهای قابل‌آزمون تبدیل می‌کند. نام این سند به معنی رسمی‌بودن یا کامل‌بودن Design System بایننس نیست؛ فقط Patternهای مشاهده‌شده در Snapshot Mobbin را ثبت می‌کند.

Proof کامل Batch C در [`binance-trade-pattern-proof-g3.md`](binance-trade-pattern-proof-g3.md) ثبت شده است. `Corroborated` یعنی Pattern بایننس از آستانه شواهد عبور کرده؛ هنوز به معنی `Adopt` برای شمش نیست.

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
| BN-P-003 | Behavior | Progressive advanced controls | BN-E-013، BN-E-014، BN-E-016 | جزئیات پیشرفته بعد از Toggle/More/Choice در Sheet یا Section آشکار شوند و Summary به Context اصلی برگردد | Preferences بلند Full page | High | `Corroborated` |
| BN-P-004 | Composition | Explicit source/destination pair | BN-E-015، BN-E-016 | مبدأ، مقصد، واحد و امکان Swap/Change پیش از Preview واضح بمانند | Spot با جفت‌ارز ثابت | High | `Corroborated` |
| BN-P-005 | State | State-led CTA and feedback | BN-E-013، BN-E-015، BN-E-016 | Empty/Ready/Review/Processing/Success یا Open-order باید CTA و Feedback متناسب داشته باشند | Error/Offline هنوز Evidence gap است | High برای Scope دیده‌شده | `Corroborated / scoped` |
| BN-P-006 | Composition | Tiered chart complexity | BN-E-012، BN-E-014، BN-E-015، BN-E-016 | سطح Chart از No chart تا Summary و Full analysis متناسب با Task تغییر کند | نیاز حرفه‌ای و روزمره یکسان نیست | Medium | `Corroborated` |
| BN-P-007 | Foundation | White base with selective grouping | BN-E-017 | سطح سفید، whitespace و Divider Baseline باشند؛ Surface/Border فقط برای Field، Choice یا Object مستقل استفاده شوند | Spot Grid و Home cardها | High | `Corroborated` |
| BN-P-008 | Behavior | Rate, fee and risk near commitment | BN-E-015، BN-E-016، BN-E-018 | Risk قبل Commitment، Rate/Fee/Total در Review و جزئیات در Receipt دیده شوند | Spot order باز و قابل لغو | High | `Corroborated` |

## سرنخ‌های Census — هنوز Pattern نیستند

این Leadها جهت بررسی Batchهای بعدی را نگه می‌دارند. Leadهای مرتبط با معامله پس از G3 به Patternهای `Corroborated` بالا ارتقا یافته‌اند، اما تا G4 Mapping هیچ‌کدام Rule شمش نیستند.

## Gate Batch C

- G3: `Complete — 8 Corroborated / 0 Mapped`.
- Evidence gapهای محدودکننده: Error/Offline/Quote-expiry recovery، فروش ساده و رفتار واقعی PWA/RTL.
- قدم بعدی: `G4 Trade mapping` در `binance-to-shemsh-mapping.md`.

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
