# مرحله ۳ — مدل محصول

## هدف

تبدیل تعریف و تحقیق به مدل منسجم قابلیت‌ها، قوانین، نقش‌ها، موجودیت‌ها، اولویت‌ها و وابستگی‌ها.

## ترتیب انجام

1. `competitive-feature-parity-matrix.md`
2. `capability-map.md`
3. `roles-and-permissions.md`
4. `business-rules-source-of-truth.md`
5. `domain-model.md`
6. `feature-prioritization.md`
7. `dependencies-and-risks.md`

## Gate 3

- [x] تمام قابلیت‌های In scope در Capability Map باشند.
- [x] نقش‌ها و محدودیت‌های دسترسی مشخص یا سؤال باز باشند.
- [x] قوانین مالی به منبع و مالک داده متصل باشند.
- [x] موجودیت‌ها و وضعیت‌های کلیدی بدون تناقض تعریف شوند.
- [x] اولویت طراحی و انتشار مشخص باشد.
- [x] وابستگی‌های حقوقی، فنی و عملیاتی مالک داشته باشند.

وضعیت: **`Needs revision` فقط برای ماتریس Feature-specific؛ هسته `Sufficient to proceed`**. Domain، Capability، Permission، Rules، Priority و Risks با D-127 از انحصار فلزی تأییدنشده پاک شده‌اند؛ دامنه هدیه/اقساط/سفارش و سایر Featureها در OQ-054 باز است. OQ-058 و OQ-059 بسته‌اند. فرمول نهایی عددهای پورتفوی فقط تا تأیید مالی/حسابداری OQ-055 `Blocked by external decision` است.

### چک‌لیست اصلاح چندفلزی

- [x] تعریف `AssetDefinition`، `AssetCatalog` و قرارداد توسعه تا حدود ۱۶ فلز
- [x] جایگزینی Gold Wallet با `MetalPortfolio` و `MetalPosition`
- [x] Asset-aware شدن Ledger، Quote، Order، Receipt، پشتوانه و دریافت فیزیکی
- [ ] Review ماتریس `Feature × Asset` برای طلا/نقره/مس بدون فرض انحصار؛ کنترل نبود انتقال قطعی است — D-127/OQ-054
- [x] اصلاح `roles-and-permissions.md`، `business-rules-source-of-truth.md` و `feature-prioritization.md`
- [x] اصلاح `dependencies-and-risks.md` و پرسش‌نامه مالی برای قواعد مستقل هر فلز
- [x] آماده‌سازی بسته تصمیم، گزینه‌ها و سناریوهای عددی OQ-055
- [x] تأیید شش تصمیم محصول ارزش‌گذاری، Cost Basis و نمایش P&L — D-116
- [ ] بستن فرمول ارزش‌گذاری، Cost Basis و سود/زیان — OQ-055
- [x] انتخاب الگوی دسترسی معامله/نمودار — D-120/D-121/D-123، OQ-058 Complete
