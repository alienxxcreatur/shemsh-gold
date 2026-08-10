# State Ledger اجرای Switch در Figma — v0.1

تاریخ: 9 Aug 2026  
فایل: `Shemsh Design System — Sandbox`  
File key: `1ww36pr21itLXyAFZdouMy`

## وضعیت فعلی

- **Observed fact:** صفحه مستقل `14 Switch` با ID `238:229` ساخته شد.
- **Observed fact:** Component Set اصلی `Switch` با ID `243:229` دارای ۱۰ Variant یکتا است: `Selection=Off/On × State=Default/Hover/Focus/Disabled/Loading`.
- **Observed fact:** Propertyهای عمومی شامل `Label#243:0`، `Helper#243:11` و `Show label#243:22` هستند و در هر ۱۰ Variant متصل‌اند.
- **Observed fact:** Touch target برابر ۴۸×۴۸، Track برابر ۴۰×۲۴ و Thumb برابر ۲۰×۲۰ است؛ موقعیت Thumb برای Off و On به‌ترتیب `x=6` و `x=22` است.
- **Observed fact:** Focus ring فقط در State=`Focus` و Loading indicator فقط در State=`Loading` نمایش داده می‌شود.
- **Observed fact:** Fill، Stroke، Focus، Thumb، Spinner و متن‌ها به Variableهای موجود Semantic/State متصل‌اند؛ مقدار رنگ محلی تازه ساخته نشد.
- **Observed fact:** Final audit تعداد، Tuple یکتا، Anatomy، Geometry، State visibility، Binding و Property references را بررسی کرد و `0 issue` گزارش داد.
- **Design assumption:** قرارداد بصری فعلی تا آزمون مصرف واقعی، Device و Accessibility در وضعیت Candidate می‌ماند.

## Evidence

- Screenshot: `artifacts/switch-candidate-v0.1.png`
- Figma page: `https://www.figma.com/design/1ww36pr21itLXyAFZdouMy/Shemsh-Design-System---Sandbox?node-id=238-229`

Gate فعلی: `Complete for Tested Candidate`؛ مالک محصول خروجی کامل را تأیید بصری کرده است — D-136. Switch تا آزمون مصرف واقعی و Device/Accessibility نهایی هنوز `Stable` نیست.
