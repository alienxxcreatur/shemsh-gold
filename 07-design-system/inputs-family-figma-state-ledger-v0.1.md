# State Ledger خانواده Inputs در Figma — v0.1

وضعیت: `Candidate / Awaiting owner visual review`

تاریخ: ۲۰ مرداد ۱۴۰۵ / 11 Aug 2026  
تصمیم مرجع: D-143  
File key: `1ww36pr21itLXyAFZdouMy`

## ساختار صفحه

- **Observed fact:** صفحه واحد `15 Inputs` با ID `325:229` جایگزین صفحه‌های جداگانه Text Input و Amount Input شد.
- **Observed fact:** Section اصلی `Inputs / Main` با ID `353:1254` شامل قرارداد خانواده، Text Input، Amount Input، مستندات Usage/Anatomy/Properties/States و لیبل‌های State/Size است.
- **Observed fact:** رفرنس UNTITLED با ID `303:1426` در Section جدا `Inputs / Reference / UNTITLED` با ID `353:1324` روی همان صفحه حفظ شده و منبع حقیقت شمش نیست.

## قرارداد مشترک

- **Business decision:** عرض پایه Component برابر ۳۲۰، ارتفاع Field برابر ۴۸ برای Medium و ۵۶ برای Large و Padding افقی برابر ۱۶ است.
- **Business decision:** Radius پوسته همه Inputهای این خانواده دقیقاً ۱۴ است و از `semantic/dimension/radius/input` می‌آید. این Semantic token به Primitive مستقل `primitive/dimension/radius/14` Alias شده تا Radius عمومی Button و Controlهای دیگر تغییر نکند.
- **Business decision:** Anatomy مشترک Inputها `Label row / Field shell / Field / Focus ring` است. Focus ring فقط در State=`Focus` نمایش داده می‌شود؛ Stroke آن از `semantic/dimension/stroke/focus` و رنگش از `semantic/color/focus/ring` می‌آید.
- **Business decision:** Label، Value/Placeholder، Helper و متن‌های Amount از Text Styleهای Semantic موجود استفاده می‌کنند؛ Typography دستی برای نقش‌های کامپوننت مجاز نیست.
- **Business decision:** Label، Value، Placeholder، Helper، Balance hint، Unit و Action در قرارداد RTL راست‌چین‌اند. متن‌های زیر Amount در دو ستون Fill برابر ۱۵۶ نمایش داده می‌شوند.
- **Business decision:** Stateهای مشترک خانواده عبارت‌اند از `Empty/Filled/Hover/Focus/Error/Disabled/Read-only`. Amount Input افزون بر آن `Loading` دارد.

## Component Setها

- **Observed fact:** Text Input با ID `286:810` دارای ۱۴ Variant و ۱۴ تعریف Property شامل دو محور Variant است.
- **Observed fact:** Amount Input با ID `325:410` دارای ۱۶ Variant و ۱۴ تعریف Property شامل دو محور Variant است.
- **Observed fact:** Property referenceهای چهار Variant Cloneشده Hover/Read-only در Amount Input بازمتصل و Audit شدند.
- **Observed fact:** تمام Hardcodeهای مشترک Amount Input در Radius، Fill، Stroke، Height، Padding و Gap با Semantic Tokenها جایگزین شدند؛ Propertyهای `Show label` و `Show action` اکنون Container مربوط را کنترل می‌کنند.
- **Observed fact:** Loading indicator در هر ۱۶ Variant هندسه ثابت `16×4` دارد و فقط در State=`Loading` visible است.

## Validation

- **Observed fact:** Final audit برای هر ۳۰ Variant روی تعداد و یکتایی Tuple، Text Style و Text color binding، RTL، Geometry ۳۲۰/۴۸/۵۶/۱۶، Radius ۱۴ و چهار Corner binding، Field/Focus ring، Fill/Stroke/Spacing tokenها، Meta row، Loading و Property referenceها `0 issue` گزارش کرد.
- **Observed fact:** تمام ۲۱۷ Text node داخل Section مستندات Style ID معتبر دارند.
- **Observed fact:** Screenshot کامل صفحه در `artifacts/inputs-unified-page-v0.1.png`، Text Input در `artifacts/text-input-normalized-v0.2.png` و Amount Input در `artifacts/amount-input-normalized-v0.2.png` ذخیره شد.

## Risk و Gate

- **Risk:** قرارداد ساختاری و Token binding اکنون یکدست است، اما مصرف واقعی، Device، Light/Dark و Accessibility پیش از `Stable` شدن همچنان لازم است.
- **Risk:** Text Input و Amount Input تا تأیید بصری مالک محصول و آزمون در Flow واقعی `Candidate` باقی می‌مانند.

Gate فعلی: `Sufficient to proceed / Awaiting owner visual approval`.
