# State Ledger اجرای Text Input در Figma — v0.1

تاریخ: 10 Aug 2026  
فایل: `Shemsh Design System — Sandbox`  
File key: `1ww36pr21itLXyAFZdouMy`

## وضعیت فعلی

- **Observed fact:** صفحه مستقل `15 Text Input` با ID `285:229` ساخته شد.
- **Observed fact:** Component Set اصلی `Text Input` با ID `286:810` دارای ۱۴ Variant یکتا است: `Size=Medium/Large × State=Empty/Filled/Hover/Focus/Error/Disabled/Read-only`.
- **Observed fact:** Propertyهای عمومی شامل `Label#287:0`، `Value#287:15`، `Placeholder#287:30`، `Helper#287:45`، `Required#287:60`، `Show start icon#287:75`، `Start icon#287:90`، `Show end icon#287:105`، `End icon#287:120` و `Show clear#287:135` هستند و در هر ۱۴ Variant متصل‌اند.
- **Observed fact:** عرض Field برابر ۳۲۰ است؛ ارتفاع Medium برابر ۴۸ و Large برابر ۵۶ است. Focus فقط در State=`Focus`، مقدار در `Filled/Error/Read-only` و Placeholder در Stateهای دیگر نمایش داده می‌شوند.
- **Observed fact:** Error به توکن‌های Danger، Disabled به Surface/Border/Text غیرفعال و Read-only به Surface sunken متصل است. Fill، Stroke، Focus، Radius، Padding، Gap و متن‌ها از Variableهای موجود استفاده می‌کنند و مقدار محلی تازه ساخته نشد.
- **Observed fact:** Final audit تعداد، Tuple یکتا، Anatomy، Geometry، State visibility، API عمومی، Property references و Token binding را بررسی کرد و `0 issue` گزارش داد.
- **Observed fact:** Board نمونه Propertyها با ID `290:230` چهار Instance واقعی برای Required، Start icon، End icon و Clear action دارد.
- **Risk:** بررسی خودکار اضافه Board نمونه‌ها به‌علت محدودیت مصرف سرویس Connector اجرا نشد؛ ساخت Board موفق بود و این محدودیت روی Audit Component Set اصلی اثری ندارد.
- **Design assumption:** Text Input عمومی برای متن، موبایل، کد ملی و شناسه است؛ Amount، OTP، تاریخ، Search و انتخاب‌ها Component تخصصی خود را دارند.

## Evidence

- Screenshot اصلی: `artifacts/text-input-candidate-v0.1.png`
- Figma page: `https://www.figma.com/design/1ww36pr21itLXyAFZdouMy/Shemsh-Design-System---Sandbox?node-id=285-229`

Gate فعلی: `Sufficient to proceed / Awaiting owner visual approval`. پس از تأیید بصری مالک محصول، Text Input می‌تواند به `Tested Candidate` ارتقا یابد؛ آزمون Device/Accessibility و مصرف واقعی پیش از `Stable` شدن همچنان لازم است.
