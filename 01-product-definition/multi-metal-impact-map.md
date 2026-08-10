# Impact Map بازتنظیم چندفلزی

وضعیت: `Complete / Sufficient to proceed to product-model revision`

تاریخ: ۱۷ مرداد ۱۴۰۵ / 8 Aug 2026

تصمیم‌های مرجع: D-105 تا D-115

دامنه: مراحل ۳ تا ۷؛ خروجی‌های مرحله ۱ در `multi-metal-scope-rebaseline.md` و `multi-metal-design-decision-list.md` مبنا هستند.

## هدف

مشخص‌کردن اینکه پس از تبدیل شمش به پلتفرم طلا، نقره و مس با ظرفیت رشد تا حدود ۱۶ فلز، کدام خروجی‌های قبلی قابل حفظ‌اند، کدام باید اصلاح شوند و کدام قراردادهای طلامحور باید جایگزین شوند؛ بدون حذف تاریخچه یا بازسازی بی‌دلیل بخش‌های سالم.

## راهنمای وضعیت

| وضعیت | معنی اجرایی |
|---|---|
| `Keep` | رفتار و قرارداد اصلی معتبر است؛ فقط ممیزی واژه‌ها یا اتصال به مدل تازه لازم است |
| `Revise` | سند/خروجی حفظ می‌شود، اما بخش‌های اثرپذیر باید با مدل چندفلزی اصلاح و دوباره Gate شوند |
| `Replace` | قرارداد فعلی دیگر منبع حقیقت نیست؛ خروجی تاریخی حفظ می‌شود و نسخه دارایی‌محور جای آن را می‌گیرد |
| `Add` | خروجی یا موجودیت تازه برای جلوگیری از Hard-code و پوشش نیاز چندفلزی لازم است |

## قواعد تغییر

- Release اول دقیقاً سه فلز دارد؛ مقیاس حدود ۱۶ فلز الزام معماری است، نه تعهد عرضه.
- هیچ ترتیب، Selector، Filter، Chart یا Capability با سه گزینه ثابت Hard-code نمی‌شود.
- قواعد مشترک فقط چیزهای واقعاً مشترک را حمل می‌کنند؛ دقت، نرخ، کارمزد، محدودیت، گرید و Capability از Asset config خوانده می‌شوند.
- Auth/KYC، نشست و ریل ریالی تا کشف تعارض حفظ می‌شوند.
- فایل تاریخی حذف نمی‌شود؛ `Replace` یعنی از دست‌دادن جایگاه منبع حقیقت، نه حذف فایل.
- OQ-058 پیش از اصلاح App Shell/معامله و OQ-059 پس از انتخاب ساختار اصلی Gate هستند.

## خلاصه اثر

| حوزه | Keep | Revise | Replace / Add |
|---|---:|---:|---:|
| مرحله ۳ — مدل محصول | ۳ | ۵ | ۵ |
| مرحله ۴ — معماری تجربه | ۰ | ۴ | ۲ |
| مرحله ۵ — فلوها | ۵ | ۷ | ۴ |
| مرحله ۶ — وایرفریم/تست | ۵ | ۵ | ۳ |
| مرحله ۷ — سیستم طراحی | ۶ | ۴ | ۶ |

اعداد بالا سطح «خانواده خروجی» هستند، نه تعداد فایل یا کامپوننت.

## مرحله ۳ — مدل محصول

| خروجی / قرارداد | وضعیت | آنچه حفظ می‌شود | تغییر لازم | Gate / منبع |
|---|---|---|---|---|
| هویت، Auth، KYC و Session | `Keep` | نقش‌ها، احراز، سن، نشست و Gate عملیات مالی | بررسی متن عمومی «عملیات فلزی» به‌جای «طلا» | D-092/D-093 |
| کیف تومانی، واریز و برداشت | `Keep` | Ledger ریالی، روش‌های واریز، status و بازیابی | اتصال به خرید هر Asset به‌جای فقط خرید طلا | D-103/D-104 |
| نقش‌ها و Permissionهای عمومی | `Keep + Revise` | Guest/Authenticated/KYC/Restricted | Permission قابلیت به‌صورت `assetId × capability` پیکربندی شود | D-114، OQ-054 |
| `capability-map.md` | `Revise` | دسته‌های بازار، معامله، دارایی، خدمات و اعتماد | قیمت/خرید/فروش/هشدار/تحویل برای سه فلز؛ انتقال هیچ فلزی؛ هدیه/اقساط/سایر Featureها بدون فرض انحصار تا OQ-054 | D-106/D-114/D-127 |
| `business-rules-source-of-truth.md` | `Revise` | مالک قانون، نسخه و منع عددسازی | BRهای واحد/دقت/گام/رسید از طلا جدا و Asset-aware شوند | D-112/D-115 |
| `domain-model.md` | `Replace` در بخش دارایی | Ledger به‌عنوان منبع حقیقت و مرز رزرو/قطعیت | جایگزینی Gold Wallet با Asset Catalog و Positionهای فلزی | D-106 تا D-113 |
| `feature-prioritization.md` | `Revise` | روش اولویت‌بندی کیفی و موجی | چندفلزی از «بعد Release» حذف؛ موج‌های فلزمحور و قابلیت هر فلز بازچینی شوند | D-111/D-114 |
| `dependencies-and-risks.md` | `Revise` | مدل مالک، موعد و کاهش ریسک | ریسک قیمت سه فلز، بهای تمام‌شده/P&L، کاتالوگ فیزیکی و مقیاس ۱۶ Asset افزوده شود | OQ-054/OQ-055/OQ-058 |
| پرسش‌نامه مالی | `Revise` | ساختار سؤال/مالک پاسخ | حداقل، گام، نرخ، کارمزد/مالیات و محدودیت به‌ازای هر فلز | OQ-033 |
| `AssetDefinition / MetalSpec` | `Add` | — | شناسه، نام، آیکن، ترتیب، واحد گرم، دقت، گرید، وضعیت بازار و قابلیت‌ها | D-110 تا D-115 |
| `AssetCatalog` | `Add` | — | کاتالوگ پیکربندی‌شونده برای ۳ تا حدود ۱۶ فلز؛ بدون Hard-code | D-111 |
| `UserMetalPosition` | `Add` | مفهوم موجودی/قابل استفاده/رزروشده | Position مستقل برای هر `userId × assetId` | D-106/D-108 |
| `AssetCapabilityMatrix` | `Add` | — | خرید، فروش، هشدار، هدف، هدیه، اقساط، انتقال و تحویل به‌ازای هر Asset | D-114، OQ-054 |
| `PortfolioValuation / CostBasis` | `Add` | — | ارزش هر فلز، ارزش کل ریالی، سود/زیان هر فلز و کل با منبع/فرمول معتبر | D-113، OQ-055 |

### قرارداد حداقلی موجودیت‌های تازه

| موجودیت | فیلدهای حداقلی لازم برای ادامه طراحی |
|---|---|
| `AssetDefinition` | `assetId`، نام فارسی، نماد/آیکن رسمی، `displayOrder`، واحد `g`، `displayPrecision`، گرید/عیار، status بازار |
| `AssetCapability` | `assetId`، نوع قابلیت، فعال/غیرفعال، دلیل/وابستگی، Deep Link مجاز |
| `MetalPosition` | `userId`، `assetId`، کل، قابل استفاده، رزروشده/قفل، زمان snapshot |
| `Quote` | `assetId`، buy/sell، نرخ، زمان اعتبار، اجزای کارمزد/مالیات، source status |
| `Order` | `assetId`، نوع، ورودی تومان/گرم، وزن، مبلغ، Quote، status و Ledger references |
| `Receipt` | نام/نماد، گرم، گرید، نرخ، کارمزد/مالیات، مبلغ نهایی، زمان و کد پیگیری |
| `PhysicalProduct` | `assetId`، محصول، گرید، وزن، موجودی/مرکز، هزینه و eligibility |

## مرحله ۴ — معماری تجربه

| خروجی | وضعیت | تغییر لازم | Gate |
|---|---|---|---|
| `journey-map.md` | `Revise` | Job سرمایه‌گذاری، مدیریت و فروش از طلا به Asset منتخب تعمیم یابد؛ دریافت فیزیکی برای هر سه فلز مسیر واقعی داشته باشد | OQ-054 |
| `information-architecture.md` | `Revise` | «دارایی» به Portfolio چندفلزی و Asset detail تبدیل شود؛ کاتالوگ و دسترسی مقیاس‌پذیر اضافه شود | D-111/D-113 |
| `navigation-model.md` | `Revise` | گزینه ۱ و قرارداد محلی قطعی‌اند: شل سه‌تبی، بازار داخلی، Template مشترک، مدل B معامله و State مستقل نمودار | D-120/D-121 |
| `content-model.md` | `Revise` | Asset definition، قیمت/Quote فلز-ویژه، Portfolio/P&L، Capability و Receipt چندفلزی افزوده شود | D-112 تا D-115 |
| الگوی دسترسی Asset | `Add` | مدل B انتخاب‌گر واحد + Sheet، پیش‌فرض Config-driven، آخرین انتخاب، Search، Unavailable و رفتار ۳ تا ۱۶ فلز | D-121 |
| الگوی Portfolio summary | `Add` | ارزش کل، سود/زیان کل، ردیف هر فلز با وزن/ارزش و ترتیب پایدار | D-113/OQ-055 |

### قراردادهای معماری که دیگر نهایی نیستند

- Card تک‌دارایی «صندوق طلا» منبع نهایی خانه نیست.
- نمایش یک نرخ/نمودار طلا در ورودی اصلی، بدون انتخاب یا Context فلز، منبع نهایی نیست.
- حذف ارزش کل توسط D-096 با D-113 جایگزین شده است.
- ترتیب فعلی طلا/نقره/مس ثابت است، اما از `displayOrder` کاتالوگ خوانده می‌شود.

## مرحله ۵ — فلوهای کاربر

| فلو / خانواده | وضعیت | اقدام |
|---|---|---|
| Auth، KYC و Session | `Keep` | فقط کپی Context مالی از «طلا» به «دارایی/فلز منتخب» ممیزی شود |
| واریز و برداشت ریالی | `Keep` | اتصال بازگشت به خرید Asset منتخب و Portfolio تازه اصلاح شود |
| معرفی دوستان و پشتیبانی حساس | `Keep` | Link/Context Asset در صورت وجود به قرارداد پشتیبانی اضافه شود |
| `FL-CALC-001` | `Replace` در قرارداد ورودی | `assetId` و دقت Config اضافه؛ تومان/گرم مشترک، نرخ/کارمزد/خطا فلز-ویژه |
| `FL-BUY-001` و `FL-SELL-001` | `Revise` | اسکلت Preview/Pending/Recovery حفظ؛ انتخاب Asset، Position و Receipt چندفلزی جایگزین Gold-only شود |
| `FL-PHYSICAL-001` | `Revise` | فلز → محصول/گرید/وزن → مرکز/روش → Preview/Result برای هر سه فلز |
| `FL-TRANSACTION-001` | `Revise` | `assetId` و مشخصات فلز به رسید/جزئیات؛ Filter فلز بعد از OQ-058 تحت OQ-059 |
| `FL-TARGET-001` | `Revise` | هشدار هر سه؛ سفارش هدف فقط Assetهای مجاز از Capability matrix |
| `FL-GIFT-001` | `Revise` به فلو Asset-aware | قرارداد طلای موجود Legacy است؛ هیچ انحصار یا تعمیمی تا Review OQ-054 ثبت نشود |
| `FL-INSTALLMENT-001` | `Keep + Gate` | نسخه فعلی طلا حفظ؛ توسعه به نقره/مس بدون تصمیم OQ-054 ممنوع |
| `FL-TRANSFER-001` | `Replace` در دامنه کنترل | کنترل عدم نمایش از «انتقال طلا» به «انتقال هر فلز» گسترش یابد |
| `state-matrix.md` | `Revise` | Asset unavailable، price stale per asset، precision error، no position، capability unavailable و mixed P&L افزوده شود |
| `flow-index.md` و Gate Check | `Revise` | وضعیت هر فلو با دامنه Asset-aware و Gateهای OQ-058/OQ-059 همگام شود |
| فلو انتخاب Asset | `Add` به‌صورت Embedded pattern | مدل B داخل معامله؛ State نمودار مستقل و انتقال Context فقط با CTA صریح — D-121 |

## مرحله ۶ — وایرفریم، Prototype و تست

| خروجی | وضعیت | اقدام |
|---|---|---|
| Prototype و بسته Auth/KYC | `Keep` | فقط Deep Link مقصد مالی با Asset context تست شود |
| Prototype واریز و بسته برداشت | `Keep` | ریل ریالی معتبر؛ اتصال به خرید/Portfolio تازه اصلاح شود |
| قالب readiness و روش QA | `Keep` | سناریوی Config و Scale test چندفلزی اضافه شود |
| App Shell Prototype | `Revise` | خانه سه Position، ارزش کل/P&L، Asset catalog و بدون محوریت طلا |
| Calculator/Trade Prototype | `Replace` در رفتار فلزمحور | با مدل B، `defaultTradeAssetId = gold` و per-asset state ساخته شود؛ Context صریح مقدم است — D-123 |
| History/Receipt Prototype | `Revise` | Receipt D-115؛ فیلتر بعد از تصمیم OQ-059 |
| دریافت فیزیکی | `Add` | حداقل دو فلز با تفاوت واقعی و مسیر سوم Config-driven تست شود |
| Usability test plan | `Revise` | یافتن فلز، تغییر فلز، فهم وزن/ارزش/P&L، اختلال تک‌فلز و تحویل فیزیکی اضافه شود |
| Prototype جامع موج ۱ | `Keep as historical evidence` | منبع نهایی نیست؛ برای مقایسه و حفظ رفتارهای سالم نگهداری شود |

### سناریوهای اجباری Prototype تازه

1. کاربر بدون موجودی، سه فلز و ارزش پیشنهادی برابر را می‌بیند.
2. کاربر هر سه فلز را با دقت‌های `۳ / ۲ / ۰` اعشار دارد.
3. یک فلز قیمت نامعتبر دارد و دو فلز دیگر قابل معامله می‌مانند.
4. سود یک فلز مثبت، دیگری منفی و جمع Portfolio قابل توضیح است.
5. کاربر از Asset منتخب وارد خرید و سپس رسید همان Asset می‌شود.
6. تحویل فیزیکی سه فلز از کاتالوگ متفاوت استفاده می‌کند.
7. Stress state با ۱۶ Asset فرضی فقط برای ارزیابی Scale/Overflow/Search اجرا می‌شود؛ قابلیت محصول آن فلزها فرض نمی‌شود.
8. تاریخچه ترکیبی عملیات مالی و سه فلز با قرارداد کامل U2 در D-128 قابل بازیابی و آماده Prototype است؛ دامنه Feature-specific از OQ-054 خوانده می‌شود.

## مرحله ۷ — سیستم طراحی

| Foundation / Component | وضعیت | اقدام |
|---|---|---|
| Typography، RTL و اعداد | `Keep + Revise` | Candidate حفظ؛ Formatter دقت ۳/۲/۰ و P&L تست شود |
| Theme architecture و Semantic status | `Keep` | Light/Dark و Success/Warning/Danger مستقل از نوع فلز بمانند |
| Governance و بلوغ | `Keep` | Draft/Candidate/Tested/Stable و D-086 بدون تغییر |
| Accessibility و Focus/Touch | `Keep` | آیکن/رنگ فلز با Label و نام دسترس‌پذیر همراه باشد |
| Button/Input/OTP عمومی | `Keep` | فقط Stress test متن/عدد چندفلزی |
| Color foundations | `Revise` | Gold از نقش هویتی/Action جدا؛ Accentهای Asset کمکی و غیرانحصاری تعریف شوند |
| Iconography | `Revise + Add` | آیکن‌های رسمی سه فلز وارد Asset catalog، با اندازه/Stroke/Label استاندارد شوند |
| Chart tokens/patterns | `Add` | نمودار تک‌فلز با State مستقل و بازه‌های روزانه/ماهانه/سالانه؛ مقایسه چندسری خارج از Release اول — D-121 |
| Asset selector | `Add` | مدل B در حالت ۳، ۶، ۱۲ و ۱۶ Asset؛ Sheet/Popover و Search پیکربندی‌شونده — D-121 |
| Portfolio summary/row/card | `Add` | وزن، ارزش، P&L، status و ترتیب Config-driven |
| Receipt pattern | `Revise` | قرارداد هشت‌جزئی D-115 و محتوای Asset-aware |
| Physical product/card | `Revise` | فلز، گرید، وزن، آیکن و availability کاتالوگ |
| نمونه `foundations-candidate-v0.1.html` | `Keep as evidence + Revise scenarios` | تست فنی قبلی معتبر؛ سناریوهای چندفلزی پیش از `Stable` اضافه شوند |

## مواردی که بازسازی نمی‌شوند

- Auth، OTP، رمز، KYC و Session.
- منطق عمومی کیف تومانی، واریز و برداشت.
- الگوهای عمومی Loading، Error، Retry، Pending و Result.
- Governance، دسترس‌پذیری پایه، RTL و Typography Candidate.
- Prototypeهای قدیمی به‌عنوان شاهد تاریخی؛ فقط جایگاه منبع حقیقت آن‌ها تغییر می‌کند.

## ترتیب اجرای اصلاحات

1. **مرحله ۳:** اصلاح `AssetDefinition`، `AssetCatalog`، Position/Ledger، Quote/Order/Receipt و Capability matrix.
2. **مرحله ۳:** اصلاح Capability Map، قوانین و اولویت‌بندی؛ مقدارهای باز با مالک/موعد ثبت شوند.
3. **D-120:** ساختار کل اپ گزینه ۱ و مرز مشترک/فلز‌ویژه تأیید و Journey، IA، Navigation و Content model همگام شدند.
4. **D-121:** زیرالگوی معامله/نمودار با مدل B، State مستقل، نمودار تک‌فلز و بازه‌های روزانه/ماهانه/سالانه تأیید شد؛ مقدار پیش‌فرض باز است.
5. **مرحله ۵:** بازنویسی هدفمند Calculator/Buy/Sell/Physical/Receipt/Target و State matrix.
6. **مرحله ۶:** readiness تازه و Prototype چندفلزی؛ تست سناریوهای اجباری و Scale 16.
7. **OQ-059:** تعیین فیلتر تاریخچه در ساختار واقعی.
8. **مرحله ۷:** ازسرگیری Foundations/Components و جلوگیری از `Stable` شدن پیش از تست چندفلزی.

## Gate Impact Map

- پوشش اسناد اثرپذیر: `Complete`
- مرز Keep/Revise/Replace: `Complete`
- ترتیب اجرا و Gateها: `Complete`
- آمادگی برای اصلاح مدل محصول: `Sufficient to proceed`
- آمادگی ساختار App Shell و معامله/نمودار: `Complete / Sufficient to proceed` — D-120/D-121/D-123؛ OQ-059 تنها Review معماری باقی‌مانده است
- آمادگی برای UI نهایی: `Needs revision`
