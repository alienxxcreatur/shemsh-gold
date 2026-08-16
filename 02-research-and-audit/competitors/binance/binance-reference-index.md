# فهرست مرجع و Census بایننس

وضعیت: `Active / Census in progress`  
تاریخ Snapshot: ۲۵ مرداد ۱۴۰۵ / 16 Aug 2026

## منبع اصلی

- [Binance iOS در Mobbin — Screens](https://mobbin.com/apps/binance-ios-ce9958de-3b6f-4f7a-ae1d-273d4e162c14/e19d2eba-703f-4f6e-bf74-323f9bddbce9/screens)
- [UI Elements](https://mobbin.com/apps/binance-ios-ce9958de-3b6f-4f7a-ae1d-273d4e162c14/e19d2eba-703f-4f6e-bf74-323f9bddbce9/ui-elements)
- [Flows](https://mobbin.com/apps/binance-ios-ce9958de-3b6f-4f7a-ae1d-273d4e162c14/e19d2eba-703f-4f6e-bf74-323f9bddbce9/flows)

## Snapshot مشاهده‌شده

- **Observed fact:** صفحه Screens عدد `1,452 screens` را نشان داد.
- **Observed fact:** صفحه Flows عدد `469 flows` را نشان داد.
- **Observed fact:** صفحه UI Elements نیز در Snapshot اولیه `1,452 UI elements` نشان داد؛ بنابراین به‌تنهایی دامنه را کوچک نمی‌کند و باید با Filter/جست‌وجو استفاده شود.
- **Observed fact:** فلوها در ۱۷ خانواده سطح بالا گروه‌بندی شده‌اند.
- **Risk:** محتوا و شمارش Mobbin ممکن است بعداً تغییر کند؛ تاریخ Snapshot کنار همه Countهای کلان حفظ شود.

## خانواده‌های سطح بالا

| خانواده Mobbin | ارتباط اولیه با شمش | دامنه بررسی |
|---|---|---|
| Onboarding | زیاد | Auth، KYC، آموزش ضروری و Permission |
| Home — Exchange | خیلی زیاد | Shell، Home، خرید با پول، نرخ، Profile و Menu |
| Markets | خیلی زیاد | Asset list، Detail، Chart، Sort و Favorite |
| Trade | خیلی زیاد | Convert، Spot، Entry، Order، Detail و Preferences |
| Assets | خیلی زیاد | Overview، History، Report، Privacy و Holding |
| Settings — Exchange | زیاد | Payment method، Language، Theme، Support و Privacy |
| Logging in | زیاد | Login، Recovery و Lock state |
| Home — Wallet | متوسط | فقط Patternهای Wallet، Receive و Common tools |
| Markets — Wallet | متوسط | فقط List/Detail/Filter قابل‌انتقال |
| Trade — Wallet | متوسط | Swap فقط برای Pattern رفتاری، نه مدل محصول |
| Assets — Wallet | متوسط | Send/token list فقط در صورت هم‌پوشانی Pattern |
| Settings — Wallet | متوسط | Wallet management و Address فقط Pattern-only |
| Futures | کم | Stress/density و Data table؛ محصول خارج از Scope |
| Discover — Wallet | کم | عمدتاً خارج از Scope |
| Live Activities | کم | فعلاً خارج از Pilot |
| Dynamic Island | کم | خارج از Baseline PWA |
| Widgets | کم | خارج از Baseline فعلی |

## واحد Evidence

هر Evidence باید این فیلدها را داشته باشد:

| فیلد | قرارداد |
|---|---|
| `Evidence ID` | `BN-E-###` |
| Source | URL مستقیم Screen یا Flow |
| Snapshot date | تاریخ مشاهده |
| Binance context | خانواده، Flow و State |
| Shemsh context | Home / Trade / Assets / Global / Supporting |
| Layer | Foundation / Component / Composition / Behavior / State |
| Observation | فقط آنچه واقعاً دیده شده |
| Inference | برداشت تحلیلی جدا از Observation |
| Repetition | تعداد Context یا Flow پشتیبان |
| Counter-example | مورد ناسازگار یا استثنا، در صورت وجود |
| Confidence | High / Medium / Low |
| Reviewer | Agent / Owner / Both |

## آستانه اثبات Pattern

یک Observation وقتی وارد `binance-pattern-catalog.md` می‌شود که حداقل یکی از شرایط زیر برقرار باشد:

1. در سه Context مستقل تکرار شده باشد؛ یا
2. در یک Flow کامل و چند State متوالی منسجم باشد؛ یا
3. یک Pattern سیستمی روشن باشد و Counter-exampleهای آن ثبت شده باشند.

اسکرین منفرد، Highlight و Latest feed فقط Lead تحقیق است و به‌تنهایی Rule محسوب نمی‌شود.

## ثبت Evidence

| ID | Source | Context | Layer | Observation | Repetition | Confidence | Status |
|---|---|---|---|---|---:|---|---|
| BN-E-001 | [Buying a spot](https://mobbin.com/flows/24426295-aae8-4bbd-8fd4-0e7bfd0cc0de) | Trade / Spot | Behavior | Flow اصلی خرید Spot در Snapshot شامل ۸ Screen است و با Flowهای والد/فرزند Chart، Order type و Information مرتبط است | 1 Flow chain | High | `Census evidence` |

## معیار پایان Census

- همه ۱۷ خانواده برچسب دامنه داشته باشند.
- Shortlist اولیه ۲۵ تا ۳۵ Flow مرتبط ساخته شود.
- Duplicateهای واضح و Flowهای خارج از Scope حذف شوند.
- Batch و مالک Review هر Flow مشخص باشد.
