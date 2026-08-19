# Mapping ده نمای نماینده: Current → Binance evidence → Shemsh adaptation

تاریخ: ۲۸ مرداد ۱۴۰۵ / 19 Aug 2026  
وضعیت: `Candidate mapping retained as evidence / Figma Home rejected / HTML pattern layer active — D-223`  
Baseline: `Pre-Binance 1.0 / V-159 / D-219`  
تصمیم اجرا: D-220/D-222

## روش و مرز

- **Observed fact:** ساختار، رفتار، Copy و Stateهای Baseline شمش منبع حقیقت‌اند.
- **Observed fact:** Patternهای Binance فقط از Ledgerها و Mappingهای G4/G5 استفاده می‌شوند.
- **Business decision:** Navy-first، RTL، PWA/Touch-first، شل سه‌تبی، مدل سه‌فلزی و جزئیات عملیات تطبیقی حفظ می‌شوند.
- **Design assumption:** `Adopt` به معنی پذیرش منطق Pattern است، نه کپی ظاهر یا مقدار Token.
- **Risk:** بدون Pilot واقعی، Screenshot رقیب رفتار Keyboard، Dynamic Type، Screen reader، Safe area و RTL را اثبات نمی‌کند.

## خلاصه تصمیم‌ها

| نما | تصمیم غالب | Patternهای مرجع | اثر اصلی |
|---|---|---|---|
| ورود/ثبت‌نام | `Adapt` | G4-G-014/018/020/021 | Task hierarchy و Form تخت |
| خانه سه‌فلزی | `Adapt` | G4-G-013/016/025/026/029 | یک Anchor، Card taxonomy، Row تخت |
| دارایی خالی | `Adopt + Adapt` | G4-G-018/025/027 | تغییر فقط Module دارایی داخل Shell |
| جزئیات طلا | `Adapt` | G4-G-014/015/016/025 | Numeric hierarchy و تفکیک Tab/Range |
| ورود معامله | `Adapt` | G4-G-015/018/020/021 | Asset/Direction taxonomy و Amount hero |
| بازبینی معامله | `Adopt + Adapt` | G4-G-018/019/021 | یک CTA، Breakdown تخت، Action ثابت |
| خرید موفق | `Adapt` | G4-G-023/024/025 | Outcome داخل Operation detail تطبیقی |
| واریز متصل | `Adapt` | G4-G-009/020/021/022 | Form/Choice/Validation و Container صحیح |
| تاریخچه | `Adopt + Adapt` | G4-G-011/015/016/027 | Flat rows، Filter sheet، حفظ Context |
| جزئیات عملیات | `Adapt` | G4-G-014/016/024/025 | Schema نوع/وضعیت‌محور و Tracking |

## ۱. ورود یا ثبت‌نام — `WF-AUTH-001`

- **Current job/hierarchy:** شروع امن با شماره موبایل، Header حداقلی، توضیح کوتاه، یک ورودی و یک اقدام اصلی.
- **Binance evidence:** `G4-G-014` سه سطح عنوان، `G4-G-018` یک اقدام اصلی، `G4-G-020` Field نرم و `G4-G-021` Helper نزدیک Control.
- **Decision:** `Adapt`؛ Form بدون Card تزئینی، Task title و Subtitle کوتاه، Primary action واحد و Trust copy ثانویه.
- **Component/token impact:** `Top App Bar minimal`، `Text Input` موجود، Button موجود، `surface.canvas/base`، `text.primary/secondary` و `focus.ring`؛ Anatomy/Variant Input تغییر نمی‌کند.
- **Preserve:** سیاست رمز/OTP، خطای نزدیک Field، Draft، RTL، Autofill، Keyboard مناسب موبایل، Touch target و Deep-link بازگشت.
- **Risk/counter-example:** لوگو یا پنل اعتماد نباید بالاتر از Task قرار گیرد؛ KYC چندمرحله‌ای یا متن حقوقی طولانی به الگوی فرم کوتاه فشرده نمی‌شود.

## ۲. خانه سه‌فلزی — `WF-MM-001`

- **Current job/hierarchy:** دید سریع به وضعیت دارایی‌های فلزی و کیف تومان، ورود مستقیم به جزئیات هر فلز، Shortcutها و محتوای کمپین.
- **Binance evidence:** `G4-G-013` Card انتخابی، `G4-G-016` Row تخت، `G4-G-025` یک Anchor عددی در هر View/Module، `G4-G-026` Mask پایدار و `G4-G-029` مرز Product/Promo.
- **Decision:** `Adapt`؛ یک Anchor اصلی برای خلاصه، فلزها Objectهای قابل ورود با وزن ثانویه، کیف و Shortcutها بدون Wrapper سنگین و Campaign جدا از Product UI.
- **Component/token impact:** `Portfolio summary composition`، `Asset row/object`، `Masked value utility`، `Promo banner composition`؛ Surface ladder، Divider، Numeric type و spacing tier بازتنظیم می‌شوند.
- **Preserve:** سه فلز Release اول، نبود صفحه همه فلزها، استقلال کیف تومان، privacy scopeهای D-150 و Navigation سه‌تبی.
- **Risk/counter-example:** «یک Anchor» به معنی حذف موجودی هر فلز یا جمع‌زدن مالی حل‌نشده OQ-055 نیست؛ Cardهای مدرک/اعتماد را نباید تخت کرد.

## ۳. دارایی خالی — `WF-MM-018`

- **Current job/hierarchy:** حفظ Home shell و جایگزینی فقط Module دارایی با Activation card و CTA واحد «شروع خرید».
- **Binance evidence:** `G4-G-018` یک CTA، `G4-G-025` حذف Anchorهای صفرِ هم‌وزن و `G4-G-027` حفظ Context ناوبری.
- **Decision:** `Adopt + Adapt`؛ Shell، کیف، Shortcut و Campaign باقی می‌مانند؛ Empty module ساده، کوتاه و بدون لیست صفر سه فلز است.
- **Component/token impact:** `Empty module` به‌جای Empty page؛ Button اصلی موجود و `surface.sunken/base` با Illustration اختیاری.
- **Preserve:** D-212/D-214، مسیر طلای پیش‌فرض به Trade، Navigation و عدم نمایش داده شخصی جعلی.
- **Risk/counter-example:** Empty state تمام‌صفحه یا حذف کیف/Shortcutها با Job خانه ناسازگار است؛ CTA دوم بازار دوباره اضافه نمی‌شود.

## ۴. جزئیات طلا — `WF-MM-005`

- **Current job/hierarchy:** فهم وضعیت یک دارایی، نرخ، مقدار، تغییر و نمودار خلاصه؛ دسترسی به معامله یا Chart کامل.
- **Binance evidence:** `G4-G-014` Title hierarchy، `G4-G-015` Tab فقط برای Peer scope، `G4-G-016` ردیف داده و `G4-G-025` Numeric anchor.
- **Decision:** `Adapt`؛ Header جزئیات، یک عدد متناسب با Job به‌عنوان Anchor، Metadata/معادل ثانویه و بازه نمودار به‌صورت Segmented/Filter نه Tab ناوبری.
- **Component/token impact:** `Asset detail header`، `Metric group`، `Chart summary`، `Range selector` و `Key-value row`؛ Financial delta از Feedback status جدا می‌شود.
- **Preserve:** Card هر فلز → Detail مستقیم، Template مشترک با داده مستقل هر فلز، مسیر Chart کامل و عدم اختراع نرخ/PNL.
- **Risk/counter-example:** نمایش هم‌وزن موجودی، نرخ، ارزش و P&L سلسله‌مراتب را می‌شکند؛ رنگ فلز یا سبز/قرمز تنها حامل معنا نیست.

## ۵. ورود معامله — `WF-MM-008`

- **Current job/hierarchy:** انتخاب فلز، Buy/Sell، ورود Amount و مشاهده Context نرخ/موجودی پیش از ادامه.
- **Binance evidence:** `G4-G-015` تفکیک Tabs/Segmented، `G4-G-018` CTA واحد، `G4-G-020` Field در برابر Choice و `G4-G-021` Helper نزدیک Control.
- **Decision:** `Adapt`؛ Asset tabs برای Scope، Buy/Sell segmented برای Direction، Amount hero به‌عنوان استثنای Field عمومی و Context نرخ/موجودی کم‌تأکید اما نزدیک.
- **Component/token impact:** `Asset selector` و `Trade direction` دو Component/Composition جدا؛ `Amount Input` موجود فقط Surface remap می‌گیرد؛ `Quote summary` و Button مصرف می‌شوند.
- **Preserve:** ورودی پیش‌فرض خالی، سه فلز، Context نرخ فروش D-160، Draft در خطا، حداقل/سقف فقط از قواعد رسمی و RTL اعداد.
- **Risk/counter-example:** Tab و Segmented نباید ظاهر یا رفتار یکسان بگیرند؛ Amount hero را به Text Input عادی تبدیل نمی‌کنیم و Taxonomy Spot/Convert وارد نمی‌شود.

## ۶. بازبینی معامله — `trade-preview`

- **Current job/hierarchy:** بررسی نهایی نوع/فلز/مقدار/پرداخت، دیدن داده ثبت‌شونده و تأیید با CTA ثابت.
- **Binance evidence:** `G4-G-018` یک Primary action، `G4-G-019` Bottom action وابسته به Task و `G4-G-021` جداسازی Helper از Operational panel.
- **Decision:** `Adopt + Adapt`؛ Summary بالای صفحه، Breakdown تخت و هم‌تراز، هشدار فقط در صورت ریسک واقعی و CTA ثابت با Safe-area/Keyboard contract.
- **Component/token impact:** `Review summary`، `Key-value group`، `Operational alert` و `Fixed task action`؛ Border/Card فقط برای Choice/Object واقعی.
- **Preserve:** Quote، Snapshot، روش پرداخت، حالت کمبود موجودی و Gateهای نرخ/کارمزد؛ مقدار غایب ساخته نمی‌شود.
- **Risk/counter-example:** CTA ثابت نباید محتوا را بپوشاند؛ Preview واریز درگاه بانکی از این Pattern استنتاج نمی‌شود چون D-210 آن را حذف کرده است.

## ۷. خرید موفق — `WF-ST-T02`

- **Current job/hierarchy:** پاسخ هم‌زمان به «چه شد؟»، Anchor اصلی، زمان/کد موجود و قدم بعدی در صفحه تطبیقی جزئیات عملیات.
- **Binance evidence:** `G4-G-023` Processing مینیمال، `G4-G-024` تفاوت Outcome/Evidence و `G4-G-025` یک Anchor.
- **Decision:** `Adapt`؛ Hero نتیجه سبک و روشن، سپس فیلدهای واقعی همان Record؛ صفحه رسید جدا ساخته نمی‌شود.
- **Component/token impact:** `Operation status header`، `Numeric anchor`، `Type-specific field group` و `Next action`; Success semantic محدود و Evidence مستقل از رنگ.
- **Preserve:** D-208/D-209/D-218، Canonical record، Snapshot نرخ، حذف اثر تکراری و کد پیگیری فقط در صورت وجود Record.
- **Risk/counter-example:** Pattern قدیمی Result → Receipt رد می‌شود؛ Success نباید اطلاعات خطا/Pending یا Rowهای عمومی بی‌ربط را مجبور کند.

## ۸. واریز متصل — `WF-MM-R04`

- **Current job/hierarchy:** ورود مبلغ، انتخاب روش/کارت تأییدشده، Validation و انتقال به مسیر واقعی روش پرداخت.
- **Binance evidence:** `G4-G-009` انتخاب Container، `G4-G-020` Field نرم/Choice مرزبندی‌شده، `G4-G-021` Helper نزدیک Field و `G4-G-022` Error محلی/Warning نرم.
- **Decision:** `Adapt`؛ Amount field و Choiceهای روش/کارت نقش بصری جدا دارند؛ انتخاب کوتاه در Sheet تطبیقی و Task پایدار در Page می‌ماند.
- **Component/token impact:** `Amount Input`، `Choice row`، `Bank card picker`، `Adaptive sheet` و `Localized error`; State/Focus/Disabled tokenها لازم‌اند.
- **Preserve:** D-210/D-216، نبود Preview درگاه، سه Callback واقعی، Draft و Validation، کارت فقط تأییدشده و عدم ساخت سقف/کارمزد بانکی.
- **Risk/counter-example:** Pattern معامله نباید به واریز تعمیم یابد؛ نتیجه Unknown حق تکرار پرداخت را تشویق نمی‌کند و Sheet بلند جای Page مالک Task را نمی‌گیرد.

## ۹. تاریخچه — `WF-MM-015`

- **Current job/hierarchy:** اسکن همه عملیات، فیلتر Contextual، درک Status و ورود به همان جزئیات عملیات.
- **Binance evidence:** `G4-G-011` Sheet تطبیقی، `G4-G-015` Peer scope، `G4-G-016` Flat row و `G4-G-027` حفظ Filter/Scroll/Back.
- **Decision:** `Adopt + Adapt`؛ List تخت با Divider، Anchor نوع‌محور، Metadata و Status کوتاه؛ فیلتر در Sheet و State ناوبری حفظ می‌شود.
- **Component/token impact:** `Activity row`، `Status badge`، `Filter control/sheet`، `Date grouping` و Navigation state contract.
- **Preserve:** تاریخچه یک مقصد مستقل، همه نوع عملیات، RTL/LTR عدد، Masking و بازکردن `WF-MM-017` مشترک.
- **Risk/counter-example:** Card برای هر ردیف Density و Scan را خراب می‌کند؛ یک Universal status label یا رنگ بدون متن، تفاوت دامنه‌ها را حذف می‌کند.

## ۱۰. جزئیات عملیات — `WF-MM-017`

- **Current job/hierarchy:** نمایش Status، Anchor، فیلدهای ثبت‌شده نوع/وضعیت، زمان/کد موجود، Recovery و اقدام بعدی در یک صفحه.
- **Binance evidence:** `G4-G-014` عنوان Task، `G4-G-016` ردیف داده، `G4-G-024` Outcome/Evidence و `G4-G-025` یک Anchor.
- **Decision:** `Adapt`؛ Shell مشترک و Schema اختصاصی؛ Evidence به‌صورت Object توجیه‌شده، نه Universal receipt Card.
- **Component/token impact:** `Operation detail shell`، `Status header`، `Key-value group`، `Tracking block`، `Support context` و Action map.
- **Preserve:** ۱۳ Schema D-218، D-208/D-209، داده Snapshot، نبود کد ساختگی، CTA واقعی، Business-gateهای D-206 و OQ-055.
- **Risk/counter-example:** Minimalism نباید مدرک اعتماد، Tracking یا Recovery را حذف کند؛ Row ثابت «پرداخت‌شده/دریافت‌شده» برای Failed/Expired ممنوع است.

## Overlayهای همراه

| Overlay | تصمیم | قرارداد |
|---|---|---|
| `quote-confirm` | `Adopt` برای Dialog یک‌تصمیمی | حداکثر دو Action، Focus trap/return، Escape و عدم استفاده برای Form طولانی |
| `money-methods` | `Adapt` برای Sheet انتخاب Contextual | ارتفاع تطبیقی، Scroll body، Footer/Safe area و Desktop counterpart |
| `notifications` | `Adapt` براساس مالکیت Task | Preview کوتاه می‌تواند Sheet باشد؛ مقصد پایدار با History/Page ownership صفحه کامل است |

## Patternهای مشترک قابل تبدیل

1. `Page shell / Minimal task shell / Detail shell`؛
2. `Numeric anchor + supporting metrics`؛
3. `Flat data row / Key-value group / Activity row`؛
4. `Choice row` جدا از `Input field`؛
5. `Adaptive sheet` و `Single-decision dialog`؛
6. `Fixed task action` با Safe area و Keyboard avoidance؛
7. `Operation detail shell` با Schema نوع/وضعیت‌محور؛
8. `Masked value utility` با Geometry ثابت و Scope نزدیک؛
9. `Promo banner` جدا از Product card؛
10. `Alert/Helper/Error` به‌عنوان سه نقش محتوایی جدا.

## پیشنهادهای رد یا تعویق‌شده

| پیشنهاد | تصمیم | دلیل |
|---|---|---|
| رنگ زرد/مشکی Binance و مقدارهای دقیق آن | `Reject` | هویت Navy-first و دسترس‌پذیری شمش مستقل است |
| Taxonomy کریپتو، Spot/Convert/Market hierarchy | `Reject` | با Scope سه‌فلزی و قوانین شمش هم‌معنا نیست |
| Card برای هر بخش/ردیف | `Reject` | با Flat scan، Density و Taxonomy محدود Card ناسازگار است |
| صفحه مستقل Result سپس Receipt | `Reject` | D-208 یک جزئیات عملیات تطبیقی را قطعی کرده است |
| Report تحلیلی Card-heavy | `Defer` | Job و Scope قطعی ندارد — G4-G-028 |
| قانون، عدد، SLA یا Feature استنتاج‌شده از رقیب | `Reject` | Business-gateها فقط با منبع رسمی بسته می‌شوند |

## اثر پیشنهادی روی Foundations

- Surface ladder: `canvas → base → sunken/raised → inverse`؛
- Grouping ladder: `Whitespace → Label → Divider/Surface → Border/Object → Overlay elevation`؛
- Numeric hierarchy: یک Anchor در هر View/Module، نه حذف داده لازم؛
- Color restraint: Navy ساختار/Action، Status برای Feedback، Metal برای Label/Icon/Series با معنای غیررنگی؛
- Density tiers: Root، List، Form و Operation detail؛ Touch target هرگز کوچک نمی‌شود؛
- Financial delta از Success/Error جدا می‌ماند.

## Gate

`Complete as candidate mapping evidence / Figma Home output rejected / use only through D-223 HTML workflow; owner review required before palette, DS extraction or scale`
