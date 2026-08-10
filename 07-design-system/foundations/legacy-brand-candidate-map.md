# نقشه Candidateهای Foundations از برندگاید قبلی

وضعیت: `Draft / Design assumption`

منبع: `../legacy-brand/shemshbrand guideline.V.1.pdf`

تاریخ ممیزی: ۱۷ مرداد ۱۴۰۵ / 8 Aug 2026

## جایگاه منبع

- **Observed fact:** فایل ۲۶ صفحه، نسخه `V.1` و خروجی Adobe Illustrator در 25 Jun 2026 است.
- **Observed fact:** گاید شامل معماری لوگو، نسخه‌های دارای شعار و بدون شعار، نسخه خاکستری/سفید/مشکی، Clear space، استفاده صحیح و ناصحیح، Palette و فونت است.
- **Design assumption:** هویت کلی طلایی، بنفش و خنثی می‌تواند نقطه شروع زبان بصری جدید باشد.
- **Risk:** قواعد کاربرد UI در PDF بدون تست کنتراست، State، Light/Dark و فلوهای مالی برای سیستم اصلی کافی نیستند.

## لوگو

| ورودی قدیمی | وضعیت فاز ۱ | اقدام |
|---|---|---|
| لوگوتایپ + Sign | `Candidate` | حفظ نسبت و ساختار؛ تست در Header و Splash |
| نسخه دارای شعار | `Candidate / limited use` | فقط در فضای برند و اندازه‌ای که شعار خوانا باشد؛ نه Header موبایل |
| نسخه بدون شعار | `Candidate` | گزینه اصلی برای محصول و اندازه‌های کوچک |
| نسخه سفید و مشکی | `Promote as asset variants` | برای زمینه روشن/تیره، بدون CSS invert |
| نسخه خاکستری `#828282` | `Keep Draft` | فقط پس از تست کاربرد و کنتراست؛ نسخه تک‌رنگ سیاه/سفید اولویت دارد |
| Clear space تعریف‌شده با واحد X | `Promote` | به Spec دیجیتال با حداقل اندازه و Pixel grid تبدیل شود |
| فهرست استفاده ناصحیح | `Promote` | کشیدگی، چرخش، تغییر رنگ، Outline، Shadow و بازسازی ممنوع می‌ماند |

## Palette استخراج‌شده

| نام قدیمی | مقدار | نقش PDF | نتیجه فاز ۱ |
|---|---:|---|---|
| Satin Sheen Gold | `#C89D38` | لوگو، CTA اصلی، Icon و جداکننده | `Revise`: Gold accent/container؛ Primary action خودکار نیست |
| Dark Charcoal | `#333333` | متن، لوگوتایپ و Dark background | `Candidate`: خنثی تیره؛ Dark canvas فقط پس از تست |
| Shemsh Royal Purple | `#7C5DD9` | Core identity، Trust و Link | `Revise`: Brand/action candidate؛ Trust فقط با Evidence و Label |
| Dim Gray | `#6B6B6B` | Slogan و متن همراه لوگو | `Candidate`: متن Secondary فقط روی Surfaceهای تأییدشده |
| Indigo Velvet | `#4B32A0` | Hover و زمینه Footer | `Candidate`: Brand strong/pressed؛ Hover موبایل‌محور نیست |
| Imperial Blue | `#162266` | Top navigation و Structural dark | `Keep Draft`: نقش آن با Purple و Neutral dark باید تعیین شود |
| Sea Shell | `#FDF7EB` | Light background و White space | `Candidate`: Canvas/brand-tinted surface، نه تنها Canvas محصول |
| Success | `#4CAF50` | پیام موفقیت و رشد قیمت | `Revise`: Success از Financial increase جدا شود |
| Warning | `#ECA400` | نوسان بازار و هشدار امنیتی | `Revise`: Warning و Market volatility نقش‌های جدا دارند |
| Error | `#F03535` | ضرر، فروش/خروج و خطای سیستم | `Revise`: Danger از Financial decrease و Sell جدا شود |

## تست کنتراست اولیه

نسبت‌ها براساس WCAG و رنگ‌های خام PDF محاسبه شده‌اند. این تست فقط Pair خام است و جای تست Component را نمی‌گیرد.

| جفت | نسبت | نتیجه اولیه |
|---|---:|---|
| Gold `#C89D38` روی White | `2.52:1` | Fail برای متن و Icon کوچک |
| Charcoal `#333333` روی Gold | `5.02:1` | Pass برای متن معمول |
| White روی Purple `#7C5DD9` | `4.75:1` | Pass AA متن معمول؛ نیازمند تست State |
| White روی Indigo `#4B32A0` | `9.28:1` | Pass |
| White روی Imperial Blue `#162266` | `14.44:1` | Pass |
| Dim Gray `#6B6B6B` روی White | `5.33:1` | Pass AA متن معمول |
| Charcoal روی Sea Shell `#FDF7EB` | `11.84:1` | Pass |
| White روی Success `#4CAF50` | `2.78:1` | Fail برای متن |
| Charcoal روی Success | `4.55:1` | Pass حداقلی AA متن معمول |
| White روی Warning `#ECA400` | `2.13:1` | Fail |
| Charcoal روی Warning | `5.94:1` | Pass |
| White روی Error `#F03535` | `3.99:1` | Fail برای متن معمول |
| Charcoal روی Error | `3.17:1` | Fail برای متن معمول |

## Typography استخراج‌شده

| موضوع | ورودی PDF | وضعیت فاز ۱ |
|---|---|---|
| فارسی | Yekan Bakh | `Candidate primary`؛ فایل‌های محلی موجود، مجوز و Webfont باید تأیید شوند |
| انگلیسی | Poppins | `Candidate secondary`؛ برای Label لاتین و اسناد برند، نه الزاماً همه اعداد |
| متن طولانی | Regular | `Promote as principle` |
| متن کوتاه تأکیدی | Medium | `Promote as principle` |
| تیتر فارسی | Bold و Heavy/Fat | `Revise`: نقش‌ها به Scale محدود و خوانایی موبایل نگاشت شوند |
| تیتر انگلیسی | Bold و ExtraBold/Black | `Revise`: استفاده محدود؛ از تضاد بیش‌ازحد با فارسی جلوگیری شود |

## Design assumptionهای نسخه ۰.۱

1. Yekan Bakh گزینه اول برای رابط فارسی است؛ Poppins فقط برای محتوای لاتین کنترل‌شده بررسی می‌شود.
2. Purple خانواده هویتی/Action candidate است؛ Gold نقش Accent و پیوند با طلای فیزیکی دارد.
3. Gold به‌صورت پیش‌فرض Primary CTA نیست.
4. Status و Financial direction دو خانواده معنایی جدا هستند.
5. Sea Shell می‌تواند Surface هویتی محدود باشد؛ Canvas عمومی باید خنثی‌تر و قابل استفاده طولانی باشد.
6. Charcoal، Indigo و Imperial Blue قبل از تعیین نقش نهایی نباید هم‌زمان Structural darkهای رقیب بسازند.

## موارد لازم برای Candidate Set بعدی

- ساخت Rampهای خنثی، Purple، Gold و Status برای Light/Dark.
- تعیین جفت‌های Foreground/Background و Focus ring.
- تست Yekan Bakh FaNum و NoEn برای عدد، تومان، گرم، OTP و شناسه.
- تعریف Type scale موبایل و رفتار افزایش اندازه متن.
- تست Logo بدون شعار در Header ۳۲۰ پیکسل و نسخه Sign در App icon.
- تصمیم درباره نقش Imperial Blue در برابر Purple/Charcoal.

## Gate

استخراج برندگاید: `Complete`

انتقال مقادیر به Foundations رسمی: `Needs testing / OQ-052`

