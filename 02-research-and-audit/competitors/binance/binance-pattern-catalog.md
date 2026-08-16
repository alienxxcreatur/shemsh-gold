# کاتالوگ Patternهای بایننس

وضعیت: `Template ready / Extraction not started`

## هدف

این سند Observationهای اثبات‌شده را به Ruleهای قابل‌آزمون تبدیل می‌کند. نام این سند به معنی رسمی‌بودن یا کامل‌بودن Design System بایننس نیست؛ فقط Patternهای مشاهده‌شده در Snapshot Mobbin را ثبت می‌کند.

## لایه‌های کاتالوگ

| Layer | نمونه موضوع |
|---|---|
| Foundation | Surface، Neutral، Spacing، Radius، Border، Divider، Elevation، Typography، Density |
| Component | Button، Input، Tab، List row، Card، Sheet، Dialog، Alert، Toast، Keypad، Navigation |
| Composition | App Shell، Home، Portfolio، Market، Trade، Asset detail، Receipt |
| Behavior | Asset switch، Buy/Sell، Amount entry، Unit change، Confirmation، Privacy |
| State | Empty، Loading، Disabled، Error، Success، Pending، Offline، Stale data |

## قالب Pattern

هر Pattern باید این اجزا را داشته باشد:

- `Pattern ID`: `BN-P-###`
- نام کوتاه و خنثی
- Problem/Context
- Evidence IDها و لینک‌ها
- Observationهای مستقیم
- Rule استنباط‌شده
- Variants و استثناها
- Counter-example
- Accessibility/Touch/Keyboard note
- iOS → PWA/RTL adaptation note
- Confidence
- وضعیت: `Candidate / Corroborated / Mapped / Rejected`

## ماتریس کاتالوگ

| ID | Layer | Pattern | Evidence | Rule candidate | Exception | Confidence | Status |
|---|---|---|---|---|---|---|---|
| — | — | — | — | استخراج هنوز شروع نشده است | — | — | `Empty by design` |

## معیار Confidence

- `High`: سه Context مستقل یا یک Flow کامل، بدون تعارض مهم.
- `Medium`: دو Context یا یک Pattern قوی با Counter-example ثبت‌شده.
- `Low`: یک Screen یا Highlight؛ فقط Lead و غیرقابل‌استفاده برای تصمیم.

## معیارهای UX اجباری هنگام استخراج

- Contrast و عدم اتکا به رنگ تنها.
- Touch target حداقل ۴۴×۴۴ برای تطبیق شمش.
- Feedback برای Loading/Pressed/Disabled.
- Navigation و Back قابل پیش‌بینی.
- Focus و Keyboard برای PWA/Desktop.
- Safe Area و Keyboard viewport موبایل.
- Label واضح برای Input و Error نزدیک Field.
- Chart با Label/Legend و معادل متنی لازم.
- Motion معنادار و Reduced Motion.

## چیزهایی که Pattern شمش نمی‌شوند

- رنگ برند زرد فقط به‌دلیل تکرار.
- نگاشت Buy=Success یا Sell=Error.
- Taxonomy کریپتو، چند کیف داخلی و اصطلاحات Coin/Token.
- Feature promotion، Campaign و Social layout بدون نیاز محصولی شمش.
- Geometry مخصوص iOS که در RTL/PWA/عرض ۳۲۰ شکست می‌خورد.
