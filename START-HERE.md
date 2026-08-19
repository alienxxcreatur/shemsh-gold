# شروع از اینجا

این فایل ورودی اصلی پروژه ریدیزاین شمش است. تاریخچه چت مبنای ادامه کار نیست؛ وضعیت، تصمیم‌ها و خروجی‌ها باید در همین مخزن ثبت شوند.

## وضعیت فعلی

- مرحله فعال داخلی: **مرحله ۸ — تبدیل کپی HTML وایرفریم فریز‌شده به High-fidelity**
- زیرمرحله فعال: **Pattern layer v0.1 روی بخش‌های اصلی Home/Asset/Trade/History/Operation detail با شواهد Binance و بدون Write در Figma — D-219/D-223**
- مسیر موازی بیرونی: **تأیید مالی/حسابداری OQ-055؛ `Blocked by external decision` فقط برای UI نهایی اعداد پورتفوی**
- مسیر Business-gated تمیزکاری: **طبق D-206 تا Review فلوهای دریافت، اقساط، هدیه، سفارش، مجوزها و پشتیبانی با Business Owner متوقف است؛ پیش‌فرض‌های فعلی فقط `Design assumption` هستند**
- قدم بعدی قطعی: مالک محصول فایل `08-final-design-and-handoff/artifacts/multi-metal-high-fidelity-v0.1.html` را از نظر معماری بصری Review می‌کند؛ پس از اصلاح این Pattern layer، پالت v2 و Typography/visual polish روی همین فایل اعمال می‌شوند. انتقال به Figma فقط با دستور صریح تازه مجاز است. Artifact فریز‌شده و D-206/OQ-055/OQ-056 دست‌نخورده می‌مانند — D-219/D-223
- مسیر Figma: **متوقف تا دستور صریح مالک محصول. خروجی Page `20 Screen-led / Home` و H01/H02 ردشده و Non-authoritative است و مبنای ادامه نیست. Variableها و Componentهای موجود حذف نمی‌شوند، اما هیچ Write تازه‌ای مجاز نیست — D-223**
- مسیر استخراج بصری: **G2/G3، G4 Candidate mapping و G5 Visual Direction Contract v0.1 فقط به‌عنوان Evidence حفظ‌اند. در Pattern layer v0.1، Canvas سفید، یک Numeric anchor، Card taxonomy محدود، Rowهای تخت و CTA اصلی روی کپی HTML مرحله ۸ اعمال شده‌اند؛ پالت نهایی، H05، Device QA و Review مالک هنوز بازند — D-163/D-177/D-223**
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
