# Candidate پالت Navy-first — نسخه ۰.۳

وضعیت: `Direction approved / Values incomplete / Not Stable`

تاریخ: ۲۷ مرداد ۱۴۰۵ / 18 Aug 2026

تصمیم مرجع: D-202

منبع خام: [`shemsh-color-palette-v2-2026-08-17.pdf`](../sources/shemsh-color-palette-v2-2026-08-17.pdf)

## تصمیم تأییدشده

- **Business decision:** Primary مشکی خنثی دیگر جهت هدف سیستم طراحی نیست؛ شمش به جهت `Navy-first` حرکت می‌کند.
- **Design assumption approved for Candidate:** `#1E2F56` نقطه شروع Navy در Light و خانواده `#0B1220..#1C2C4A` نقطه شروع Surfaceهای Dark هستند، نه مقدارهای Stable.
- **Business decision:** ساختار فعلی `Primitive → Semantic → State → Component`، Modeهای Light/Dark و قرارداد Variant کامپوننت‌ها حفظ می‌شوند؛ تغییر جهت رنگ مجوز مصرف Hex خام در Component نیست.
- **Business decision:** Statusها معنایی مستقل می‌مانند و Accent فلزها فقط همراه Label/Icon استفاده می‌شود — D-115.
- **Business decision:** محدودیت Monochrome خانه و ترکیب دارایی در D-141 تصمیمی محلی است و تا Pilot و تصمیم جداگانه خودکار لغو نمی‌شود.

## ورودی‌های قابل حفظ از پالت گرافیست

| خانواده | مقدارهای ورودی | وضعیت |
|---|---|---|
| Navy Light | Base `#1E2F56` | جهت تأیید؛ Ramp ناقص |
| Navy Dark | Base `#0B1220`، Default `#5779AC`، Hover `#7C97C2`، Badge/Surface `#16233D` | Candidate؛ State و کنتراست نیازمند اصلاح |
| Accent Lime | `#9FF870`، Pressed `#7ED14F`، Dark badge `#163300` | Candidate؛ نقش و Ramp ناقص |
| Warm Neutral Light | `#FAF9F7` تا `#1C1A17` | ورودی مناسب برای Pilot؛ نقش Text باید محدود شود |
| Neutral/Navy Dark | `#0B1220`، `#101A2E`، `#16233D`، `#1C2C4A` و Borderها | ورودی مناسب برای Pilot؛ پیوستگی Mode باید تست شود |
| Metal | Gold/Silver/Copper برای Light و Dark | Accent خام؛ نقش‌های نمودار/انتخاب ناقص |
| Status | Success/Warning/Error/Info برای Light و Dark | Swatch خام؛ Semantic family ناقص |

## ممیزی کنتراست اولیه

| ترکیب | نسبت | نتیجه |
|---|---:|---|
| `#F5F3EF` روی `#1E2F56` | `11.87:1` | مناسب متن معمولی |
| `#F5F3EF` روی `#5779AC` | `4.00:1` | برای متن معمولی نامناسب؛ فقط متن بزرگ/UI با شرط |
| Neutral 600 روی Neutral 50 | `5.56:1` | مناسب متن معمولی |
| Neutral 500 روی Neutral 50 | `3.51:1` | برای متن معمولی نامناسب |
| Neutral 400 روی Neutral 50 | `2.22:1` | برای متن و کنترل فعال نامناسب |
| Success/Warning Light روی Neutral 50 | `2.77:1 / 2.05:1` | به‌تنهایی برای متن، Icon یا Border فعال کافی نیست |
| Gold/Silver/Copper Light روی Neutral 50 | `2.28:1 / 1.65:1 / 3.96:1` | فقط Accent همراه Label/Icon؛ Silver ضعیف‌ترین است |

## دسته ۱ — خروجی موردنیاز از گرافیست

این بخش به تصمیم هویتی و انتخاب رنگ خام مربوط است و نباید داخل Design System حدس زده شود.

1. **Navy Ramp کامل و تأییدشده:** حداقل `50/100/200/300/400/500/600/700/800/900/950` با تعیین جای دقیق `#1E2F56` در Ramp؛ نمونه کاربرد روی CTA، Link، Header، سطح برند و Dark Mode.
2. **Accent Lime کامل و مرزبندی مصرف:** Ramp کافی برای Background/Subtle/Base/Strong، مشخص‌کردن اینکه Lime برای Highlight، Campaign یا Brand moment است و صراحتاً چه مصرف‌هایی ممنوع‌اند.
3. **اصلاح Swatchهای هویتی کم‌کنتراست:** نسخه قابل‌استفاده Gold/Silver/Copper روی زمینه روشن و تیره، مخصوصاً Silver؛ رنگ جایگزین باید هویت فلز را حفظ کند و در کنار Label/Icon قابل تشخیص باشد.
4. **Art direction دو Mode:** یک نمونه واقعی Light و یک نمونه Dark از همان محصول با نسبت تقریبی مصرف Navy/Lime/Neutral/Metal؛ تحویل صرفاً جدول Hex کافی نیست.
5. **Logo و Brand assets روی زمینه‌های جدید:** نسخه مجاز لوگو روی Navy، Warm white، Dark surface و Lime و مشخص‌کردن ترکیب‌های ممنوع.
6. **فایل منبع قابل انتقال:** Swatchها با نام، HEX و ترجیحاً Figma variables/styles؛ نام‌هایی مثل `Base` بدون جایگاه در Ramp پذیرفته نیستند.

### متن آماده ارسال به گرافیست

> جهت Navy-first تأیید شده، اما برای ورود به Design System لطفاً Navy و Lime را به Ramp کامل تبدیل کنید، جای Base را در Ramp مشخص کنید، نسخه‌های قابل‌استفاده سه فلز—به‌خصوص Silver—را برای Light/Dark اصلاح کنید و یک نمونه واقعی Light/Dark با نسبت مصرف رنگ‌ها و قواعد Logo ارائه دهید. Stateهای محصول و توکن‌های Semantic را تیم Design System می‌سازد؛ از شما مقادیر هویتی و قواعد Art direction می‌خواهیم.

## دسته ۲ — کار داخل تیم Design System

این موارد از جنس معماری محصول، State، دسترس‌پذیری و پیاده‌سازی‌اند و نیاز نیست گرافیست آن‌ها را بسازد.

1. ساخت Collection آزمایشی `Palette v2 / Pilot` و نگاشت بدون تخریب به `Primitive / Semantic / State`.
2. ساخت نقش‌های `canvas/base/sunken/raised/inverse`، `text primary/secondary/tertiary/disabled/inverse`، `icon` و `border` برای Light/Dark.
3. تکمیل `Default/Hover/Pressed/Focus/Disabled/Selected/Loading` برای Actionها؛ اصلاح `#5779AC` یا رنگ On-primary تا متن معمولی حداقل `4.5:1` باشد.
4. ساخت خانواده کامل Status برای هر Tone با `surface/border/content/icon`؛ Swatch روشن فعلی به‌عنوان متن یا Icon فعال استفاده نمی‌شود.
5. تعریف Focus ring، Selection، Overlay، Scrim، Disabled opacity و Elevation color.
6. ساخت نقش‌های Metal و Chart: Label/Icon/Badge/Selected/Series، Legend، Pattern/Marker و Tooltip؛ معنا فقط با رنگ منتقل نمی‌شود.
7. محدودکردن Neutral 400/500 به Disabled/Decorative و انتخاب Text tokenهای خوانا بر اساس اندازه و وزن واقعی فارسی.
8. Pilot روی Button، Icon Button، Input، Alert/Toast و Home/Assets در Light/Dark، RTL، عرض ۳۲۰/۳۹۰، Device واقعی و کنتراست.
9. Migration فقط از Aliasهای Semantic پس از QA؛ Variantها و Anatomy کامپوننت‌ها بازسازی نمی‌شوند.
10. ثبت Changelog، نگاشت Design↔Code و نتیجه Audit پیش از Promote از `Candidate` به `Tested`.

## Gate

- جهت Navy-first: `Complete`
- Brief گرافیست: `Complete / Ready to send`
- تکمیل مقادیر هویتی: `Blocked by graphic design handoff`
- معماری Semantic/State و Pilot داخلی: `Sufficient to proceed`
- Migration سراسری Figma: `Not approved yet`
- Stable: `Not issued`
