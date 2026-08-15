# State Ledger کامپوننت Search Input در Figma — v0.1

تاریخ: 11 Aug 2026  
وضعیت: `Candidate / Awaiting owner visual review`  
Gate: `Sufficient to proceed`

## محل و شناسه‌ها

- **Observed fact:** Search Input در صفحه مشترک `15 Inputs` با Page ID `325:229` و داخل Section اصلی `353:1254` ساخته شد.
- **Observed fact:** Component Set با ID `402:1498` و مستندات با ID `402:1509` ثبت شده‌اند.
- **Observed fact:** Set شامل ۱۲ Variant یکتا از ترکیب `Size=Medium/Large × State=Empty/Filled/Hover/Focus/Disabled/Loading` است.

## قرارداد

- **Design assumption:** Search Input برای جست‌وجوی فهرست، تراکنش یا دارایی استفاده می‌شود؛ نتیجه‌ها، Empty result و No-results متعلق به Pattern سطح بالاترند و Variant خود Input نیستند.
- **Design assumption:** Error و Read-only در خود Search Input نیاز پایه نیستند؛ Disabled و Loading پوشش داده شده‌اند.
- عرض Root و Field برابر ۳۲۰ است؛ ارتفاع Field در Medium برابر ۴۸ و در Large برابر ۵۶ است.
- Radius برابر ۱۴ و متصل به `semantic/dimension/radius/input` است؛ Padding افقی ۱۶ و ساختار `Label / Field shell / Field / Focus ring / Helper` با خانواده Input مشترک است.
- RTL کامل است: Search icon در سمت شروع فارسی، Clear یا Loading در سمت پایان و Value/Placeholder راست‌چین است.
- MagnifyingGlass و X با هندسه Stroke/Regular سازگار با Phosphor ساخته شده‌اند و رنگشان به Semantic icon token متصل است.

## Propertyها

- Variant axes: `Size`, `State`
- Text: `Label`, `Placeholder`, `Value`, `Helper`
- Boolean: `Show label`, `Show helper`, `Show clear`
- `Show clear` فقط در Variantهای Filled به لایه Clear متصل است؛ Loading به State وابسته است.

## QA

- **Observed fact:** Final technical audit تعداد ۱۲ Variant و ۱۲ Tuple یکتا را تأیید کرد.
- **Observed fact:** Geometry همه Variantها، Radius ۱۴، نمایش Focus ring فقط در Focus، Clear فقط در Filled و Loading فقط در Loading با صفر Issue پاس شد.
- **Observed fact:** بازبینی بصری کامل صفحه انجام شد؛ نسخه اولیه آیکون‌های Remote پس از Binding به‌صورت مربع دیده شد و با Vectorهای Stroke/Regular سازگار با Phosphor جایگزین شد. Screenshot نهایی، هم‌ترازی دو اندازه و شش State را تأیید کرد.
- **Risk:** قبل از Promote، مالک محصول باید ماتریس کامل را در Figma تأیید کند و رفتار واقعی Clear، Keyboard submit، Debounce، Loading و No-results در Flow محصول تست شود.

## نتیجه Gate

`Sufficient to proceed` — ساخت و Audit فنی/بصری عامل کامل است؛ Promote به `Tested Candidate` منتظر تأیید بصری مالک محصول می‌ماند.
