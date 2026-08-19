# Manifest فریز Baseline وایرفریم پیش از بایننس — نسخه ۱.۰

تاریخ فریز: ۱۹ اوت ۲۰۲۶  
نسخه طراحی: `V-159`  
تصمیم: `D-219`  
وضعیت: `Frozen for Binance structural handoff`  
Gate: `Sufficient for Binance structural handoff`

## تعریف Freeze

- `Business decision` — نسخه جاری فقط برای تحلیل ساختار و Patternهای بایننس فریز می‌شود؛ Freeze به معنی نهایی‌شدن قواعد بیزینس، اعداد مالی، Visual foundation یا High-fidelity نیست.
- `Observed fact` — Baseline اجرایی `147 = 77 Page + 53 State + 17 Overlay` دارد؛ ۱۰۱ سناریوی دستی در ۱۴ گروه و ۴۶ نمای خودکشف خارج از فهرست دستی را پوشش می‌دهد.
- `Observed fact` — P0 و P1 مستقل از بیزینس صفر است. ۹ P1 باقی‌مانده همگی Business-gated، دارای Owner و مسیر حل‌اند.
- `Risk` — هر کپی مستقل از HTML فعال می‌تواند منبع حقیقت دوم بسازد؛ بنابراین Freeze با Hash و Change control ثبت می‌شود، نه با Duplicate کردن Artifact.

## فایل‌های اجرایی فریز‌شده

| نقش | فایل | SHA-256 |
|---|---|---|
| Baseline سرتاسری فعال | `artifacts/multi-metal-waves-1-and-3-wireframe.html` | `cfe3bfb166b3d1d1f4bb35cd57e92ff3d8317e30f0f3d08c99898fa2bc4081c6` |
| منبع تخصصی Auth/KYC | `artifacts/wave-1-auth-kyc-wireframe.html` | `5dddd1cbb110622fd3bb6020a210e8d40cdf7b5fbd0e0e4efda408d457cea01c` |
| سیاست مشترک رمز | `artifacts/password-policy.js` | `96c3ac39430310926fcb4d7dbf7cd6dd8e320b1edc651fb089a9fa00202e5667` |

Preview خصوصی همگام: `https://shemsh-wireframe-qa-20260819.shemshgpt.chatgpt.site/wireframe/`  
نسخه انتشار: `Sites v5`  
Commit منبع انتشار: `ee892fe005cfad61250dcec846d041d3df0e34a6`

## قراردادها و شواهد همراه

1. `current-wireframe-inventory-v0.1.md` — شمارش و نقش فایل‌ها؛
2. `content-and-terminology-contract-v0.1.md` — اصطلاحات Canonical؛
3. `pre-binance-flow-reachability-matrix-v0.1.md` — Entry/Exit/Recovery و Deep link؛
4. `page-family-structure-contract-v0.1.md` — قرارداد خانواده صفحات؛
5. `operation-detail-structure-contract-v0.2.md` — جزئیات عملیات نوع/وضعیت‌محور؛
6. `pre-binance-current-state-punch-list.md` — P0/P1/P2 و Owner؛
7. `pre-binance-responsive-interaction-qa-2026-08-19.md` — QA موبایل، Landscape، Focus، Overview و Console؛
8. `binance-structural-handoff-brief-v1.0.md` — دستور کار چت بایننس.

## Gateهای پاس‌شده

| Gate | نتیجه |
|---|---|
| PB-1 Current-state | `Complete` |
| PB-2 محتوا و اصطلاحات | `Sufficient to proceed` + QA بصری پاس |
| PB-3 فلو و Reachability | `Sufficient to proceed` + Dead end مستقل صفر |
| PB-4 خانواده صفحات | `Sufficient to proceed` |
| PB-5 Responsive/Interaction/A11y | `Complete` |
| PB-6 Inventory و اسناد | `Sufficient to proceed` |
| PB-7 Freeze/Handoff | `Complete` |

## Change control پس از Freeze

هر تغییر در سه فایل اجرایی بالا باید هم‌زمان:

1. نسخه Baseline را از `1.0` افزایش دهد؛
2. Hash تازه را در این Manifest ثبت کند؛
3. چهار Audit پوشه `scripts/` را دوباره پاس کند؛
4. Preview خصوصی را دوباره Build و Deploy کند؛
5. تغییر را در `iteration-log.md` و در صورت تصمیم جدید در `decision-log.md` ثبت کند؛
6. به چت بایننس اعلام کند کدام پیشنهادها باید روی Baseline تازه بازنگری شوند.

## Gate PB-7

`Complete`

Baseline برای تحلیل ساختاری بایننس کافی است. بسته، مجوز تغییر قانون محصول یا شروع Migration سراسری Figma نیست.
