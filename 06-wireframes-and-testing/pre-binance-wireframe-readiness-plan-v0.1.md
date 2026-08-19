# برنامه آماده‌سازی وایرفریم پیش از تحویل به چت بایننس — نسخه ۰.۱

تاریخ: ۱۸ اوت ۲۰۲۶  
دامنه: `artifacts/multi-metal-waves-1-and-3-wireframe.html` و مرجع تخصصی Auth/KYC  
هدف: تبدیل وایرفریم فعلی به Baseline ساختاری تمیز و قابل اتکا برای استخراج Patternهای بایننس و شروع High-fidelity  
وضعیت: `Complete — Sufficient for Binance structural handoff`

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

**نتیجه اجرا — ۱۹ اوت ۲۰۲۶**

- `pre-binance-current-state-punch-list.md` هر ۱۴۷ نما را با ممیزی تاریخی بازاعتبارسنجی می‌کند؛ ۱۰۱ سناریوی دستی، ۳۲ Page اضافه و هر ۱۷ Overlay پوشش داده شدند؛
- P0 جاری صفر است و دو P1 مستقل از بیزینس در V-158 اصلاح شدند: نام‌های دسترس‌پذیر داخلی و مقصد متنی نادرست دریافت فیزیکی؛
- ۹ P1 باقی‌مانده همگی `Business-gated` و دارای Owner، مرجع و مسیر حل‌اند؛ Gate PB-1 برابر `Complete` است.

**کار**

- مرور دوباره Inventory خودکشف ۱۴۷ نما پس از V-150؛
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

**نتیجه اجرا — ۱۹ اوت ۲۰۲۶**

- قرارداد `content-and-terminology-contract-v0.1.md` و اصلاح V-151 روی Artifact مرجع اجرا شد؛
- جست‌وجوی معکوس اصطلاحات ممنوع و JavaScript Parse پاس شد؛
- Gate محتوایی `Sufficient to proceed` است؛ QA بصری صفحه‌های نماینده در PB-5/V-157 پاس شد.

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

**نتیجه اجرا — ۱۹ اوت ۲۰۲۶**

- ماتریس `pre-binance-flow-reachability-matrix-v0.1.md` و Audit تکرارپذیر `scripts/audit-wireframe-flows.mjs` ساخته شد؛
- Back نتیجه واریز/برداشت از Processing جدا، Deep link Routeهای خودکشف کامل، اعلان خرید به Detail همان Record و Retryهای اصلاحی به Draft درست متصل شدند؛
- Gate ناوبری مستقل از بیزینس `Sufficient to proceed` است؛ رفتارهای D-206 جدا و QA بصری/لمسی در PB-5/V-157 پاس شد.

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

**نتیجه اجرا — ۱۹ اوت ۲۰۲۶**

- قرارداد `page-family-structure-contract-v0.1.md` برای Header/Page shell، Form، Bottom Sheet، Dialog، Empty/Loading/Error، Fixed CTA و Operation detail ثبت شد؛
- Schema جزئیات تلاش معامله، قسط ناموفق/درحال‌بررسی و تلاش دریافت هدیه از Labelهای قطعی یا عمومی پاک و نوع/وضعیت‌محور شد؛ Error فرم‌های اصلی به فیلد مربوط متصل شد؛
- Audit تکرارپذیر `scripts/audit-page-family-contracts.mjs` هفت خانواده، ۱۳ Schema عملیات و چهار قرارداد خطای فرم را بدون Failure تأیید کرد؛ Gate `Sufficient to proceed` و D-206 جدا باقی است.

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

**نتیجه اجرا — ۱۹ اوت ۲۰۲۶**

- Audit تکرارپذیر `scripts/audit-responsive-accessibility-contracts.mjs` قراردادهای شش‌گانه را بدون Failure تأیید کرد؛
- Preview خصوصی HTTPS در V-157 منتشر و QA مرورگری واقعی روی `320 / 375 / 390` و `812×375` اجرا شد؛
- Landscape، Targetهای ۴۴px، بارگذاری سفید Auth/KYC و Focus Overview اصلاح و دوباره آزموده شدند؛
- Overview هر ۱۴۷ نما را بدون کارت خالی ساخت و Console نشست پاک Home/Auth بدون Error/Warning بود؛ Gate PB-5 برابر `Complete` است.

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

**نتیجه اجرا — ۱۹ اوت ۲۰۲۶**

- `current-wireframe-inventory-v0.1.md` و `scripts/audit-wireframe-inventory.mjs` ساخته شدند؛
- شمارش جاری ۱۴۷ نما = ۷۷ Page + ۵۳ State + ۱۷ Overlay و ۱۰۱ سناریوی دستی در ۱۴ گروه است؛
- ۳۲ Page و ۱۴ Overlay خارج از فهرست دستی از Renderer فعال کشف می‌شوند؛
- فایل فعال، Auth/KYC، Candidate و Archive تفکیک و State matrix/README/Plan همگام شدند؛ Gate `Sufficient to proceed` است.

**کار**

- همگام‌کردن Scenario ID، تعداد Page/State/Overlay، Readiness pack، State matrix و README؛
- حذف ارجاع‌های منسوخ به Result/Receipt جدا؛
- ثبت فهرست دقیق Business-gatedها و سؤال‌های باز؛
- مشخص‌کردن فایل فعال در برابر Pilot/Candidate/Archive.

**Gate خروج**

- Artifact، Inventory و اسناد عدد و نام متناقض نداشته باشند؛
- چت تازه بتواند بدون تاریخچه گفتگو Baseline را درست تشخیص دهد.

### PB-7 — Freeze و بسته تحویل بایننس

**نتیجه اجرا — ۱۹ اوت ۲۰۲۶**

- مالک محصول Freeze را تأیید و D-219 آن را ثبت کرد؛
- `pre-binance-baseline-freeze-manifest-v1.0.md` Baseline اجرایی، Hashها، Preview v5 و Change control را ثبت می‌کند؛
- `binance-structural-handoff-brief-v1.0.md` ده نمای نماینده، تصمیم‌های قطعی، Business-gateها، روش Mapping و متن شروع چت دیگر را فراهم می‌کند؛
- Gate PB-7 برابر `Complete` و وضعیت بسته `Sufficient for Binance structural handoff` است.

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

شروع تحلیل در چت بایننس از `binance-structural-handoff-brief-v1.0.md`: ابتدا Mapping ده نمای نماینده، سپس Pilot مستقل Home/Trade/Operation detail و Review مالک محصول. Artifact فریز‌شده تا تصمیم Promote تغییر نمی‌کند.
