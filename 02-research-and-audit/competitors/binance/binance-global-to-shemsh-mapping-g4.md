# نگاشت سراسری Patternهای بایننس به شمش — G4

وضعیت: `Complete as candidate mapping / Owner review required / No UI transfer yet`

تاریخ: ۲۶ مرداد ۱۴۰۵ / 17 Aug 2026

تصمیم روش: D-163

## هدف و مرز

این سند `BN-P-009..029` و توسعه‌های سراسری `BN-P-003/007` را با Prototype مرجع شمش و Design System فعلی مقایسه می‌کند. خروجی، قرارداد Candidate برای Review است؛ نه تصمیم نهایی هویت بصری، نه مجوز تغییر وایرفریم و نه مجوز Promote/Demote در Figma.

- **Observed fact:** ساختار و رفتار مرجع شمش در [`multi-metal-waves-1-and-3-wireframe.html`](../../../06-wireframes-and-testing/artifacts/multi-metal-waves-1-and-3-wireframe.html) باقی می‌ماند.
- **Observed fact:** Pilot موجود `multi-metal-waves-1-and-3-binance-alignment-pilot.html` در این مرحله تغییر نکرد.
- **Observed fact:** Foundations فعلی `Black-neutral / Candidate / Not Stable` است؛ Radius، Elevation و قراردادهای Overlay هنوز نهایی نیستند.
- **Design assumption:** نظم سفید، سلسله‌مراتب عددی، Flat row و Grouping انتخابی بایننس برای شمش مفید است؛ رنگ زرد، Taxonomy کریپتو و اندازه‌های دقیق آن منتقل نمی‌شوند.
- **Risk:** اسکرین‌شات iOS مقدار دقیق Token، رفتار PWA/RTL، Dynamic Type، Keyboard و Screen reader را اثبات نمی‌کند.

## روش تصمیم

اولویت تعارض:

1. قواعد بیزینس، امنیت، دسترس‌پذیری و تصمیم‌های قطعی شمش.
2. ساختار و رفتار تأییدشده وایرفریم شمش.
3. Design System فعلی به‌عنوان Candidate قابل اصلاح.
4. Pattern بایننس به‌عنوان Evidence و پیشنهاد.

معنای تصمیم‌ها:

- `Adopt`: منطق Pattern برای شمش مناسب است و فقط Localization/Accessibility عادی لازم دارد.
- `Adapt`: منطق حفظ می‌شود اما Container، برند، RTL، PWA، مدل چندفلزی یا قواعد مالی شمش آن را تغییر می‌دهد.
- `Reject`: Pattern با محصول یا اصول شمش ناسازگار است.
- `Defer`: نیاز یا Scope هنوز برای تصمیم انتقال کافی نیست.

## خلاصه نتیجه

| دامنه | تعداد | Adopt | Adapt | Reject | Defer |
|---|---:|---:|---:|---:|---:|
| Patternهای تازه `BN-P-009..029` | ۲۱ | ۹ | ۱۱ | ۰ | ۱ |
| توسعه‌های `BN-P-003/007` | ۲ | ۰ | ۲ | ۰ | ۰ |
| کل این Gate | ۲۳ | ۹ | ۱۳ | ۰ | ۱ |

نتیجه کلی: منطق مینیمال و سازمان‌دهی بایننس عمدتاً قابل‌انتقال است، اما بیشتر آن باید برای PWA فارسی، قراردادهای فعلی شمش و هویت چندفلزی Adapt شود. تنها مورد Deferred، الگوی Report تحلیلی Card-heavy است چون چنین ماژولی در Scope قطعی Release فعلی شمش وجود ندارد.

## ماتریس نگاشت سراسری

| Mapping ID | Pattern | مقصد شمش | وضعیت فعلی شمش | اثر Design System | تصمیم | Change type | وابستگی / ریسک | Review مالک |
|---|---|---|---|---|---|---|---|---|
| `G4-G-003X` | `BN-P-003` Progressive disclosure — توسعه سراسری | جزئیات کوتاه، Picker، تنظیمات و فرم‌های پایدار | Sheet برای Contextهای کوتاه وجود دارد؛ بعضی مقصدهای پایدار حساب نیز در Sheet باز می‌شوند | Disclosure + Overlay/Page decision tree | `Adapt` | `Recalibrate` | Focus return، Back و Desktop counterpart | Pending |
| `G4-G-007X` | `BN-P-007` White base/grouping — توسعه سراسری | همه صفحه‌های Product UI | Canvas فعلی خاکستری کم‌رنگ و `.card` پیش‌فرض دارای Border است | Surface/Border/Divider/Spacing/Elevation | `Adapt` | `Recalibrate` | مقدار دقیق Token در G5 تعیین شود | Pending |
| `G4-G-009` | `BN-P-009` Four interaction containers | Inline / Sheet / Page / Modal | هر چهار شکل وجود دارد، اما معیار انتخاب صریح نیست | قرارداد Container و Navigation | `Adapt` | `Add` | PWA موبایل و Desktop progressive enhancement | Pending |
| `G4-G-010` | `BN-P-010` Sheet for context, page for ownership | کیف، فیلتر، انتخاب فلز، حساب، تنظیمات، Support | Wallet/Filter مناسب‌اند؛ Personal info/Notification/Support/Install/About با مقصدهای پایدار در Sheet مخلوط شده‌اند | Bottom Sheet، App Bar، Page shell | `Adapt` | `Recalibrate` | IA حساب و عمق هر مقصد | Pending |
| `G4-G-011` | `BN-P-011` Adaptive-height sheet | انتخاب‌ها، فیلتر، Breakdown و Contextual help | Sheet عمومی `72%` و نوع بلند `92%` دارد؛ ارتفاع بیشتر Variantمحور است تا محتوامحور | Sheet sizes، Scroll، Sticky footer | `Adapt` | `Recalibrate` | Keyboard، Safe area، Focus trap/return | Pending |
| `G4-G-012` | `BN-P-012` Single-decision interrupt modal | تأیید تغییر فلز، خروج با داده، محدودیت حساس | Dialog تغییر فلز نمونه مناسب یک تصمیم کوتاه است | Dialog/AlertDialog contract | `Adopt` | `Keep` | حداکثر دو Action؛ عدم استفاده برای Form/List | Pending |
| `G4-G-013` | `BN-P-013` Selective card taxonomy | خانه، حساب، فرم‌ها، رسید، انتخاب بانکی | Card برای بسیاری از Sectionها و Formها Wrapper پیش‌فرض است | تفکیک Choice/Object/Module از Surface و Flat group | `Adapt` | `Split` | Cardهای اعتماد/مدرک باید استقلال Object را حفظ کنند | Pending |
| `G4-G-014` | `BN-P-014` Three-level title hierarchy | Root، Detail/Utility، Task flow | Header سه‌Slot D-140 روشن است؛ `page-lead` تقریباً در همه مقصدها تکرار می‌شود | App Bar title، Page lead، Section heading | `Adapt` | `Recalibrate` | Title فارسی راست‌چین؛ Header مرکزی D-140 حفظ شود | Pending |
| `G4-G-015` | `BN-P-015` Tabs define peer scope | Market/History tabs، Asset tabs، Buy/Sell | Tab، Asset selector و Segmented direction ممکن است ظاهراً هم‌خانواده شوند | Tabs / Segmented / Asset selector taxonomy | `Adapt` | `Split` | D-152/D-157؛ Indicator بایننس قانون عمومی نیست | Pending |
| `G4-G-016` | `BN-P-016` Flat aligned data row | تاریخچه، حساب، تنظیمات، بازار، Breakdown | Activity row مناسب است؛ Profile/Settings اغلب داخل Card wrapper هستند | List Item + Key-value Row + Group divider | `Adopt` | `Recalibrate` | Grid RTL و اعداد LTR/Tabular | Pending |
| `G4-G-017` | `BN-P-017` Semantic color restraint | همه Product UIها | Black-neutral و Status semantic موجود؛ Accent فلز باز است | Color roles و منع رنگ ساختاری | `Adapt` | `Keep` | D-115/D-141/OQ-056؛ Delta با Success/Error یکی نشود | Pending |
| `G4-G-018` | `BN-P-018` One primary action | Flowهای مالی، KYC، Empty state | اصل ۴ DS و بیشتر Flowها هم‌راستا هستند | Button hierarchy و Action map | `Adopt` | `Keep` | دوشاخه واقعی Buy/Sell استثناست | Pending |
| `G4-G-019` | `BN-P-019` Task-dependent bottom action | Full-page flow، Sheet، Root، Hub، Module | D-144 همین تفکیک را تا حد زیادی تعریف کرده است | Bottom action / Sheet footer / Module action | `Adopt` | `Keep` | محتوا و Keyboard نباید پشت Action پنهان شوند | Pending |
| `G4-G-020` | `BN-P-020` Filled field, bordered choice | Formها، Search، انتخاب کارت/شبکه/فلز | Inputهای Prototype سفید و Borderدارند؛ Choiceها نیز Borderدارند | Input surface + Choice row states | `Adapt` | `Recalibrate` | Amount hero استثنای Composition؛ Contrast/Focus مستقل | Pending |
| `G4-G-021` | `BN-P-021` Helper near control, instruction in panel | KYC، Password، Deposit، Delivery، Trade | Helper نزدیک Field وجود دارد؛ Note/Alert/long copy گاهی نقش‌های مخلوط دارند | Helper text / Info panel / Alert taxonomy | `Adopt` | `Split` | Risk عملیاتی باید در Panel و Error در Context بماند | Pending |
| `G4-G-022` | `BN-P-022` Soft warning, localized error | اختلال نرخ، محدودیت، Form error، Negative delta | Alert و رنگ‌های semantic موجود؛ `negative` گاهی Delta و Error را مشترک می‌کند | Warning surface، Error text، Financial delta | `Adapt` | `Split` | رنگ تنها حامل معنا نباشد | Pending |
| `G4-G-023` | `BN-P-023` Minimal processing | معامله، پرداخت، KYC/Liveness، ساخت رسید | Processing معامله Indicator + Title + توضیح دارد و در Card داخلی است | Processing pattern + Progress + announcement | `Adopt` | `Recalibrate` | Cancel/Timeout فقط با قرارداد امن همان Flow | Pending |
| `G4-G-024` | `BN-P-024` Outcome result vs evidence receipt | Result معامله/پرداخت/تحویل و Receipt تاریخچه | Result و «مشاهده رسید کامل» از هم جدا شده‌اند؛ بعضی Resultها هنوز شبیه Receipt کامل‌اند | Result template + Receipt shell | `Adopt` | `Split` | Receipt schema نوع‌محور بماند؛ Universal receipt ساخته نشود | Pending |
| `G4-G-025` | `BN-P-025` One numeric anchor | خانه، دارایی، جزئیات فلز، Breakdown | Home پشت‌سرهم Total، Cardهای فلز و Wallet عددهای هم‌وزن دارد | Metric hierarchy / Numeric typography | `Adapt` | `Recalibrate` | «یک Anchor در هر View/Module»، نه حذف اطلاعات ضروری | Pending |
| `G4-G-026` | `BN-P-026` Layout-stable privacy masking | Total، هر فلز، Wallet، شناسه‌ها | چشم مستقل D-150 و Mask وجود دارد؛ قرارداد Geometry/Screen reader کامل نیست | Masked Value utility + Scoped toggle | `Adapt` | `Add` | نام‌گذاری Screen reader و جلوگیری از Layout shift | Pending |
| `G4-G-027` | `BN-P-027` Context-preserving navigation | Detail، Chart، Sheet، Login/KYC return، Filter | Header/Back و Deep-link return تعریف شده‌اند؛ حفظ Scroll/Filter/Form باید Contract شود | Navigation state contract | `Adopt` | `Keep` | History API، Back مرورگر و Refresh PWA | Pending |
| `G4-G-028` | `BN-P-028` Analytical report exception | Portfolio analytics/report | Report تحلیلی مستقل در Scope قطعی فعلی نیست | Report composition فقط در صورت نیاز | `Defer` | `Defer` | Scope و Job واقعی کاربر | Pending |
| `G4-G-029` | `BN-P-029` Content/social boundary | Campaign slider و محتوای مارکتینگ Home | Campaign وجود دارد؛ Feed/Social/Create در محصول شمش وجود ندارد | Promo Banner جدا از Product Card | `Adopt` | `Split` | محتوا زیر مالکیت Marketing و مزاحم تصمیم مالی نشود | Pending |

## قرارداد Candidate ظرف تعامل

این Decision tree جایگزین «هر چیزی که کوتاه است Sheet شود» می‌شود:

| سؤال | اگر پاسخ مثبت است | Container Candidate | نمونه شمش |
|---|---|---|---|
| آیا تغییر فوری، برگشت‌پذیر و در همان Context است؟ | بله | `Inline` | Tab هم‌سطح، Switch، Accordion، انتخاب بازه نمودار |
| آیا کاربر برای تکمیل صفحه مادر یک انتخاب/اطلاعات مکمل می‌خواهد؟ | بله | `Bottom Sheet` موبایل؛ `Popover/Dialog` وب | اقدام کیف، فیلتر تاریخچه، انتخاب کارت، Breakdown کوتاه |
| آیا Task مالک URL/History، فرم طولانی، نتیجه پایدار یا Navigation داخلی است؟ | بله | `Full Page` | اطلاعات شخصی، تنظیمات اعلان، امنیت، Support hub، Receipt |
| آیا جریان کوتاه باید تصمیم جاری را قطع کند و حداکثر دو Action دارد؟ | بله | `Center Modal / AlertDialog` | تأیید تغییر فلز و پاک‌شدن مبلغ، محدودیت امنیتی |

قواعد مشترک:

- Sheet کوتاه/بلند Component جدا نیست؛ یک خانواده با ارتفاع تطبیقی، Scroll body و Footer ثابت است.
- ارتفاع محتوا تنها معیار Sheet/Page نیست؛ «مالکیت Task و Context بازگشت» معیار اصلی است.
- Back مرورگر، Escape، Focus trap، Focus return، Safe area و Keyboard برای Overlay اجباری‌اند.
- Sheet موبایل روی وب عریض خودکار Full-width نمی‌شود؛ بسته به Job به Popover، Dialog یا Page تبدیل می‌شود.

## Foundation gap analysis

| Foundation | وضعیت فعلی | قرارداد Candidate پس از G4 | اقدام G5 | وضعیت |
|---|---|---|---|---|
| Canvas/Surface | Canvas کاندید `#FAFAFA`، Surface سفید؛ Prototype بیشتر Main را `subtle` می‌کند | Product UI با Surface سفید غالب؛ Neutral کم‌رنگ فقط برای Field، Panel و Grouping انتخابی | تست White vs near-white در Home/Assets/Trust | `Recalibrate` |
| Grouping | Card/Border Wrapper پیش‌فرض در بسیاری صفحه‌ها | ترتیب حل: Whitespace → Label → Divider/Surface → Border/Card → Overlay elevation | ساخت نردبان مصرف و مثال Do/Don't | `Add contract` |
| Border/Divider | Border روی `.card` و Input رایج؛ Divider Candidate موجود است | Divider برای Rowهای هم‌نوع؛ Border برای Choice/Object/Interactive boundary | تعیین توکن‌های Subtle/Strong و Inset | `Recalibrate` |
| Card taxonomy | Inventory می‌گوید Card عمومی ساخته نشود، ولی Prototype Wrapper عمومی دارد | فقط `Choice card`، `Object card` و `Module surface`؛ List/Form group Flat | ممیزی مصرف و حذف Wrapperهای تزئینی در Pilot | `Split` |
| Radius | ۱۰/۱۴/۱۸ فقط شاهد؛ Sheet ۲۲ در Prototype | مقیاس محدود براساس نقش: Control، Container، Overlay؛ نه یک Radius برای همه | تعیین مقدار پس از تست فارسی/Touch/Brand | `Defer exact value` |
| Elevation | Raised/Overlay/Modal Draft؛ Cardها عمدتاً Border دارند | Elevation فقط Overlay و Surface واقعاً روی‌هم؛ Card عادی بدون Shadow نمایشی | نمونه Light/Dark و State overlap | `Recalibrate` |
| Typography/Title | Yekan Bakh Candidate؛ `page-lead` و Header هم‌زمان استفاده می‌شوند | سه Tier: Root anchor، App-bar detail، Task title+subtitle؛ Section title کوچک‌تر | ماتریس Type role و تست RTL/Dynamic Type | `Recalibrate` |
| Color | Black-neutral + Status semantic؛ Metal accent باز | Neutral ساختار را می‌سازد؛ Status/Delta/Accent نقش محدود و با Label/Icon | تفکیک Financial delta از Feedback status | `Keep + split` |
| Numeric hierarchy | چند عدد هم‌وزن در Home و بعضی Cardها | یک Anchor در هر View/Module؛ Equivalent/Unit/PNL ثانویه | تست Home/Assets با محتوای مخفی و نرخ ناقص | `Recalibrate` |
| Density/Spacing | ریتم ۴/۸ Draft؛ Card paddingهای محلی متعدد | ریتم عمودی از Section و Row می‌آید؛ Compact مالی بدون Touch target کوچک | تعریف Density tier برای Root/List/Form/Receipt | `Add contract` |

هیچ مقدار دقیق Spacing، Radius، Border width، Neutral یا Shadow از Screenshot بایننس کپی نمی‌شود. این مقادیر موضوع G5 و Pilot واقعی شمش‌اند.

## اثر روی Component inventory

| Component/Pattern | وضعیت فعلی | اقدام Candidate | دلیل |
|---|---|---|---|
| Bottom Sheet | Confirmed / Draft | `Recalibrate` | ارتفاع تطبیقی، Scroll body، Footer، Focus و Desktop counterpart لازم است |
| Dialog | Confirmed / Draft | `Keep + constrain` | فقط وقفه کوتاه یک‌تصمیمی؛ Form/List طولانی ممنوع |
| Top App Bar | Confirmed / پس از Layout rule | `Recalibrate` | سه Slot D-140 حفظ و Title tier به آن متصل شود |
| Tabs | Confirmed / مصرف‌محور | `Split taxonomy` | Tabs هم‌سطح از Asset selector و Buy/Sell segmented جدا شود |
| List Item | Confirmed / Anatomy باز | `Prioritize` | حساب، تنظیمات، تاریخچه و Market باید Flat row مشترک داشته باشند |
| Key-value Row | Confirmed | `Keep` | Breakdown و Receipt به alignment مشترک نیاز دارند |
| Card | عمداً Component عمومی نیست | `Keep guardrail` | سه Composition محدود Choice/Object/Module مستند شود |
| Text/Search Input | Candidate | `Recalibrate surface only` | Geometry/State فعلی حفظ؛ Surface/Border در G5 تست شود |
| Amount Input | Candidate | `Keep scoped exception` | Amount hero نباید مجبور به ظاهر Field عمومی شود |
| Alert | Candidate | `Split usage` | Helper، Soft warning، Operational panel و Error نقش‌های جدا دارند |
| Result | Domain pattern موجود | `Define template` | Outcome و Next step؛ جزئیات مدرکی را به Receipt واگذار کند |
| Receipt Shell | Domain pattern موجود | `Keep type-specific` | Shell محدود؛ Schema هر عملیات جدا بماند |
| Processing | Progress/Spinner موجود | `Add composition` | Indicator + پیام لازم + Recovery امن و Announce |
| Masked Value | Utility کامل ندارد | `Add` | Geometry ثابت، Scope نزدیک و نام‌گذاری دسترس‌پذیر |
| Promo Banner | در Inventory پایه صریح نیست | `Add as content composition` | از Product card جدا و زیر مالکیت محتوا/مارکتینگ |

**Observed fact:** Button، Icon Button، Checkbox، Radio، Switch، خانواده Input، Alert و Toast فعلی در این Gate حذف یا Demote نمی‌شوند. G4 فقط محل مصرف و قرارداد Composition آن‌ها را روشن می‌کند.

## اثر روی Compositionها

### Home / Assets

- **Observed fact:** Home فعلی Total، چند Card فلز و Wallet را پشت سر هم با چند Anchor عددی نمایش می‌دهد؛ همین تراکم یکی از دلایل نارضایتی Review اخیر بود.
- **Candidate:** یک Anchor اصلی برای خلاصه Home؛ دارایی‌های فلز و Wallet با وزن ثانویه و مقایسه‌پذیر، بدون تکرار Label/Equivalent غیرضروری.
- **Candidate:** Card فقط برای Object مستقل یا Module واقعاً قابل ورود؛ Shortcut و Row ساده بدون قاب بیرونی پیش‌فرض.
- **Candidate:** Mask هر Scope هندسه را ثابت نگه دارد و استقلال D-150 را حفظ کند.
- **Guardrail:** تصمیم‌های D-139، D-147، D-149، D-159 و مدل چندفلزی تغییر نمی‌کنند؛ این Mapping مجوز طراحی چیدمان نهایی Home نیست.

### Asset detail / Chart

- یک عدد Anchor (موجودی یا قیمت متناسب با Job)، سپس Equivalent/PNL و Metadata.
- Summary chart در Detail و Chart کامل در مقصد مستقل D-121 حفظ می‌شود.
- Tab فقط Scope هم‌سطح را عوض می‌کند؛ بازه Chart Filter/Segmented است، نه Tab ناوبری.

### Trade

- هشت Mapping قبلی `G4-M-001..008` معتبر می‌مانند.
- توسعه‌های Container، Grouping، Processing و Result/Receipt قرارداد قبلی را کامل می‌کنند و تصمیم D-157/D-158 را جایگزین نمی‌کنند.

### History / Receipt

- History از Flat aligned row، فیلتر Contextual در Sheet و حفظ Filter/Scroll استفاده می‌کند.
- Result پاسخ «چه شد و قدم بعدی چیست؟» است؛ Receipt پاسخ «چه چیزی، چه زمانی، با چه نرخ/مبلغ/کد و چه Status ثبت شد؟» است.
- Receipt Object مستقل است و Card/Border می‌تواند برای Evidence توجیه داشته باشد؛ Universal receipt ساخته نمی‌شود.

### Services / Account / Settings

- Hub خدمات می‌تواند مقصدهای هم‌سطح داشته باشد، اما همه Tileها Primary یا Card سنگین نمی‌شوند.
- Profile و Settings از Section caption + Flat rows + Divider استفاده می‌کنند.
- اطلاعات شخصی، امنیت، اعلان، Support و Legal که مقصد پایدار و History مستقل دارند Candidate صفحه کامل‌اند؛ Toggle/Picker کوتاه در Context می‌تواند Sheet بماند.

### Auth / KYC / Payment / Deposit

- Task title + subtitle، یک CTA اصلی و Form بدون Card wrapper تزئینی.
- Field عمومی Filled/soft-surface و Choice بانکی/روش پرداخت White/bordered Candidate است؛ Amount hero استثنا دارد.
- Helper نزدیک Field؛ Instruction و ریسک عملیاتی چندخطی در Panel جدا؛ Error به Field/Action مربوط محدود می‌ماند.
- Processing مینیمال و Result/Receipt جداست؛ Success زودهنگام مجاز نیست.

### Trust / Licenses / Physical receipt

- مدرک، مجوز، رسید و Tracking Object مستقل‌اند و Card در این Context توجیه دارد.
- هر ادعا باید صادرکننده، زمان، Status و منبع قابل پیگیری داشته باشد؛ رنگ یا Badge جای Evidence را نمی‌گیرد.
- این Composition Pilot دوم پس از Home/Assets است تا «مینیمالیسم» باعث حذف شواهد اعتماد نشود.

### Campaign / Content

- Campaign slider یک Composition محتوایی جدا از Product UI است.
- Feed اجتماعی، Floating create، Social card و Taxonomy محتوایی بایننس وارد شمش نمی‌شوند.
- Promotion نباید بالاتر از عدد مالی، خطا، CTA یا Evidence اعتماد وزن بگیرد.

## Gap register اولویت‌دار

| اولویت | Gap | نوع | خروجی بعدی | Gate |
|---|---|---|---|---|
| P0 | Surface/Grouping ladder نهایی نشده | Foundation | G5 Visual Direction Contract | Owner review |
| P0 | Card/Flat row/Choice/Object مرز مصرف روشن ندارد | Component/Composition | G5 + Home/Assets pilot spec | Owner review |
| P0 | Title hierarchy با Header D-140 یکپارچه نشده | Foundation/Navigation | G5 title contract | Owner review |
| P0 | Numeric anchor و Privacy در Home قرارداد اجرایی ندارند | Data/Composition | Home/Assets pilot spec | OQ-055 فقط روی اعداد نهایی اثر دارد |
| P1 | Sheet/Page/Modal decision tree در DS ثبت نشده | Interaction | Overlay contract | Keyboard/Focus/Desktop QA |
| P1 | Result/Receipt/Processing Anatomy کامل نیست | State/Domain | Trust/Receipt pilot spec | قواعد نوع‌محور هر Flow |
| P1 | Input surface و Choice treatment با Candidate فعلی آزموده نشده | Component | G5 token test | حفظ State/Geometry موجود |
| P1 | Financial delta از Feedback status کامل جدا نشده | Color/Data | Semantic token review | OQ-056 برای Accent/Chart |
| P2 | Report تحلیلی Scope ندارد | Composition | Defer | تصمیم محصول |

## پیشنهاد ترتیب اجرای بعدی

1. ~~Review مالک محصول روی ۲۳ Mapping و چهار موضوع حساس~~ — عبور به G5 با D-177 تأیید شد.
2. ~~تدوین `G5 Visual Direction Contract`~~ — نسخه ۰.۱ به‌عنوان Candidate کامل شد.
3. ساخت Pilot غیرمخرب `Home / Assets` در کپی مستقل براساس Test matrix قرارداد G5.
4. ساخت Pilot `Trust / Receipt` برای سنجش Evidence، Result/Receipt، Status و Support.
5. بازنگری Foundation Candidate و Component consumption در Duplicate Figma؛ فایل اصلی دست‌نخورده بماند.

## Acceptance گیت G4 سراسری

- [x] هر ۲۱ Pattern تازه تصمیم `Adopt / Adapt / Reject / Defer` دارد.
- [x] توسعه‌های `BN-P-003/007` جداگانه به Scope سراسری نگاشت شده‌اند.
- [x] اثر روی Foundation، Component و Composition ثبت شده است.
- [x] شکاف‌های Prototype فعلی با شاهد محلی ثبت شده‌اند.
- [x] هیچ مقدار دقیق Token از Screenshot رقیب به‌عنوان قانون وارد نشده است.
- [x] هیچ تغییر تازه‌ای روی وایرفریم یا Figma انجام نشده است.
- [x] وابستگی‌ها و Owner review روشن‌اند.

## Gate

- G4 global mapping: `Complete as candidate mapping`.
- Owner decision: `Approved to proceed to G5 — D-177`؛ Rowها همچنان Candidate انتقال‌اند، نه قانون Stable.
- G5 Visual Direction Contract: `Complete as Candidate` در [`visual-direction-contract-g5-v0.1.md`](../../../07-design-system/visual-direction-contract-g5-v0.1.md).
- Home/Assets و Trust/Receipt Pilot: `Not started / no transfer before G5 contract`.
