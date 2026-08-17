# نگاشت Patternهای بایننس به شمش

وضعیت: `G4 Trade + Global complete as candidate mapping / 31 mapping records / Owner review pending`

## اصل نگاشت

هر Pattern باید هم‌زمان با سه منبع مقایسه شود:

```text
Binance evidence
      ↕
Shemsh approved wireframe
      ↕
Current Shemsh Design System
```

اولویت تعارض:

1. قواعد بیزینس، امنیت، دسترس‌پذیری و تصمیم‌های ثبت‌شده شمش.
2. ساختار و رفتار بخش‌های تأییدشده وایرفریم شمش.
3. Design System و Tokenهای فعلی به‌عنوان Candidate قابل اصلاح.
4. Pattern رقبا به‌عنوان شاهد و پیشنهاد، نه قانون.

## وضعیت تصمیم

- `Adopt`: منطق Pattern تقریباً مستقیم مناسب شمش است.
- `Adapt`: منطق مفید است اما برای برند، RTL، PWA، تومان/گرم یا قواعد مالی تغییر می‌کند.
- `Reject`: با محصول، اعتماد، دسترس‌پذیری یا Scope شمش ناسازگار است.
- `Defer`: تصمیم محصول/خدمات یا Evidence هنوز کافی نیست.

## وضعیت منابع شمش

- `Approved source`: خانه، معامله و App Shell در بخش‌های تأییدشده.
- `Candidate`: حالت‌های فرعی، Chart، Receipt و Patternهای هنوز در Review.
- `Provisional`: خدمات و قابلیت‌های Capability-gated؛ Component عمومی قابل بررسی است اما محتوا/تعداد/حضور آن Stable نمی‌شود.

## ورودی و نتیجه نگاشت

- `BN-P-001..008` در [`binance-trade-pattern-proof-g3.md`](binance-trade-pattern-proof-g3.md) وضعیت `Corroborated` دارند.
- هر هشت Pattern در G4 با صفحه معامله وایرفریم و Candidateهای فعلی Figma مقایسه و تصمیم‌گذاری شدند.
- نتیجه فعلی `3 Adopt + 5 Adapt + 0 Reject + 0 Defer` است؛ تصمیم‌ها Candidate هستند و تا Review مالک محصول باعث Promote/Demote کامپوننت‌های موجود نمی‌شوند.

## نگاشت سراسری G4

- `BN-P-009..029` و توسعه‌های سراسری `BN-P-003/007` در [`binance-global-to-shemsh-mapping-g4.md`](binance-global-to-shemsh-mapping-g4.md) نگاشت شده‌اند.
- نتیجه این بخش `23 mapping records = 9 Adopt + 13 Adapt + 0 Reject + 1 Defer` است.
- تنها مورد Deferred، Composition گزارش تحلیلی Card-heavy است؛ چون Report مستقل هنوز در Scope قطعی Release شمش نیست.
- این Mapping اثر Patternها را روی Foundation، Component و Composition روشن می‌کند، اما هنوز مجوز تغییر Home، Foundation یا Figma نیست. انتقال بصری پس از Review مالک و قرارداد G5 انجام می‌شود.
- با احتساب هشت Mapping معامله، پوشش G4 اکنون `31 mapping records` دارد. Patternهای `BN-P-003/007` در دو Scope معامله و سراسری عمداً دو رکورد دارند و تعداد رکوردها برابر تعداد Pattern یکتا نیست.

## ماتریس نگاشت

| Mapping ID | Pattern ID | Shemsh target | Wireframe status | Current DS impact | Decision | Change type | Dependency | Owner review |
|---|---|---|---|---|---|---|---|---|
| `G4-M-001` | `BN-P-001` | Chart کامل، تنظیمات کوتاه و بازگشت به معامله | Entry مصوب است؛ حالت حرفه‌ای هنوز هدف مستقل ندارد | `Sheet/Overlay`، Chart container و حفظ State | `Adapt` | `Add` | اثبات نیاز حساب حرفه‌ای؛ D-121/OQ-039 | Pending |
| `G4-M-002` | `BN-P-002` | `WF-MM-008` Entry خرید/فروش | منطق D-157/D-158 مصوب؛ بلوغ Prototype برابر ۷۵٪ | Amount Input، `AssetTabs`، جهت معامله، Keypad و CTA | `Adapt` | `Recalibrate` | Keyboard/Paste/Screen reader و QA ارتفاع کوتاه | Pending |
| `G4-M-003` | `BN-P-003` | جزئیات محاسبه، قوانین و انتخاب‌گر کاتالوگ بزرگ | Sheet فعلی Candidate و Preferences طولانی خارج از Trade Entry است | Disclosure، Bottom Sheet/Popover و Full-page settings | `Adopt` | `Add` | قرارداد Overlay و Focus management | Pending |
| `G4-M-004` | `BN-P-004` | Entry و Preview خرید/فروش | Preview Candidate؛ منبع/مقصد ضمنی بود | Pattern تازه `TransactionPair` و Receipt rows | `Adapt` | `Add` | قواعد کیف تومان و `assetId` منتخب | Pending |
| `G4-M-005` | `BN-P-005` | CTA، Processing، Expired، Offline، Failed و Receipt | Empty/Ready/Processing/Success موجود؛ Recovery ناقص بود | Button Loading، Alert، Toast، Result/Receipt و State contract | `Adopt` | `Add` | Error/Offline از قواعد شمش؛ Evidence gap بایننس حفظ می‌شود | Pending |
| `G4-M-006` | `BN-P-006` | Entry بدون Chart، Detail با Summary trend، Chart کامل جدا | تفکیک D-121 موجود و نمودار Candidate است | Chart pattern، Accessible summary و Data table | `Adapt` | `Keep` | نقش Chart و Palette زیر OQ-056 | Pending |
| `G4-M-007` | `BN-P-007` | سطح‌های Entry/Preview و Grouping اطلاعات | Entry مینیمال؛ Preview هنوز Card-wrapper داشت | Surface، Divider، Border، Card، Spacing و Radius | `Adapt` | `Recalibrate` | مقدار دقیق Token از بایننس استنتاج نمی‌شود | Pending |
| `G4-M-008` | `BN-P-008` | Review، Commitment و Receipt | Rate موجود؛ Fee/Total/Risk و Expiry recovery کامل نبود | Financial disclosure، Quote status و Receipt | `Adopt` | `Add` | OQ-020 و قواعد فلز-ویژه Fee/Quote | Pending |

نتیجه شمارش: `8 mapped = 3 Adopt + 5 Adapt + 0 Reject + 0 Defer`.

## تصمیم‌های تفصیلی G4

### `G4-M-001` — Workspace فقط برای نیاز حرفه‌ای

- **Observed fact:** Entry فعلی شمش Amount-first و بدون Order book است؛ Chart نیز State مستقل دارد.
- **Design assumption:** حفظ Context هنگام بازکردن Chart، قوانین یا تنظیم کوتاه مفید است، اما Workspace متراکم Spot برای مسیر پایه خرده‌فروشی شمش مناسب نیست.
- **Decision:** `Adapt`. Context و State حفظ می‌شوند؛ دو ستون ریز، Order book، TP/SL و تراکم Spot وارد مسیر پایه نمی‌شوند.
- **Acceptance:** بازگشت از Chart/Sheet باید `assetId`، جهت، مبلغ، واحد و Scroll معتبر را حفظ کند؛ هیچ کنترل زیر ۴۴×۴۴ یا مسیر Hover-only مجاز نیست.

### `G4-M-002` — Amount-first با ورودی واقعی و Keypad کمکی

- **Observed fact:** D-157/D-158 عدد بزرگ، Asset Tab، موجودی Contextual، CTA و Keypad همیشه‌نمایان را برای Entry مصوب کرده‌اند.
- **Risk:** `readonly + inputmode=none`، Keypad سفارشی را تنها راه ورود می‌کرد.
- **Decision:** `Adapt`. تمرکز Amount-first، هندسه بدون اسکرول و Keypad حفظ می‌شوند؛ Input منطقی باید ورود با Keyboard دستگاه، Keyboard فیزیکی و Paste را نیز بپذیرد.
- **Acceptance:** Label دائمی، `inputmode=numeric/decimal` متناسب با واحد، Focus visible، Paste، دقت ۳/۲/۰، عرض ۳۲۰ و حفظ CTA/Error هنگام Keyboard لازم‌اند.

### `G4-M-003` — افشای تدریجی براساس طول تصمیم

- **Decision:** `Adopt`. جزئیات کوتاه و Contextual در Sheet/Popover، تنظیمات بلند و پایدار در صفحه مستقل و Summary انتخاب در صفحه مادر نمایش داده می‌شود.
- **Acceptance:** Focus trap/return، Escape/Back، عنوان قابل‌خواندن و بازگشت بدون ازدست‌رفتن State اجباری است.

### `G4-M-004` — مبدأ و مقصد صریح در خرید و فروش

- **Decision:** `Adapt`. الگوی Convert به رابطه واقعی شمش ترجمه می‌شود: خرید `کیف تومان → دارایی فلز` و فروش `دارایی فلز → کیف تومان`.
- **Acceptance:** مبدأ، مقصد، Unit و مقدار با Label متنی و ترتیب DOM روشن نمایش داده شوند؛ رنگ یا جایگاه تنها حامل معنا نباشد.

### `G4-M-005` — قرارداد State مالی

- **Decision:** `Adopt`. زنجیره شمش `Empty/Invalid → Ready → Review → Processing → Success/Receipt` است و `Expired/Offline/Failed` با Recovery صریح به آن افزوده می‌شود.
- **Acceptance:** Double submit بسته، Loading بیش از حدود ۳۰۰ms اعلام، Error نزدیک Context، اثر مالی شکست صریح و Receipt پایدار باشد. Toast فقط Feedback ثانویه است و جای نتیجه حیاتی را نمی‌گیرد.

### `G4-M-006` — سه Tier نمودار

- **Decision:** `Adapt`. Entry معامله Chart ندارد؛ Detail یک Trend خلاصه دارد؛ Chart کامل مقصد جداست. Candlestick/Indicator تا اثبات نیاز حرفه‌ای `Defer` درون همین Mapping می‌مانند، نه به‌عنوان Pattern پایه.
- **Acceptance:** Summary متنی، سه بازه D-121، Tooltip قابل Tap/Keyboard، نشانه غیررنگی و Data table/OHLC در صورت ورود Candlestick لازم‌اند.

### `G4-M-007` — سطح سفید و Grouping انتخابی

- **Decision:** `Adapt`. Canvas سفید، Whitespace و Divider پایه‌اند؛ Surface خاکستری برای Grouping محدود و Border/Card فقط برای Selection یا Object مستقل مثل Receipt استفاده می‌شود.
- **Risk:** این Evidence هیچ مقدار دقیق Radius، Spacing، Border width یا Neutral color را اثبات نمی‌کند.
- **Acceptance:** Preview نباید Wrapper Card پیش‌فرض داشته باشد؛ مرز Interactive و Contrast متن در Light/Dark باید معتبر بماند.

### `G4-M-008` — اطلاعات مالی نزدیک Commitment

- **Decision:** `Adopt`. پیش از CTA نهایی، Rate، Fee، منبع/مقصد و Total نمایش داده می‌شوند؛ Expiry نرخ مقدارها را پاک نمی‌کند و تأیید تا Refresh بسته می‌شود؛ Receipt اطلاعات پایدار را حفظ می‌کند.
- **Dependency:** مقدار واقعی Fee، مدت Quote و رفتار منبع نرخ از OQ-020 و Config فلز می‌آیند؛ Pilot فقط ساختار را نشان می‌دهد و مقدار اختراعی را قانون اعلام نمی‌کند.
- **Acceptance:** Fee/Total متن واقعی و قابل خواندن، نه Tooltip-only؛ Expiry برای Screen reader اعلام و Recovery نزدیک CTA باشد.

## Pilot HTML غیرمخرب

- **Observed fact:** فایل اصلی `06-wireframes-and-testing/artifacts/multi-metal-waves-1-and-3-wireframe.html` تغییر داده نشده است.
- **Observed fact:** کپی کاری `06-wireframes-and-testing/artifacts/multi-metal-waves-1-and-3-binance-alignment-pilot.html` ابتدا با SHA-256 یکسان ساخته شد و تغییرهای G4 فقط روی همان کپی اعمال شدند.
- **Observed fact:** یک تغییر موازی در فایل اصلی هنگام کار شناسایی شد؛ بخش‌های غیرمعامله دوباره از آخرین نسخه اصلی همگام شدند و Diff نهایی کپی فقط به عنوان، CSS/Markup/State/Handlerهای G4 معامله محدود است.
- Entry: Input واقعی با `numeric/decimal`، Keyboard/Paste/فیزیکی در کنار Keypad، بدون تغییر Asset Tab و هندسه اصلی D-157/D-158.
- Review: سطح بدون Card-wrapper، مبدأ/مقصد صریح، Rate/Fee/Total نزدیک CTA و توضیح Refresh نرخ.
- Stateها: Processing موجود حفظ و سه حالت قابل Review `Expired / Failed / Offline` اضافه شدند.
- Patternهای عمداً واردنشده: Order book، Spot density، TP/SL، Candlestick حرفه‌ای، رنگ زرد و مقدار دقیق توکن‌های بایننس.

## Pilot Figma غیرمخرب

- **Observed fact:** فایل اصلی `Shemsh Design System - Sandbox` overwrite یا بازآرایی نشد.
- **Observed fact:** یک Duplicate مستقل با نام `Shemsh Design System - Binance Alignment Pilot - 2026-08-16` ساخته شد.
- صفحه مستقل `18 Trade G4 Pilot` یک Reference/Candidate board برای Entry، `TransactionPair`، قرارداد State و خلاصه هشت Mapping دارد.
- فونت واردشده از SVG به `Inter` موجود در Figma جایگزین شد تا هشدار Missing font باقی نماند.
- این برد Component library منتشرشده یا جایگزین صفحات `10..17` نیست و تا Review مالک محصول وضعیت `Candidate` دارد.
- لینک Pilot: <https://www.figma.com/design/64ZFvIfuOqT8Jg5mzatcoU/Shemsh-Design-System---Binance-Alignment-Pilot---2026-08-16?node-id=2001-230&t=fc60FtSLpRhwoQsM-0>

## QA Pilot معامله

- JavaScript داخل HTML بدون خطای Syntax اجرا شد و Console مرورگر خالی بود.
- Entry، تغییر واحد `numeric/decimal`، Review مالی، Expired، Failed و Offline به‌صورت تعاملی بررسی شدند؛ مقدار در Recovery نرخ حفظ می‌شود.
- Viewportهای ۳۲۰ و ۳۹۰ پیکسل بدون برش افقی Review شدند.
- پس از اصلاح سگمنت خرید/فروش، همه دکمه‌های قابل‌مشاهده در صفحه معامله حداقل ارتفاع ۴۴px دارند.

## Change type

- `Keep`: ساختار و Style فعلی کافی است.
- `Recalibrate`: همان Component/Token با مقادیر یا Treatment تازه.
- `Add`: Component یا Pattern واقعاً غایب است.
- `Deprecate`: Candidate قبلی پس از Migration کنار گذاشته می‌شود؛ حذف مستقیم ممنوع.
- `Defer`: به تصمیم محصول، برند یا Evidence بیشتر وابسته است.

## Gate ورود به Figma

یک Mapping فقط زمانی وارد Candidate Figma می‌شود که:

1. Pattern حداقل `Medium confidence` داشته باشد.
2. وضعیت `Adopt` یا `Adapt` گرفته باشد.
3. Target و State واقعی شمش مشخص باشد.
4. وابستگی بیزینسی/برند با برچسب روشن ثبت شده باشد.
5. Test case در یکی از Pilotهای Trade، Home/Assets یا Trust/Receipt داشته باشد.

## Pilotهای مقصد

| Pilot | چه چیزهایی را معتبر می‌کند |
|---|---|
| Trade Entry | Type عدد، Asset tab، Buy/Sell، Balance context، Unit، CTA، Keypad، Error و No-scroll |
| Home / Assets | Surface، Card/List، Portfolio hierarchy، Privacy، Wallet row، Shortcut و Data density |
| Trust / Receipt | Disclosure، Fee/Rate، Ownership، Tracking، Status، Support و تفاوت واقعی شمش |

## Guardrail مهاجرت

- نسخه فعلی Figma حذف یا overwrite نمی‌شود؛ Candidate تازه کنار آن ساخته می‌شود.
- `Tested Candidate` فعلی فقط با Evidence تازه بازبینی می‌شود و خودکار Demote یا Promote نمی‌شود.
- تصمیم نهایی Visual Direction بعد از G3/G4 ثبت می‌شود.
- سرویس‌های نامطمئن فقط Pattern عمومی را تغذیه می‌کنند و Scope محصول نمی‌سازند.
