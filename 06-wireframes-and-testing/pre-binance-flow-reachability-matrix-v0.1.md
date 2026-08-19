# ماتریس دسترسی‌پذیری فلوهای Pre-Binance — نسخه ۰.۱

تاریخ: ۱۹ اوت ۲۰۲۶  
دامنه: `artifacts/multi-metal-waves-1-and-3-wireframe.html` و `artifacts/wave-1-auth-kyc-wireframe.html`  
بسته: `PB-3 — اتصال فلو، State و ناوبری`

## نتیجه

- `Observed fact` — ۱۰۱ سناریوی Review، ۵۹ Route صریح Renderer، ۳۹ مقصد فعال یکتا، ۹۷ قرارداد تعاملی `data-*` و ۱۱ Action فلو Auth/KYC با Audit قابل‌تکرار بررسی شدند.
- `Observed fact` — CTA فعال بدون Handler، مقصد فعال Renderنشدنی و Button فعال بدون قرارداد تعامل برابر صفر است.
- `Observed fact` — Back/Close/Escape، Guard پردازش‌های زمان‌دار، Retry، History → Operation detail، Notification → همان Operation detail و Deep link صفحه/State/Overlay در سطح Prototype قرارداد صریح دارند.
- `Observed fact` — پنج اصلاح مستقل از بیزینس اعمال شد: Back نتیجه دیگر به Processing برنمی‌گردد؛ اعلان خرید جزئیات همان خرید را باز می‌کند؛ اصلاح کد هدیه به فرم دریافت می‌رود؛ Deep link همه Routeهای خودکشف را می‌پذیرد و Context نمای مستقیم آماده می‌شود؛ Retry معامله آفلاین/ناموفق/نرخ منقضی/موجودی ناکافی مقدار واردشده را نگه می‌دارد.
- `Design assumption` — زمان‌های ۷۰۰ تا ۹۰۰ میلی‌ثانیه‌ای Processing فقط شبیه‌سازی Prototype هستند و SLA محصول محسوب نمی‌شوند.
- `Risk` — QA بصری/لمسی مستقیم `file://` به‌علت سیاست امنیتی Browser این محیط انجام نشد و در PB-5 باز می‌ماند.

## قرارداد سراسری ناوبری

| موضوع | قرارداد فعلی | نتیجه |
|---|---|---|
| Back صفحه | Snapshot ورودی، انتخاب‌ها و Scroll در Stack ذخیره و بازیابی می‌شود؛ در نبود Stack مقصد امن خانه است | Pass |
| Back پس از نتیجه قطعی | نتیجه‌های قطعی Stack پردازش را پاک می‌کنند؛ Operation detail تاریخی به تاریخچه همان نوع برمی‌گردد | Pass پس از اصلاح |
| Close / Escape | Bottom Sheet با دکمه بستن، Scrim و `Escape` بسته و Focus به Trigger برمی‌گردد | Pass |
| Cancel | Dialog تغییر فلز Cancel صریح دارد؛ Previewها با Back/ویرایش به Draft قبلی برمی‌گردند | Pass |
| Loading | State زنده با `aria-live` دیده می‌شود؛ Token، Callback قدیمی را بعد از خروج بی‌اثر می‌کند | Pass |
| Error / Retry | خطای Pre-submit در Context ورودی اصلاح می‌شود؛ Attempt ثبت‌شده به Detail/History یا Retry امن می‌رود | Pass |
| Deep link | `?scenario=` تمام Scenarioها و Routeهای صریح خودکشف و `?sheet=` Overlayهای Review را می‌پذیرد؛ Auth/KYC از Hash داخلی استفاده می‌کند | Pass پس از اصلاح |
| خروج بیرونی | نقشه با URL بیرونی امن، Share با Web Share/Copy fallback و نصب PWA فقط با Prompt واقعی فعال است | Pass |
| سرویس ساخته‌نشده | گفت‌وگوی زنده Disabled است؛ FAQ داخلی تنها مقصد فعال پشتیبانی است | Pass در مرز Prototype |

## Reachability matrix

| خانواده | Entry | Preview / Processing | پایان و بازیابی | Back / Close / Deep link | وضعیت |
|---|---|---|---|---|---|
| ورود و KYC | ورود/رمز/OTP → KYC | تطبیق Loading | موفق → خانه؛ خطای سرویس Retry؛ خطای فیلد اصلاح در Context؛ زیر ۱۸ سال خروج امن | Back داخلی، بستن Date sheet، Hash برای ۱۰ حالت و پیام تکمیل به Shell | Pass |
| خانه و دارایی | خانه/خالی/اختلال → Detail/ترکیب | Loading مالی ندارد | نرخ ناقص پیام روشن؛ Detail به نمودار/معامله | Back به خانه؛ Route مستقیم همه نماها | Pass |
| واریز درگاه | کیف → مبلغ → Redirect | Loading انتقال | موفق/ناموفق/نامشخص با Detail و History؛ Unknown منع تکرار | Back پیش از Submit؛ پس از نتیجه به خانه، نه Processing | Pass پس از اصلاح |
| واریز انتقالی | مبلغ → روش → کارت/شبا/حساب | صفحه اطلاعات انتقال، بدون Submit ساختگی | Copy اطلاعات و بازگشت با مبلغ/مبدأ حفظ‌شده | Back و Sheet انتخاب روش/کارت | Pass |
| برداشت | کیف → مبلغ/مقصد → Preview | ثبت درخواست بدون Loading ساختگی | ثبت‌شده/موفق/ناموفق/نامشخص با History/Support | ویرایش Draft؛ Back نتیجه به خانه | Pass پس از اصلاح |
| خرید و فروش | Entry → Preview → Processing | Token از تکمیل Callback قدیمی جلوگیری می‌کند | موفق → Detail؛ خطا/Unknown/Offline/Rate/Balance/Restriction Recovery اختصاصی | مقدار Retry در Stateهای قابل‌اصلاح حفظ؛ Dialog تغییر فلز Cancel دارد | Pass پس از اصلاح |
| نمودار | Detail/نمودار → انتخاب فلز | بدون Submit | ورود مستقیم معامله با فلز منتخب | Sheet با Close/Escape؛ Back به مبدأ | Pass |
| دریافت فیزیکی | انتخاب فلز → کاتالوگ → Preview → Confirm sheet | Processing | ثبت/ناموفق و Stateهای آماده‌سازی/تحویل/لغو به History/Support | Draft انتخاب شمش در Back حفظ؛ Deep link با Context آماده | `Business-gated` برای قواعد لغو/SLA/هزینه |
| هشدار قیمت | خدمات → تنظیم → Preview | Processing عمومی | Active/Triggered/Off با History/Trade | Back Draft را حفظ می‌کند | `Business-gated` برای ویرایش/خاموش‌کردن از Detail |
| سفارش قیمت | خدمات → تنظیم → Preview | Processing عمومی | Active/Executed/Cancelled/Expired/Failed | Back Draft را حفظ می‌کند | `Business-gated` برای رزرو، لغو و اجرای سفارش |
| اقساط | بدون قرارداد → Preview → هزینه شروع → Gateway | Loading درگاه | قرارداد فعال؛ پرداخت قسط → Processing → Detail | Back پیش از پرداخت؛ نتیجه فعال‌سازی CTA پایدار دارد | `Business-gated` برای کارمزد، دوره، جریمه و فسخ |
| هدیه | Hub → صدور/دریافت | صدور Processing؛ دریافت Preview | صدور/Claim موفق یا خطاهای invalid/expired/used/unknown | اصلاح کد مستقیم به فرم دریافت؛ Draft و Back حفظ | `Business-gated` برای انقضا، تحویل و تسویه |
| معرفی دوستان | خدمات → دعوت | Share خارجی با Copy fallback | Pending/Achieved/Failed به دعوت یا Support | Back به مبدأ؛ Abort اشتراک خطا محسوب نمی‌شود | `Business-gated` برای شروط پاداش |
| تاریخچه و جزئیات | تاریخچه → فیلتر نوع/فلز → Row | Loading مستقل | Empty/Failed Recovery؛ Row همان Operation detail را باز می‌کند | Back Detail فیلتر و Scroll را بازیابی می‌کند | Pass |
| اعلان‌ها | Header → Sheet اعلان | بدون Processing | اعلان نرخ → Detail فلز؛ اعلان خرید → Detail همان رکورد | Close/Scrim/Escape و Focus return | Pass پس از اصلاح |
| حساب، بانک و امنیت | پروفایل → کارت/امنیت/رمز | بررسی کارت و خطای سرویس | خطای قالب inline؛ عدم مالکیت اصلاح کارت؛ Retry سرویس؛ تغییر رمز → امنیت | Return مقصد ثبت کارت و Draft فرم حفظ می‌شود | Pass |
| پشتیبانی | Operation detail/State → Support sheet | سرویس گفتگو فعال نیست | FAQ فعال؛ گفت‌وگو Disabled | Sheet قابل‌بستن و Tracking Contextual است | `Business-gated` برای ساخت/پیگیری پرونده واقعی |

## Attempt ثبت‌شده در برابر خطای Pre-submit

| دسته | نمونه | قرارداد |
|---|---|---|
| Pre-submit؛ بدون رکورد مالی | خطای فرمت کارت، اعتبارسنجی KYC، دارایی ناکافی، نرخ منقضی، قطع اتصال پیش از ارسال، کد هدیه نامعتبر | خطا کنار ورودی یا State اصلاحی؛ Retry Draft را حفظ می‌کند؛ Tracking ساختگی تولید نمی‌شود |
| Attempt ارسال‌شده؛ قابل پیگیری | واریز ناموفق/نامشخص، برداشت ثبت‌شده/نامشخص، معامله ناموفق پس از ارسال/نتیجه نامشخص، صدور هدیه ناموفق، پرداخت قسط ناموفق | Operation detail شامل مقدار، زمان و کد موجود؛ History و Support Contextual در دسترس‌اند |
| نتیجه قطعی | موفق/واریزشده/تحویل‌شده/لغوشده/منقضی | Detail تطبیقی همان Record و CTA مقصد پایدار؛ Back به Processing برنمی‌گردد |

## موارد جداشده و بدون اختراع رفتار

- `Open question` — دریافت فیزیکی: نقطه دقیق لغو، هزینه قابل بازگشت، SLA آماده‌سازی و روش تحویل طبق D-206 باز است.
- `Open question` — سفارش/هشدار: قرارداد رزرو، لغو، اجرا و ویرایش از Detail طبق D-206 باز است.
- `Open question` — اقساط: فرمول، دوره، جریمه، فسخ و آزادسازی وثیقه طبق D-206 باز است.
- `Open question` — هدیه/معرفی: انقضا، تحویل، تسویه و شروط پاداش طبق D-206 باز است.
- `Open question` — پشتیبانی: ساخت Case، ارسال مدرک و کانال ارتباط واقعی طبق D-206 باز است؛ Prototype این سرویس را فعال وانمود نمی‌کند.

## بازآزمایی قابل‌تکرار

```powershell
node 06-wireframes-and-testing/scripts/audit-wireframe-flows.mjs
```

خروجی فعلی: `failures: []`، سناریو `101`، مقصد فعال یکتا `39`، قرارداد تعاملی `97`، Action احراز هویت `11` و Button فعال بی‌عمل `0`.

## Gate PB-3

`Sufficient to proceed`

- CTA فعال بی‌عمل یا مقصد Renderنشدنی: صفر.
- Dead end مستقل از تصمیم بیزینس: صفر.
- ازبین‌رفتن بی‌دلیل Draft در Back/Retry بررسی‌شده: صفر.
- رفتارهای وابسته به قانون بیزینس جدا و بدون نهایی‌سازی ثبت شده‌اند.
- QA بصری/لمسی و Browser history واقعی در PB-5 باقی می‌ماند.
