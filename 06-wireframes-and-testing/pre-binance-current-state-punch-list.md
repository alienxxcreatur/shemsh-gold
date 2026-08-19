# Punch list وضعیت جاری وایرفریم پیش از بایننس

تاریخ: ۱۹ اوت ۲۰۲۶  
بسته: `PB-1`  
Artifact فعال: `artifacts/multi-metal-waves-1-and-3-wireframe.html`  
Inventory مرجع: `current-wireframe-inventory-v0.1.md`

## نتیجه اجرایی

- `Observed fact` — تمام `147` نما شامل `77 Page + 53 State + 17 Overlay` دوباره بررسی شدند؛ `101` سناریوی دستی، `32` Page خارج از فهرست دستی و هر `17` Overlay در دامنه ممیزی بودند.
- `Observed fact` — خروجی مرورگری Overview برای هر ۱۴۷ نما ساخته شد؛ View خالی، Overflow افقی ناخواسته، Touch target زیر ۴۴px و Copy داخلی انگلیسی در سطح موبایل صفر بود.
- `Observed fact` — چهار P0 تاریخی ممیزی 18 Aug با D-203/V-138، D-204/V-139، D-205/V-140 و V-136 بسته شده‌اند و نباید دوباره به‌عنوان ایراد جاری گزارش شوند.
- `Observed fact` — دو P1 مستقل از بیزینس در V-158 پیدا و همان‌جا اصلاح شدند: نام دسترس‌پذیر داخلی «نمونه/پروتوتایپ» و مقصد متنی نادرست «درخواست‌های من» در دریافت فیزیکی.
- `Risk` — شکاف‌های باقی‌مانده عمدتاً درباره قانون، عدد، سند رسمی و عملیات واقعی‌اند؛ تبدیل آن‌ها به UI قطعی بدون تصمیم مالک مربوط، ریسک ساخت قانون جعلی دارد.

## شمارش Punch list فعال

| شدت | Fix now | Safe to defer | Business-gated | جمع فعال |
|---|---:|---:|---:|---:|
| P0 | ۰ | ۰ | ۰ | ۰ |
| P1 | ۰ پس از V-158 | ۰ | ۹ | ۹ |
| P2 | ۰ | ۵ | ۲ | ۷ |

وجود موارد `Business-gated` به معنی خرابی ساختاری وایرفریم نیست؛ هر مورد Owner، مرجع و نقطه تصمیم دارد و طبق D-206 برای Review حفظ می‌شود.

## Fix now — انجام‌شده در V-158

| شناسه | شدت | Label | مسئله | اصلاح | وضعیت |
|---|---|---|---|---|---|
| PB1-F01 | P1 | `Observed fact` | نام قابل‌خواندن Screen reader در Shell اصلی «نمونه تعاملی موبایل» و در Auth «پروتوتایپ موبایل» بود؛ متن بصری پنهان بود اما نام دسترس‌پذیر کاربرمحور نبود | نام‌ها به «اپلیکیشن شمش»، «ورود و احراز هویت شمش» و عنوان iframe کاربرمحور تغییر کردند | `Complete` |
| PB1-F02 | P1 | `Observed fact` | صفحه دریافت فیزیکی می‌گفت پیگیری از «درخواست‌های من» انجام می‌شود، اما مقصد واقعی و Canonical «تاریخچه» است | Copy همان صفحه به «تاریخچه» تغییر کرد؛ Route تغییر نکرد | `Complete` |

## P1های Business-gated

| شناسه | حوزه/نماها | Label | شکاف باقی‌مانده | Owner تصمیم | مرجع | مسیر حل |
|---|---|---|---|---|---|---|
| PB1-B01 | معامله، Preview و Detail | `Open question` | منبع نرخ رسمی، SLA نرخ، کارمزد/مالیات و دقت مستقل هر فلز هنوز قطعی نیست | مالی، قیمت‌گذاری، فنی، محصول | OQ-020/OQ-033/OQ-055 | تأیید قرارداد عددی؛ سپس جایگزینی Config نمونه و QA رسید |
| PB1-B02 | واریز، برداشت و حساب بانکی | `Open question` | سقف/کف نهایی، اثر مقررات، حذف/جایگزینی مقصد و رفتار حساب درگیر درخواست قطعی نیست | مالی، امنیت، حقوقی، فنی | OQ-001/OQ-045/OQ-053 | تصمیم رسمی؛ سپس Stateهای مدیریت مقصد و Validation نهایی |
| PB1-B03 | هشدار و سفارش قیمت | `Design assumption` | قواعد اجرا/لغو/رزرو، SLA قیمت و دامنه فلزی برای UI نهایی نیازمند تأیید است | بیزینس، مالی، قیمت‌گذاری، فنی | D-206، OQ-020/OQ-054 | Review فلو با Business Owner؛ سپس Detail/Cancel contract |
| PB1-B04 | دریافت فیزیکی | `Design assumption` | SKU، خلوص، مرکز، هزینه، زمان آماده‌سازی، لغو و مدرک تحویل نمونه‌اند | عملیات، بیزینس، حقوقی، مالی | D-206، OQ-003/OQ-017/OQ-033 | تأیید Config و Lifecycle؛ سپس Detail درخواست و Recovery نهایی |
| PB1-B05 | خرید اقساطی | `Design assumption` | منبع اعتبار، فرمول هزینه، قرارداد، تسویه زودهنگام و تأیید حقوقی هنوز نهایی نیست | بیزینس، مالی، حقوقی، ریسک | D-206، OQ-005/OQ-045/OQ-054 | تصمیم محصول/قرارداد؛ سپس Quote/Preview/Result تسویه |
| PB1-B06 | هدیه | `Design assumption` | انقضا، ابطال، Resend، تحویل فیزیکی، حریم خصوصی و دامنه فلزی قطعی نیست | بیزینس، حقوقی، عملیات، محصول | D-206، OQ-006/OQ-054 | تأیید Lifecycle؛ سپس Detail و Actionهای مدیریت هدیه |
| PB1-B07 | پیگیری و پشتیبانی | `Design assumption` | Entry کامل Case، انتخاب عملیات، پیوست، SLA و فهرست/جزئیات پرونده به سرویس واقعی وابسته است | پشتیبانی، عملیات، فنی، محصول | D-205/D-206 | قرارداد سرویس و داده؛ سپس اتصال Stateهای موجود به Entry/Detail واقعی |
| PB1-B08 | مجوزها و قوانین | `Open question` | تصویر، شماره/مرجع قابل استعلام، نسخه و تاریخ اثر اسناد رسمی در دسترس نیست | حقوقی، انطباق، برند | OQ-007/OQ-045/OQ-063 | دریافت Asset و متن رسمی؛ سپس جایگزینی Placeholder و خلاصه |
| PB1-B09 | محدودیت حساب، 2FA و زیر ۱۸ سال | `Open question` | متن حقوقی سن، روش/Recovery عامل دوم و SLA/مدارک رفع محدودیت کامل نیست | حقوقی، امنیت، ریسک، فنی | OQ-043/OQ-047/OQ-060 | تصمیم امنیت/حقوقی؛ سپس Stateهای نهایی Permission و Recovery |

## P2های Safe to defer

| شناسه | Label | مورد | دلیل تعویق امن | Owner |
|---|---|---|---|---|
| PB1-D01 | `Open question` | محتوای نهایی Campaign slider، مقصد و زمان‌بندی | جایگاه و تعامل ساخته شده؛ محتوا زیر OQ-051 به مارکتینگ وابسته است | مارکتینگ / محتوا |
| PB1-D02 | `Risk` | بازآزمایی یافتن تاریخچه/دارایی در شل سه‌تبی | مسیرها کامل‌اند؛ اثربخشی باید در Task test/Tree test سنجیده شود | UX Research / محصول — OQ-048 |
| PB1-D03 | `Open question` | Variantهای Zero portfolio با کیف مثبت یا سابقه عملیات | Variant فعلی معتبر و قابل Review است؛ مدل داده/Event زیر OQ-062 باز است | محصول / داده |
| PB1-D04 | `Risk` | Permission denied، Empty/Error و Mark-as-read کامل اعلان‌ها | اعلان خرید Deep link معتبر دارد؛ تکمیل مرکز اعلان برای Freeze ساختاری این Baseline حیاتی نیست | محصول / فنی |
| PB1-D05 | `Observed fact` | Overlay شانزده‌فلزی معامله Reviewer-only است | از مسیر محصول سه‌فلزی قابل ورود نیست و فقط Stress test مقیاس‌پذیری است | UX / Design System |

## P2های Business-gated

| شناسه | Label | مورد | Owner | مرجع |
|---|---|---|---|---|
| PB1-B10 | `Open question` | Foundations، Iconography، Dark mode و Tokenهای نهایی هنوز Candidate هستند | طراحی، برند، فنی، دسترس‌پذیری | OQ-052 / مرحله ۷ |
| PB1-B11 | `Open question` | قابلیت دقیق هر فلز و ترتیب عرضه برخی سرویس‌ها نیازمند تأیید نهایی است | مالک محصول و مالکان سرویس | OQ-054 / D-206 |

## بازاعتبارسنجی ممیزی تاریخی 18 Aug

| یافته تاریخی | وضعیت جاری | شاهد |
|---|---|---|
| Overview همه Viewها را نشان نمی‌داد | `Resolved` | D-203/V-138؛ Inventory جاری ۱۴۷ نما |
| متن داخلی در سطح موبایل | `Resolved` + تکمیل دسترس‌پذیری V-158 | V-136 و PB1-F01 |
| CTAهای فقط-Toast | `Resolved` | D-205/V-140؛ CTA فعال بی‌عمل صفر |
| دو منبع نمایش برای یک State | `Resolved` | D-204/V-139؛ Adapter و Summary مشترک |
| Auth جدا و متصل‌نشده | `Resolved` | D-200/D-201 و Preview خصوصی V-157 |
| نام‌های چندگانه کیف و رسید | `Resolved` | PB-2/V-151 و D-208/D-209 |
| «درخواست‌های من» بدون مقصد | `Resolved` | PB1-F02/V-158 |
| Referral Pending/Rejected در Dashboard | `Superseded` | D-138؛ Scope فعلی فقط دعوت موفق و مجموع جایزه است |
| کمبود Detail/Lifecycle سرویس‌های پیچیده | `Business-gated` | D-206 و PB1-B03..B08 |

## Matrix پوشش ۱۰۱ سناریوی دستی

| خانواده | Page | State | Overlay | وضعیت ساختاری | Owner موارد باز |
|---|---:|---:|---:|---|---|
| ورود و احراز هویت | ۱۳ | ۰ | ۰ | `Reviewed / ready` | حقوقی/امنیت برای PB1-B09 |
| خانه و دارایی | ۵ | ۰ | ۰ | `Reviewed / ready` | محصول/مارکتینگ برای PB1-D01/D03 |
| واریز به کیف تومان | ۵ | ۳ | ۰ | `Reviewed / ready` | مالی/حقوقی برای PB1-B02 |
| برداشت از کیف تومان | ۱ | ۴ | ۰ | `Reviewed / ready` | مالی/امنیت برای PB1-B02 |
| جزئیات فلز | ۴ | ۰ | ۰ | `Reviewed / ready` | مالی/قیمت‌گذاری برای PB1-B01 |
| خرید و فروش | ۱ | ۹ | ۳ | `Reviewed / ready` | مالی/قیمت‌گذاری برای PB1-B01 |
| مرکز خدمات | ۲ | ۰ | ۰ | `Reviewed / business-aware` | مالک محصول برای PB1-B11 |
| هشدار و سفارش قیمت | ۱ | ۸ | ۰ | `Reviewed / business-gated` | PB1-B03 |
| دریافت فیزیکی | ۵ | ۴ | ۰ | `Reviewed / business-gated` | PB1-B04 |
| خرید اقساطی | ۲ | ۸ | ۰ | `Reviewed / business-gated` | PB1-B05 |
| هدیه | ۲ | ۸ | ۰ | `Reviewed / business-gated` | PB1-B06 |
| معرفی دوستان | ۱ | ۳ | ۰ | `Reviewed / current scope ready` | محصول/رشد |
| تاریخچه و جزئیات عملیات | ۳ | ۳ | ۰ | `Reviewed / ready` | UX Research برای PB1-D02 |
| پیگیری و پشتیبانی | ۰ | ۳ | ۰ | `Reviewed / business-gated` | PB1-B07 |
| **جمع دستی** | **۴۵** | **۵۳** | **۳** | **۱۰۱ نما** | — |

## Matrix نماهای خارج از ۱۰۱ سناریوی دستی

### ۳۲ Page

| دامنه | Pageها | وضعیت | Owner مورد باز |
|---|---|---|---|
| پول و معامله | `money-preview`، `trade-preview`، `trade-processing` | `Reviewed / ready` | مالی برای PB1-B01/B02 |
| دریافت فیزیکی | `physical-config`، `physical-preview` | `Reviewed / business-gated` | PB1-B04 |
| سفارش قیمت | `target-preview` | `Reviewed / business-gated` | PB1-B03 |
| اقساط | `installment-contract-detail`، `installment-history`، `installment-payment`، `installment-preview`، `installment-fee-payment`، `installment-gateway`، `installment-success` | `Reviewed / business-gated` | PB1-B05 |
| هدیه | `gift-catalog`، `gift-checkout`، `gift-delivery`، `gift-preview`، `gift-processing`، `gift-success`، `gift-redeem`، `gift-redeem-preview`، `gift-redeem-success` | `Reviewed / business-gated` | PB1-B06 |
| حساب و امنیت | `bank-accounts`، `bank-add`، `bank-add-result`، `security`، `change-password` | `Reviewed / ready with gated rules` | PB1-B02/B09 |
| اعتماد و پشتیبانی | `licenses`، `legal`، `support-faq` | `Reviewed / content-gated` | PB1-B07/B08 |
| نتیجه عمومی | `feature-processing`، `feature-result` | `Reviewed / canonical component` | D-206 برای داده سرویس |

### ۱۴ Overlay مستقل + ۳ Overlay سناریویی

| Overlayها | وضعیت | Owner مورد باز |
|---|---|---|
| `wallet-actions`، `money-methods`، `bank-card-picker` | `Reviewed / ready with gated limits` | PB1-B02 |
| `trade-details`، `trade-asset-3`، `trade-asset-16`، `quote-confirm` | `Reviewed / ready` | PB1-B01 و PB1-D05 |
| `physical-rules`، `physical-confirm` | `Reviewed / business-gated` | PB1-B04 |
| `installment-terms` | `Reviewed / business-gated` | PB1-B05 |
| `chart-asset` | `Reviewed / ready` | PB1-B01 |
| `notifications`، `notification-settings` | `Reviewed / safe to defer` | PB1-D04 |
| `profile-info`، `support`، `install-pwa`، `app-version` | `Reviewed` | PB1-B07 فقط برای Support واقعی |

## Gate PB-1

`Complete`

- P0 جاری برابر صفر است.
- P1 مستقل از بیزینس پس از V-158 برابر صفر است.
- همه P1/P2های باقی‌مانده Owner، مرجع و مسیر حل دارند.
- هیچ شکاف شناخته‌شده‌ای فقط در تاریخچه چت باقی نمانده است.
- PB-7 می‌تواند Baseline فعلی را Freeze کند، مشروط به اینکه موارد D-206/OQ-055 به‌عنوان `Business-gated` داخل بسته Handoff باقی بمانند و به تصمیم قطعی تبدیل نشوند.
