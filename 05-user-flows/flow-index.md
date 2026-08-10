# فهرست فلوها

> **وضعیت پس از D-105:** فلوهای معامله، قیمت، دارایی و خدمات وابسته به فلز برای Impact review باز شده‌اند. Auth/KYC و پول ریالی فعلاً معتبرند؛ وضعیت دقیق هر فلو در بازتنظیم بعدی `Keep / Revise / Replace` می‌شود.

| شناسه | فلو | اولویت | سند | قوانین رسمی | State coverage | وضعیت |
|---|---|---|---|---|---|---|
| FL-AUTH-001 | ورود، ثبت‌نام و بازیابی رمز | Critical | `core-flows/FL-AUTH-001-login-registration.md` | BR-003، BR-006، BR-007، BR-008، BR-098 | کامل رفتاری — D-092، D-093 | Sufficient to proceed؛ Prototype در حال همگام‌سازی |
| FL-KYC-001 | احراز هویت و اهلیت سنی | Critical | `core-flows/FL-KYC-001-identity-verification.md` | BR-002، BR-004، BR-005، BR-006، BR-007، BR-008، BR-099 | کامل رفتاری — D-092، D-093 | Sufficient to proceed؛ Legal copy gate |
| FL-CALC-001 | قیمت و ماشین‌حساب خریدوفروش | Critical | `core-flows/FL-CALC-001-price-calculator.md` | BR-001، BR-005، BR-020، BR-022، BR-023، BR-024، BR-069 | کامل رفتاری | Sufficient to proceed |
| FL-BUY-001 | خرید طلا | Critical | `core-flows/FL-BUY-001-gold-buy.md` | BR-001، BR-020، BR-022، BR-023، BR-024، BR-026، BR-069، BR-073 | کامل رفتاری | Sufficient to proceed |
| FL-SELL-001 | فروش طلا | Critical | `core-flows/FL-SELL-001-gold-sell.md` | BR-020، BR-022، BR-023، BR-024، BR-026، BR-069، BR-073 | کامل رفتاری | Sufficient to proceed |
| FL-DEPOSIT-001 | واریز ریالی | Critical | `core-flows/FL-DEPOSIT-001-toman-deposit.md` | BR-010، BR-015، BR-027، BR-028، BR-029، BR-031، BR-032، BR-049، BR-050، BR-051، BR-052، BR-081، BR-082 | کامل رفتاری | Sufficient to proceed |
| FL-WITHDRAW-001 | برداشت ریالی | Critical | `core-flows/FL-WITHDRAW-001-toman-withdrawal.md` | BR-033، BR-034، BR-035، BR-036، BR-053، BR-054، BR-056، BR-057، BR-058، BR-059، BR-074 | کامل رفتاری | Sufficient to proceed |
| FL-PHYSICAL-001 | دریافت فیزیکی | Critical | `core-flows/FL-PHYSICAL-001-physical-redemption.md` | BR-016، BR-061، BR-072، BR-075، BR-083، BR-084، BR-085 | کامل رفتاری | Sufficient to proceed |
| FL-TRANSACTION-001 | تاریخچه چندفلزی، رسید و پیگیری | Critical | `core-flows/FL-TRANSACTION-001-receipts-history.md` | BR-061، BR-063، BR-064، BR-071، BR-072؛ D-098/D-115/D-120/D-124 تا D-128 | قرارداد کامل U2 قطعی؛ بدون فرض Feature تک‌فلزی | Sufficient to prototype؛ OQ-059 Complete |
| FL-TRANSFER-001 | کنترل حذف انتقال طلا | High | `core-flows/FL-TRANSFER-001-gold-transfer.md` | BR-080؛ D-087 | N/A — قابلیت حذف‌شده | Complete |
| FL-TARGET-001 | هشدار قیمت و سفارش قیمت هدف | High | `core-flows/FL-TARGET-001-price-alert-target-order.md` | BR-012، BR-013، BR-014، BR-073، BR-072، BR-086، BR-087 | کامل رفتاری | Sufficient to proceed |
| FL-GIFT-001 | هدیه فلزی | Medium | `core-flows/FL-GIFT-001-gold-gift-card.md` | BR-077، BR-079، BR-088، BR-112؛ D-127 | قرارداد طلای Legacy؛ دامنه فلز باز | Needs revision — OQ-054/OQ-006 |
| FL-INSTALLMENT-001 | خرید اقساطی فلز | Medium | `core-flows/FL-INSTALLMENT-001-installment-gold.md` | BR-017، BR-078، BR-079، BR-092 تا BR-097، BR-112؛ D-127 | قرارداد طلای Legacy؛ دامنه فلز باز | Needs revision — OQ-054 + Legal/financial gate |
| FL-REFERRAL-001 | معرفی دوستان | Medium | `core-flows/FL-REFERRAL-001-refer-friends.md` | BR-002، BR-079، BR-089، BR-090 | کامل رفتاری | Sufficient to proceed |
| FL-SUPPORT-001 | پیگیری مسئله حساس | Critical | `core-flows/FL-SUPPORT-001-sensitive-issue-support.md` | BR-062، BR-063، BR-064، BR-065، BR-066، BR-071، BR-072، BR-091 | کامل رفتاری | Sufficient to proceed |
