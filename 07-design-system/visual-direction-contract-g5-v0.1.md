# قرارداد جهت بصری G5 — نسخه ۰.۱

وضعیت: `Candidate / Needs Navy-first color revision / Not Stable`

تاریخ: ۲۶ مرداد ۱۴۰۵ / 17 Aug 2026

تصمیم روش: D-163

مجوز عبور: D-177

## هدف

این سند Evidence سراسری بایننس و نگاشت G4 را به قواعد بصری قابل‌ساخت برای شمش تبدیل می‌کند. هدف، رابط سفید، مینیمال، مرتب، مالی و آرام است؛ با هویت چندفلزی و شواهد اعتماد شمش، نه کپی ظاهر بایننس.

این قرارداد:

- برای ساخت Pilot غیرمخرب `Home / Assets` و سپس `Trust / Receipt` کافی است.
- Foundationهای فعلی یا Componentهای Figma را خودکار جایگزین، حذف، Promote یا Demote نمی‌کند.
- مقدارهای عددی این نسخه `Pilot value` هستند و تا QA انسانی، RTL/PWA، Light/Dark و Device واقعی `Stable` نیستند.
- ساختار و رفتار تصمیم‌گرفته‌شده وایرفریم شمش را تغییر نمی‌دهد.

## منابع و اولویت تعارض

1. تصمیم‌ها و قواعد قطعی شمش، به‌ویژه D-105، D-115، D-140، D-141، D-144، D-150، D-151، D-159، D-163 و D-202.
2. [`binance-global-to-shemsh-mapping-g4.md`](../02-research-and-audit/competitors/binance/binance-global-to-shemsh-mapping-g4.md).
3. [`navy-first-palette-candidate-v0.3.md`](foundations/navy-first-palette-candidate-v0.3.md) و [`typography-candidate-v0.1.md`](foundations/typography-candidate-v0.1.md).
4. اصول طراحی، دسترس‌پذیری و قراردادهای Component فعلی شمش.
5. Pattern رقبا و ابزارهای توصیه طراحی فقط به‌عنوان Evidence ثانویه.

**Observed fact:** جست‌وجوی عمومی `ui-ux-pro-max` برای فین‌تک، Dark و Exaggerated minimalism پیشنهاد داد. این بخش با Brief سفید، روزمره و Product-first شمش ناسازگار بود و وارد قرارداد نشد. قواعد Mobile-first، Touch target، Focus، Heading hierarchy، Back و Safe area آن با قواعد موجود شمش هم‌راستا بودند و حفظ شدند.

## تصمیم‌های محوری G5

| موضوع | قرارداد Candidate | چیزی که عمداً وارد نمی‌شود |
|---|---|---|
| Canvas/Surface | سفید سطح غالب Product UI است؛ Neutral کم‌رنگ فقط برای Field، Panel و Grouping انتخابی | Canvas خاکستری سراسری، Cardهای شناور متعدد، Gradient/Glow |
| Card taxonomy | Card فقط `Choice`، `Object` یا `Independent module` است | Card عمومی برای Form، List، Section یا Shortcut |
| Title hierarchy | سه Tier روشن: Root anchor، App-bar detail، Task lead | تکرار هم‌زمان عنوان بزرگ و App-bar title، Hero تبلیغاتی در Flow مالی |
| Numeric hierarchy | یک Numeric anchor در هر View یا Module؛ Equivalent/Unit/PNL ثانویه | چند عدد هم‌وزن پشت سر هم، عدد تزئینی یا Count-up |
| Grouping | `Whitespace → Label → Divider/Surface → Border/Card → Overlay elevation` | Border و Shadow پیش‌فرض برای همه Groupها |
| Brand | Navy-first برای Brand/Primary؛ Neutral برای Structure؛ Accent فلز کمکی و همراه Label/Icon | Primary مشکی، زرد بایننس، رنگ فلز به‌عنوان تنها حامل معنا |

## ۱. قرارداد Surface و Neutral

### نقش‌های Light/Dark

مقادیر زیر Override آزمایشی G5 پیش از D-202 هستند. Canvas/Surface سفید همچنان قابل آزمایش است، اما `surface.inverse` و Actionهای متأثر باید در Pilot Navy-first دوباره نگاشت و QA شوند؛ هنوز Migration رسمی Variableها نیست.

| Token role | Light pilot | Dark pilot | کاربرد |
|---|---:|---:|---|
| `semantic.color.surface.canvas` | `#FFFFFF` | `#0A0A0A` | پس‌زمینه اصلی Product UI |
| `semantic.color.surface.base` | `#FFFFFF` | `#171717` | محتوای هم‌سطح صفحه |
| `semantic.color.surface.sunken` | `#F5F5F5` | `#262626` | Field، Search، گروه کم‌تأکید و Skeleton |
| `semantic.color.surface.raised` | `#FFFFFF` | `#262626` | Sheet، Popover، Menu و Dialog |
| `semantic.color.surface.inverse` | `#171717` | `#FAFAFA` | CTA اصلی و تأکید معکوس محدود |
| `semantic.color.text.primary` | `#171717` | `#FAFAFA` | عنوان، عدد و متن اصلی |
| `semantic.color.text.secondary` | `#737373` | `#A3A3A3` | توضیح، Label زمینه‌ای و Metadata |
| `semantic.color.text.disabled` | `#A3A3A3` | `#737373` | فقط State غیرفعال همراه نشانه غیررنگی |
| `semantic.color.border.divider` | `#EDEDED` | `#333333` | تفکیک Rowهای هم‌نوع |
| `semantic.color.border.default` | `#E5E5E5` | `#404040` | Choice/Object boundary |
| `semantic.color.border.strong` | `#D4D4D4` | `#525252` | Selected/Focus-adjacent boundary |

### قواعد مصرف

- Canvas و Surface base می‌توانند هم‌رنگ باشند؛ Grouping باید ابتدا با فاصله و عنوان حل شود.
- `sunken` برای ایجاد «ناحیه ورودی یا Context کم‌تأکید» است، نه ساخت Card خاکستری برای هر Section.
- `raised` بدون Overlay یا هم‌پوشانی واقعی مصرف نمی‌شود.
- Home، Assets، Market، Settings و Formهای عادی روی سفید می‌مانند.
- Report تحلیلی Card-heavy طبق `BN-P-028` تا تعیین Scope محصول Defer است.
- Dark Mode قرارداد مستقل دارد و معکوس مکانیکی Light نیست؛ این Pilot ابتدا در Light تصمیم‌گیری می‌شود اما Dark test الزامی است.

## ۲. Border، Divider و Elevation

### Border و Divider

| Role | مقدار Pilot | کاربرد |
|---|---:|---|
| `stroke.hairline` | `1px` | Divider و مرز عادی |
| `stroke.focus` | `2px` | Focus ring مستقل با Offset حداقل `2px` |
| Divider full | فقط بین گروه‌های معنایی | Settings group یا Breakdown مستقل |
| Divider inset | هم‌راستا با محتوای Row | Listهای تکراری، History و Account |
| Border default | Choice/Object مستقل | کارت بانکی، شبکه، مدرک، Receipt object |
| Border selected | Strong/interactive + Check/Icon | انتخاب فعال؛ رنگ تنها نشانه نیست |

قانون: اگر حذف Border باعث ازبین‌رفتن فهم Selection، Ownership یا Interactive boundary نمی‌شود، Border لازم نیست.

### Elevation

| Token role | مقدار Pilot | مصرف مجاز |
|---|---|---|
| `semantic.elevation.none` | `none` | Canvas، List، Card عادی و Form |
| `semantic.elevation.sticky` | `0 -4px 16px rgba(0,0,0,.06)` | Action bar پایین فقط هنگام هم‌پوشانی Scroll |
| `semantic.elevation.overlay` | `0 -8px 32px rgba(0,0,0,.12)` | Bottom Sheet |
| `semantic.elevation.modal` | `0 16px 48px rgba(0,0,0,.18)` | Center modal/Dialog |

- Object card و Choice card Shadow ندارند.
- Border و Shadow هم‌زمان فقط وقتی نیاز عمقی واقعی وجود دارد؛ برای تزئین جمع نمی‌شوند.
- در Dark Mode جداسازی سطح بیشتر با تفاوت Surface و Border انجام می‌شود، نه Shadow سنگین.

## ۳. Spacing و Density

### Primitive scale

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48`

هر مقدار محلی خارج از این Scale نیازمند دلیل و ثبت در Component contract است.

### نقش‌ها

| Role | موبایل Pilot | توضیح |
|---|---:|---|
| Page padding | `16px` | عرض‌های ۳۲۰ تا ۳۹۰ |
| Page padding wide mobile | `20px` | از ۴۳۰px به بالا |
| Major section gap | `24px` | میان Moduleهای مستقل |
| Task section gap | `32px` | میان مراحل یا بلوک‌های Form طولانی |
| Group gap | `16px` | عنوان تا محتوا یا دو گروه نزدیک |
| Row internal gap | `12px` | Icon، متن و Meta |
| Control gap | `8px` | دکمه‌های مرتبط و Optionها |
| Label/content gap | `4–8px` | Label تا Value/Helper |
| Card/Object padding | `16px` | Object و Module مستقل |
| Compact choice padding | `12px 16px` | Choice row حداقل ۵۶px |

### Density tier

- `Root/Portfolio`: فاصله سکشنی ۲۴ و عدد Anchor واضح؛ تراکم متوسط.
- `List/History/Settings`: Rowهای ۵۶ تا ۶۴px، Divider inset و بدون Card wrapper.
- `Form/Task`: Fieldهای ۴۸/۵۶ موجود، فاصله Fieldها ۱۶ و بخش‌های فرم ۲۴/۳۲.
- `Receipt/Trust`: Rowهای ۴۸px یا بیشتر، Group gap ۱۶ و Evidence object با Padding ۱۶.
- هیچ Tierی Touch target کمتر از ۴۴px نمی‌سازد؛ کنترل اصلی موبایل ۴۸px ترجیح دارد.

## ۴. Radius

مقیاس Radius براساس نقش است، نه نام صفحه یا سلیقه محلی:

| Token role | مقدار Pilot | مصرف |
|---|---:|---|
| `semantic.dimension.radius.control` | `12px` | Button، Segment، Icon surface و Choice کوچک |
| `semantic.dimension.radius.input` | `14px` | Text/Amount/OTP/Search موجود؛ برای جلوگیری از بازکاری حفظ می‌شود |
| `semantic.dimension.radius.container` | `16px` | Choice card، Object card، Alert و Module مستقل |
| `semantic.dimension.radius.overlay` | `20px` | گوشه بالای Sheet و Dialog بزرگ |
| `semantic.dimension.radius.full` | `999px` | Badge، Pill و شکل کاملاً گرد |

- Radius بزرگ‌تر به معنی اهمیت بیشتر نیست.
- List، Section و Form group بدون Container، Radius ندارند.
- Card داخل Card یا چند Radius متفاوت در یک Composition ممنوع است.

## ۵. Card taxonomy و Flat row

### فقط سه مصرف Card مجاز

| نوع | شرط استفاده | Anatomy | نمونه شمش |
|---|---|---|---|
| `Choice card` | کاربر میان چند Object مستقل انتخاب می‌کند | Leading identity، Title/Meta، Selected mark، Border | کارت بانکی، روش پرداخت، وزن شمش |
| `Object card` | یک Object پایدار با Ownership/Status/Action مستقل وجود دارد | Identity، Primary value، Status/Meta، Context action | مجوز، درخواست تحویل، Receipt/Tracking object |
| `Independent module` | محتوا منطق یا کنترل مستقل دارد و بدون قاب با اطراف مخلوط می‌شود | Module title، Anchor، Supporting data، Optional action | Chart summary یا Evidence module واقعی |

### چیزهایی که Card نیستند

- Form group و Inputهای پشت سر هم.
- Settings، Account و Profile menu.
- History/Market/Asset list.
- Key-value breakdown داخل Preview و Receipt.
- Shortcutهای ساده خانه.
- عنوان Section، Alert یا پیام Help.

### Flat row contract

- حداقل ارتفاع `56px`؛ History پیچیده می‌تواند `64px` باشد.
- Grid ثابت `Leading / Primary / Trailing` با RTL بصری و ترتیب DOM معنایی.
- Primary text راست‌چین؛ عدد/شناسه Trailing با `dir=ltr` یا Isolation مناسب.
- Divider inset فقط میان Rowهای هم‌نوع؛ Row آخر Divider ندارد.
- Chevron فقط وقتی Row واقعاً مقصد Navigation دارد؛ Setting با Switch یا Action مستقیم Chevron نمی‌گیرد.

## ۶. Title hierarchy

| Tier | Style | رفتار | نمونه |
|---|---|---|---|
| Root anchor | `18/28, 600` در App bar | عنوان مرکزی D-140؛ بدون Page lead تکراری | خانه، معامله، خدمات |
| Detail/Utility | `18/28, 600` در App bar | Back در Slot راست؛ عنوان واحد و بدون H1 دوباره | جزئیات فلز، تاریخچه، حساب |
| Task lead | `24/36, 700` + Subtitle `14/24` | در ابتدای محتوای Task؛ App bar فقط Back یا عنوان کوتاه در Scroll | KYC، افزودن کارت، برداشت، دریافت فیزیکی |
| Section title | `16/24, 600` | معرفی گروه بعدی؛ Margin بالا از Token سکشنی | حساب‌های بانکی، برنامه اقساط |
| Sheet/Dialog title | `18/28, 600` | کوتاه، نتیجه‌محور و متصل به `aria-labelledby` | انتخاب کارت، تأیید تغییر فلز |
| Result title | `20/30, 700` | Outcome بدون تکرار Badge/توضیح | معامله ثبت شد |

قواعد:

- هر Screen فقط یک Heading سطح اول معنایی دارد، حتی اگر App bar و Task lead هر دو بصری باشند.
- Root صفحه Hero title یا Subtitle توضیحی پیش‌فرض ندارد.
- Task subtitle فقط Context یا الزام لازم را می‌گوید؛ کپی تبلیغاتی ندارد.
- Ellipsis برای عنوان صفحه فقط با مسیر نمایش کامل مجاز است.
- Title فارسی راست‌چین است؛ جای فیزیکی Slotهای Header با RTL معکوس نمی‌شود.

## ۷. Numeric anchor و Privacy

### سلسله‌مراتب عددی

| Role | Style Candidate | کاربرد |
|---|---|---|
| `type.numeric.hero` | `28/38, 700` | فقط یک Anchor در View/Module |
| `type.numeric.primary` | `20/30, 700` | عدد اصلی Object یا Detail ثانویه |
| `type.numeric.body` | `16/24, 600` | Row، نرخ، مبلغ و Breakdown |
| `type.numeric.meta` | `12/18, 600` | درصد، زمان، Unit یا Status عددی کوتاه |

### قواعد Anchor

- «یک Anchor» به معنی حذف داده نیست؛ یعنی فقط یک عدد Style `numeric.hero` می‌گیرد.
- Home: ارزش کل دارایی Anchor است؛ وزن/ارزش فلزها و کیف تومان `primary/body` هستند.
- Asset detail: Job صفحه تعیین می‌کند Anchor موجودی است یا قیمت؛ هر دو Hero نمی‌شوند.
- Trade entry: مبلغ ورودی Anchor است؛ موجودی، نرخ و معادل ثانویه‌اند.
- Preview/Receipt: مبلغ نهایی یا پیامد مالی Anchor است؛ Rate/Fee/Source در Breakdown می‌مانند.
- P&L همیشه Label و علامت/جهت دارد و فقط با رنگ بیان نمی‌شود.
- Unit در Span جدا و از عدد یک Tier پایین‌تر است؛ هیچ عدد مالی بدون Unit/Label لازم نمایش داده نمی‌شود.

### Privacy masking

- Mask فضای مقدار واقعی را حفظ می‌کند؛ تغییر Visible/Hidden نباید Layout shift بسازد.
- Toggle چشم در نزدیک‌ترین Scope همان مقدار است و استقلال D-150 حفظ می‌شود.
- Mask با `••••••` یا Skeleton ثابت، همان Line-height و حداقل عرض مقدار را دارد.
- Accessible name وضعیت فعلی و نتیجه Action را می‌گوید: «نمایش موجودی کیف تومان» / «مخفی کردن…».
- مقدار مخفی برای Screen reader خوانده نمی‌شود؛ Label Scope و وضعیت «مخفی است» اعلام می‌شود.

## ۸. Input، Choice و Feedback

### Field عمومی

- Geometry و Stateهای Candidate فعلی حفظ می‌شوند: ارتفاع ۴۸/۵۶ و Radius ۱۴.
- Idle Pilot: `surface.sunken` با Border شفاف ۱px برای ثبات Layout.
- Hover در Pointer دقیق: Border subtle؛ Hover کارکرد ضروری ندارد.
- Focus: Surface base + Border interactive/strong + Focus ring مستقل ۲px.
- Error: Border و متن نزدیک Field؛ رنگ تنها نشانه نیست و ارتفاع پوسته ناگهان تغییر نمی‌کند.
- Amount hero می‌تواند Composition مخصوص و کم‌قاب داشته باشد؛ Base Amount Input همچنان State و Accessibility عمومی را فراهم می‌کند.

### Choice

- سطح سفید، Border default، حداقل ارتفاع ۵۶px و Selected mark متنی/آیکنی.
- Selected فقط با تغییر Background یا رنگ Border بیان نمی‌شود.
- Choiceهای زیاد در Sheet همراه Search و Summary انتخاب به Parent برمی‌گردند.

### Feedback

- Helper کوتاه نزدیک Control است.
- Instruction یا Risk چندخطی در Panel مستقل قرار می‌گیرد.
- Warning سطح کم‌رنگ دارد؛ Error به Field/عدد/Action مرتبط محدود است.
- Toast فقط Feedback کوتاه غیرحیاتی است؛ Result، Receipt یا خطای مالی را جایگزین نمی‌کند.

## ۹. Overlay و Navigation context

### Bottom Sheet موبایل

- Width برابر Viewport و گوشه بالایی ۲۰px.
- ارتفاع `auto` تا سقف `min(92dvh, content)`؛ Variant ثابت ۷۲٪/۹۲٪ قانون سیستم نیست.
- Header و Footer در صورت Scroll ثابت؛ Body تنها ناحیه اسکرول.
- Safe area پایین، Keyboard و CTA پوشش داده می‌شوند.
- Scrim Pilot: `rgba(0,0,0,.40)` در Light و متناسب با Contrast در Dark.
- Handle فقط وقتی Drag-to-dismiss واقعاً پشتیبانی می‌شود نمایش داده می‌شود.

### Dialog

- عرض موبایل `calc(100vw - 32px)` با سقف `360px`.
- یک پیام/تصمیم کوتاه و حداکثر دو Action.
- Form، Requirement list بلند، Search و Navigation داخلی وارد Center modal نمی‌شوند.

### Context

- Focus هنگام بازشدن به عنوان/اولین کنترل منطقی و هنگام بسته‌شدن به Trigger برمی‌گردد.
- `Escape`، Back سیستم/مرورگر، Close و Tap scrim فقط طبق ریسک Action فعال‌اند.
- Sheet موبایل روی Desktop براساس Job به Popover، Dialog یا Page تبدیل می‌شود؛ Full-width Sheet دسکتاپ پیش‌فرض نیست.
- State والد شامل Scroll، Filter، `assetId`، Form value و Selection حفظ می‌شود.

## ۱۰. Motion و Interaction

- Feedback کنترل: `150–200ms`.
- Enter/Exit Overlay: `200–280ms`؛ Exit مساوی یا سریع‌تر از Enter.
- تغییر State مالی با Crossfade/Position محدود انجام می‌شود؛ عدد از صفر Count-up نمی‌شود.
- Transition عرض/ارتفاع Layout برای تزئین ممنوع؛ Transform/Opacity در صورت امکان.
- Reduced Motion مسیر کامل بدون Auto-cycle، Parallax، Bounce یا Loop دارد.
- Touch target حداقل ۴۴px و کنترل اصلی ۴۸px؛ فاصله دو Target مستقل حداقل ۸px.
- UI ضروری به Hover، Haptic یا Gesture پنهان وابسته نیست.

## ۱۱. Composition contract

### Home / Assets

- Canvas سفید و یک Anchor ارزش کل.
- Rail و اولویت Geometry آخرین تصمیم فعال D-159/D-180 حفظ می‌شوند؛ G5 درباره Style و Hierarchy است، نه تغییر ترتیب یا Peek.
- Cardهای فلز فقط وقتی Object مستقل قابل ورود هستند حفظ می‌شوند؛ اطلاعات داخلی آن‌ها یک Hero دوم نمی‌سازد.
- کیف تومان از نظر عددی Secondary و از نظر Action مستقل باقی می‌ماند.
- Shortcutها Flat و بدون Container بیرونی پیش‌فرض.
- Campaign یک Content module کم‌اولویت و جدا از Product data است.

### Trust / Receipt

- Result ابتدا Outcome، اثر و Next step را نشان می‌دهد.
- Receipt Object مستقل با Status، زمان، نرخ/مبلغ، کد پیگیری و Support است.
- License/Evidence می‌تواند Object card داشته باشد، اما Badge جای صادرکننده/تاریخ/منبع را نمی‌گیرد.
- Pending/Unknown/Failed از Success جدا و دارای Recovery نوع‌محور هستند.

## ۱۲. Pilot test matrix

### Pilot اول — Home / Assets

| ID | State | چیزی که باید سنجیده شود |
|---|---|---|
| `G5-H-01` | ۳۹۰px، موجودی‌ها مخفی | White canvas، یک Anchor هندسه‌ای، Mask بدون Shift و اولویت Rail |
| `G5-H-02` | ۳۹۰px، همه مقدارها Visible | عدد ۱۰–۱۱ رقمی، Unit، P&L و نبود رقابت چند Hero |
| `G5-H-03` | ۳۲۰px، نرخ ناقص/معامله متوقف | Warning نرم، Error localized، CTA و Scroll بدون برش |
| `G5-H-04` | Assets/Portfolio detail | Flat rows، Divider، Object card محدود و یک Anchor |
| `G5-H-05` | Dynamic Type 200% | Wrap عنوان/عدد، عدم پنهان‌شدن CTA/Unit و Touch target |
| `G5-H-06` | Dark + Reduced Motion | تفکیک Surface بدون Shadow سنگین و توقف Auto-cycle |

### نتیجه اجرای Pilot اول — V-111

| ID | نتیجه | شاهد |
|---|---|---|
| `G5-H-01` | Pass | ۳۹۰px، Canvas سفید، یک Hero ۲۸px، Peek برابر ۷۴px و Mask بدون تغییر ارتفاع |
| `G5-H-02` | Pass | عددهای واقعی Home داخل Cardهای ۲۷۴px، Hero واحد و Body overflow صفر |
| `G5-H-03` | Pass | ۳۲۰px، Warning نرخ ناقص و توقف معامله Localized، Card برابر ۲۰۴px، CTA/Scroll و Body بدون برش |
| `G5-H-04` | Pass | Summary واحد، Chart module مستقل و چهار Row تخت ۶۴px با Divider؛ Overflow صفر در ۳۲۰/۳۹۰px |
| `G5-H-05` | Needs manual retest | محیط QA فعلی بزرگ‌نمایی متن ۲۰۰٪ را به‌صورت قابل‌اندازه‌گیری اعمال نکرد؛ این مورد پیش از Promote باز می‌ماند |
| `G5-H-06` | Pass after fix | Surfaceهای Dark بدون Shadow، رنگ ارثی Header/Title اصلاح و Auto-cycle نرخ در Reduced Motion متوقف شد |

### Pilot دوم — Trust / Receipt

| ID | State | چیزی که باید سنجیده شود |
|---|---|---|
| `G5-T-01` | Result موفق | Outcome کوتاه، یک Action اصلی و تفکیک از Receipt |
| `G5-T-02` | Receipt نهایی | Object boundary، Key-value alignment، Tracking و Copy |
| `G5-T-03` | Pending/Unknown | Status، اثر دارایی، زمان/Support و Recovery |
| `G5-T-04` | License/Evidence | صادرکننده، تاریخ، منبع و نبود Verified badge تزئینی |
| `G5-T-05` | ۳۲۰px + متن فارسی بلند | Wrap، BiDi شناسه، بدون Horizontal overflow |
| `G5-T-06` | Keyboard/Screen reader | Heading، Focus order، Label و Announce State |

## ۱۳. Acceptance و Guardrail

### Hard gates

- [ ] در هر View/Module فقط یک `numeric.hero` وجود دارد.
- [ ] Card مصرفی یکی از سه Taxonomy مجاز را دارد.
- [ ] List/Form/Settings بدون Wrapper Card تزئینی قابل فهم‌اند.
- [ ] Heading hierarchy، App bar و Back بدون تکرار/ابهام‌اند.
- [ ] Text contrast حداقل ۴.۵:۱ و UI boundary موردنیاز حداقل ۳:۱ است.
- [ ] Touch target، Focus visible، Keyboard، Safe area و Reduced Motion پاس می‌شوند.
- [ ] Mask، Loading و Error Geometry حیاتی را جابه‌جا نمی‌کنند.
- [ ] Result و Receipt در محتوا و Action از هم قابل تشخیص‌اند.
- [ ] هیچ رنگ، Taxonomy یا مقدار Token بایننس مستقیم کپی نشده است.

### موارد خارج از قرارداد فعلی

- Palette نهایی Accent فلزها و نمودار چندسری — OQ-056.
- فرمول و اعداد نهایی ارزش‌گذاری/P&L — OQ-055.
- محتوای نهایی Campaign — OQ-051.
- Report تحلیلی Card-heavy — Deferred تا Scope واقعی.
- Migration یا انتشار Library Figma — پس از Pilot و Review.

## Gate

- G5 Visual Direction Contract v0.1: `Complete as Candidate`.
- Pilot Home / Assets: `Implemented non-destructively / Sufficient for owner review`؛ H05 هنوز باز است.
- آمادگی Pilot Trust / Receipt: `Sufficient to proceed after owner review of Home/Assets`.
- Foundation Stable یا Figma migration: `Not authorized`.
