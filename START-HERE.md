# شروع از اینجا

این فایل ورودی اصلی پروژه ریدیزاین شمش است. تاریخچه چت مبنای ادامه کار نیست؛ وضعیت، تصمیم‌ها و خروجی‌ها باید در همین مخزن ثبت شوند.

## وضعیت فعلی

- مرحله فعال داخلی: **مرحله ۶ — وایرفریم کل اپ چندفلزی**
- زیرمرحله فعال: **Review و اصلاح جزئی Prototype کامل `MM-W0..MM-W8` — D-133**
- مسیر موازی بیرونی: **تأیید مالی/حسابداری OQ-055؛ `Blocked by external decision` فقط برای UI نهایی اعداد پورتفوی**
- قدم بعدی قطعی: Review و اصلاح جزئی موج‌به‌موج روی Prototype کامل ۳۳State؛ پوشش ساخت و QA افقی همه `MM-W0..MM-W8` انجام شده و بلوغ هر موج ۷۵٪ است. Featureهای باز Capability-gated و OQ-054 موازی می‌مانند — D-127/D-130/D-131/D-133
- مسیر موازی داخلی: **Foundations و Base componentهای مستقل از فلز در مرحله ۷ طبق D-117 ادامه دارند؛ Radio ۸تایی و Switch ۱۰تایی `Tested Candidate` هستند؛ Text Input ۱۴تایی Final audit صفر Issue را پاس کرده و منتظر تأیید بصری مالک محصول است؛ Icon Button و Checkbox نیز هنوز منتظر تأیید بصری‌اند و اجزای فلزمحور از `Candidate` فراتر نمی‌روند — D-134/D-136**
- مسیر موازی استخراج بصری: **G2/G3 سراسری Binance iOS و G4 Candidate mapping کامل‌اند: ۳۲ Flow، ۱۷۳ Screen خام، Dedupe درون چهار Batch، ۲۹ Pattern Corroborated، هشت Mapping معامله و ۲۳ Mapping سراسری با نتیجه `9 Adopt + 13 Adapt + 1 Defer`. قدم بعد Review مالک روی چهار موضوع P0 و سپس G5 Visual Direction Contract است؛ پیش از آن Home/DS تغییر تازه نمی‌کند و وایرفریم شمش مرجع ساختار و رفتار می‌ماند — D-163**
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
