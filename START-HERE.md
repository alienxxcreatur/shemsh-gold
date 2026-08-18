# شروع از اینجا

این فایل ورودی اصلی پروژه ریدیزاین شمش است. تاریخچه چت مبنای ادامه کار نیست؛ وضعیت، تصمیم‌ها و خروجی‌ها باید در همین مخزن ثبت شوند.

## وضعیت فعلی

- مرحله فعال داخلی: **مرحله ۶ — وایرفریم کل اپ چندفلزی**
- زیرمرحله فعال: **Gate آماده‌سازی Pre-Binance؛ PB-1 ممیزی Current-state همه نماها — D-211**
- مسیر موازی بیرونی: **تأیید مالی/حسابداری OQ-055؛ `Blocked by external decision` فقط برای UI نهایی اعداد پورتفوی**
- مسیر Business-gated تمیزکاری: **طبق D-206 تا Review فلوهای دریافت، اقساط، هدیه، سفارش، مجوزها و پشتیبانی با Business Owner متوقف است؛ پیش‌فرض‌های فعلی فقط `Design assumption` هستند**
- قدم بعدی قطعی: بازاعتبارسنجی همه ۱۴۷ نما پس از V-146 و تولید Punch list تازه با سه مسیر `Fix now / Safe to defer / Business-gated`؛ سپس اجرای PB-2 تا PB-7 و Freeze Baseline برای Handoff بایننس. واریز درگاه با D-210/V-144 به مسیر مستقیم موفق/ناموفق/نامشخص و Copy بازگشت حداکثر ۷۲ساعته همگام شده است — D-210/D-211
- مسیر موازی داخلی: **Foundations و Base componentهای مستقل از فلز در مرحله ۷ ادامه دارند؛ جهت رنگ با D-202 از Black-neutral به Navy-first تغییر کرده و تا تکمیل مقادیر/QA `Not Stable` است. Radio ۸تایی و Switch ۱۰تایی `Tested Candidate` هستند؛ Text Input ۱۴تایی Final audit صفر Issue را پاس کرده و منتظر تأیید بصری مالک محصول است؛ Icon Button و Checkbox نیز هنوز منتظر تأیید بصری‌اند و اجزای فلزمحور از `Candidate` فراتر نمی‌روند — D-134/D-136/D-202**
- مسیر موازی استخراج بصری: **G2/G3، G4 Candidate mapping و G5 Visual Direction Contract v0.1 کامل‌اند و Pilot غیرمخرب Home/Assets در کپی مستقل اجرا شده است. Canvas سفید، یک Numeric anchor، Cardهای Object محدود، کیف/Shortcut تخت و صفحه ترکیب دارایی با نمودار مستقل و Rowهای تخت اکنون برای Review مالک محصول آماده‌اند؛ H05 Dynamic Type 200% هنوز بازآزمایی دستی می‌خواهد و Foundation/Figma اصلی و وایرفریم مرجع تغییر نکرده‌اند — D-163/D-177/D-180 / V-111**
- جریان‌های حفظ‌شده: **خروجی‌های Auth/KYC و زیرساخت ریالی حفظ می‌شوند؛ App Shell، معامله، دارایی و نمودار تا بازتنظیم `Needs revision` هستند**

برای جزئیات روز، `00-project-management/project-status.md` را بخوانید.

## ترتیب مطالعه برای ادامه پروژه

1. `00-project-management/shemsh-project-context.md`
2. `00-project-management/project-status.md`
3. `00-project-management/product-roadmap.md`
4. `00-project-management/decision-log.md`
5. `00-project-management/open-questions.md`
6. `01-product-definition/multi-metal-impact-map.md`
7. `README.md` پوشه مرحله فعال
8. سند فعال همان مرحله

## نقشه پوشه‌ها

| پوشه | کاربرد |
|---|---|
| `00-project-management` | وضعیت، نقشه راه، تصمیم‌ها، سؤال‌ها و روش کار |
| `01-product-definition` | تعریف مسئله، مخاطب، ارزش، اهداف و محدوده |
| `02-research-and-audit` | تحقیق هدفمند کاربران و رقبا، قواعد رسمی و ثبت محدود ریسک‌های محصول قبلی |
| `03-product-model` | قابلیت‌ها، قوانین، اولویت‌ها، نقش‌ها و مدل دامنه |
| `04-experience-architecture` | سفرها، معماری اطلاعات، ناوبری و مدل محتوا |
| `05-user-flows` | فلوهای انتها‌به‌انتها، وضعیت‌ها و پیام‌ها |
| `06-wireframes-and-testing` | وایرفریم، پروتوتایپ، تست و یافته‌ها |
| `07-design-system` | اصول بصری، پایه‌ها، کامپوننت‌ها و دسترس‌پذیری |
| `08-final-design-and-handoff` | پوشش صفحات، QA و تحویل به توسعه |
| `09-measurement-and-iteration` | سنجش، آزمایش و یادگیری پس از انتشار |
| `99-archive` | خروجی‌های منسوخ یا جایگزین‌شده، بدون حذف تاریخچه |

## قانون منبع حقیقت

- تصمیم قطعی: `00-project-management/decision-log.md`
- سؤال حل‌نشده: `00-project-management/open-questions.md`
- وضعیت و قدم بعدی: `00-project-management/project-status.md`
- جهت کلی محصول: `00-project-management/shemsh-project-context.md`
- شواهد خام: `02-research-and-audit`
- خروجی هر مرحله: پوشه همان مرحله

## وضعیت‌های ارزیابی

- ✅ کامل: معیار خروج مرحله برآورده شده است.
- 🟡 کافی برای ادامه: شکاف‌ها ثبت شده‌اند و با فرض روشن می‌توان جلو رفت.
- 🔴 نیازمند اصلاح: نقص روی تصمیم‌های بعدی اثر جدی دارد.
- ⛔ وابسته به تصمیم بیرونی: ادامه نهایی‌سازی به تصمیم بیزینس، حقوقی، فنی یا عملیاتی وابسته است.
