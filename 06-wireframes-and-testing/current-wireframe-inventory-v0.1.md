# Inventory جاری وایرفریم مرجع — نسخه ۰.۱

تاریخ: ۱۹ اوت ۲۰۲۶  
بسته: `PB-6`  
Artifact فعال: `artifacts/multi-metal-waves-1-and-3-wireframe.html`

## شمارش مرجع

| نوع | تعداد |
|---|---:|
| Page | ۷۷ |
| State | ۵۳ |
| Overlay | ۱۷ |
| کل | ۱۴۷ |

- `Observed fact` — ۱۰۱ سناریوی دستی با ID و نام فارسی در ۱۴ گروه وجود دارد.
- `Observed fact` — Builder همان HTML علاوه بر سناریوهای دستی، ۳۲ Page صریح از `render()` و ۱۴ Overlay مستقل از Renderer پنجره‌ها کشف می‌کند.
- `Observed fact` — سه سناریوی دستی انتخاب فلز معامله خودشان Overlay هستند؛ درنتیجه جمع نهایی ۱۴۷ است.
- `Observed fact` — `scripts/audit-wireframe-inventory.mjs` یکتایی ID/Key، عضویت دقیق گروه‌ها و شمارش `77/53/17` را مستقیم از HTML کنترل می‌کند.

## گروه‌های ۱۰۱ سناریوی دستی

| گروه | تعداد | محدوده محتوا |
|---|---:|---|
| ورود و احراز هویت | ۱۳ | ورود، رمز، OTP، KYC، مهمان و حساب |
| خانه و دارایی | ۵ | خانه، نرخ ناقص، ترکیب، خالی و اختلال |
| واریز به کیف تومان | ۸ | Entry، روش‌های انتقالی و سه نتیجه درگاه |
| برداشت از کیف تومان | ۵ | Entry و چهار وضعیت ثبت/نتیجه |
| جزئیات فلز | ۴ | طلا، نقره، مس و نمودار |
| خرید و فروش | ۱۳ | Entry، Pickerها و Stateهای معامله |
| مرکز خدمات | ۲ | Hub عمومی و خدمات قیمت |
| هشدار و سفارش قیمت | ۹ | Setup و Lifecycle هشدار/سفارش |
| دریافت فیزیکی | ۹ | انتخاب، محدودیت و Lifecycle درخواست |
| خرید اقساطی | ۱۰ | قرارداد، پرداخت و Lifecycle اقساط |
| هدیه | ۱۰ | Hub/Setup و Stateهای صدور/دریافت |
| معرفی دوستان | ۴ | Hub و سه وضعیت دعوت |
| تاریخچه و جزئیات عملیات | ۶ | فهرست، فیلتر، Detail و Stateهای فهرست |
| پیگیری و پشتیبانی | ۳ | پرونده ثبت‌شده، نیازمند اقدام و بسته |

نام و ID هر سناریو در آرایه `scenarios` داخل Artifact فعال منبع اجرایی است؛ Audit عضویت آن در `scenarioGroups` را اجباری می‌کند تا سند از HTML جدا نشود.

## Pageهای خودکشف خارج از فهرست دستی

`money-preview`، `physical-config`، `physical-preview`، `target-preview`، `installment-contract-detail`، `installment-history`، `installment-payment`، `installment-preview`، `installment-fee-payment`، `installment-gateway`، `installment-success`، `gift-catalog`، `gift-checkout`، `gift-delivery`، `gift-preview`، `gift-processing`، `gift-success`، `gift-redeem`، `gift-redeem-preview`، `gift-redeem-success`، `bank-accounts`، `bank-add`، `bank-add-result`، `security`، `change-password`، `licenses`، `legal`، `support-faq`، `feature-processing`، `feature-result`، `trade-preview`، `trade-processing`.

## Overlayهای مستقل خودکشف

`wallet-actions`، `money-methods`، `bank-card-picker`، `trade-details`، `physical-rules`، `physical-confirm`، `installment-terms`، `chart-asset`، `notifications`، `profile-info`، `notification-settings`، `support`، `install-pwa`، `app-version`.

سه Overlay ثبت‌شده در سناریوهای دستی: `trade-asset-3`، `trade-asset-16` و `quote-confirm`.

## فایل فعال و فایل‌های غیرمرجع

| نقش | فایل |
|---|---|
| Baseline سرتاسری فعال | `artifacts/multi-metal-waves-1-and-3-wireframe.html` |
| مرجع تخصصی Auth/KYC | `artifacts/wave-1-auth-kyc-wireframe.html` |
| Candidate بایننس؛ غیرمرجع | `artifacts/multi-metal-waves-1-and-3-binance-alignment-pilot.html` |
| Snapshot بازیابی صفحات حذف‌شده | `../99-archive/2026-08-19-all-metals-pages/` |

Prototypeهای مستقل دیگر فقط شاهد تاریخی، تست یا Candidate هستند و شمارش Baseline را تغییر نمی‌دهند.

## Business-gated

دریافت فیزیکی، اقساط، هدیه، سفارش/هشدار، مجوزها و پشتیبانی برای Review در Baseline حفظ شده‌اند. قواعد حل‌نشده آن‌ها طبق D-206 و سؤال‌های باز پروژه `Design assumption` هستند و از حضور Screen یا State نباید تصمیم نهایی بیزینس استنتاج شود.

## Gate PB-6

`Sufficient to proceed`

Artifact، شمارش، نام گروه‌ها و فهرست Route/Overlay با Audit مستقیم از HTML همگام‌اند. تغییر بعدی در `scenarios`، `scenarioGroups`، `render()` یا Overlay renderer اگر شمارش/عضویت را ناسازگار کند، Script با Failure متوقف می‌شود.

