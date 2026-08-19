# Brief تحویل ساختاری وایرفریم به چت بایننس — نسخه ۱.۰

تاریخ: ۱۹ اوت ۲۰۲۶  
Baseline: `Pre-Binance 1.0 / V-159 / D-219`  
وضعیت ورودی: `Sufficient for Binance structural handoff`

## مأموریت چت بایننس

ساختار فعلی شمش را با شواهد Patternهای Binance بررسی کن و برای تبدیل بعدی به Design System و High-fidelity پیشنهاد بده. هدف، یادگیری از نظم، سلسله‌مراتب، Composition، Density و الگوهای تعامل است؛ نه کپی‌کردن ظاهر، رنگ، Taxonomy کریپتو، Scope یا قانون بیزینس بایننس.

## ترتیب اجباری مطالعه

1. `pre-binance-baseline-freeze-manifest-v1.0.md`
2. `artifacts/multi-metal-waves-1-and-3-wireframe.html`
3. `artifacts/wave-1-auth-kyc-wireframe.html`
4. `current-wireframe-inventory-v0.1.md`
5. `content-and-terminology-contract-v0.1.md`
6. `pre-binance-flow-reachability-matrix-v0.1.md`
7. `page-family-structure-contract-v0.1.md`
8. `operation-detail-structure-contract-v0.2.md`
9. `pre-binance-current-state-punch-list.md`
10. `pre-binance-responsive-interaction-qa-2026-08-19.md`

پس از فهم Baseline می‌توان از شواهد موجود زیر استفاده کرد؛ این اسناد مرجع تحقیق‌اند، نه مرجع قانون محصول:

- `../02-research-and-audit/competitors/binance/binance-cross-batch-evidence-ledger-g2.md`
- `../02-research-and-audit/competitors/binance/binance-pattern-catalog.md`
- `../02-research-and-audit/competitors/binance/binance-global-to-shemsh-mapping-g4.md`
- `../07-design-system/visual-direction-contract-g5-v0.1.md`

## مرزهای قطعی

- `Business decision` — محصول PWA و Mobile-first/Touch-first است؛ Android همان WebView است.
- `Business decision` — شل سطح اول سه‌تبی `خانه / معامله / خدمات` باقی می‌ماند.
- `Business decision` — صفحه مستقل «همه فلزها» وجود ندارد؛ Card هر فلز مستقیماً جزئیات همان فلز را باز می‌کند.
- `Business decision` — طلا، نقره و مس Assetهای Release اول‌اند؛ Templateها مشترک اما داده/قانون هر فلز مستقل است.
- `Business decision` — Result و Receipt دو صفحه متوالی نیستند؛ «جزئیات عملیات» تطبیقی از Record Canonical استفاده می‌کند.
- `Business decision` — History همان جزئیات عملیات را باز می‌کند و CTA فعال فقط مقصد واقعی دارد.
- `Business decision` — Touch target حداقل ۴۴px، Focus/Keyboard، Safe area و Reduced motion باید حفظ شوند.
- `Business decision` — زبان و محتوای محصول فارسی و RTL است؛ Pattern پیشنهادی باید در RTL معتبر باشد.
- `Business decision` — جهت بصری Candidate شمش Navy-first است؛ رنگ برند Binance و Yellow/Black آن کپی نمی‌شود.

## مواردی که نباید قطعی شوند

| حوزه | وضعیت | کار مجاز چت بایننس |
|---|---|---|
| نرخ، کارمزد، مالیات، سقف و دقت | `Open question / OQ-020/OQ-033/OQ-055` | فقط جایگاه و Hierarchy داده را پیشنهاد بده؛ مقدار نساز |
| واریز/برداشت و مقصد بانکی | `Open question / OQ-001/OQ-045/OQ-053` | Pattern فرم/Validation/State پیشنهاد بده؛ قانون بانکی نساز |
| سفارش قیمت | `Design assumption / D-206` | Composition قابل Config پیشنهاد بده؛ Lifecycle را نهایی نکن |
| دریافت فیزیکی | `Design assumption / D-206` | Pattern انتخاب/Review/Tracking پیشنهاد بده؛ SKU/SLA/هزینه نساز |
| اقساط | `Design assumption / D-206` | Pattern قرارداد/پرداخت/Progress پیشنهاد بده؛ فرمول و جریمه نساز |
| هدیه | `Design assumption / D-206` | Pattern صدور/دریافت پیشنهاد بده؛ انقضا/ابطال/حریم خصوصی نساز |
| پشتیبانی | `Design assumption / D-206` | Pattern Case/Context پیشنهاد بده؛ کانال یا SLA اختراع نکن |
| مجوزها و اسناد | `Open question / OQ-063` | Layout اعتماد پیشنهاد بده؛ تصویر یا مدرک رسمی جعل نکن |
| 2FA، زیر ۱۸ سال و محدودیت حساب | `Open question` | Pattern Permission/Recovery پیشنهاد بده؛ متن حقوقی نهایی نساز |

## ده نمای نماینده برای Pilot

Preview پایه: `https://shemsh-wireframe-qa-20260819.shemshgpt.chatgpt.site/wireframe/`

| ترتیب | نما | شناسه/Route | موضوع Pattern |
|---:|---|---|---|
| ۱ | ورود یا ثبت‌نام | `?scenario=auth-login` / `WF-AUTH-001` | فرم، اعتماد، Header حداقلی |
| ۲ | خانه سه‌فلزی | `?scenario=home` / `WF-MM-001` | App shell، Portfolio hierarchy، Shortcut |
| ۳ | دارایی خالی | `?scenario=zero` / `WF-MM-018` | Empty module داخل Home shell |
| ۴ | جزئیات طلا | `?scenario=detail-gold` / `WF-MM-005` | Asset detail، نرخ و نمودار |
| ۵ | ورود معامله | `?scenario=trade-gold` / `WF-MM-008` | Asset tabs، Buy/Sell، Numeric input |
| ۶ | بازبینی معامله | `?scenario=trade-preview` | Review، Quote، پرداخت و CTA ثابت |
| ۷ | خرید موفق | `?scenario=trade-buy-success` / `WF-ST-T02` | Result و Operation-detail composition |
| ۸ | واریز متصل | `?scenario=deposit` / `WF-MM-R04` | Form، روش پرداخت، Validation |
| ۹ | تاریخچه | `?scenario=history` / `WF-MM-015` | Activity list، فیلتر و Status |
| ۱۰ | جزئیات عملیات | `?scenario=receipt` / `WF-MM-017` | Schema نوع/وضعیت‌محور و Tracking |

Overlayهای `quote-confirm`، `money-methods` و `notifications` نیز برای سنجش Sheet/Dialog همراه همین Pilot بررسی شوند، اما خروجی مستقل Design direction محسوب نمی‌شوند.

## روش ارزیابی مورد انتظار

برای هر نمای نماینده:

1. Job و Hierarchy فعلی شمش را خلاصه کن؛
2. Pattern بایننس را فقط با Evidence موجود یا مشاهده مستند معرفی کن؛
3. نتیجه را یکی از `Adopt / Adapt / Reject / Defer` بنام؛
4. دقیق بگو چه ساختار، Component یا Token role تغییر می‌کند؛
5. رفتار، State، RTL، دسترس‌پذیری و Business-gateهای حفظ‌شده را بنویس؛
6. Counter-example و ریسک تقلید مستقیم را ثبت کن؛
7. تغییر را ابتدا روی Candidate/Pilot مستقل بساز؛ Artifact فریز‌شده را تغییر نده.

## خروجی مورد انتظار از چت بایننس

- Mapping نمای‌به‌نمای `Current → Binance evidence → Shemsh adaptation`؛
- فهرست Patternهای مشترک قابل تبدیل به Component/Composition؛
- پیشنهاد Foundations و Token role بدون قطعی‌کردن مقدارهای باز؛
- Pilot تازه برای ۳ نمای اولویت‌دار: `Home`، `Trade entry/preview` و `Operation detail`؛
- QA روی `320 / 375 / 390` و `812×375`، RTL، Focus، Touch و Console؛
- فهرست پیشنهادهای ردشده/تعویق‌شده و دلیل آن‌ها؛
- هیچ Migration سراسری Figma یا تغییر Artifact مرجع پیش از Review مالک محصول انجام نشود.

## متن آماده برای شروع چت بایننس

> ابتدا فایل `06-wireframes-and-testing/binance-structural-handoff-brief-v1.0.md` و Manifest فریز معرفی‌شده در آن را کامل بخوان. Baseline شمش را منبع حقیقت ساختار و رفتار بدان و از اسناد Binance فقط به‌عنوان Evidence استفاده کن. ده نمای نماینده را به‌ترتیب با روش Adopt/Adapt/Reject/Defer تحلیل کن. قانون، عدد، Scope یا Feature تازه از بایننس استنتاج نکن و موارد D-206/OQ-055 را Business-gated نگه دار. قبل از هر تغییر مرجع، Mapping و Pilot مستقل Home، Trade و Operation detail را برای Review من آماده کن.

## Gate تحویل

`Sufficient for Binance structural handoff`

این Brief برای شروع کار چت دیگر کافی است و به تاریخچه این گفتگو وابسته نیست.
