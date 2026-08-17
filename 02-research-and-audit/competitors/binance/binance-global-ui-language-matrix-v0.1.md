# ماتریس زبان رابط و تصمیم‌های UI بایننس — نسخه ۰.۱

وضعیت: `Cross-batch synthesis complete / 24 candidates resolved in G3 proof`

تاریخ: ۲۶ مرداد ۱۴۰۵ / 17 Aug 2026

## هدف و مرز

این سند پاسخ می‌دهد که در Snapshot مشاهده‌شده Binance iOS، یک نیاز در چه ظرفی نمایش داده می‌شود، اطلاعات چگونه Group می‌شوند، Title و Action چگونه چیده می‌شوند و رنگ/Surface/Border در چه نقشی ظاهر می‌شوند.

این خروجی:

- **Observed fact** از Flowهای Mobbin و سنتز قابل‌آزمون آن‌هاست.
- «Design System رسمی بایننس» نیست.
- هنوز Rule شمش نیست و پیش از انتقال باید در G3/G4 شاهد، Counter-example، RTL/PWA و قواعد شمش را پاس کند.
- مقدار دقیق Tokenهای Spacing، Radius، Typography یا Color را از تصویر حدس نمی‌زند.

## پوشش شواهد

نمونه‌گیری مستقیم این نسخه خانواده‌های زیر را پوشش می‌دهد:

- Home و App Shell
- Settings، Privacy و Security
- Markets، Asset list، Coin detail و Chart
- Assets overview، Holdings، History و Assets report
- Trade و Convert از Batch C تکمیل‌شده
- Login، Onboarding، KYC، Verification و Recovery
- Payment method، Bank form، Deposit و Export records

مجموع Census رسمی ۳۲ Flow و ۱۷۳ Screen خام است. Dedupe درون هر Batch تکمیل شد: A برابر ۳۹، B برابر ۳۹، C برابر ۳۸ و D برابر ۴۲ Screen منحصربه‌فرد. جمع ۱۵۸، جمع درون-Batch است و به‌دلیل تکرار میان Batchها Global Unique محسوب نمی‌شود. نتیجه Proof هر Candidate در [`binance-global-ui-pattern-proof-g3.md`](binance-global-ui-pattern-proof-g3.md) ثبت شده است.

## خلاصه مدل تصمیم

| وضعیت | ظرف غالب | Title | Grouping غالب | نقش رنگ | Action غالب | شاهد | Counter-example / محدودیت |
|---|---|---|---|---|---|---|---|
| Root خانه | Full-page root + Bottom nav | معمولاً بدون Page title؛ Metric نقش Anchor دارد | Whitespace، Module card و Content order | زرد برای CTA/Promo؛ سبز/قرمز برای تغییر | CTA نزدیک Metric یا داخل Module | [Home](https://mobbin.com/flows/cf688b7d-77fa-4231-aa1c-57f1f79b59d4) | Home عمداً Cardمحورتر از Settings است |
| Root بازار/دارایی | Full-page tab root | Tab row به‌جای Title بزرگ | List و Tab؛ Search بالای محتوا | رنگ فقط Status/Delta | Row tap و Actionهای ثابت | [Markets](https://mobbin.com/flows/e656dc0d-efe5-4592-857d-da8218c00478)، [Overview Assets](https://mobbin.com/flows/6198373a-3786-4fc1-97a5-3729972017d6) | Report زیرمجموعه همین حوزه روی Canvas خاکستری و Cardهای بزرگ می‌رود |
| Detail یک Asset/Object | Full page | عنوان فشرده در App bar؛ گاهی مقدار/Delta زیر آن | Sub-tab، Data section و Sticky actions | رنگ در قیمت/Delta/Action | Buy/Sell یا اقدام Object در پایین | [Coin detail](https://mobbin.com/flows/e15bb0c1-01c2-4365-827d-e42e101266ac) | Social/Trade-X محتوای Cardمحور دارد و الگوی پایه شمش نیست |
| Settings/Privacy | Full page | Large title در ابتدای صفحه؛ Compact title هنگام Scroll | Group caption + Flat rows + Divider بین Groupها | تقریباً خنثی | Chevron/Switch/Value انتهای Row | [Settings](https://mobbin.com/flows/49c585a7-877f-420e-a7b5-432da8bb06f6)، [Privacy Center](https://mobbin.com/flows/b06e011d-342b-45fd-b6bb-dfbd6a82feaf) | Security methodها Object مستقل‌اند و به Card تبدیل می‌شوند |
| Form یا Task چندمرحله‌ای | Full page یا High sheet | Large left-aligned title + Subtitle | Field surface، Choice card و Instruction block | زرد برای CTA و Warning؛ رنگ وضعیت محدود | یک CTA اصلی پایین | [Verifying account](https://mobbin.com/flows/751cb937-9513-4233-bf22-09024607475b)، [Adding payment method](https://mobbin.com/flows/fd0be83b-48f1-4f88-ab6d-98a019db1bbb) | Login/Signup به‌دلیل حفظ Context مهمان در High sheet اجرا شده است |
| انتخاب کوتاه Contextual | Bottom sheet کوتاه/متوسط | عنوان کوتاه، معمولاً بالای List | Row یا Choice card | خنثی؛ Selection با Border/Check | انتخاب مستقیم، گاهی CTA | [Home Add Funds](https://mobbin.com/flows/20a19a2c-7a22-4024-ad3d-7e243a3928a7)، [Assets history](https://mobbin.com/flows/a2dc5366-e2c9-4551-8701-718264045a3f) | اگر انتخاب بلند، جست‌وجوپذیر یا چندسطحی شود Sheet تا نزدیک Full height رشد می‌کند |
| انتخاب بلند ولی وابسته به صفحه مادر | Tall/Full-height sheet | عنوان فشرده؛ Close/Grabber | Search، List، Accordion یا Card | خنثی؛ رنگ Icon هویت Object است | انتخاب Row؛ CTA فقط در صورت Commit | [On-chain deposit](https://mobbin.com/flows/20a19a2c-7a22-4024-ad3d-7e243a3928a7)، [Buy with card](https://mobbin.com/flows/38f20cb8-7bc0-40c2-9576-2bd69858aee1) | انتخاب Asset مستقل می‌تواند Full page شود؛ طول به‌تنهایی معیار Sheet نیست |
| تأیید اخلال‌گر/پرریسک یک‌تصمیمی | Center modal | عنوان داخل Dialog | Icon + متن کوتاه + ۱/۲ Button | Warning yellow؛ Scrim تیره | Confirm/Cancel یا Acknowledge | [Updating password](https://mobbin.com/flows/68c0f11e-acd8-4677-b3aa-0847a1a1f0e6)، [Unlocking account](https://mobbin.com/flows/4a2b4aee-ce77-42b6-98a5-e90b19a939fb) | توضیح طولانی یا چند Requirement به Page/Sheet می‌رود، نه Modal |
| Processing | سطح خلوت Full page/High sheet | Title حذف یا بسیار کم‌رنگ | مرکزچین، یک Indicator و یک پیام | Accent حداقلی | بدون CTA تا تعیین State | [Verifying account](https://mobbin.com/flows/751cb937-9513-4233-bf22-09024607475b)، [Updating password](https://mobbin.com/flows/68c0f11e-acd8-4677-b3aa-0847a1a1f0e6) | عملیات قابل لغو باید Close/Back و پیام اثر لغو داشته باشد؛ در Snapshot همه‌جا روشن نیست |
| Success/Pending/Under review | Full page یا High sheet | Icon + عنوان بزرگ + توضیح کوتاه | فضای سفید و یک Action | رنگ Success/Warning در Illustration، نه Canvas کامل | OK/Continue/View detail | [Unlocking account](https://mobbin.com/flows/4a2b4aee-ce77-42b6-98a5-e90b19a939fb)، [Onboarding](https://mobbin.com/flows/c801a715-f530-4db5-a5e7-c214a129fd7d) | Receipt مالی متراکم‌تر است و Detailهای پایدار را نگه می‌دارد |
| Analytics/Report | Canvas خاکستری + White module cards | App-bar title + Time range | Cardهای بزرگ موضوعی | Chart palette و Status؛ Surface خنثی | Toggle/Range/Share | [Assets report](https://mobbin.com/flows/8f84b566-e945-4c9a-98b7-294fdca74c4c) | List روزمره Assets روی Canvas سفید و بدون Card wrapper است |
| Empty state | Full page/content area | Title صفحه حفظ می‌شود | Illustration + متن کم + CTA پایین | CTA زرد؛ Illustration خاکستری | یک CTA ایجاد/افزودن | [Payment methods](https://mobbin.com/flows/39f9e611-d5b9-4930-b88d-3450adf65bfe) | Empty state داخل Report ممکن است داخل Card همان Module بماند |

## Ruleهای Candidate

### `BN-UI-C-001` — چهار ظرف اصلی Interaction

**Observed fact:** بایننس بین چهار ظرف تمایز می‌گذارد:

1. `Inline` برای تغییر فوری، برگشت‌پذیر و کم‌هزینه در همان Context؛ مانند Tab، Switch، Segmented control، Accordion و Row disclosure.
2. `Bottom sheet` برای انتخاب یا تصمیم Contextual که باید صفحه مادر دیده/حفظ شود.
3. `Full page` برای Object مستقل، Form بلند، Task چندمرحله‌ای، Deep navigation، Result پایدار یا محتوای قابل Scroll/Share.
4. `Center modal` برای توقف کوتاه و یک تصمیم پرریسک یا Acknowledge اجباری.

**Rule candidate:** نوع ظرف از «طول محتوا» به‌تنهایی تعیین نمی‌شود؛ استقلال Task، نیاز به حفظ Context، عمق Navigation و هزینه تصمیم معیارهای اصلی‌اند.

**Confidence:** High در خانواده‌های مشاهده‌شده.

### `BN-UI-C-002` — Sheet برای Context، Page برای Ownership

**Observed fact:** Add Funds، Select history، Choose network و Select address در Sheet باز می‌شوند چون ادامه مستقیم صفحه مادرند. Settings، Privacy، Asset detail، Bank form و Report Page مستقل دارند.

**Counter-example:** Login و Signup با وجود چندمرحله‌ای‌بودن در High sheet اجرا شده‌اند تا Context Home مهمان و Exit مستقیم حفظ شود.

**Rule candidate:** اگر Task هویت مستقل و مقصد قابل بازگشت/اشتراک دارد، Page؛ اگر تصمیم برای تکمیل همان صفحه مادر است، Sheet. Auth یک استثنای Context-preserving است.

**Confidence:** High.

### `BN-UI-C-003` — Sheet ارتفاع ثابت ندارد

**Observed fact:** Sheet کوتاه برای منوی Add Funds، متوسط برای انتخاب History و تقریباً Full-height برای Network/Address/Auth دیده می‌شود.

**Rule candidate:** ارتفاع Sheet تابع مقدار محتوا و نیاز به Search/Accordion است؛ نوع Interaction همچنان Sheet باقی می‌ماند.

**Confidence:** High.

### `BN-UI-C-004` — Modal فقط برای یک توقف تصمیمی

**Observed fact:** Account blocked، محدودیت پس از تغییر رمز و Login expired در Dialog مرکز صفحه نمایش داده می‌شوند.

**Rule candidate:** Modal برای یک پیام کوتاه و حداکثر دو Action است. Requirement list، Form یا Recovery چندمرحله‌ای نباید داخل Modal فشرده شود.

**Confidence:** High.

### `BN-UI-C-005` — Canvas سفید Baseline است

**Observed fact:** Home، Markets، Assets، Settings، Forms و History عمدتاً Canvas سفید دارند.

**Counter-example:** Assets report از Canvas خاکستری و White module card استفاده می‌کند؛ Camera/scan نیز Immersive surface دارد.

**Rule candidate:** سفید سطح پایه است؛ خاکستری سراسری فقط وقتی چند Module تحلیلی مستقل باید از هم جدا شوند یا Context ویژه‌ای مثل Capture وجود دارد.

**Confidence:** High.

### `BN-UI-C-006` — سلسله‌مراتب Grouping از سبک به سنگین

ترتیب مشاهده‌شده:

1. Whitespace
2. Label/Section heading
3. Divider یا تغییر Surface ظریف
4. Border/rounded container
5. Shadow/Elevation فقط برای Overlay یا Floating content

**Rule candidate:** Card نخستین ابزار Grouping نیست. Border زمانی پررنگ می‌شود که Item یک Choice، Object مستقل یا Module تحلیلی باشد.

**Confidence:** High؛ ادامه Pattern معامله `BN-P-007`.

### `BN-UI-C-007` — Card taxonomy انتخابی است

Card در Snapshot برای این موارد تکرار می‌شود:

- Selection object: نوع مدرک، Network، Security method، Payment method.
- Independent object: Favorite pair، Campaign/Promo، Report module، Account/payment object.
- Content module: Home tile، Social post، Analytics panel.

Card برای این موارد غالب نیست:

- Setting row ساده
- History row
- Holding row
- Privacy link
- Data pairهای خطی

**Confidence:** High.

### `BN-UI-C-008` — Title سه سطح دارد

1. Root tab: معمولاً بدون Page title بزرگ؛ Tab/Metric/Content anchor ساختار را معرفی می‌کند.
2. Utility/detail page: Compact app-bar title؛ گاهی Large title در ابتدای Scroll و Compact title پس از حرکت.
3. Task flow: Large left title + Subtitle/Helper در بالای Form یا Sheet.

Section headingها نیز دو نقش دارند:

- Caption خاکستری کوچک برای گروه‌های Settings/Form.
- Heading مشکی قوی برای Content/Analytics.

**Confidence:** High.

### `BN-UI-C-009` — Tab جای Title نیست؛ Scope را کنترل می‌کند

**Observed fact:** Markets، Assets و Coin detail از یک یا دو لایه Tab استفاده می‌کنند. Indicator زرد باریک فقط Active scope را نشان می‌دهد؛ Content زیر Tab بدون Container اضافی ادامه می‌یابد.

**Rule candidate:** Tab برای تغییر View هم‌سطح است، نه برای Action یا Filter موقت. Sub-tab دوم زمانی می‌آید که Domain پیچیده است.

**Confidence:** High.

### `BN-UI-C-010` — List row با Alignment و Rhythm، نه Card

**Observed fact:** Market list، Holdings، History و Settings از ردیف‌های تخت با ستون‌های ثابت، فاصله عمودی و متن ثانویه استفاده می‌کنند. Divider در Settings بین Groupها قوی‌تر از Divider بین هر Row است؛ Market/Assets بسیاری از Rowها را فقط با Whitespace جدا می‌کنند.

**Rule candidate:** Rowهای هم‌نوع باید یک Grid معنایی مشترک داشته باشند؛ Border دور تک‌تک Rowها فقط وقتی Item انتخاب‌پذیر/شیء مستقل است.

**Confidence:** High.

### `BN-UI-C-011` — رنگ ساختار نمی‌سازد؛ معنا می‌دهد

نقش‌های مشاهده‌شده:

- زرد: Primary CTA، Active indicator، Promotion، Brand accent و Warning emphasis.
- سبز/قرمز: Positive/Negative delta، Success/Error state و Buy/Sell در Context معامله.
- خاکستری: Field، Search، Disabled، Secondary action و Instruction surface.
- مشکی: متن، Icon و Action با اهمیت خنثی.

**Counter-example:** Chart و Illustration می‌توانند Palette گسترده‌تری داشته باشند، ولی این رنگ‌ها به Surface عمومی صفحه سرایت نمی‌کنند.

**Rule candidate:** رنگ نباید جای Label، Sign یا Layout را بگیرد.

**Confidence:** High.

### `BN-UI-C-012` — Primary action واحد و واضح است

**Observed fact:** Form/KYC/Empty state معمولاً یک CTA زرد تمام‌عرض در پایین دارند. Secondary action یا Text link بالاتر/کنار آن است. دو Action هم‌وزن فقط در معامله Buy/Sell یا Modal Confirm/Cancel دیده می‌شود.

**Rule candidate:** در هر سطح Commitment یک Primary action؛ دوتایی‌بودن فقط وقتی تصمیم واقعاً دوشاخه و هم‌سطح است.

**Confidence:** High.

### `BN-UI-C-013` — Action پایین صفحه تابع Task است

- Form یا Verification: CTA نزدیک پایین Viewport/Content.
- Asset detail: Action bar ثابت Buy/Sell.
- Root lists: Bottom nav ثابت، بدون CTA شناور دائمی.
- Empty state: CTA پایین برای ساخت Object.
- Report: Actionها در Header/Module، نه نوار Commitment.

**Confidence:** High.

### `BN-UI-C-014` — Field سطح خاکستری دارد؛ Choice Border دارد

**Observed fact:** Text/Select fieldها Filled-gray و معمولاً بدون Border قوی‌اند. Choiceهای گسسته مانند Document type یا Payment method White + Border هستند. Selected choice با Border تیره، Check یا Active indicator مشخص می‌شود.

**Rule candidate:** Input و Selection از نظر Surface یکی نیستند؛ Field محل ورود داده است، Choice یک Object قابل انتخاب.

**Confidence:** High.

### `BN-UI-C-015` — Helper نزدیک کنترل، Instruction جدا

**Observed fact:** Ruleهای Password زیر همان Field با Check زنده می‌آیند؛ توضیح اثر تغییر نام زیر Field مرتبط است. Instructionهای چندخطی KYC/Deposit در Panel خاکستری جدا قرار می‌گیرند.

**Rule candidate:** Helper کوتاه کنار Field؛ راهنمای چندمرحله‌ای یا ریسک عملیاتی در Info panel مستقل.

**Confidence:** High.

### `BN-UI-C-016` — Warning زرد کم‌رنگ، Error قرمز محدود

**Observed fact:** هشدار امنیت، محدودیت ۲۴ساعته و پیشنهادهای حساس روی Surface زرد بسیار کم‌رنگ نمایش داده می‌شوند. Error/Negative financial value قرمز است، اما کل Card یا Canvas به‌ندرت قرمز می‌شود.

**Rule candidate:** Warning باید قابل‌خواندن ولی غیرهراس‌زا باشد؛ Error فقط به پیام/عدد/آیکن مربوط محدود شود مگر State بحرانی.

**Confidence:** High.

### `BN-UI-C-017` — Processing صفحه را خلوت می‌کند

**Observed fact:** Liveness processing، Passkey verification و Recovery verifying تقریباً همه عناصر غیرضروری را حذف می‌کنند و فقط Indicator/Message می‌ماند.

**Rule candidate:** هنگام عملیات غیرقابل تعامل، Navigation و داده‌های مزاحم حذف شوند؛ در صورت زمان طولانی، SLA/Cancel/Recovery باید افزوده شود.

**Confidence:** Medium؛ رفتار Timeout/Cancel در همه Flowها دیده نشده است.

### `BN-UI-C-018` — Result حول Outcome است، Receipt حول Evidence

**Observed fact:** Welcome/Under review از Illustration، Title و یک Action استفاده می‌کنند. Receipt معامله Rate/Fee/Date و Detail پایدار نگه می‌دارد.

**Rule candidate:** Result کوتاه برای فهم Outcome؛ Receipt برای اثبات و پیگیری. این دو نباید با یک Template واحد ادغام شوند.

**Confidence:** High.

### `BN-UI-C-019` — عدد اصلی Anchor است، عددهای ثانویه هم‌سطح نیستند

**Observed fact:** Home/Assets یک Hero metric بزرگ دارند؛ معادل، PNL و Period کوچک‌تر و نزدیک آن قرار می‌گیرند. در List، نام/قیمت/Delta ستون‌های ثابت دارند و Secondary value خاکستری است.

**Rule candidate:** هر View یک Numeric anchor دارد. ارزش معادل، تغییر و واحد باید با Scale/Color/Position از عدد اصلی پایین‌تر باشند.

**Confidence:** High.

### `BN-UI-C-020` — Privacy state Layout را نمی‌شکند

**Observed fact:** کنترل Hide/Show کنار Metric قرار می‌گیرد و پنهان‌سازی نباید جای Card/List را تغییر دهد. جزئیات Privacy نیز مقصد مستقل دارد.

**Rule candidate:** Mask کردن مقدار باید Layout stable باشد و Control در نزدیکی Scope همان مقدار قرار بگیرد.

**Confidence:** Medium تا تکمیل Dedupe Flowهای Hide value/PNL.

### `BN-UI-C-021` — Progressive disclosure سه سطح دارد

1. Inline reveal برای Detail کوتاه یا Accordion.
2. Sheet برای Choice/Detail Contextual.
3. Full page برای Preference بلند، Form یا Content پایدار.

**Rule candidate:** سطح بعدی فقط وقتی باز شود که تصمیم کاربر نیاز به Detail بیشتر دارد؛ Summary انتخاب به صفحه مادر برگردد.

**Confidence:** High؛ هم‌راستا با `BN-P-003`.

### `BN-UI-C-022` — Context navigation پایدار می‌ماند

**Observed fact:** Rootها Bottom nav ثابت دارند؛ Detailها Back و Action context را نگه می‌دارند؛ Sheetها Parent را زیر Scrim حفظ می‌کنند؛ Scroll settings عنوان بزرگ را به Compact app-bar تبدیل می‌کند.

**Rule candidate:** تغییر سطح نباید مقصد یا Context قبلی را مبهم کند.

**Confidence:** High.

### `BN-UI-C-023` — Analytical report یک استثنای آگاهانه است

**Observed fact:** Assets report برخلاف Assets daily list، Canvas خاکستری، Cardهای سفید بزرگ، Chart/Calendar/Donut و Illustration داخلی دارد.

**Rule candidate:** Card-heavy layout فقط وقتی Moduleها منطق و کنترل مستقل دارند؛ این استثناء نباید به Home یا List ساده تعمیم داده شود.

**Confidence:** High.

### `BN-UI-C-024` — Content و Social الگوی پایه Product UI نیستند

**Observed fact:** Square/Discover و Campaignها از Feed card، Image و Floating create action استفاده می‌کنند.

**Rule candidate:** Patternهای Content/Community فقط برای محتوای مشابه منتقل می‌شوند و نباید مبنای Form، Asset یا Settings شمش باشند.

**Confidence:** High.

## ماتریس انتخاب Container

| سؤال | اگر «بله» | Container محتمل |
|---|---|---|
| آیا تغییر فوری، برگشت‌پذیر و در همان View قابل فهم است؟ | Tab، Switch، Accordion، Segmented | Inline |
| آیا تصمیم فقط برای تکمیل صفحه مادر است و Parent باید حفظ شود؟ | Add funds، Select history، Choose network | Bottom sheet |
| آیا انتخاب بلند است ولی هنوز Contextual است؟ | Search/List/Accordion بلند | Tall/Full-height sheet |
| آیا Task یک Object مستقل، Form بلند، Deep link یا Result پایدار دارد؟ | Settings، KYC، Bank form، Asset detail | Full page |
| آیا فقط یک توقف کوتاه و تصمیم پرریسک وجود دارد؟ | Restriction، Blocked، Session expired | Center modal |
| آیا کاربر منتظر عملیات غیرتعاملی است؟ | Verifying، Processing | Minimal page/sheet state |

## ماتریس Surface، Border و Divider

| نیاز | راه‌حل غالب | استفاده‌نشدن عمدی |
|---|---|---|
| جداسازی Sectionهای ساده | Whitespace + Section label | Card wrapper |
| جداسازی گروه‌های Settings | Divider سراسری یا تغییر Surface بسیار ظریف | Border دور هر Row |
| Field ورود/Select | Filled-gray surface | Border سنگین |
| Choice مستقل | White card + faint border | Filled field بدون نشانه Choice |
| Object/Payment/Security method | Card با نام، State و Action | Flat row اگر اطلاعات داخلی مهم است |
| List داده تکرارشونده | Grid alignment + whitespace | Card برای هر Row |
| Report module مستقل | White rounded card روی Gray canvas | Flat section در صورت کنترل مستقل |
| Overlay | White elevated surface + Scrim | رنگ پس‌زمینه ساختاری |

## ماتریس Title

| Context | Title pattern | توضیح |
|---|---|---|
| Root tab | بدون Title مستقل یا Anchor محتوایی | Home با Metric؛ Markets/Assets با Tab |
| Utility root | Large title ابتدای Scroll | Settings/Privacy |
| Utility scrolled | Compact centered app-bar title | Large title Collapse می‌شود |
| Object detail | Compact title + Context/value | BTC/USDT، Assets history |
| Task/Form | Large left title + Subtitle | KYC، Password، Login sheet |
| Bottom sheet menu | Short title بالای List | Add Funds، Select History |
| Center modal | Outcome/Risk title داخل Dialog | Account Restrictions |
| Processing | بدون Title یا پیام مرکزی | Verifying/Processing |

## Component taxonomy مشاهده‌شده

| خانواده | Componentهای تکرارشونده | Stateهای مشاهده‌شده | نکته |
|---|---|---|---|
| Navigation | Root bottom nav، App bar، Back، Close، Collapsing title | Default/Active/Scrolled | Root و Task shell یکسان نیستند |
| Tabs | Primary tab، Secondary tab، Segmented toggle | Active/Inactive | Indicator زرد باریک؛ Tab بدون Card wrapper |
| Metrics | Hero balance، Equivalent، PNL، Delta pill | Visible/Hidden/Positive/Negative | یک Anchor عددی در هر View |
| Actions | Primary، Secondary، Text link، Buy/Sell pair، Icon action | Default/Pressed/Disabled/Loading | CTA زرد؛ Secondary خاکستری/Outline |
| Lists | Setting row، Asset row، History row، Data pair | Default/Selected/Status | Grid و Alignment مهم‌تر از Border |
| Choices | Choice card، Radio-like row، Payment object، Network object | Default/Selected/Disabled/Completed | Border/Check/Status برای استقلال Item |
| Inputs | Text field، Password، Select، Search، Amount | Empty/Filled/Focus/Disabled/Error | Filled-gray surface؛ Helper نزدیک Field |
| Feedback | Info panel، Warning، Toast، Modal، Processing، Result، Receipt | Info/Warning/Error/Success/Pending | Result و Receipt Template جدا دارند |
| Overlays | Short sheet، Tall sheet، High auth sheet، Center modal | Open/Selected/Expanded | ارتفاع Sheet تابع محتواست |
| Data viz | Sparkline، Line/Candle chart، Donut، Calendar، Distribution bar | Range/Mode/Empty | Report exception Card-heavy است |
| Content | Promo banner، Home tile، Social card، Illustration | Dismissed/Expanded/Empty | خارج از Product UI پایه مگر Context مشابه |

## Evidence index این نسخه

- [Home](https://mobbin.com/flows/cf688b7d-77fa-4231-aa1c-57f1f79b59d4)
- [Settings](https://mobbin.com/flows/49c585a7-877f-420e-a7b5-432da8bb06f6)
- [Privacy Center](https://mobbin.com/flows/b06e011d-342b-45fd-b6bb-dfbd6a82feaf)
- [Logging in](https://mobbin.com/flows/fd12b82b-5719-4580-b81f-4adc6755c427)
- [Onboarding](https://mobbin.com/flows/c801a715-f530-4db5-a5e7-c214a129fd7d)
- [Markets](https://mobbin.com/flows/e656dc0d-efe5-4592-857d-da8218c00478)
- [Coin detail](https://mobbin.com/flows/e15bb0c1-01c2-4365-827d-e42e101266ac)
- [Overview Assets](https://mobbin.com/flows/6198373a-3786-4fc1-97a5-3729972017d6)
- [Assets history](https://mobbin.com/flows/a2dc5366-e2c9-4551-8701-718264045a3f)
- [Assets report](https://mobbin.com/flows/8f84b566-e945-4c9a-98b7-294fdca74c4c)
- [Spot Trade](https://mobbin.com/flows/bc38bca9-9437-4e55-91a1-03211d12f0fe)
- [Convert](https://mobbin.com/flows/b1659013-18d9-4af4-8b73-4430f425fd02)
- [Verifying account](https://mobbin.com/flows/751cb937-9513-4233-bf22-09024607475b)
- [Unlocking account](https://mobbin.com/flows/4a2b4aee-ce77-42b6-98a5-e90b19a939fb)
- [Updating password](https://mobbin.com/flows/68c0f11e-acd8-4677-b3aa-0847a1a1f0e6)
- [Adding payment method](https://mobbin.com/flows/fd0be83b-48f1-4f88-ab6d-98a019db1bbb)
- [Payment methods](https://mobbin.com/flows/39f9e611-d5b9-4930-b88d-3450adf65bfe)
- [On-chain deposit](https://mobbin.com/flows/20a19a2c-7a22-4024-ad3d-7e243a3928a7)
- [Buy with card](https://mobbin.com/flows/38f20cb8-7bc0-40c2-9576-2bd69858aee1)
- [Generating transaction records](https://mobbin.com/flows/ff654b02-8cb4-4ad9-860f-a9908fb5f084)

## Evidence gap و کار باقی‌مانده

- Union سراسری Screen ID میان چهار Batch ساخته نشده است؛ عدد ۱۵۸ فقط جمع Uniqueهای درون-Batch است.
- Help & Support و چند Flow Privacy/Notification فقط Preview-reviewed هستند و هنوز در Matrix شواهد تفصیلی ندارند.
- اندازه دقیق Typography، Spacing، Radius، Icon و Touch target از Screenshot قابل‌اثبات نیست و باید Qualitative بماند.
- Error/Offline/Timeout در همه خانواده‌ها پوشش یکنواخت ندارد.
- Behaviorهای iOS مانند Keyboard، Dynamic Type، VoiceOver و Gesture از Screenshot به‌تنهایی اثبات نمی‌شوند.
- Patternهای Home قدیم/جدید بایننس ممکن است بین Snapshotها تغییر کرده باشند؛ Rule فقط برای Snapshot مشاهده‌شده معتبر است.

## Gate

- Cross-batch language matrix v0.1: `Complete as synthesis / G3 proof complete`.
- Foundation/Component exact specification: `Needs revision` تا G4 mapping، اندازه‌گیری مستقل و آزمون RTL/PWA.
- انتقال به شمش یا ویرایش وایرفریم: `Requires G4 global mapping; not authorized by this document`.
