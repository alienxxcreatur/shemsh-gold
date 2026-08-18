# برنامه آماده‌سازی وایرفریم پیش از تحویل به چت بایننس — نسخه ۰.۱

تاریخ: ۱۸ اوت ۲۰۲۶  
دامنه: `artifacts/multi-metal-waves-1-and-3-wireframe.html` و مرجع تخصصی Auth/KYC  
هدف: تبدیل وایرفریم فعلی به Baseline ساختاری تمیز و قابل اتکا برای استخراج Patternهای بایننس و شروع High-fidelity  
وضعیت: `In progress`

## تعریف آماده‌بودن

آماده‌بودن برای چت بایننس به معنی نهایی‌شدن رنگ، Spacing، Component visual یا قواعد باز بیزینس نیست. Baseline زمانی قابل تحویل است که:

- محتوای کاربر، نام‌گذاری و سلسله‌مراتب اطلاعات ناسازگاری شناخته‌شده نداشته باشد؛
- مسیرهای اصلی و Stateهای مستقل از بیزینس کامل، قابل رسیدن و بدون بن‌بست باشند؛
- هر CTA فعال مقصد واقعی، خروج بیرونی واقعی یا Disabled صریح داشته باشد؛
- Result/History/Operation detail از Record و قرارداد مشترک استفاده کنند؛
- رفتار Back، Close، Bottom Sheet، Fixed CTA، Scroll و حفظ State قابل پیش‌بینی باشد؛
- شکست‌های Responsive، دسترس‌پذیری و Console در نمونه‌های نماینده بسته شوند؛
- تمام فرض‌ها و وابستگی‌های Business-gated جدا و قابل ردیابی باشند؛
- اسناد و شمارش Inventory با Artifact فعال همگام باشند.

## خارج از Scope این برنامه

- اعمال رنگ، تایپوگرافی، Radius، Shadow یا Motion نهایی بایننس؛
- ساخت یا Migration سراسری Figma؛
- قطعی‌کردن کارمزد، سقف، SLA، قرارداد حقوقی یا داده‌ای که Business Owner تأیید نکرده؛
- تبدیل Pilot قدیمی بایننس به منبع حقیقت؛
- اعلام اعتبارسنجی کاربر قبل از اجرای تست واقعی.

## بسته‌های اجرایی

### PB-1 — ممیزی Current-state و Punch list

**کار**

- مرور دوباره Inventory خودکشف ۱۴۷ نما پس از V-146؛
- مقایسه Artifact با ممیزی تاریخی و حذف مواردی که واقعاً حل شده‌اند؛
- ثبت هر مورد با شدت `P0 / P1 / P2` و Labelهای پروژه؛
- تفکیک هر مورد به `Fix now / Safe to defer / Business-gated`؛
- کنترل صفحه‌های خارج از ۱۰۱ سناریوی دستی و همه ۱۷ Overlay.

**خروجی**

- `pre-binance-current-state-punch-list.md`
- Matrix صفحه/State/Overlay با وضعیت و مالک تصمیم

**Gate خروج**

- هیچ شکاف شناخته‌شده فقط در چت باقی نماند؛
- همه P0/P1ها Owner و مسیر حل داشته باشند.

### PB-2 — محتوا، اصطلاحات و سلسله‌مراتب

**کار**

- ساخت واژه‌نامه Canonical برای `کیف تومان`، `تاریخچه`، `جزئیات عملیات`، `درخواست`، `قرارداد` و Statusها؛
- حذف اشاره‌های قدیمی به صفحه جداگانه رسید و اصطلاح‌های متناقض؛
- کنترل عنوان Header، عنوان محتوا، Label فیلد، واحد، زمان و CTA در هر خانواده؛
- حذف توضیح تکراری، Copy داخلی و اطلاعاتی که از عنوان/عدد قابل فهم است؛
- Asset-aware کردن Copyهایی که قانون طلا را به نقره/مس تعمیم می‌دهند؛
- ثبت Copyهایی که بدون تصمیم بیزینس قابل نهایی‌شدن نیستند.

**Gate خروج**

- صفر نام متناقض برای یک Object یا مقصد؛
- صفر Copy داخلی Test/Review در سطح کاربر؛
- هر متن حل‌نشده با `Design assumption` یا `Open question` ردیابی شود.

### PB-3 — اتصال فلو، State و ناوبری

**کار**

- ساخت Reachability matrix برای Entry → Preview → Processing → Detail/Recovery؛
- بررسی Back/Close/Cancel، حفظ ورودی و مقصد بازگشت؛
- بررسی تمام CTAهای فعال، Deep linkها و خروج‌های بیرونی؛
- بستن Stateهای مستقل از تصمیم بیزینس در بانک، اعلان، حساب/امنیت و محدودیت‌های حساب؛
- کنترل تفاوت Attempt ثبت‌شده با خطای Pre-submit؛
- کنترل مسیر History به همان Operation detail و حذف صفحه یا CTA تکراری؛
- برای Support فقط مرز واقعی Prototype را روشن نگه‌داشتن؛ سرویس ساخته‌نشده فعال نمایش داده نشود.

**Gate خروج**

- صفر CTA فعال بی‌عمل یا با مقصد اشتباه؛
- صفر Dead end بدون Back/Recovery؛
- State کاربر پس از Back یا Retry بی‌دلیل از بین نرود؛
- موارد نیازمند قانون بیزینس بدون اختراع رفتار جدا شوند.

### PB-4 — قراردادهای ساختاری مشترک

**کار**

- یکدست‌کردن Header، Tab، Form، Field، Bottom Sheet، Dialog، Empty/Error/Pending و Fixed action؛
- کنترل اینکه Component مشترک باعث Copy یا داده عمومیِ بی‌معنا نشود؛
- مرور خانواده‌های Operation detail برای موفق، ناموفق، Pending، برگشتی و نامشخص؛
- کنترل History row، Notification deep link و Support context روی یک Record؛
- ثبت Page familyهایی که چت بایننس باید برایشان Pattern پیدا کند.

**Gate خروج**

- هر Page family قرارداد ساختاری مستند داشته باشد؛
- Duplicate implementation شناخته‌شده برای یک State باقی نماند؛
- تفاوت‌های واقعی هر Feature با Schema داده توضیح داده شوند، نه با صفحه مستقل تصادفی.

### PB-5 — QA تعاملی، Responsive و دسترس‌پذیری

**حداقل Matrix**

- عرض‌های `320 / 375 / 390`؛
- Landscape مرجع `812×375`؛
- Dynamic Type/Zoom بزرگ روی صفحه‌های نماینده؛
- Reduced motion برای Ticker، Slider و Transitionها؛
- Light/Dark روی Candidateهایی که Dark دارند.

**کنترل‌ها**

- Overflow افقی، بریدگی متن و پوشاندن محتوا با Fixed CTA/Nav؛
- Scroll ضروری در برابر Scroll تصادفی؛
- Touch target حداقل ۴۴px و فاصله لمس؛
- Focus order، Label، `aria-live` و مستقل‌بودن معنا از رنگ؛
- بازوبسته‌شدن Sheet/Dialog، Escape، Scrim و بازگشت Focus؛
- Console error، قاب سفید نمای کلی و Snapshot خالی.

**Gate خروج**

- P0 Responsive/Interaction برابر صفر؛
- P1 باقی‌مانده یا حل شود یا با Risk پذیرفته‌شده ثبت شود؛
- QA نماینده تمام Page familyها را پوشش دهد.

### PB-6 — همگام‌سازی منبع حقیقت

**کار**

- همگام‌کردن Scenario ID، تعداد Page/State/Overlay، Readiness pack، State matrix و README؛
- حذف ارجاع‌های منسوخ به Result/Receipt جدا؛
- ثبت فهرست دقیق Business-gatedها و سؤال‌های باز؛
- مشخص‌کردن فایل فعال در برابر Pilot/Candidate/Archive.

**Gate خروج**

- Artifact، Inventory و اسناد عدد و نام متناقض نداشته باشند؛
- چت تازه بتواند بدون تاریخچه گفتگو Baseline را درست تشخیص دهد.

### PB-7 — Freeze و بسته تحویل بایننس

**بسته تحویل**

1. فایل مرجع سرتاسری فعال؛
2. فایل تخصصی Auth/KYC؛
3. Inventory نهایی Page/State/Overlay؛
4. قرارداد Page familyها و Operation detail؛
5. فهرست تصمیم‌های قطعی مرتبط؛
6. فهرست Business-gated و Design assumptionها؛
7. شش تا ده صفحه نماینده برای Pilot بایننس؛
8. دستور صریح: Pilot قدیمی مرجع نیست و باید از Baseline تازه بازسازی شود.

**Gate نهایی تحویل**

- `P0 = 0`؛
- P1 ساختاری/محتوایی مستقل از بیزینس بسته؛
- مسیرهای اصلی بدون Dead end؛
- اصطلاحات Canonical و اسناد همگام؛
- QA نماینده پاس؛
- موارد Business-gated جدا و مانع Pattern research معرفی نشوند؛
- وضعیت Gate: `Sufficient for Binance structural handoff`.

## مواردی که می‌توانند هنگام تحویل باز بمانند

- تصمیم‌های D-206 برای دریافت فیزیکی، اقساط، هدیه، سفارش/هشدار، مجوزها و پشتیبانی؛
- OQ-055 و جزئیات حسابداری پورتفوی؛
- مقدار نهایی کارمزد، سقف، SLA و سند حقوقی؛
- تست کاربردپذیری واقعی، مشروط به اینکه قبل از قفل High-fidelity اجرا شود؛
- مقادیر نهایی Palette/Token و Migration Figma.

این موارد باید در Handoff صریح باشند تا چت بایننس Pattern پیشنهاد دهد اما رفتار یا قانون محصول را از بایننس استنتاج نکند.

## ترتیب Review مالک محصول

مالک محصول لازم نیست هر اصلاح مکانیکی را جدا تأیید کند. Review در چهار نقطه انجام می‌شود:

1. تأیید Punch list و مرز Business-gated؛
2. تأیید اصطلاحات و سه خانواده فلو نماینده؛
3. تأیید نتیجه QA و Riskهای پذیرفته‌شده؛
4. تأیید Freeze و بسته تحویل.

## قدم بعدی فوری

اجرای `PB-1`: ممیزی Current-state نسخه پس از V-143 و تولید Punch list تازه. ممیزی 18 Aug ورودی تاریخی است و نباید بدون بازاعتبارسنجی، فهرست وضعیت امروز تلقی شود.
