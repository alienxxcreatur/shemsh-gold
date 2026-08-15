# State Ledger کامپوننت Alert در Figma — v0.1

تاریخ: 15 Aug 2026  
وضعیت: `Candidate / Awaiting owner visual review`  
Gate: `Sufficient to proceed`

## محل و شناسه‌ها

- **Observed fact:** Alert در صفحه مستقل `16 Alert` با Page ID `410:367` ساخته شد.
- **Observed fact:** Component Set اصلی با ID `411:344` ثبت شده است.
- **Observed fact:** Helper iconهای private روی همین صفحه ساخته شدند: `.Alert/Icon/Status` با ID `410:368` و `.Alert/Icon/Close` با ID `410:373`.
- **Observed fact:** Set شامل ۱۰ Variant یکتا از ترکیب `Tone=Neutral/Info/Success/Warning/Danger × Layout=Inline/Stacked` است.

## قرارداد

- **Design assumption:** Alert برای پیام پایدار داخل Context استفاده می‌شود؛ Toast برای بازخورد کوتاه و غیرحیاتی می‌ماند و جایگزین خطای حیاتی یا شکست تراکنش نیست.
- **Design assumption:** Layoutهای `Inline` و `Stacked` برای مصرف‌های فشرده و توضیح‌دار کافی‌اند؛ حالت‌های Action یا Dismiss با Property کنترل می‌شوند، نه Variant تازه.
- عرض Root برابر ۳۲۰ است؛ `Inline` ارتفاع ۹۲ و `Stacked` ارتفاع ۱۱۲ دارد.
- Radius به `semantic/dimension/radius/container` و Stroke به `semantic/dimension/stroke/default` متصل است.
- رنگ‌های Container، Border، Text و Icon از `semantic/color/status/{tone}/*` می‌آیند.
- Textها راست‌چین و با Text Styleهای Semantic خانواده `Yekan Bakh FaNum` ساخته شده‌اند.
- Status icon در سمت شروع فارسی/راست و Dismiss در سمت پایان/چپ قرار دارد.

## Propertyها

- Variant axes: `Tone`, `Layout`
- Text: `Title`, `Description`, `Action label`
- Boolean: `Show action`, `Show dismiss`, `Show icon`
- Instance swap: `Icon`

## QA

- **Observed fact:** Final structural audit تعداد ۱۰ Variant و همه Tupleهای هدف را با صفر Issue تأیید کرد.
- **Observed fact:** Property referenceها برای `Title`, `Description`, `Action label`, `Show action`, `Show dismiss`, `Show icon` و `Icon` در تمام Variantها وصل هستند.
- **Observed fact:** بازبینی بصری اولیه یک ایراد Fill سفید پیش‌فرض روی فریم‌های داخلی `content/topRow/actions` پیدا کرد؛ Fill و Stroke داخلی حذف شد و audit پس از فیکس صفر Issue شد.
- **Observed fact:** Screenshot نهایی صفحه `16 Alert` نظم ردیف/ستون، خوانایی متن، تمایز پنج Tone و دو Layout را تأیید کرد.
- **Risk:** قبل از Promote، مالک محصول باید ماتریس کامل را در Figma تأیید بصری کند و مصرف واقعی Alert در خطا/هشدار/محدودیت‌های Flow محصول تست شود.

## نتیجه Gate

`Sufficient to proceed` — ساخت و Audit فنی/بصری عامل کامل است؛ Promote به `Tested Candidate` منتظر تأیید بصری مالک محصول و مصرف در Flow واقعی می‌ماند.
