# ممیزی سازگاری مرحله ۳ با مدل چندفلزی

تاریخ Snapshot: ۱۷ مرداد ۱۴۰۵ / 8 Aug 2026  
دامنه: `03-product-model`  
نوع خروجی: ممیزی مشتق‌شده؛ بدون تصمیم بیزینسی تازه  
وضعیت: `Needs revision` برای ماتریس Feature-specific پس از D-127؛ هسته چندفلزی همچنان `Sufficient to proceed` است

## هدف

این ممیزی Snapshot تصمیم‌های D-105 تا D-116 بود. با D-127، بخش Feature-specific آن نیازمند بازآزمایی شد؛ Domain/Capability/Rules فعال اصلاح شده‌اند و OQ-054 دامنه هر Feature را می‌بندد.

## جمع‌بندی اجرایی

- `Observed fact`: `AssetDefinition`، `AssetCatalog`، `AssetCapability`، `MetalPortfolio` و `MetalPosition` با فیلد، رابطه و منبع حقیقت صریح در نسخه ۰.۳ مدل دامنه وجود دارند.
- `Observed fact`: Gold Wallet و Gold Ownership از هسته عمومی حذف شده‌اند؛ Position، Ledger، Quote، Order، Receipt، پشتوانه و دریافت فیزیکی بر پایه `assetId` تعریف شده‌اند.
- `Observed fact`: `capability-map.md` هسته قطعی، کنترل منفی انتقال و وضعیت «منتظر Review» هدیه/اقساط/سفارش را بدون انحصار فلزی ثبت می‌کند — D-127.
- `Observed fact`: هیچ نتیجه بدون‌توضیح برای `GoldWallet` یا `GoldOwnershipPosition` در اسناد فعال مدل دامنه/قابلیت باقی نمانده است.
- `Observed fact`: Permission مؤثر به `وضعیت حساب × assetId × AssetCapability × وضعیت سرویس` متصل شده و قواعد BR-100 تا BR-110 دامنه چندفلزی را بدون تعمیم عددهای طلا ثبت می‌کنند.
- `Risk`: مقدارهای رسمی قیمت، کارمزد، مالیات، حداقل، گام، گرید و SLA نقره/مس هنوز بازند و نباید از قواعد طلای تاریخی استنتاج شوند.

## یافته‌های اولویت‌دار

| اولویت | یافته | شاهد Snapshot | اثر | اقدام لازم |
|---|---|---|---|---|
| بسته P0 | قرارداد کاتالوگ و Position | `AssetDefinition`، `AssetCatalog`، `MetalPosition` و یکتایی مفهومی کاربر × فلز ثبت شدند | منبع مشترک طراحی و فنی ایجاد شد | بسته |
| بسته P0 | هسته مالی/مالکیت Gold-only | Position/Ledger/Backing و روابط به `assetId` تبدیل شدند؛ اقساط/هدیه طلایی عمداً اختصاصی ماندند | تناقض معماری رفع شد | بسته |
| بسته P0 | نبود Capability Matrix | ماتریس فلز × قابلیت Release اول و `AssetCapability` ثبت شد | Gift/Installment/Transfer/Physical قابل استنتاج اشتباه نیستند | بسته |
| بسته P0 | معامله و دارایی Gold-only | CAP-MKT/TRD/AST به Asset منتخب و Positionهای سه فلز تبدیل شدند | نقره/مس در هسته Release پوشش دارند | بسته |
| بسته P1 | Permissionهای Gold-only | قاعده مؤثر `account state × assetId × capability × service status` و نام‌های چندفلزی در ماتریس ثبت شد | دسترسی فلز/قابلیت غیرفعال قابل محاسبه است | بسته |
| بسته P1 | قواعد واحد/نرخ Gold-only | BR-100 تا BR-110 اضافه و BRهای تاریخی با دامنه/جایگزین مشخص شدند | دقت ۳/۲/۰ قطعی و عددسازی حداقل/گام/کارمزد نقره/مس ممنوع است | بسته؛ مقادیر OQ-033/OQ-055 |
| بسته P1 | PF-013 منسوخ | ردیف فعال به Scope طلا/نقره/مس و D-105/D-106 اصلاح شد | تعارض مشاهده رقبا و Scope رفع شد | بسته |

## ماتریس ردیابی تصمیم‌ها

| تصمیم | قرارداد لازم در مرحله ۳ | وضعیت Snapshot |
|---|---|---|
| D-105 | هویت و معماری غیرطلامحور | اعمال‌شده در Domain/Capability؛ CAP-TRS-02 فقط مزیت اختصاصی طلاست |
| D-106 | طلا/نقره/مس با مالکیت و معامله واقعی | اعمال‌شده با کاتالوگ، Position، معامله و پشتوانه هر سه فلز |
| D-107 تا D-109 | پشتوانه بیش از ۱۰۰٪، تفکیک ذخیره شرکت، خروج جزئیات Buffer از UI | اعمال‌شده با `UserBackingInventory`، `CompanyReservePosition` و OQ-057 |
| D-110 | واحد نمایش/معامله گرم | در کاتالوگ و BR-101 اعمال؛ BR-020 به‌عنوان سابقه جایگزین‌شده حفظ شد |
| D-111 | رشد Config-driven تا حدود ۱۶ فلز | اعمال‌شده با `AssetCatalog` و منع Hard-code |
| D-112 | دقت نمایش ۳/۲/۰ و قواعد فلز-ویژه | در کاتالوگ/Capability و BR-101/BR-102 اعمال شد |
| D-113/D-116 | Positionهای خانه، ارزش کل و P&L | قرارداد نرخ/Label، WAC منتخب محصول، تفکیک P&L، جمع فلزها، نرخ ناقص و مبلغ/درصد اعمال؛ فرمول تخصصی منتظر تأیید است |
| D-114/D-127 | تحویل/هشدار سه فلز، Transfer هیچ فلز؛ بدون انحصار تأییدنشده Gift/Installment | کنترل منفی انتقال حفظ شد؛ ماتریس Feature-specific برای OQ-054 باز شد |
| D-115 | آیکن رسمی، Label/Icon همراه Accent و Receipt هشت‌جزئی | قرارداد Asset/Receipt اعمال؛ Tokenهای بصری در مرحله ۷ |

## کنترل‌های بسته‌شدن زیرمرحله

- [x] `AssetDefinition` و `AssetCatalog` با فیلدهای حداقلی Impact Map وجود دارند.
- [x] `MetalPosition` برای هر `userId × assetId` حداکثر یک Position مفهومی و از Ledger مشتق شده است.
- [x] Ledger فلزی، `assetId` را روی Account/Entry/Reservation حفظ می‌کند و تراز هر Asset مستقل است.
- [x] وزن فلزهای متفاوت هرگز جمع نمی‌شود؛ ارزش ریالی فقط با منبع/فرمول معتبر زیر OQ-055 تجمیع می‌شود.
- [x] مالکیت ثبت‌شده کاربر از `CompanyReservePosition` جداست و ادعای Buffer در UI ساخته نمی‌شود.
- [x] Quote/Order/Receipt هویت، نرخ، کارمزد/مالیات و همان Asset را حفظ می‌کنند؛ گرید در Asset/جزئیات رسید ثبت می‌شود.
- [x] ماتریس `AssetCapability` رفتار طلا/نقره/مس و قابلیت‌های باز OQ-054 را بدون استنتاج ثبت می‌کند.
- [x] Capability Map و Permissionها به `assetId × capability` متصل شده‌اند.
- [x] BRهای واحد، دقت، نرخ، حداقل، گام، کارمزد و محدودیت Asset-aware هستند؛ مقادیر نامعلوم صریحاً بازند.
- [x] عبارات Gold-only هدیه/اقساط از قرارداد فعال خارج و به Legacy علامت‌گذاری شده‌اند؛ مزیت واقعی ریفاینری/ضرب طلا همچنان اختصاصی و مستند است.
- [x] جست‌وجوی نهایی Domain/Capability برای `GoldWallet`، `GoldOwnershipPosition` و «چندفلزی در آینده» نتیجه بدون‌توضیح ندارد.
- [x] گزینه‌ها، سناریوهای عددی و قرارداد داده OQ-055 ثبت و شش تصمیم محصول با D-116 وارد BR/Domain شده‌اند؛ جزئیات تأییدنشده حسابداری هنوز قانون قطعی نشده‌اند.

## روش بازآزمایی

پس از پایان اصلاح هم‌زمان، جست‌وجوهای زیر دوباره اجرا شوند و هر نتیجه با Scope واقعی آن بررسی شود:

```powershell
rg -n -S "GoldWallet|GoldOwnershipPosition|کیف طلایی|چندفلزی.*آینده|آینده.*چندفلز" 03-product-model
rg -n -S "AssetDefinition|AssetCatalog|MetalPosition|AssetCapabilityMatrix|assetId" 03-product-model
rg -n -S "CAP-MKT-03|CAP-TRD-01|CAP-TRD-02|CAP-AST-01|BR-020|BR-022" 03-product-model
```

## اثر بر منابع حقیقت

- D-116 پس از تأیید صریح شش پیشنهاد محصول ثبت و در BR/Domain همگام شد.
- سؤال تازه‌ای ایجاد نشد؛ شکاف‌های مالی/فنی و Capabilityها قبلاً در OQ-054، OQ-055 و OQ-057 ثبت شده‌اند و بسته OQ-055 فقط آن‌ها را برای تصمیم‌گیری ساختاربندی کرده است.
- این سند جایگزین `project-status.md`، `domain-model.md` یا `capability-map.md` نیست؛ فقط معیار QA و فهرست رفع تناقض است.

## Gate

`Needs revision` فقط برای Review ماتریس `Feature × Asset` در OQ-054. Domain، Capability، Permission، Rules و Priority عمومی Asset-aware هستند؛ OQ-058/OQ-059 بسته‌اند و وایرفریم مشترک/تاریخچه می‌تواند پیش برود. فرمول تخصصی اعداد پورتفوی همچنان زیر OQ-055 `Blocked by external decision` است.
