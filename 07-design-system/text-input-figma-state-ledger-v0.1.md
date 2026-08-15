# State Ledger اجرای Text Input در Figma — v0.1

تاریخ: 10 Aug 2026  
فایل: `Shemsh Design System — Sandbox`  
File key: `1ww36pr21itLXyAFZdouMy`

## وضعیت فعلی

- **Observed fact:** صفحه مستقل قبلی `15 Text Input` با ID `285:229` پس از انتقال کامل حذف شد؛ Component Set اکنون در صفحه مشترک `15 Inputs` با ID `325:229` و Section اصلی `353:1254` قرار دارد — D-143.
- **Observed fact:** Component Set اصلی `Text Input` با ID `286:810` دارای ۱۴ Variant یکتا است: `Size=Medium/Large × State=Empty/Filled/Hover/Focus/Error/Disabled/Read-only`.
- **Observed fact:** Propertyهای عمومی شامل `Label#287:0`، `Value#287:15`، `Placeholder#287:30`، `Helper#287:45`، `Required#287:60`، `Show start icon#287:75`، `Start icon#287:90`، `Show end icon#287:105`، `End icon#287:120`، `Show clear#287:135`، `Show label#319:0` و `Show helper#319:15` هستند و در هر ۱۴ Variant متصل‌اند.
- **Observed fact:** در 11 Aug 2026 پس از مقایسه با Component Set رفرنس `Input field` با ID `303:1426`، دو Property کم‌خطر و عمومی `Show label` و `Show helper` به Component Set اصلی `286:810` اضافه و به `Label row` و `Helper` همه Variantها وصل شد؛ اعتبارسنجی Plugin API هیچ اتصال جاافتاده‌ای گزارش نکرد.
- **Design assumption:** رفرنس UNTITLED به‌دلیل ترکیب Generic input، Payment input، Leading/Trailing dropdown، Label، Hint، Help icon، Destructive و State به ۳۳۶ Variant رسیده است؛ برای Shemsh، `Payment input`، `Dropdown/Select`، Search و OTP وارد Text Input عمومی نمی‌شوند و قرارداد جدا دارند.
- **Observed fact:** عرض Field برابر ۳۲۰ است؛ ارتفاع Medium برابر ۴۸ و Large برابر ۵۶ است. Focus فقط در State=`Focus`، مقدار در `Filled/Error/Read-only` و Placeholder در Stateهای دیگر نمایش داده می‌شوند.
- **Observed fact:** Error به توکن‌های Danger، Disabled به Surface/Border/Text غیرفعال و Read-only به Surface sunken متصل است. Fill، Stroke، Focus، Radius، Padding، Gap و متن‌ها از Variableهای موجود استفاده می‌کنند و مقدار محلی تازه ساخته نشد.
- **Observed fact:** Final audit تعداد، Tuple یکتا، Anatomy، Geometry، State visibility، API عمومی، Property references و Token binding را بررسی کرد و `0 issue` گزارش داد.
- **Observed fact:** Board نمونه قدیمی با ID `290:230` در وضعیت فعلی فایل وجود ندارد و جزو Artifact نهایی محسوب نمی‌شود؛ Propertyها در مستندات صفحه مشترک و Audit Component Set پوشش داده شده‌اند.
- **Observed fact:** تمام نقش‌های Label/Required/Value/Placeholder/Helper به Text Styleهای Semantic موجود وصل شدند؛ محتوای visible در هر State عرض Fill و تراز RIGHT دارد.
- **Observed fact:** Set در گرید مشترک خانواده با عرض Component برابر ۳۲۰، ارتفاع Field برابر ۴۸/۵۶، Padding افقی ۱۶ و لیبل‌های بیرونی State/Size مستند شده است.
- **Observed fact:** Final family audit تعداد ۱۴ Variant یکتا، ۱۴ تعریف Property شامل دو محور Variant و صفر Issue در Style/RTL/Geometry/Property reference گزارش کرد.
- **Risk:** Stress test مستقل برای Required، Icon swap و Clear پس از ادغام صفحه باید در مصرف واقعی/QA Device دوباره اجرا شود؛ این مورد مانع `Candidate` نیست اما پیش از `Stable` لازم است.
- **Design assumption:** Text Input عمومی برای متن، موبایل، کد ملی و شناسه است؛ Amount، OTP، تاریخ، Search و انتخاب‌ها Component تخصصی خود را دارند.

## Evidence

- Screenshot اصلی: `artifacts/text-input-normalized-v0.2.png`
- Screenshot صفحه مشترک: `artifacts/inputs-unified-page-v0.1.png`
- Figma page: `https://www.figma.com/design/1ww36pr21itLXyAFZdouMy/Shemsh-Design-System---Sandbox?node-id=325-229`

Gate فعلی: `Sufficient to proceed / Awaiting owner visual approval`. پس از تأیید بصری مالک محصول، Text Input می‌تواند به `Tested Candidate` ارتقا یابد؛ آزمون Device/Accessibility و مصرف واقعی پیش از `Stable` شدن همچنان لازم است.
