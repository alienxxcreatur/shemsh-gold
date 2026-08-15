# State Ledger اجرای Amount Input در Figma — v0.1

وضعیت: `Candidate / Awaiting owner visual review`

تاریخ اجرا: ۲۰ مرداد ۱۴۰۵ / 11 Aug 2026

## خروجی Figma

- **Observed fact:** صفحه `16 Amount Input` با ID `325:229` به صفحه مشترک `15 Inputs` تبدیل شد و Text Input، Amount Input و رفرنس UNTITLED را در Sectionهای جدا نگهداری می‌کند — D-143.
- **Observed fact:** Component Set اصلی با نام نهایی `Amount Input` و ID `325:410` ساخته شد.
- **Observed fact:** Set دارای ۱۶ Variant یکتا است: `Size=Medium/Large × State=Empty/Filled/Hover/Focus/Error/Disabled/Read-only/Loading`.
- **Observed fact:** `Invalid` به نام مشترک خانواده `Error` تغییر کرد و Hover/Read-only با حفظ Token binding و بازاتصال Property referenceها افزوده شدند.
- **Observed fact:** گرید Variantها اکنون دو ردیف Medium/Large و هشت ستون State دارد.
- **Observed fact:** فونت استفاده‌شده در ساخت، `Yekan Bakh FaNum` با وزن‌های Regular، Medium و SemiBold بود.

## قرارداد Component

- **Design assumption:** Amount Input پایه برای ورود عدد مالی/مبلغ است، نه ماشین‌حساب معامله و نه قرارداد نهایی خرید/فروش.
- **Design assumption:** `Unit`، `Balance hint` و `Action label` به‌صورت Property کنترل می‌شوند تا تصمیم چندفلزی Axis تازه و انفجاری نسازد.
- **Design assumption:** Stateهای `Error` و `Loading` فقط رفتار بصری عمومی را نشان می‌دهند؛ قواعد حداقل/حداکثر، کارمزد، نرخ، تسویه، گام معامله، واحد هر فلز و محدودیت‌های دارایی هنوز از تصمیم‌های مالی/محصولی می‌آیند.
- **Risk:** این Component تا زمانی که در Flow واقعی خرید/فروش، واریز/برداشت یا سفارش هدف مصرف و تست نشود `Stable` نیست.

## Component properties

- **Observed fact:** Propertyهای متنی ساخته شدند: `Label`, `Amount`, `Placeholder`, `Unit`, `Helper`, `Balance hint`, `Action label`.
- **Observed fact:** Propertyهای نمایشی ساخته شدند: `Show label`, `Show unit`, `Show helper`, `Show balance hint`, `Show action`.
- **Observed fact:** `Placeholder` فقط به Variantهای `State=Empty` وصل شد و `Amount` به Stateهای غیرخالی وصل ماند.
- **Observed fact:** Loading indicator از Boolean عمومی جدا شد و فقط در Variantهای `State=Loading` visible است.

## Validation

- **Observed fact:** در نسخه تاریخی پیش از D-143، Metadata تعداد ۱۲ Variant و گرید ۶×۲ را تأیید کرده بود؛ این ساختار با نسخه ۱۶تایی فعلی جایگزین شده است.
- **Observed fact:** Component properties شامل ۱۴ تعریف است: ۷ Text، ۵ Boolean و ۲ Variant axis.
- **Observed fact:** Screenshot نهایی از Component Set گرفته شد.
- **Observed fact:** در نسخه تاریخی ۱۲تایی، بک‌گراند اضافی Wrapper/Meta حذف و Set موقتاً به `2424×328` با عرض Variant برابر ۳۶۰ رسیده بود؛ D-143 این Geometry و ماتریس را به قرارداد مشترک فعلی ۳۲۰ و ۸ State جایگزین کرد.
- **Observed fact:** فریم مستندات موقت `_Documentation / Amount Input` با ID `337:238` حذف و با Section/Documentation استاندارد Amount Input داخل `Inputs / Main` جایگزین شد.
- **Observed fact:** Geometry نهایی با Text Input همسان شد: عرض ۳۲۰، ارتفاع Field برابر ۴۸/۵۶ و Padding افقی ۱۶. Label/Amount/Unit/Action/Helper/Balance همگی Text Style Semantic و تراز RIGHT دارند.
- **Observed fact:** Helper و Balance hint در تمام ۱۶ Variant هرکدام عرض ۱۵۶، `layoutSizingHorizontal=FILL` و `textAlignHorizontal=RIGHT` دارند.
- **Observed fact:** Audit نهایی Figma تعداد `16` Variant، `16` Tuple یکتا، `14` Component property و صفر Issue در Style/RTL/Geometry/Property reference گزارش کرد.
- **Risk:** Code Connect metadata به‌دلیل محدودیت Dev/Full seat سازمانی در Figma قابل خواندن نبود؛ بنابراین اعتبارسنجی از مسیر `use_figma` و `get_metadata` انجام شد.

## Evidence نهایی

- `artifacts/amount-input-page-cleanup.png`
- `artifacts/amount-input-set-cleanup.png`
- `artifacts/amount-input-doc-cleanup.png`
- `artifacts/amount-input-normalized-v0.2.png`
- `artifacts/inputs-unified-page-v0.1.png`

## Gate

Gate فعلی: `Sufficient to proceed / Awaiting owner visual approval`. پس از تأیید بصری مالک محصول، Amount Input می‌تواند به `Tested Candidate` نزدیک شود؛ اما تست مصرف واقعی، Accessibility، Device و اتصال به قوانین مالی پیش از `Stable` شدن همچنان لازم است.
