# Shortlist و برنامه نمونه‌گیری Flowهای بایننس

وضعیت: `Draft / Ready for census`  
منبع: `binance-reference-index.md`

## برچسب دامنه

- `Core`: مستقیم برای Home، Trade، Markets یا Assets شمش لازم است.
- `Supporting`: برای Auth/KYC، پرداخت، تاریخچه، تنظیمات، Trust یا Recovery لازم است.
- `Pattern-only`: قابلیت نامرتبط است اما یک الگوی Interface/State مفید دارد.
- `Exclude`: در Scope استخراج فعلی ارزش کافی ندارد.

## اولویت Batchها

| Batch | دامنه | Flowهای هدف اولیه | نمونه Screen هدف | خروجی |
|---|---|---|---:|---|
| A | Foundations و App Shell | Home root، Menu، Profile، Navigation، Settings | ۲۵–۳۰ | Surface/Border/Spacing/Type/Nav rules |
| B | Home، Markets و Assets | Home overview، Assets overview، Coin detail، History، Privacy | ۳۰–۴۰ | Portfolio/List/Card/Data hierarchy |
| C | Trade | Spot، Buying/Selling، Convert، Chart، Order detail، Confirmation | ۳۰–۴۰ | Entry/Amount/CTA/Keypad/Review/Result |
| D | Component و State | Input، Button، Tab، Sheet، Dialog، Alert، Empty، Loading، Error | ۳۰–۵۰ | Component/state rules و استثناها |

هدف پس از حذف تکرار: **۱۲۰ تا ۱۶۰ Screen منحصربه‌فرد**. این عدد سهمیه اجباری نیست؛ Saturation Pattern و پوشش State معیار اصلی توقف‌اند.

## Shortlist اولیه

| ID | خانواده | Flow / Cluster | اولویت | ارتباط شمش | وضعیت Census |
|---|---|---|---|---|---|
| BN-F-001 | Home — Exchange | Home root / Overview | Core | Shell، Hero number، Shortcut و Content order | `Pending` |
| BN-F-002 | Home — Exchange | Buying with USD + payment method | Supporting | واریز/منبع پول و Progressive disclosure | `Pending` |
| BN-F-003 | Home — Exchange | Today's PNL chart / Selecting a coin | Core | Portfolio، Asset selection و Chart context | `Pending` |
| BN-F-004 | Markets | Coin detail + Price/Info/Trading data | Core | جزئیات فلز، نرخ، نمودار و اطلاعات | `Pending` |
| BN-F-005 | Markets | Sorting coins / Favorites | Supporting | فهرست فلز و رشد کاتالوگ | `Pending` |
| BN-F-006 | Trade | Spot (Trade) | Core | Shell و Composition معامله | `Observed` |
| BN-F-007 | Trade | Showing a chart | Core | نسبت Chart با Entry | `Observed` |
| BN-F-008 | Trade | Buying a spot | Core | Entry تا اقدام خرید | `Observed — 8 screens` |
| BN-F-009 | Trade | Order detail / Holdings detail | Core | Preview، Result، Receipt و Position | `Pending` |
| BN-F-010 | Trade | Convert / Instant | Core | مدل ساده‌تر تومان/گرم و تبدیل | `Pending` |
| BN-F-011 | Assets | Overview (Assets) | Core | دارایی کل، Privacy و Shortcut | `Pending` |
| BN-F-012 | Assets | Assets history / Assets report | Core | تاریخچه، Grouping و Data row | `Pending` |
| BN-F-013 | Assets | Hiding PNL & shortcut buttons | Supporting | Privacy و Personalization | `Pending` |
| BN-F-014 | Onboarding | Onboarding | Supporting | شروع تجربه و CTA hierarchy | `Observed — 14 screens` |
| BN-F-015 | Onboarding | Verifying account | Supporting | KYC step/state pattern | `Observed — 9 screens` |
| BN-F-016 | Settings — Exchange | Payment methods | Supporting | انتخاب/افزودن ابزار بانکی | `Pending` |
| BN-F-017 | Settings — Exchange | Help & support / Privacy center | Supporting | اعتماد، سند و Recovery | `Pending` |
| BN-F-018 | Logging in | Login / Unlock account | Supporting | Login و Recovery | `Pending` |
| BN-F-019 | Home — Wallet | Receive / Buy with card | Pattern-only | Sheet، QR، amount و source selection | `Pending` |
| BN-F-020 | Futures | Dense trade/data states | Pattern-only | Stress test تراکم، نه قابلیت | `Pending` |

## قواعد حذف

- Community، Creator center، Post، Following، Hot، Moments و Marketplace محتوایی از Batch اصلی حذف می‌شوند.
- P2P، Futures، Options، Bots، Meme و Web3 فقط در صورت نیاز به یک Pattern مشخص نمونه‌گیری می‌شوند.
- اگر یک Screen در چند Flow تکرار شود، یک Evidence اصلی و چند Reference context دارد.
- Latest/Highlight feed مبنای Sampling نیست؛ Flow relation و State coverage مقدم‌اند.

## ثبت پیشرفت Batch

| Batch | Flowهای بررسی‌شده | Screenهای خام | Unique | Pattern candidate | Coverage note | Gate |
|---|---:|---:|---:|---:|---|---|
| A | 0 | 0 | 0 | 0 | هنوز شروع نشده | `Not started` |
| B | 0 | 0 | 0 | 0 | هنوز شروع نشده | `Not started` |
| C | 1 chain | 19 relation screens | نیازمند dedupe | 0 | فقط Census رابطه Spot/Chart/Buy/Order | `In progress` |
| D | 0 | 0 | 0 | 0 | هنوز شروع نشده | `Not started` |
