# قرارداد Button Candidate v0.3

وضعیت: `Approved contract / 108-variant Candidate built / Final owner visual review pending`

تاریخ: 9 Aug 2026

تصمیم مرجع: D-122

## تصمیم قطعی

- **Business decision:** معماری Button از مدل ۷۲تایی `Hierarchy × Size × State` به مدل ۱۰۸تایی زیر تغییر می‌کند:
  - `Emphasis = Primary / Secondary / Tertiary`
  - `Tone = Neutral / Destructive`
  - `Size = Small / Medium / Large`
  - `State = Default / Hover / Pressed / Focus / Disabled / Loading`
- **Business decision:** تعداد هدف دقیقاً `3 × 2 × 3 × 6 = 108` Variant است.
- **Business decision:** Button به Setهای کوچک‌تر تقسیم نمی‌شود.
- **Business decision:** `Link` و `Icon Button` اجزای جدا هستند و محور Button نمی‌شوند.
- **Business decision:** پنج Size عمومی Untitled UI به شمش منتقل نمی‌شود؛ سه Size برای محصول PWA محور حفظ می‌شود.

## Component properties

- `Label` — Text
- `Show start icon` — Boolean
- `Start icon` — Instance swap
- `Show end icon` — Boolean
- `End icon` — Instance swap
- `Show label while loading` — Boolean

## Anatomy

- Touch target
- Surface
- Focus ring
- Content
- Start icon
- Label
- End icon
- Loading icon

## رفتار و اندازه

- Small: سطح بصری ۴۰px با Touch target حداقل ۴۴px.
- Medium: ارتفاع ۴۸px.
- Large: ارتفاع ۵۶px.
- Icon: به‌ترتیب ۱۶، ۲۰ و ۲۴px.
- Focus ring لایه‌ای مستقل است و Border اصلی را جایگزین نمی‌کند.
- Loading اندازه Button را تغییر نمی‌دهد؛ Label در ساختار حفظ می‌شود و نمایش آن با Property کنترل می‌شود.
- Disabled فقط با opacity بیان نمی‌شود و Container، Content و Border معنایی دارد.
- Hug و Fill رفتار Layout هستند، نه Variant axis.

## ممیزی Button قبلی

- **Observed fact:** Set قبلی `36:1545` دقیقاً ۷۲ Variant یکتا و Propertyهای Label و Start/End icon دارد.
- **Observed fact:** در ممیزی read-only دقیق، از ۲۵۶ Paint متصل به Variable، ۱۴۰ fallback با مقدار resolved همان Token ناسازگار بود.
- **Observed fact:** هر ۱۲ Focus روی خود Component استروک ۲px دارند، اما فقط سه Variant یک Rectangle اضافه با نام `Focus ring` دارند؛ ساختار Focus یکسان نیست.
- **Observed fact:** استفاده از `semantic/typography/label/large` با Yekan Bakh FaNum 14/20 SemiBold برای هر سه Size با Typography Candidate پروژه سازگار است و به‌تنهایی نقص محسوب نمی‌شود.
- **Risk:** Set قبلی با وجود صحت ماتریس، از نظر بصری و Binding `Needs revision` است و نباید Candidate تأییدشده تلقی شود.

## مسیر اجرای Figma

1. ساخت صفحه اختصاصی `10 Button`.
2. ساخت Documentation و Base Candidate.
3. بستن Token gap برای Secondary/Tertiary Destructive.
4. ساخت ۱۰۸ Variant در Batchهای کوچک و idempotent.
5. اتصال Component propertyها.
6. Audit ساختاری و Binding.
7. QA کامل Master Set و QA Board در Light/Dark، RTL، متن بلند، Icon، Loading و Hug/Fill.
8. Review مالک محصول پیش از Promote.

## وضعیت اجرا

- دو تلاش اولیه idempotent برای ساخت صفحه `10 Button` با timeout سرویس بررسی مجوز write متوقف شد و Metadata تأیید کرد Node تازه‌ای ایجاد نشده بود.
- پس از تأیید صریح مالک محصول و تأیید Full seat حساب Figma، صفحه `10 Button` با ID `150:633` ساخته شد.
- Pilot شش‌حالته با ID `157:801` و QA board با ID `161:641` ساخته شدند. Technical audit و Stress testهای RTL، متن بلند، Icon، Loading، Focus و Hug/Fill پاس شدند؛ resolved paint mismatch برابر صفر است.
- مالک محصول در 9 Aug 2026 Pilot را بصری تأیید کرد؛ Expand به ماتریس ۱۰۸تایی مجاز شد.
- ماتریس کامل ۱۰۸تایی در همان Component Set با ID `157:801` ساخته و به‌صورت ۶ ستون State و ۱۸ ردیف Tone/Emphasis/Size بازچینی شد.
- Final technical audit شامل ۱۰۸ tuple یکتا، ۱۰ تعریف Property، Anatomy/RTL/State/Geometry کامل و ۶۶۶ Paint متصل با صفر mismatch پاس شد. Screenshot Master و QA board نیز در بازبینی Agent پاس شد.
- State Ledger اجرایی در `button-figma-state-ledger-v0.1.md` نگهداری می‌شود.

## Gate

`Sufficient to proceed / Awaiting final owner visual review` — ساخت و Final technical/agent visual audit کامل است؛ Promote به `Tested Candidate` پس از تأیید بصری مالک محصول انجام می‌شود و `Stable` هنوز مجاز نیست.
