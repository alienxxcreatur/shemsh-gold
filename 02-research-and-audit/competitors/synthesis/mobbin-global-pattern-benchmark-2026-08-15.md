# بنچمارک جهانی پترن‌های شمش با Mobbin

تاریخ: ۱۵ اوت ۲۰۲۶  
منبع: Mobbin MCP، مشاهده مستقیم Preview اسکرین‌ها و فلوها  
وضعیت: `Sufficient to proceed` برای الهام بصری و Review وایرفریم؛ رفتار رقبا قانون شمش نیست

## هدف و روش

این بررسی به‌جای جست‌وجوی یک «رقیب کاملاً مشابه»، نیازهای شمش را به پترن‌های قابل مقایسه شکست: پورتفوی چنددارایی، معامله، کیف و انتقال بانکی، تاریخچه و رسید، دریافت فیزیکی، هشدار قیمت و اعتماد نزدیک اقدام.

- **Observed fact:** هیچ نمونه مشاهده‌شده همه مزیت‌های شمش، یعنی مالکیت واقعی طلا/نقره/مس، کیف ریالی، معامله دوطرفه و دریافت فیزیکی شمش را یکجا پوشش نمی‌دهد.
- **Design assumption:** مرجع مناسب شمش یک ترکیب کنترل‌شده از چند محصول است، نه تقلید کامل از یک اپ.
- **Risk:** بعضی نمونه‌ها iOS و بعضی بازارهای کریپتو/سهام یا خرده‌فروشی‌اند؛ Geometry و منطق باید برای PWA، RTL، تومان/گرم و قواعد واقعی شمش بازتفسیر شوند.

## Shortlist پیشنهادی

| اولویت | محصول | چرا برای شمش مهم است | بخش‌های قابل استفاده | چه چیزی کپی نشود |
|---|---|---|---|---|
| ۱ | Revolut | نزدیک‌ترین مرجع بصری برای فلزات گران‌بها و معامله چندکالایی | فهرست فلزها، جزئیات فلز، نمودار، Holdings، P&L، Buy/Sell، Review و Success | Dark UI سراسری، واحد XAU/XAG و ادعای پشتوانه بدون سند رسمی |
| ۲ | Wealthsimple | آرام، دقیق، کمی پریمیوم و مناسب معماری پورتفوی | خانه، مخفی‌کردن موجودی، Account cards، نمودار، CTAهای Trade/Add funds، Legal نزدیک محتوا | فضای خالی بیش‌ازحد و ساختار Accountمحور پیچیده برای سه فلز |
| ۳ | Coinbase | قوی‌ترین مرجع فلو عملیاتی معامله و تاریخچه | ورود مبلغ، کیبورد عددی، انتخاب دارایی/منبع، Review، Submitted، History، Deposit/Withdraw | شلوغی Shortcutها، Web3 و Feature promotion نامرتبط |
| ۴ | SoFi / Public | الگوی روشن هشدار قیمت و مدیریت هشدار فعال | Above/Below، قیمت فعلی نزدیک ورودی، Toggle، فهرست هشدار، Toast موفقیت | Illustration بزرگ یا گزینه‌های بورسی نامرتبط |
| ۵ | Careem / Cash App / Coinbase Cash | پترن کیف، برداشت و وضعیت بانکی | مبلغ بزرگ، مقصد، Preview، انتخاب سرعت/کارمزد، Processing و پیگیری | وعده Instant یا ETA بدون قانون رسمی |
| ۶ | Binance / Vivid | پترن تاریخچه قابل اسکن و فیلترپذیر | جداسازی Type/Asset/Date، گروه‌بندی زمانی، مقدار ورودی/خروجی و Status | Taxonomy پیچیده کریپتو و چند کیف داخلی |
| ۷ | Chipotle / Walmart / Best Buy / Instacart | آنالوگ رفتاری دریافت فیزیکی و Pickup | کاتالوگ/تعداد، محل، Review، مدارک، وضعیت آماده‌سازی و نقشه | زبان و ظاهر Commerce؛ دریافت شمش باید مالی و مالکیتی بماند |
| ۸ | Lightyear / Wealthsimple / N26 / Wise | اعتماد، ریسک و Fact sheet نزدیک تصمیم | خلاصه ریسک، هزینه، Fact sheet، FAQ، سند و CTA پایین | دیوار متن طولانی و Disclosure جدا از Context اقدام |

## مشاهده‌های مستقیم و نگاشت به شمش

### ۱. فلزات، بازار و جزئیات دارایی — Revolut

- **Observed fact:** [فهرست Commodities](https://mobbin.com/screens/cf73c0ac-b6ff-4ff4-a4db-160acda0f9ff) طلا، نقره، پالادیوم و پلاتین را با نماد، نرخ و تغییر درصدی در یک Card کم‌تراکم نشان می‌دهد.
- **Observed fact:** [جزئیات طلا](https://mobbin.com/screens/c52be48d-7476-4c06-8b0f-32e2f387a43f) نرخ، نمودار، بازه، کل موجودی، ارزش و بازده تحقق‌نیافته را در یک سلسله‌مراتب روشن کنار Buy/Sell می‌گذارد.
- **Observed fact:** [خانه Commodities](https://mobbin.com/screens/d2aac4db-623d-4bb1-9a2e-f21409bafe1e) موجودی کل، ورودی Trade/Documents، ردیف دارایی و آخرین تراکنش را بدون Dashboard سنگین ترکیب می‌کند.
- **Observed fact:** [ورود مبلغ خرید](https://mobbin.com/screens/ef10c123-ceb9-445c-b27e-feea69c6a0e4)، [Review عددی](https://mobbin.com/screens/fa21c6a4-d921-4590-b0d4-2b6fd2c29e30) و [بازخورد اجرای سفارش](https://mobbin.com/screens/9704359e-8a38-426a-9b3a-622e2a8ad00a) سه لایه متمایز Entry، Confirm و Result دارند.
- **Design opportunity:** Revolut مرجع اصلی `WF-MM-003/004/009/011` باشد؛ ساختار اطلاعاتی گرفته شود اما Monochrome خانه شمش، RTL، گرم و تومان و Asset Tab سه‌فلزی D-152 حفظ شوند.
- **Risk:** [صفحه معرفی Commodities](https://mobbin.com/screens/ecb68f1d-8d70-4b09-9279-99b5caff9507) جمله «backed by securely stored physical metals» دارد؛ شمش فقط معادل رسمی و قابل اثبات این ادعا را استفاده کند.

### ۲. خانه و پورتفوی آرام — Wealthsimple

- **Observed fact:** [فلو Home](https://mobbin.com/flows/0251d8aa-ef5d-405b-bc97-a788cff55297) عدد اصلی، کنترل مخفی‌سازی، نمودار کم‌رنگ، بازه‌ها و Account cards را در یک زبان تقریباً Monochrome می‌چیند.
- **Observed fact:** [فلو Crypto](https://mobbin.com/flows/20d7d8b0-c365-4549-bca0-106c0d98d51d) ارزش دارایی، نمودار و دو CTA هم‌وزن Trade/Add funds را از محتوای تکمیلی جدا می‌کند.
- **Design opportunity:** مرجع اصلی لحن بصری `WF-MM-001/002A` باشد: whitespace حساب‌شده، Border کم‌کنتراست، تایپوگرافی مطمئن و عدد به‌عنوان Hero. کنترل چشم مستقل D-150 و تفکیک کیف تومان حفظ شود.
- **Risk:** شمش CTA «خرید و فروش» را طبق D-149 نزدیک Rail نگه می‌دارد؛ نباید زیر نمودار بلند یا محتوای آموزشی دفن شود.

### ۳. معامله، Preview و رسید — Coinbase

- **Observed fact:** [فلو خرید دارایی](https://mobbin.com/flows/30066da4-a73c-4f8c-9a37-ca56e18bc26c) مبلغ بزرگ، معادل دارایی، منبع پرداخت، نوع سفارش، CTA Review و کیبورد عددی را در یک viewport قرار می‌دهد.
- **Observed fact:** [فلو Buying an asset](https://mobbin.com/flows/41e04fd1-512d-46c1-98e0-a8fff33daebf) Submitted را از History جدا می‌کند و سپس تراکنش ثبت‌شده را در فهرست قابل مشاهده نگه می‌دارد.
- **Observed fact:** [فلو Transactions](https://mobbin.com/flows/0fa262d1-7a6e-48ed-87d2-600d750da19a) Type و Asset را به‌صورت دو کنترل جدا بالای فهرست قرار می‌دهد.
- **Design opportunity:** برای `WF-MM-009..013` از تفکیک Entry/Review/Pending/Result و ترازبندی عددها استفاده شود. قرارداد اصل/کارمزد/پرداخت نهایی D-101، نرخ ۲۰ثانیه‌ای و چهار Result شمش حفظ شوند.
- **Risk:** CTA و کیبورد Coinbase گاهی هر دو فضای زیادی می‌گیرند؛ Entry شمش باید شرط No-scroll استاندارد D-154 را پاس کند.

### ۴. کیف، واریز و برداشت — Careem، Cash App و Coinbase

- **Observed fact:** [برداشت Careem](https://mobbin.com/flows/5449dc3b-ec9b-4a76-af3c-6944ea441b6f) از Wallet overview به مبلغ، مقصد بانکی، محافظت بیومتریک و صفحه Processing با SLA/Transfer ID می‌رسد.
- **Observed fact:** [Cashing out در Cash App](https://mobbin.com/flows/c9b68aa2-d069-4d17-b961-79483f1636c2) Standard/Instant و Fee را در Sheet تصمیم نمایش می‌دهد و Success ساده دارد.
- **Observed fact:** [Withdrawing cash در Coinbase](https://mobbin.com/flows/f0a8cb83-deb6-4d7a-a30c-ebdeae25cb1c) مبلغ، موجودی، مقصد/سرعت، Preview و ثبت Pending در تاریخچه را به هم متصل می‌کند.
- **Design opportunity:** برای واریز/برداشت شمش، مبلغ و مقصد عناصر اصلی بمانند؛ Method detail، SLA، status و کد پیگیری نوع‌محور نزدیک عملیات قرار گیرند.
- **Risk:** سرعت و کارمزد فقط از قواعد رسمی D-067 تا D-071 بیاید؛ الگوی رقبا مجوز وعده Instant نیست.

### ۵. تاریخچه و رسید — Binance، Vivid و Coinbase

- **Observed fact:** [Assets history در Binance](https://mobbin.com/flows/a2dc5366-e2c9-4551-8701-718264045a3f) ابتدا خانواده History را انتخاب و سپس فهرست مقدار/زمان/status را نشان می‌دهد.
- **Observed fact:** [Timeline در Vivid](https://mobbin.com/flows/ac1c7ae0-ee5a-498b-bd9a-004c5821ce47) Search، Chip فعال، Date و All filters را همراه گروه‌بندی Today/Yesterday ترکیب می‌کند.
- **Design opportunity:** قرارداد U2 شمش درست است: Operation rail + Asset selector + Filters. از Vivid فقط خوانایی Chip فعال و گروه‌بندی زمانی، و از Coinbase ترازبندی Type/Asset اقتباس شود.
- **Risk:** Tab order قطعی D-128 با دسته‌بندی‌های Binance جایگزین نشود.

### ۶. هشدار قیمت — SoFi و Public

- **Observed fact:** [فلو ساخت هشدار SoFi](https://mobbin.com/flows/04ec3a36-f8cb-4867-a087-c5f680df8a9c) Above/Below را در Segmented control، قیمت فعلی را زیر ورودی و Save را در پایین Sheet قرار می‌دهد؛ موفقیت با Toast ثبت می‌شود.
- **Observed fact:** [فلو هشدار Public](https://mobbin.com/flows/577013c5-15f1-4d01-a939-cc7d54c8052f) درصد تغییر روزانه و قیمت هدف را به‌صورت دو Rule مستقل با Toggle نشان می‌دهد.
- **Design opportunity:** برای شمش فلو پایه SoFi مناسب‌تر است؛ فلز و نرخ خرید/فروش به Rule افزوده، مدیریت هشدار فعال/اجراشده از الگوی فهرست جدا استفاده شود.
- **Risk:** هشدار باید صریحاً غیرمعامله‌ای بماند و با سفارش قیمت هدف ادغام مفهومی نشود.

### ۷. دریافت فیزیکی — آنالوگ Pickup

- **Observed fact:** [Pickup در Chipotle](https://mobbin.com/flows/f5cc7f29-8c54-4ef8-ad40-fa5543bc9406) انتخاب محصول، زمان، هزینه، تأیید محل، نقشه و Progress سه‌مرحله‌ای آماده‌سازی را یکپارچه می‌کند.
- **Observed fact:** [Pickup در Best Buy](https://mobbin.com/flows/058cae25-cdde-4a66-b896-7d374ed0e2b7) Quantity stepper، Store pickup، Order summary، الزام Photo ID و کد سفارش را نشان می‌دهد.
- **Observed fact:** [Review pickup در Walmart](https://mobbin.com/flows/da378054-adaa-4f1a-b364-a59dc77c18b9) محل، بازه مراجعه، شخص تحویل‌گیرنده، Item details و CTA چسبیده پایین را یکجا می‌آورد.
- **Observed fact:** [انتخاب محل Instacart](https://mobbin.com/flows/0ab5da75-7b9a-4c7f-ad69-7f97b8ff93f9) Map + location card را در Sheet نمایش می‌دهد.
- **Design opportunity:** برای `WF-MM-014`، Best Buy بهترین مرجع کاتالوگ/Stepper/مدرک، Walmart بهترین مرجع Review، Instacart بهترین مرجع انتخاب محل و Chipotle بهترین مرجع Tracking است.
- **Risk:** دریافت شمش «خرید کالا» نیست؛ Sheet نهایی باید اثر مالکیتی و تفاوت «وزن فیزیکی» با «کل کسر از دارایی» را واضح‌تر از Commerce نشان دهد.

### ۸. اعتماد و Disclosure نزدیک اقدام

- **Observed fact:** [Investment details در Wealthsimple](https://mobbin.com/screens/06c6d62a-d7db-4e21-85a0-5cfd846b1929) Minimum، Tier، Time horizon، Targeted return، Fact sheet و FAQ را در یک صفحه قابل اسکن می‌گذارد.
- **Observed fact:** [Risk comparison در Lightyear](https://mobbin.com/screens/30cb1bb5-c4f4-4d31-8658-abb9047dcc1d) هزینه و ریسک را بصری و در Context خرید نشان می‌دهد.
- **Observed fact:** [About در N26](https://mobbin.com/screens/e6f09a7a-8af5-4d78-9505-858132628dae) مشخصات رسمی، شناسه‌ها، مدیر و سند کلیدی را در Cardهای ساختاریافته نشان می‌دهد.
- **Observed fact:** [Review and confirm در Wise](https://mobbin.com/screens/60b54d2b-7db1-4384-b98d-75f59bef3b9c) ماهیت محصول، نرخ متغیر، Fee و امکان استفاده از پول را پیش از تأیید توضیح می‌دهد.
- **Design opportunity:** اعتماد شمش به یک صفحه «درباره ما» محدود نشود؛ مجوز، متولی/بانک، مالکیت واقعی، رسید، کارمزد و مسیر پشتیبانی در نقطه تصمیم و با لینک سند رسمی حضور داشته باشند.
- **Risk:** [Risk disclosure طولانی Revolut](https://mobbin.com/screens/d9cb5509-99c7-41ce-b49c-76eeccd832ac) نمونه خوبی برای Compliance است، اما پترن خوبی برای فهم سریع نیست؛ خلاصه لایه‌ای + متن کامل جدا مناسب‌تر است.

## دستور کار پیشنهادی برای Review وایرفریم

1. `WF-MM-001/002A`: مقایسه مستقیم با Wealthsimple Home و Revolut Commodities؛ تمرکز بر تراکم، ریتم عددها و محل CTA.
2. `WF-MM-003/004`: استفاده از Revolut Gold برای سلسله‌مراتب Rate/Chart/Holdings/P&L، بدون واردکردن Dark theme به تصمیم سراسری.
3. `WF-MM-009..013`: مقایسه با Coinbase/Revolut برای No-scroll Entry، Review عددی، Pending و Result.
4. `WF-MM-014/014A..D`: مقایسه با Best Buy/Walmart/Instacart/Chipotle برای Stepper، محل، مدارک و Tracking؛ تمرکز اصلی روی تمایز «کسر دارایی» و «دریافت فیزیکی».
5. تاریخچه: بررسی Chip hierarchy و گروه‌بندی زمانی Vivid در چارچوب U2 قطعی.
6. هشدار: Prototype مقایسه‌ای SoFi-base و Public-base، بدون تغییر Scope یا ادغام با سفارش قیمت.
7. اعتماد: ساخت یک ماتریس `ادعا × سند × نقطه نمایش × CTA مرتبط` پیش از UI نهایی.

## نتیجه Gate

`Sufficient to proceed` برای استفاده در Review مرحله ۶. این تحقیق تصمیم بیزینسی تازه ایجاد نکرد، Scope یا ترتیب مرحله‌ها را تغییر نداد و هیچ رفتار رقیبی را به قانون شمش تبدیل نکرد.
