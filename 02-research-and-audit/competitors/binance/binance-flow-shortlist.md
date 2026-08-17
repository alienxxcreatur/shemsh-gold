# Shortlist و برنامه نمونه‌گیری Flowهای بایننس

وضعیت: `G2 all batches complete within-batch / G3 cross-batch complete / global cross-batch unique count not claimed`
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

## Shortlist مصوب برای استخراج

همه Flowهای این جدول با Preview واقعی Mobbin بازبینی شده‌اند. `Screen` تعداد خام خود Flow است و به‌دلیل هم‌پوشانی Parent/Child برابر تعداد Unique نیست. مالک استخراج G2 عامل است و Review انتقال به شمش در G4 با مالک محصول انجام می‌شود.

| ID | Batch | خانواده | Flow | اولویت | Screen | ارتباط شمش | وضعیت |
|---|---|---|---|---|---:|---|---|
| BN-F-001 | A | Home — Exchange | [Home](https://mobbin.com/flows/cf688b7d-77fa-4231-aa1c-57f1f79b59d4) | Core | 11 | App shell، Hero number، Shortcut و Content order | `G2 audited / cross-batch ledger` |
| BN-F-002 | A | Settings — Exchange | [Settings](https://mobbin.com/flows/49c585a7-877f-420e-a7b5-432da8bb06f6) | Supporting | 3 | List architecture، Theme، Payment و Support | `G2 audited / cross-batch ledger` |
| BN-F-003 | A | Logging in | [Logging in](https://mobbin.com/flows/fd12b82b-5719-4580-b81f-4adc6755c427) | Supporting | 10 | Login، Security verification و Recovery | `G2 audited / cross-batch ledger` |
| BN-F-004 | A | Onboarding | [Onboarding](https://mobbin.com/flows/c801a715-f530-4db5-a5e7-c214a129fd7d) | Supporting | 14 | شروع تجربه، OTP، KYC و Pending access | `G2 audited / cross-batch ledger` |
| BN-F-005 | A | Settings — Exchange | [Help & support](https://mobbin.com/flows/7e7d22bb-11fa-4149-9203-d8abb1392d25) | Supporting | 2 | ساختار پشتیبانی و Feedback entry | `G2 audited / cross-batch ledger` |
| BN-F-006 | A | Settings — Exchange | [Privacy center](https://mobbin.com/flows/b06e011d-342b-45fd-b6bb-dfbd6a82feaf) | Supporting | 2 | اسناد، داده شخصی و Trust navigation | `G2 audited / cross-batch ledger` |
| BN-F-007 | B | Markets | [Markets](https://mobbin.com/flows/e656dc0d-efe5-4592-857d-da8218c00478) | Core | 8 | Asset list، Filter، Sort و Tabs | `G2 audited / cross-batch ledger` |
| BN-F-008 | B | Markets | [Coin detail](https://mobbin.com/flows/e15bb0c1-01c2-4365-827d-e42e101266ac) | Core | 7 | نرخ، Chart، اطلاعات و Actionهای ثابت | `G2 audited / cross-batch ledger` |
| BN-F-009 | B | Markets | [Info](https://mobbin.com/flows/fb33a294-57c5-4b38-8ab5-af3d79ba30d8) | Supporting | 2 | Data hierarchy و محتوای اعتماد/ریسک | `G2 audited / cross-batch ledger` |
| BN-F-010 | B | Assets | [Overview (Assets)](https://mobbin.com/flows/6198373a-3786-4fc1-97a5-3729972017d6) | Core | 4 | دارایی کل، Chart، Action group و Holding list | `G2 audited / cross-batch ledger` |
| BN-F-011 | B | Assets | [Assets history](https://mobbin.com/flows/a2dc5366-e2c9-4551-8701-718264045a3f) | Core | 3 | انتخاب نوع تاریخچه و Data row | `G2 audited / cross-batch ledger` |
| BN-F-012 | B | Assets | [Assets report](https://mobbin.com/flows/8f84b566-e945-4c9a-98b7-294fdca74c4c) | Core | 9 | Portfolio summary، بازه زمانی و Report composition | `G2 audited / cross-batch ledger` |
| BN-F-013 | B | Assets | [Hiding PNL & shortcut buttons](https://mobbin.com/flows/197f06ff-5aeb-4db9-9bda-98d2ce86654f) | Supporting | 3 | Privacy و Personalization | `G2 audited / cross-batch ledger` |
| BN-F-014 | B | Portfolio | [Hiding value](https://mobbin.com/flows/bedcd9db-ad9b-4c0f-ab4e-abd25204449b) | Supporting | 2 | پنهان‌سازی عدد و Chart بدون تغییر Layout | `G2 audited / cross-batch ledger` |
| BN-F-015 | B | Portfolio | [Portfolio performance](https://mobbin.com/flows/c1ce0c64-cf1d-4c7e-89e1-ec5dda199f80) | Pattern-only | 2 | Score و عملکرد؛ وابسته به قواعد مالی شمش | `G2 audited / cross-batch ledger` |
| BN-F-016 | B | Settings — Exchange | [Generating transaction records](https://mobbin.com/flows/ff654b02-8cb4-4ad9-860f-a9908fb5f084) | Supporting | 4 | Filter، Export status و Long-running feedback | `G2 audited / cross-batch ledger` |
| BN-F-017 | C | Trade | [Spot (Trade)](https://mobbin.com/flows/bc38bca9-9437-4e55-91a1-03211d12f0fe) | Core | 4 | Composition متراکم معامله و Order state | `G2 audited / 4 unique` |
| BN-F-018 | C | Trade | [Buying a spot](https://mobbin.com/flows/24426295-aae8-4bbd-8fd4-0e7bfd0cc0de) | Core | 8 | Entry، Order type، TP/SL و Open order | `G2 audited / +7 unique` |
| BN-F-019 | C | Trade | [Showing a chart](https://mobbin.com/flows/346ea7fa-f8e6-4e2f-a221-2ee8ed5819ff) | Core | 2 | رابطه Entry و Chart | `G2 audited / +1 unique` |
| BN-F-020 | C | Trade | [Changing order & chart display](https://mobbin.com/flows/ce6face1-9a50-413e-b0be-c9184aadaa99) | Pattern-only | 3 | Preference sheet و کنترل تراکم | `G2 audited / +3 unique` |
| BN-F-021 | C | Trade | [Changing spot preferences](https://mobbin.com/flows/b47272cd-714e-4c13-9260-c3e417be6a5d) | Pattern-only | 7 | Layout choice و Progressive disclosure | `G2 audited / +6 unique` |
| BN-F-022 | C | Trade | [Convert](https://mobbin.com/flows/99674169-de0b-4eee-98cf-9dd247432d90) | Core | 2 | Shell تبدیل ساده | `G2 audited / +2 unique` |
| BN-F-023 | C | Trade | [Converting a coin](https://mobbin.com/flows/b1659013-18d9-4af4-8b73-4430f425fd02) | Core | 6 | انتخاب دارایی، Amount، Preview و Result | `G2 audited / +6 unique` |
| BN-F-024 | C | Home — Exchange | [Buying with USD](https://mobbin.com/flows/9d499db5-05ac-4c6d-a668-094099eafdc5) | Supporting | 9 | Amount-first، Keypad، Payment و Completion | `G2 audited / +9 unique` |
| BN-F-025 | D | Onboarding | [Verifying account](https://mobbin.com/flows/751cb937-9513-4233-bf22-09024607475b) | Supporting | 9 | Step/state، document و Under review | `G2 audited / cross-batch ledger` |
| BN-F-026 | D | Onboarding | [Upload photos](https://mobbin.com/flows/74083a77-646d-4f58-8ec3-a187000dbe03) | Supporting | 3 | Choice، upload area و disabled state | `G2 audited / cross-batch ledger` |
| BN-F-027 | D | Logging in | [Unlocking an account](https://mobbin.com/flows/4a2b4aee-ce77-42b6-98a5-e90b19a939fb) | Supporting | 7 | Recovery، Verification و Pending result | `G2 audited / cross-batch ledger` |
| BN-F-028 | D | Logging in | [Updating password](https://mobbin.com/flows/68c0f11e-acd8-4677-b3ab6919f494) | Supporting | 6 | Form rules، helper و security warning | `G2 audited / cross-batch ledger` |
| BN-F-029 | D | Settings — Exchange | [Adding a payment method](https://mobbin.com/flows/fd0be83b-48f1-4f88-ab6d-98a019db1bbb) | Supporting | 9 | Bank/card form، Verification و Result | `G2 audited / cross-batch ledger` |
| BN-F-030 | D | Home — Wallet | [Buy with card](https://mobbin.com/flows/38f20cb8-7bc0-40c2-9576-2bd69858aee1) | Pattern-only | 4 | Source selection و Pay-with card pattern | `G2 audited / cross-batch ledger` |
| BN-F-031 | D | Settings — Exchange | [Payment methods](https://mobbin.com/flows/39f9e611-d5b9-4930-b88d-3450adf65bfe) | Supporting | 2 | List/empty state و Add method CTA | `G2 audited / cross-batch ledger` |
| BN-F-032 | D | Home — Exchange | [On-chain deposit](https://mobbin.com/flows/20a19a2c-7a22-4024-ad3d-7e243a3928a7) | Pattern-only | 6 | QR/address، network selection و warning | `G2 audited / cross-batch ledger` |

## قواعد حذف

- Community، Creator center، Post، Following، Hot، Moments و Marketplace محتوایی از Batch اصلی حذف می‌شوند.
- P2P، Futures، Options، Bots، Meme و Web3 فقط در صورت نیاز به یک Pattern مشخص نمونه‌گیری می‌شوند.
- اگر یک Screen در چند Flow تکرار شود، یک Evidence اصلی و چند Reference context دارد.
- Latest/Highlight feed مبنای Sampling نیست؛ Flow relation و State coverage مقدم‌اند.
- جست‌وجوی Fiat/Cash withdrawal در Snapshot نتیجه مستقیم نداد؛ این مورد `Evidence gap` است، نه دلیل حذف برداشت شمش یا اثبات نبود قابلیت بایننس.

## ترتیب ادامه Audit

1. [x] `BN-F-001..032` — Audit لایه‌ای چهار Batch.
2. [x] Dedupe درون هر Batch با Screen ID و ساخت Evidence ledger برای Foundation/Component/Composition/Behavior/State.
3. [x] ثبت Counter-exampleهای Spot حرفه‌ای در برابر Convert و Buying with USD.
4. [x] G3 — اثبات ۲۹ Pattern سراسری؛ هشت Pattern معامله و ۲۱ Pattern تازه Cross-batch.
5. [x] G4 معامله — نگاشت هشت Pattern به وایرفریم و Design System شمش.
6. [ ] G4 سراسری — نگاشت `BN-P-009..029` و توسعه‌های `BN-P-003/007` به شمش، پیش از هر Pilot تازه Home/DS.

## ثبت پیشرفت Batch

| Batch | Flowهای بررسی‌شده | Screenهای خام | Unique | Pattern | Coverage note | Gate |
|---|---:|---:|---:|---:|---|---|
| A | 6 | 42 | 39 | Cross-batch set | Home/Shell، Settings، Login، Onboarding، Help و Privacy با Matrix/Counter-example ثبت شدند | `G2 Complete / G3 Complete` |
| B | 10 | 44 | 39 | Cross-batch set | Markets، Assets، History، Report، Privacy و Export با Matrix/Counter-example ثبت شدند | `G2 Complete / G3 Complete` |
| C | 8 | 41 | 38 | 8 Corroborated | ۳۷ Asset مستقیم + یک Preview؛ Proof هر Pattern و Counter-example ثبت شد | `G3 Complete / Ready for G4` |
| D | 8 | 46 | 42 | Cross-batch set | KYC، Recovery، Payment، Deposit و Warning/Processing/Result ثبت شدند | `G2 Complete / G3 Complete` |
| **Total** | **32** | **173** | **158 جمع درون-Batch؛ Global union اعلام نشده** | **29 Corroborated** | ۲۱ Pattern تازه و توسعه دامنه `BN-P-003/007` اثبات شدند؛ فقط هشت Pattern Trade به شمش Mapped شده‌اند | `G3 Complete / G4 global pending` |
