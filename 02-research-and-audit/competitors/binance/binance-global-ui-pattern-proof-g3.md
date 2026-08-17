# اثبات Patternهای سراسری UI بایننس — G3

وضعیت: `Complete / 24 candidates resolved / 21 new patterns + 3 scope extensions`

تاریخ: ۲۶ مرداد ۱۴۰۵ / 17 Aug 2026

## هدف

این سند ۲۴ Candidate ماتریس زبان رابط را با آستانه رسمی G3 می‌سنجد. Proof فقط می‌گوید Pattern در Snapshot مشاهده‌شده Binance iOS تکرار یا در یک Flow کامل منسجم بوده است؛ به معنی مناسب‌بودن مستقیم آن برای شمش نیست.

منابع:

- [`binance-cross-batch-evidence-ledger-g2.md`](binance-cross-batch-evidence-ledger-g2.md)
- [`binance-global-ui-language-matrix-v0.1.md`](binance-global-ui-language-matrix-v0.1.md)
- [`binance-trade-pattern-proof-g3.md`](binance-trade-pattern-proof-g3.md)

## آستانه Proof

یک Candidate زمانی `Corroborated` می‌شود که:

1. در حداقل سه Context مستقل تکرار شده باشد؛ یا
2. در یک Flow کامل و چندState منسجم باشد؛
3. Counter-example دامنه آن را روشن کند؛
4. صرفاً رنگ، Geometry یا Taxonomy خاص بایننس نباشد؛
5. Evidence gapهای Screenshot-only جدا ثبت شوند.

`Corroborated / scoped` یعنی منطق اثبات شده اما فقط در Context مشخص معتبر است.

## نتیجه Proof

| Candidate | Pattern | Contextهای پشتیبان | Counter-example / Scope | نتیجه Catalog |
|---|---|---|---|---|
| `BN-UI-C-001` | چهار ظرف Interaction | Settings، Auth/KYC، Assets history، Deposit، Security modal | Container از طول محتوا به‌تنهایی تعیین نمی‌شود | `BN-P-009 Corroborated` |
| `BN-UI-C-002` | Sheet برای Context، Page برای Ownership | Add Funds، History، Network در برابر Settings/KYC/Detail | Login/Signup چندمرحله‌ای در High sheet | `BN-P-010 Corroborated` |
| `BN-UI-C-003` | Sheet با ارتفاع تطبیقی | Add Funds کوتاه، History متوسط، Network/Auth بلند | انتخاب Asset مستقل Full page است | `BN-P-011 Corroborated` |
| `BN-UI-C-004` | Modal برای توقف یک‌تصمیمی | Password restriction، Account blocked، Login expired | Requirement list و Form به Sheet/Page می‌روند | `BN-P-012 Corroborated` |
| `BN-UI-C-005` | Canvas سفید Baseline | Home، Markets، Assets، Settings، Form/History | Assets report و Capture Context | `BN-P-007 scope extended` |
| `BN-UI-C-006` | نردبان Grouping سبک تا سنگین | Settings، Lists، Choices، Reports، Overlays | Report Module عمداً Card-heavy است | `BN-P-007 scope extended` |
| `BN-UI-C-007` | Card taxonomy انتخابی | Document/Network/Security choice، Home tile، Report module | Setting/History/Holding row Card نیست | `BN-P-013 Corroborated` |
| `BN-UI-C-008` | سه سطح Title | Root tab، Utility/detail، Task flow | Processing گاهی Title ندارد | `BN-P-014 Corroborated` |
| `BN-UI-C-009` | Tab برای Scope هم‌سطح | Markets، Assets، Coin detail | Filter موقت و Action با Tab جایگزین نمی‌شوند | `BN-P-015 Corroborated` |
| `BN-UI-C-010` | Flat data/list row | Market، Holding، History، Settings، Privacy | Choice/Object مستقل Border می‌گیرد | `BN-P-016 Corroborated` |
| `BN-UI-C-011` | رنگ معنایی، نه ساختاری | Home CTA، Market delta، Warning، Success/Error | Chart/Illustration Palette گسترده‌تر دارد | `BN-P-017 Corroborated` |
| `BN-UI-C-012` | یک Primary action در هر Commitment | KYC، Password، Payment form، Empty state | Buy/Sell و Modal تصمیم دوشاخه‌اند | `BN-P-018 Corroborated` |
| `BN-UI-C-013` | Action پایین تابع نوع Task | Form CTA، Detail action bar، Empty CTA، Root bottom nav | Report action داخل Header/Module است | `BN-P-019 Corroborated` |
| `BN-UI-C-014` | Field filled، Choice bordered | KYC، Password، Payment، Network | Inline setting row Field نیست | `BN-P-020 Corroborated` |
| `BN-UI-C-015` | Helper نزدیک، Instruction جدا | Password rules، KYC instructions، Deposit tips | Risk کوتاه می‌تواند Alert باشد | `BN-P-021 Corroborated` |
| `BN-UI-C-016` | Warning زرد کم‌رنگ، Error محدود | Security risk، Password effect، Deposit warning، negative PNL | Critical trading direction از سبز/قرمز قوی‌تر استفاده می‌کند | `BN-P-022 Corroborated` |
| `BN-UI-C-017` | Processing خلوت | Liveness، Passkey، Face verification | Timeout/Cancel در همه Flowها دیده نشده | `BN-P-023 Corroborated / scoped` |
| `BN-UI-C-018` | Result از Receipt جداست | Welcome، Under review، Trade receipt | Receipt داده پیگیری پایدار نگه می‌دارد | `BN-P-024 Corroborated` |
| `BN-UI-C-019` | یک Numeric anchor | Home balance، Assets balance، Coin price، List columns | Report چند Module و چند Anchor محلی دارد | `BN-P-025 Corroborated` |
| `BN-UI-C-020` | Privacy با Layout پایدار | Hide value، Hide PNL/shortcut، metric eye controls | رفتار Screen reader از Screenshot اثبات نمی‌شود | `BN-P-026 Corroborated / scoped` |
| `BN-UI-C-021` | Progressive disclosure سه‌سطحی | Trade preferences، Network accordion، Sheet choice، Full settings | Preference بلند Full page می‌شود | `BN-P-003 scope extended` |
| `BN-UI-C-022` | Navigation با حفظ Context | Root bottom nav، Detail back، Sheet scrim، collapsing title | External/payment handoff در Snapshot کامل نیست | `BN-P-027 Corroborated` |
| `BN-UI-C-023` | Report به‌عنوان Card-heavy exception | Assets report ۹State + daily Assets counter-example | فقط برای Module تحلیلی مستقل | `BN-P-028 Corroborated / scoped` |
| `BN-UI-C-024` | Content/Social خارج از Product UI پایه | Home campaign، Square feed، Discover tiles | فقط Context محتوایی/اجتماعی | `BN-P-029 Corroborated / scoped` |

## شمارش نتیجه

- ۲۴ Candidate بررسی شد.
- ۲۱ Pattern تازه به Catalog می‌روند: `BN-P-009..029`.
- ۳ Candidate دامنه Patternهای موجود را توسعه می‌دهند: دو مورد برای `BN-P-007` و یک مورد برای `BN-P-003`.
- ۴ Pattern به‌صورت `Corroborated / scoped` باقی می‌مانند: Processing، Privacy stability، Analytical report exception و Content/Social boundary.
- هیچ Candidate در این دور Rejected نشد؛ Counter-exampleها Scope را محدود کردند.

## چیزهایی که اثبات نشده‌اند

- مقدار دقیق Spacing، Radius، Type scale، Icon size، Shadow و Touch target.
- رفتار کامل Dynamic Type، VoiceOver، Keyboard، Gesture و Reduced Motion.
- یکسان‌بودن Patternها در نسخه‌های دیگر Binance یا Android/Web.
- مناسب‌بودن مستقیم Yellow، Crypto taxonomy، Social feed، Futures density یا Buy/Sell color برای شمش.
- Global Unique count بین چهار Batch؛ شمارش ۱۵۸ فقط جمع Uniqueهای درون‌Batch است.

## تحویل به G4/G5

G4 برای هر `BN-P-009..029` و توسعه‌های `BN-P-003/007` این موارد را در [`binance-global-to-shemsh-mapping-g4.md`](binance-global-to-shemsh-mapping-g4.md) ثبت کرده است:

1. `Adopt / Adapt / Reject / Defer` برای شمش.
2. اثر بر Foundation، Component، Composition، Behavior و State فعلی.
3. ریسک RTL/PWA/فارسی/تومان و چندفلزی.
4. اینکه Pattern در Home، Trade، Trust/Receipt یا Component sandbox آزموده شود.

Gate G3 Cross-batch: `Complete`.

Gate بعدی: `G4 complete as candidate mapping / Sufficient for owner review؛ no automatic transfer to Shemsh before G5 contract`.
