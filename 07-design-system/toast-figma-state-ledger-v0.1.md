# State Ledger کامپوننت Toast در Figma — v0.1

تاریخ: 15 Aug 2026  
وضعیت: `Candidate / Awaiting owner visual review`  
Gate: `Sufficient to proceed`

## محل و شناسه‌ها

- **Observed fact:** Toast در صفحه مستقل `17 Toast` با Page ID `424:269` ساخته شد.
- **Observed fact:** Component Set اصلی `Toast` با ID `426:1647` ثبت شده است.
- **Observed fact:** Helper iconهای private روی همین صفحه ساخته شدند: `.Toast/Icon/Status` با ID `425:239` و `.Toast/Icon/Close` با ID `425:243`.
- **Observed fact:** QA board نهایی Light/Dark با ID `426:1725` ساخته شد.
- **Observed fact:** Set شامل ۵ Variant یکتا است: `Tone=Neutral/Info/Success/Warning/Danger`.

## قرارداد

- **Design assumption:** Toast فقط برای بازخورد کوتاه و غیرحیاتی پس از اقدام استفاده می‌شود؛ خطای حیاتی یا شکست تراکنش فقط با Toast اعلام نمی‌شود.
- عرض Root برابر ۳۲۰ و ارتفاع پایه برابر ۴۸ است؛ متن بلند ارتفاع را بدون بریدگی افزایش می‌دهد.
- رنگ‌های Container، Border، Message، Action و Icon از `semantic/color/status/{tone}/*` می‌آیند.
- Radius به `semantic/dimension/radius/container`، Stroke به `semantic/dimension/stroke/default` و Padding عمودی به `semantic/dimension/space/control-block` متصل است.
- Message و Action راست‌چین و با Text Styleهای Semantic خانواده `Yekan Bakh FaNum` ساخته شده‌اند.
- ترتیب فیزیکی RTL از راست به چپ `Status icon → Message → Action → Dismiss` است.

## Propertyها

- Variant axis: `Tone`
- Text: `Message`
- Boolean: `Action`, `Dismiss`
- Instance swap: `Icon`

## QA

- **Observed fact:** Final technical audit تعداد ۵ Variant و ۵ Tuple یکتا، چهار Property عمومی و همه Property referenceها را با صفر Issue تأیید کرد.
- **Observed fact:** در هر Variant هر ۸ Paint رنگی به Variable متصل است؛ Container/Border/Text/Icon از Tone متناظر resolve می‌شوند.
- **Observed fact:** Typography Semantic، RTL order، نام‌گذاری Nodeها، Bounds و حداقل ارتفاع ۴۸ در audit نهایی پاس شدند.
- **Observed fact:** Visual QA واقعی Light/Dark، پنج Tone، متن بلند، `Action=false` و `Dismiss=false` را پوشش داد.
- **Observed fact:** Visual QA ابتدا کنتراست Label پنل Dark را پیدا کرد و فیکس شد؛ audit فنی نیز ۱۶ Property reference گم‌شده پس از Clone/Reparent را پیدا کرد و هر ۲۰ reference Set دوباره wire شدند.
- **Risk:** قبل از Promote، مالک محصول باید ماتریس کامل را در Figma تأیید بصری کند و رفتار نمایش/زمان‌بندی/اعلان Screen Reader و سطح لمس Action/Dismiss در Flow واقعی تست شود.

## نتیجه Gate

`Sufficient to proceed` — ساخت و audit فنی/بصری عامل کامل است؛ Promote به `Tested Candidate` منتظر تأیید بصری مالک محصول و مصرف واقعی در Flow می‌ماند.
