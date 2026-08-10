# گزارش تست Candidate Set رنگ و تایپوگرافی — نسخه ۰.۱

وضعیت: `Tested Candidate / Sufficient to proceed`

تاریخ: ۱۷ مرداد ۱۴۰۵ / 8 Aug 2026

## دامنه

- ورودی رنگ: `color-candidate-v0.1.md`
- ورودی تایپوگرافی: `typography-candidate-v0.1.md`
- نمونه اجرایی: `../artifacts/foundations-candidate-v0.1.html`
- سناریوهای موج ۱: معامله، Auth/KYC، رسید و نمایش عدد/وضعیت مالی
- شرایط: RTL، Light/Dark، فریم‌های دقیق ۳۲۰ و ۳۶۰ پیکسل، نمای ۳۷۵ پیکسل و Landscape با ابعاد ۸۱۲×۳۷۵

## نتیجه

| آزمون | نتیجه | شاهد |
|---|---|---|
| بارگذاری فونت | Pass | `Yekan Bakh FaNum` در وزن‌های ۴۰۰/۷۰۰ و `Yekan Bakh NoEn` در وزن ۶۰۰ توسط Browser Font API بارگذاری شدند |
| RTL و BiDi | Pass | متن فارسی، مبلغ، درصد، OTP، کد ملی، شبا و کد پیگیری بدون جابه‌جایی معنایی نمایش داده شدند |
| فریم ۳۲۰ و ۳۶۰ | Pass | در هر چهار فریم، `clientWidth = scrollWidth` و Overflow داخلی مشاهده نشد |
| نمای ۳۷۵ پیکسل | Pass پس از اصلاح | فریم ۳۶۰ در سند تست به ۳۴۳ پیکسل Adapt شد و از Viewport بیرون نزد |
| Landscape | Pass | در ۸۱۲×۳۷۵ هر دو فریم ۳۲۰/۳۶۰ بدون Overflow افقی باقی ماندند |
| اندازه Touch target | Pass پس از اصلاح | هیچ Button یا Input فعال کوچک‌تر از ۴۴×۴۴ پیکسل نیست؛ CTAها حداقل ۴۸ پیکسل‌اند |
| Focus visible | Pass | Focus ring مستقل و قابل تشخیص روی Icon button و CTA در Light/Dark دیده شد |
| کنتراست متن و Action | Pass برای Candidate | متن‌های اصلی/ثانویه/ثالثیه و CTAهای روشن/تیره حداقل معیار ثبت‌شده در سند رنگ را پاس کردند |
| Status و Financial | Pass برای Candidate | Success/Warning/Danger/Info با Label/Icon و بدون اتکای صرف به رنگ نمایش داده شدند |
| Console | Pass | هیچ Warning یا Error مرورگر ثبت نشد |

## اصلاح‌های حاصل از تست

### F-01 — Hit area ورودی

- **Observed fact:** ارتفاع خود `input` در نسخه اول ۳۴ پیکسل بود، هرچند Wrapper ارتفاع ۵۲ پیکسل داشت.
- **اقدام:** `min-height: 44px` برای Input ثبت شد.
- **نتیجه:** Pass.

### F-02 — فریم ۳۶۰ در Viewport باریک

- **Observed fact:** در نمای ۳۷۵ پیکسل با Scrollbar، لبه فریم ۳۶۰ به‌اندازه ۱۶ پیکسل از Viewport بیرون می‌رفت.
- **اقدام:** در Breakpoint موبایل عرض فریم با `min(var(--phone-width), calc(100vw - 32px))` محدود شد.
- **نتیجه:** Pass؛ فریم آزمایش در نمای باریک به ۳۴۳ پیکسل Adapt می‌شود و نسخه مرجع دسکتاپ همچنان ۳۶۰ پیکسل دقیق است.

## جمع‌بندی طراحی

- **Design assumption:** Purple خانواده Action/Focus و Gold خانواده Accent کنترل‌شده باقی می‌ماند.
- **Design assumption:** Yekan Bakh FaNum برای متن و عدد انسانی و NoEn برای شناسه ماشینی مبنای ادامه فاز ۱ است.
- **Risk:** نسبت White/Purple 500 برابر `4.75:1` است و حاشیه امن کمی دارد؛ در تست‌های Device واقعی و شرایط نور شدید دوباره بررسی می‌شود.
- **Risk:** تست افزایش متن تا ۲۰۰٪، Fallback shift و Screen Reader در این دور اجرا نشده و پیش از `Stable` شدن الزامی است.
- **Open question:** مجوز توزیع Webfont در Pipeline محصول هنوز باید تأیید شود.
- **Open question:** Palette نمودار چندسری، Trust evidence، Scrim/Overlay و نقش احتمالی Imperial Blue هنوز باز است.

## Gate

- Color Candidate v0.1: `Tested`
- Typography Candidate v0.1: `Tested` با وابستگی مجوز فونت
- آمادگی برای قدم بعدی فاز ۱: `Sufficient to proceed`
- وضعیت `Stable`: صادر نشد
- قدم بعدی: ساخت Candidate Set نسخه ۰.۱ برای Spacing، Grid، Radius، Border و Elevation و آزمایش آن روی همین چهار سناریوی موج ۱
