# گزارش QA تعاملی، Responsive و دسترس‌پذیری پیش از بایننس

تاریخ: ۱۹ اوت ۲۰۲۶  
بسته: `PB-5`  
Artifact فعال: `artifacts/multi-metal-waves-1-and-3-wireframe.html`  
مرجع تخصصی: `artifacts/wave-1-auth-kyc-wireframe.html`  
نسخه Preview آزموده‌شده: `Sites v4 / df9bed5f652063cb0868553cc9795a24f117f0bd`؛ بازاعتبارسنجی Freeze روی `Sites v5 / ee892fe005cfad61250dcec846d041d3df0e34a6`

## نتیجه

- `Observed fact` — Audit تکرارپذیر `scripts/audit-responsive-accessibility-contracts.mjs` بدون Failure پاس شد.
- `Observed fact` — QA مرورگری واقعی روی Preview خصوصی HTTPS در عرض‌های `320 / 375 / 390` و Landscape مرجع `812×375` اجرا شد.
- `Observed fact` — Overflow افقی ناخواسته، هدف لمسی کوچک‌تر از `44×44` در نمونه‌های فعال، CTA/Nav پوشاننده محتوا، Snapshot سفید Overview و Error/Warning جدید Console برابر صفر است.
- `Observed fact` — Overview تعداد `147` نما در `14` گروه را ساخت؛ کارت سفید/خالی صفر، Zoom از `10%` به `12%` و برگشت به `10%` کار کرد و `Escape` Focus را به Trigger برگرداند.
- `Observed fact` — Auth/KYC در `320×700`، `390×844` و `812×375` داخل Preview خصوصی رندر شد و دیگر سفید نیست.
- `Observed fact` — فایل فعال فقط `color-scheme: light` دارد؛ Dark mode برای این Baseline موضوع آزمون نیست.
- `Observed fact` — V-158/V-159 روی Sites v5 دوباره آزموده شد: Overview هر ۱۴۷ کارت را با Blank و Overflow صفر ساخت، نام دسترس‌پذیر Auth/KYC کاربرمحور بود، مقصد دریافت فیزیکی «تاریخچه» نمایش داده شد و Console صفحه اصلی/Auth صفر Error/Warning داشت.

## اصلاح‌های حاصل از QA

1. Landscape کوتاه به Shell تمام‌صفحه `100dvh` تبدیل شد؛ Main داخلی Scroll می‌شود و CTA در پایین Viewport ثابت می‌ماند.
2. Toggle موجودی، نقطه‌های Campaign، Presetهای مبلغ، Inputهای مبلغ و Switch معامله حداقل Target برابر `44px` گرفتند.
3. Auth/KYC در Preview خصوصی با `srcdoc` هم‌مبدأ و Fallback امن بارگذاری می‌شود تا محدودیت Frame احراز هویت باعث صفحه سفید نشود.
4. Cloneهای Auth در Overview از ترتیب Focus خارج شدند و پس از Load، Focus روی «بازگشت به حالت تعاملی» تثبیت می‌شود.
5. Scrollbar بصری Auth در Mobile/Landscape پنهان شد، بدون حذف Scroll محتوا.

## ماتریس اجرا

| حوزه | مشاهده مرورگری | نتیجه |
|---|---|---|
| `320×700` | Home و Error state؛ `scrollWidth = clientWidth = 320`؛ Target کوچک صفر | `Pass` |
| `375×812` | فرم واریز؛ CTA در `y=741..812` و Main تا `y=741` | `Pass` |
| `390×844` | Preview معامله و جزئیات عملیات؛ CTA خارج از Main و Overflow صفر | `Pass` |
| `812×375` Landscape | Phone برابر کل Viewport؛ Main قابل Scroll و CTA ثابت در `y=244..375` | `Pass` |
| Scroll خانه | Scroll داخلی `0 → 27`؛ Bottom nav بدون جابه‌جایی در `y=626..700` | `Pass` |
| Scroll دریافت فیزیکی | Scroll داخلی تا انتها `738/738`؛ آخرین Card بالای CTA قابل مشاهده | `Pass` |
| Touch target | Scan کنترل‌های قابل مشاهده در نماهای نماینده؛ مورد زیر `44×44` صفر | `Pass` |
| Focus و Keyboard | Sheet با Focus اولیه روی Close، `Escape` و بازگشت Focus به Trigger؛ Overview نیز Focus trap/return معتبر | `Pass` |
| Sheet/Dialog | نام دسترس‌پذیر، `role=dialog`، Close و Focus داخل Overlay تأیید شد | `Pass` |
| Form/State | Label ورودی‌ها، نام کنترل‌ها، `aria-invalid/describedby`، Duplicate ID و Error link بررسی شد؛ Failure صفر | `Pass` |
| Overview | `147` کارت، `14` گروه، Blank صفر، Zoom/Fit/Escape و Focus معتبر | `Pass` |
| Auth/KYC | Frame هم‌اندازه Viewport در سه اندازه هدف و محتوای قابل مشاهده | `Pass` |
| Reduced motion | Media query سراسری و توقف Transition/Spinner خودکار در قرارداد فعال وجود دارد | `Pass — contract` |
| Reflow/Zoom | Reflow در عرض `320 CSS px` بدون Overflow افقی پاس شد؛ Meta viewport زوم را محدود نمی‌کند | `Pass — equivalent reflow` |
| Console | نشست مرورگری پاک برای Home و Auth/KYC؛ Error/Warning صفر | `Pass` |

## پوشش نمونه‌های نماینده

`home`، `deposit`، `withdraw`، `trade-gold`، `trade-preview`، `receipt`، `deposit-failed`، `history`، `physical-config`، `installment-empty`، `gift-catalog`، `support-faq` و `auth-login` بررسی شدند. Inventory کامل Overview نیز هر `147` نما را برای نبود خروجی سفید کنترل کرد.

## محدودیت آزمون

کنترل مستقل Zoom مرورگر در ابزار Browser در دسترس نبود؛ به‌جای آن معیار Reflow استاندارد در `320 CSS px`، نبود محدودکننده Zoom و Scroll عمودی قابل دسترس بررسی شد. این محدودیت P0/P1 شناخته‌شده‌ای برای Baseline ایجاد نمی‌کند.

## Gate PB-5

`Complete`

P0 و P1 شناخته‌شده در حوزه Responsive، Interaction، Focus، Overview و Runtime Console برابر صفر است. موارد Business-gated زیر D-206 و تصمیم‌های مالی OQ-055 خارج از PB-5 باقی می‌مانند.
