# قرارداد ساخت Base Componentها — Candidate v0.2

وضعیت سند: `Candidate / Business-approved / Figma execution partially complete`

تاریخ: 8 Aug 2026

این سند قرارداد اجرایی Base Componentهای مستقل از فلز است. ساختار Variableهای Sandbox و مهاجرت به `Yekan Bakh FaNum` طبق D-117 حفظ می‌شوند، اما جهت رنگ Black-neutral با D-202 به Navy-first تغییر کرده است. قرارداد Button این نسخه با D-122 و `button-component-contract-v0.3.md` جایگزین شده است.

## نتیجه‌ی اجرای فعلی

- **Observed fact:** مجموعه `Button` در Figma با شناسه `36:1545` همچنان دقیقاً ۷۲ Variant دارد: `4 Hierarchy × 3 Size × 6 State`.
- **Observed fact:** Primary در Light به neutral تیره و در Dark به neutral روشن بازنگاشت شده است.
- **Observed fact:** این نگاشت وضعیت فعلی Figma است، نه جهت هدف پس از D-202؛ Pilot Navy-first باید از Aliasهای Semantic انجام شود.
- **Observed fact:** Primary Focus و Loading دیگر fallback آبی ندارند؛ Focus از `state/color/focus/ring` استفاده می‌کند و Loading از container عادی همان Hierarchy.
- **Observed fact:** هر ۷۲ Label به Style `semantic/typography/label/large` متصل است؛ این انتخاب با Typography Candidate سازگار است.
- **Observed fact:** ممیزی تازه ۱۴۰ ناسازگاری fallback/resolved میان ۲۵۶ Paint متصل و ساختار Focus ناهماهنگ یافت.
- **Risk:** ادعای قبلی Pass شدن QA کل Set معتبر نیست؛ Set فعلی `Needs revision` است و Candidate تازه طبق D-122 ساخته می‌شود.
- **Observed fact:** ساخت Collectionهای Motion، Foundation و Responsive و ۳ Grid Style تکمیل شده است.
- **Observed fact:** صفحه `Components / Base` با شناسه `129:633` ساخته شد و Setهای `Spinner` (`131:653`)، `Progress` (`131:666`)، `Status Badge` (`131:697`) و `Divider` (`131:706`) در آن ایجاد شدند.
- **Observed fact:** بررسی حساب Figma نشان داد حساب `product.derakhshana` در هر دو Team دارای Full seat است؛ timeout بررسی مجوز write پس از تأیید صریح مالک محصول رفع شد و اجرای Pilot موفق بود.
- **Observed fact:** Connector با Batchهای کوچک ادامه یافت و Pilot Icon Button کامل ساخته و Audit شد؛ یک Transport error رخ داد اما با Read-after-error و Retry idempotent بازیابی شد.

## قواعد مشترک همه Componentها

- تمام رنگ‌ها از `Semantic` یا `State` می‌آیند؛ مصرف مستقیم Primitive در Component ممنوع است.
- تمام فاصله، ارتفاع، Radius، Stroke و اندازه Icon به Variable متصل می‌شود.
- متن فارسی با `Yekan Bakh FaNum` و Text Style معنایی ساخته می‌شود.
- عدد، واحد، شناسه یا رشته LTR باید در لایه مستقل با Isolation روشن نگه داشته شود.
- حالت Focus همیشه قابل‌دیدن و مستقل از تغییر رنگ Container است.
- `Disabled` فقط با کاهش opacity بیان نمی‌شود؛ رنگ Container، Content و Border معنایی دارد.
- `Loading` اندازه Component را تغییر نمی‌دهد و Label قابل‌دسترسی حذف نمی‌شود.
- Light، Dark، RTL، متن بلند، touch target حداقل ۴۴px و contrast پیش از `Tested` الزامی‌اند.
- همه خروجی‌های این سند تا عبور از تست محصول `Candidate` می‌مانند.

## قرارداد Componentها

| Component | Variant axes | Component properties | Anatomy اصلی | تعداد هدف |
|---|---|---|---|---:|
| Button | Emphasis=`Primary/Secondary/Tertiary`؛ Tone=`Neutral/Destructive`؛ Size=`Small/Medium/Large`؛ State=`Default/Hover/Pressed/Focus/Disabled/Loading` | Label، Show/Swap Start icon، Show/Swap End icon، Show label while loading | Touch target، Surface، Focus ring، Content، Label، Start/End icon، Loading icon | ۱۰۸ Variant ساخته‌شده؛ Final technical/agent visual audit pass؛ منتظر تأیید بصری نهایی مالک محصول |
| Icon Button | `Style=Primary/Secondary/Tertiary/Destructive`؛ Size=`Small/Medium/Large`؛ State=`Default/Hover/Pressed/Focus/Disabled/Loading` | Accessible label، Loading label، Icon swap | Touch target، Surface، Focus ring، Icon، Loading indicator | Set کامل ۷۲تایی ساخته و Final audit بدون Issue پاس شد؛ منتظر تأیید بصری نهایی — D-129/D-132/D-133 |
| Text Input / Form Field | Size=`Medium/Large`؛ State=`Empty/Filled/Hover/Focus/Error/Disabled/Read-only` | Label، Value، Placeholder، Helper، Required، Show label، Show helper، Show/Swap Start icon، Show/Swap End icon، Show clear | Label row، Field shell، Field، Input content، Value/Placeholder، Focus ring، Helper/Error | Set کامل ۱۴تایی با ۱۲ Property عمومی در صفحه مشترک `15 Inputs`؛ عرض ۳۲۰، ارتفاع ۴۸/۵۶، Text Style Semantic و RTL با صفر Issue audit شدند |
| Amount Input | Size=`Medium/Large`؛ State=`Empty/Filled/Hover/Focus/Error/Disabled/Read-only/Loading` | Label، Amount، Placeholder، Unit، Helper، Balance hint، Action label، Show label، Show unit، Show helper، Show balance hint، Show action | Form field shell، Numeric value/Placeholder، Unit، Balance hint، Quick action، Helper، Loading indicator | Set کامل ۱۶تایی در صفحه مشترک `15 Inputs`؛ Geometry/Typography/RTL مشترک، Meta برابر و Property referenceهای کامل با صفر Issue audit شدند |
| OTP Input | Length=`4/6`؛ State=`Empty/Focus/Filled/Invalid/Expired/Loading/Throttled` | Code، Helper، Timer، Resend label | Group، Digit cells، Cursor/Focus، Error/Timer | ۱۴ |
| Checkbox | Selection=`Unchecked/Checked/Mixed`؛ State=`Default/Hover/Focus/Disabled` | Label، Helper، Show label | Touch target، Box، Mark، Label group | Set کامل ۱۲تایی ساخته و Final audit با صفر Issue پاس شد؛ منتظر تأیید بصری |
| Radio | Selection=`Off/On`؛ State=`Default/Hover/Focus/Disabled` | Label، Helper، Show label | Touch target، Ring، Dot، Label group | `Tested Candidate`؛ Set کامل ۸تایی، Final audit صفر Issue و تأیید بصری مالک محصول — D-134 |
| Switch | Selection=`Off/On`؛ State=`Default/Hover/Focus/Disabled/Loading` | Label، Helper، Show label | Touch target، Track، Thumb، Focus ring، Loading indicator، Label group | `Tested Candidate`؛ Set کامل ۱۰تایی، Final audit صفر Issue و تأیید بصری مالک محصول — D-136 |
| Alert | Tone=`Neutral/Info/Success/Warning/Danger`؛ Layout=`Inline/Stacked` | Title، Description، Action، Dismiss، Icon swap | Container، Status icon، Content، Actions | Set کامل ۱۰تایی ساخته و Final structural/agent-visual audit بدون Issue پاس شد؛ منتظر تأیید بصری |
| Status Badge | Tone=`Neutral/Info/Success/Warning/Danger`؛ Emphasis=`Subtle/Solid` | Label، Show icon، Icon swap | Container، Icon، Label | ۱۰ |
| Toast | Tone=`Neutral/Info/Success/Warning/Danger` | Message، Action، Dismiss، Icon swap | Container، Status icon، Message، Action | Set کامل ۵تایی در صفحه `17 Toast` ساخته شد؛ Propertyها، Token binding، Light/Dark، RTL و متن بلند با Final audit صفر Issue پاس شدند؛ منتظر تأیید بصری |
| Spinner | Size=`Small/Medium/Large`؛ Tone=`Default/Inverse` | Accessible label | Track، Active arc | ۶ |
| Progress | Type=`Linear/Circular`؛ State=`Indeterminate/Determinate` | Value، Accessible label | Track، Indicator، Value label | ۴ |
| Skeleton | Shape=`Text/Rectangle/Circle`؛ Size=`Small/Medium/Large` | Width، Height، Accessible-hidden | Stable placeholder | ۹ |
| Divider | Direction=`Horizontal/Vertical`؛ Emphasis=`Subtle/Strong` | Inset | Rule | ۴ |

## نگاشت State به Token

| نقش | Token |
|---|---|
| Primary container | `semantic/color/action/primary/container` |
| Primary hover / pressed | `state/color/action/primary/hover` / `state/color/action/primary/pressed` |
| Secondary container/content | `semantic/color/action/secondary/container` / `semantic/color/action/secondary/content` |
| Tertiary content | `semantic/color/action/tertiary/content` |
| Destructive container/content | `semantic/color/action/destructive/container` / `semantic/color/action/destructive/content` |
| Field surface | `semantic/color/surface/base` |
| Disabled surface/content/border | `state/color/disabled/container`، `state/color/disabled/content`، `semantic/color/border/disabled` |
| Focus | `state/color/focus/ring` + `semantic/dimension/stroke/focus` |
| Error | `semantic/color/status/danger/*` |
| Info / Success / Warning / Danger | `semantic/color/status/{tone}/*` |
| Divider | `semantic/color/border/divider` |
| Radius control | `semantic/dimension/radius/control` |
| Control height | `semantic/dimension/control/height/{small|medium|large}` |
| Touch target | `semantic/dimension/control/touch-target-min` |

## قواعد اختصاصی Input

- Label ثابت می‌ماند؛ Placeholder جای Label را نمی‌گیرد.
- Error متن و Border دارد؛ رنگ تنها نشانه خطا نیست.
- Amount Input قرارداد نمایش است و هیچ حداقل، کارمزد، گام معامله یا قانون تجاری را در Base Component تثبیت نمی‌کند.
- Unit در Amount Input property متنی/ترکیبی است تا تصمیم چندفلزی Axis تازه و انفجاری نسازد.
- OTP از Cellهای بصری تشکیل می‌شود اما در محصول باید یک ورودی منطقی واحد، paste کامل، autofill، backspace پیوسته و اعلام Screen Reader داشته باشد.
- `Expired` و `Throttled` رفتار دامنه احراز را نمایش می‌دهند؛ زمان و سقف واقعی از OQ-029 می‌آید.

## قواعد اختصاصی Feedback و Loading

- Alert برای پیام پایدار داخل Context است؛ Toast برای بازخورد کوتاه و غیرحیاتی.
- خطای حیاتی یا شکست تراکنش فقط با Toast اعلام نمی‌شود.
- Status Badge وضعیت را کوتاه و نوع‌محور نشان می‌دهد؛ Label هر فرایند در Pattern همان دامنه تعیین می‌شود.
- Spinner برای انتظار بدون درصد واقعی است. Progress determinate فقط وقتی درصد معتبر داریم استفاده می‌شود.
- Skeleton فقط برای Layout ازپیش‌معلوم استفاده می‌شود و نباید جای Loading نامعین تمام‌صفحه را بگیرد.
- Reduced motion از `semantic/motion/reduced/duration` استفاده می‌کند.

## ترتیب اجرای Figma پس از بازشدن write

1. Tier 0: Spinner، Progress، Status Badge، Divider — ساخته شد؛ QA نهایی Dark/RTL باقی است.
2. Tier 1: Radio و Switch در `Tested Candidate` هستند؛ Button، Icon Button و Checkbox منتظر تأیید بصری نهایی‌اند.
3. Tier 2: خانواده Text Input و Amount Input در صفحه واحد `15 Inputs` بازسازی و منتظر تأیید بصری است؛ سپس OTP Input روی همین صفحه افزوده می‌شود.
4. Tier 3: Alert و Toast ساخته و audit شدند؛ Skeleton باقی مانده است.
5. QA ساختاری هر Set، سپس QA بصری Light/Dark و RTL.
6. ثبت Changelog و انتقال Duplicate Button صفحه ۳ به Deprecated فقط با تأیید صریح عملیات مخرب/انتقالی.

## Gate

`Needs revision` برای بسته کامل Base Componentها. Tierهای ۱ تا ۳ کامل نیستند؛ Button ۱۰۸تایی و Icon Button ۷۲تایی audit شده‌اند و تأیید بصری نهایی مالک محصول برای Promote هر دو باز است؛ هیچ وابستگی چندفلزی مانع Componentهای عمومی نیست.
