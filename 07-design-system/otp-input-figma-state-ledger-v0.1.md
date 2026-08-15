# State Ledger کامپوننت OTP Input در Figma — v0.1

وضعیت: `Candidate / Awaiting owner visual review`

تاریخ: ۲۰ مرداد ۱۴۰۵ / 11 Aug 2026  
File key: `1ww36pr21itLXyAFZdouMy`

## ساختار

- **Observed fact:** OTP Input در صفحه مشترک `15 Inputs` با Page ID `325:229` و داخل Section اصلی `353:1254` ساخته شد.
- **Observed fact:** Component Set اصلی با ID `385:1398` دارای ۳۲ Variant یکتا است: `Digits=4/6 × Size=Medium/Large × State=Empty/Partial/Filled/Hover/Focus/Error/Disabled/Success`.
- **Observed fact:** مستندات Usage/Anatomy/Properties/States با Frame ID `388:1268` زیر Amount Input و روی همان صفحه قرار دارند.

## قرارداد Candidate

- **Design assumption:** OTP چهار یا شش‌رقمی است؛ این پوشش برای Component library است و طول واقعی کد هر Flow باید با Backend/امنیت همان Flow تطبیق داده شود.
- **Design assumption:** Cellها عرض ثابت ۴۸ و ارتفاع ۴۸ در Medium و ۵۶ در Large دارند. Code row با Gap توکن‌دار ۴ و مرکزچین است؛ Label و Helper از قرارداد RTL خانواده پیروی می‌کنند.
- **Business decision:** پس از تأیید صحیح کد و تا لحظه Redirect، OTP Input در State=`Success` باقی می‌ماند. این State کد کامل، Border موفقیت و پیام `Success message` را با Semantic tokenهای Success نمایش می‌دهد — D-148.
- **Design assumption:** Stateهای `Empty/Partial/Filled/Hover/Focus/Error/Disabled/Success` نیازهای بصری پایه را پوشش می‌دهند. Timer و Resend بیرون از OTP Input و در Pattern سطح بالاتر قرار می‌گیرند.
- **Observed fact:** Cell و Focus ring از Radius مشترک ۱۴ با `semantic/dimension/radius/input` استفاده می‌کنند؛ Fill، Border، Stroke و متن‌ها نیز به Semantic Tokenها و Text Styleها متصل‌اند.
- **Observed fact:** Set دارای ۱۶ تعریف Property شامل محورهای Variant و Propertyهای Label، Helper، Error message، Success message، Digit 1…6، Required و Show label/helper است.

## Validation

- **Observed fact:** Pilot شش‌حالته `Digits=6 / Size=Medium` با Screenshot واقعی بررسی و از نظر تصویر پذیرفته شد.
- **Observed fact:** Final technical audit روی ۳۲ Tuple، Position، Root، Label row، Code row، Cell count، Geometry 48/56، Radius و Corner binding، Field/Focus/Success tokenها، Text Style/Color و Property wiring مقدار `0 issue` گزارش کرد.
- **Observed fact:** fallback اولیه Fill در چهار Variant موفقیت مشکی مانده بود، با وجود آن‌که `semantic/color/surface/base` در Light به سفید Resolve می‌شد. fallback تمام ۴۴ Paint مربوط به Cell/Border/Digit/Helper با مقدار Resolve‌شده همگام شد و Audit نهایی `0 mismatch` گزارش کرد؛ Success اکنون سطح روشن با Border و محتوای سبز دارد.
- **Risk:** سرویس Screenshot هنگام رندر Set کامل ۲۸تایی چند بار timeout داد؛ بنابراین بررسی بصری مالک محصول روی ماتریس کامل پیش از Promote الزامی است.
- **Risk:** رفتار واقعی Autofill، Paste، Keyboard، Countdown، Resend، LTR عددها در RTL، Accessibility و خطای Backend باید در Flow واقعی آزموده شود.

Gate فعلی: `Sufficient to proceed / Awaiting owner visual approval`.
