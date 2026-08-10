# Candidate Set تایپوگرافی — نسخه ۰.۱

وضعیت: `Tested Candidate / Not Stable`

تاریخ: ۱۷ مرداد ۱۴۰۵ / 8 Aug 2026

## خانواده‌ها

| نقش | خانواده Candidate | کاربرد |
|---|---|---|
| رابط فارسی و عدد انسانی | `Yekan Bakh FaNum` | متن فارسی، تومان، گرم، درصد و تاریخ قابل‌خواندن |
| شناسه و عدد ماشینی | `Yekan Bakh NoEn` | موبایل، OTP، کد ملی، شبا، کد پیگیری و داده قابل Copy |
| متن کاملاً انگلیسی برند | `Poppins` | عنوان یا Asset برند انگلیسی؛ نه متن ترکیبی روزمره محصول |
| Fallback | `Tahoma, Arial, sans-serif` | فقط هنگام خطای بارگذاری |

## قواعد

- Font loading با `font-display: swap` انجام می‌شود.
- فقط وزن‌های ۴۰۰، ۶۰۰ و ۷۰۰ در مسیر اصلی preload/load می‌شوند.
- متن اصلی موبایل ۱۶ پیکسل است و از Zoom سیستم جلوگیری نمی‌شود.
- Tracking فارسی به‌صورت پیش‌فرض صفر است.
- عددهای مالی از `font-variant-numeric: tabular-nums` استفاده می‌کنند.
- محتوای فارسی و شناسه LTR در Spanهای جدا با `dir` و Isolation صحیح قرار می‌گیرند.
- Poppins وارد عدد یا عبارت فارسی نمی‌شود.

## Type roles موبایل

| Token | اندازه / Line height | وزن | کاربرد |
|---|---:|---:|---|
| `type.display` | `32 / 44` | `700` | عدد یا پیام کلیدی محدود |
| `type.headline` | `24 / 36` | `700` | عنوان صفحه |
| `type.title.large` | `20 / 30` | `600` | عنوان Section/Card مهم |
| `type.title.medium` | `18 / 28` | `600` | عنوان Card و Sheet |
| `type.body.large` | `16 / 28` | `400` | متن اصلی و فرم |
| `type.body.medium` | `14 / 24` | `400` | توضیح پشتیبان |
| `type.label.large` | `14 / 20` | `600` | Button، Tab و Field label |
| `type.label.medium` | `12 / 18` | `600` | Badge و Metadata کوتاه |
| `type.caption` | `12 / 18` | `400` | زمان، منبع و توضیح غیرحیاتی |
| `type.numeric.hero` | `28 / 38` | `700` | موجودی و مبلغ اصلی |
| `type.numeric.body` | `16 / 24` | `600` | نرخ و مبلغ داخل Card |
| `type.numeric.code` | `16 / 24` | `600` | OTP و شناسه؛ NoEn + LTR |

## رفتار Responsive و Dynamic Type

- Display در عرض ۳۲۰ پیکسل اجازه کاهش تا ۲۸/۳۸ دارد؛ Body و Label کوچک نمی‌شوند.
- عنوان و Button ترجیحاً Wrap می‌شوند؛ Ellipsis فقط برای Identifierهای دارای مقصد نمایش کامل مجاز است.
- Cardهای مالی باید افزایش اندازه متن تا ۲۰۰٪ را بدون پنهان‌شدن مبلغ، واحد یا CTA تحمل کنند.
- عدد و واحد در دو Span مستقل هستند تا Wrap و خوانش Screen Reader قابل کنترل باشد.
- حداکثر طول خط متن بلند روی موبایل ۳۵ تا ۶۰ کاراکتر و روی دسکتاپ ۶۰ تا ۷۵ کاراکتر است.

## نمونه‌های الزامی تست

- `۶٬۵۲۰٬۰۰۰ تومان`
- `۰٫۰۵ گرم`
- `−۲٫۴٪ کاهش`
- `+۱٫۸٪ افزایش`
- `IR820540102680020817909002`
- `09123456789`
- `۱۲۳۴۵۶` و `123456`
- «پرداخت نهایی شامل کارمزد»
- «موجودی کافی نیست؛ مبلغ واریز یا مقدار معامله را اصلاح کنید.»

## وضعیت فونت‌های برند

- **Observed fact:** فایل‌های Yekan Bakh FaNum و NoEn و Poppins در مخزن موجودند.
- **Open question:** مجوز توزیع Webfont در محصول و Pipeline توسعه باید پیش از Handoff نهایی تأیید شود.
- **Risk:** اختلاف Metric میان Yekan Bakh و Fallback می‌تواند هنگام Font swap باعث Layout shift شود.

## Gate

ساخت Candidate Set: `Complete`

تست بصری اولیه: `Complete` — `candidate-v0.1-test-report.md`

ورود به Text styles رسمی: `Sufficient to proceed as Candidate`؛ تأیید مجوز، Dynamic Type تا ۲۰۰٪، Fallback shift و Screen Reader پیش از `Stable` شدن لازم است.
