# Ledger شواهد سراسری بایننس — G2 Batchهای A/B/C/D

وضعیت: `G2 within-batch dedupe complete / cross-batch global unique count intentionally not claimed`

تاریخ: ۲۶ مرداد ۱۴۰۵ / 17 Aug 2026

## هدف

این سند شمارش، پوشش و Observationهای مستقیم چهار Batch ممیزی Binance iOS را یکجا نگه می‌دارد. هدف آن اثبات Design System رسمی بایننس نیست؛ ورودی قابل‌ردیابی برای G3 Pattern proof است.

## نتیجه Dedupe

| Batch | Scope | Flow | Raw screen | Unique درون Batch | Duplicate درون Batch | Gate |
|---|---|---:|---:|---:|---:|---|
| A | Home، App Shell، Settings، Login، Onboarding، Help، Privacy | 6 | 42 | 39 | 3 | `Complete` |
| B | Markets، Detail، Assets، History، Report، Privacy/Export | 10 | 44 | 39 | 5 | `Complete` |
| C | Trade، Convert، Chart، Preferences، Fiat buy | 8 | 41 | 38 | 3 | `Complete`؛ Ledger تفصیلی مستقل دارد |
| D | KYC، Recovery، Password، Payment، Deposit | 8 | 46 | 42 | 4 | `Complete` |
| **جمع درون-Batch** | 17 family | **32** | **173** | **158** | **15** | `Complete for G3 input` |

**Observed fact:** عدد ۱۵۸ جمع Uniqueهای داخل هر Batch است، نه Global Unique کل Snapshot. Screenهایی مانند Home root، Security verification، Settings entry و Buying entry میان Batchها نیز تکرار می‌شوند. تا ساخت Union سراسری Screen ID، عدد Global Unique اعلام نمی‌شود.

## Batch A — Foundations، App Shell و شروع تجربه

| ID | Flow | Raw | Observationهای اصلی |
|---|---|---:|---|
| BN-F-001 | [Home](https://mobbin.com/flows/cf688b7d-77fa-4231-aa1c-57f1f79b59d4) | 11 | Root بدون Title مستقل، Hero metric، CTA زرد، Module card، Bottom nav و Content order |
| BN-F-002 | [Settings](https://mobbin.com/flows/49c585a7-877f-420e-a7b5-432da8bb06f6) | 3 | Large-to-compact title، Group caption، Flat row، Divider بین Groupها و Trailing value/chevron |
| BN-F-003 | [Logging in](https://mobbin.com/flows/fd12b82b-5719-4580-b81f-4adc6755c427) | 10 | High sheet روی Home، Large task title، Field، Social actions، Verification chain و Return to Home |
| BN-F-004 | [Onboarding](https://mobbin.com/flows/c801a715-f530-4db5-a5e7-c214a129fd7d) | 14 | Splash، Signup high sheet، Consent، OTP، Welcome result و انتقال به KYC |
| BN-F-005 | [Help & Support](https://mobbin.com/flows/7e7d22bb-11fa-4149-9203-d8abb1392d25) | 2 | Utility destination و ورود به Support/Feedback |
| BN-F-006 | [Privacy Center](https://mobbin.com/flows/b06e011d-342b-45fd-b6bb-dfbd6a82feaf) | 2 | Page مستقل، Flat legal/data rows، Group divider و Chevron navigation |

Observationهای بین‌Flow:

- Canvas سفید Baseline است؛ Overlay با Scrim و Elevation جدا می‌شود.
- Root tabها با Bottom nav و Anchor محتوایی کار می‌کنند و Title بزرگ عمومی ندارند.
- Utility pageها Title واضح دارند؛ Settings رفتار Collapsing title نشان می‌دهد.
- Login/Signup استثنای مهم Full-page rule هستند: Task طولانی ولی Context-preserving و Dismissible در High sheet.

## Batch B — Data، List، Detail و Report

| ID | Flow | Raw | Observationهای اصلی |
|---|---|---:|---|
| BN-F-007 | [Markets](https://mobbin.com/flows/e656dc0d-efe5-4592-857d-da8218c00478) | 8 | Search، Primary/Secondary tabs، Column-aligned list، Delta pill و Content exceptions |
| BN-F-008 | [Coin detail](https://mobbin.com/flows/e15bb0c1-01c2-4365-827d-e42e101266ac) | 7 | Compact object title، Sub-tabs، Chart/Data/Community و Sticky Buy/Sell |
| BN-F-009 | [Info](https://mobbin.com/flows/fb33a294-57c5-4b38-8ab5-af3d79ba30d8) | 2 | Flat key-value data، Risk copy و Object metadata |
| BN-F-010 | [Overview Assets](https://mobbin.com/flows/6198373a-3786-4fc1-97a5-3729972017d6) | 4 | Hero balance، Equivalent/PNL، optional chart، action group و holding list |
| BN-F-011 | [Assets history](https://mobbin.com/flows/a2dc5366-e2c9-4551-8701-718264045a3f) | 3 | Contextual history sheet، سپس Full-page flat rows و status/value alignment |
| BN-F-012 | [Assets report](https://mobbin.com/flows/8f84b566-e945-4c9a-98b7-294fdca74c4c) | 9 | Gray canvas، White analytical modules، range، chart، calendar، donut و module empty states |
| BN-F-013 | [Hiding PNL & shortcuts](https://mobbin.com/flows/197f06ff-5aeb-4db9-9bda-98d2ce86654f) | 3 | Personalization و Privacy بدون شکستن Layout |
| BN-F-014 | [Hiding value](https://mobbin.com/flows/bedcd9db-ad9b-4c0f-ab4e-abd25204449b) | 2 | Mask کردن Metric با حفظ Geometry و Scope control نزدیک مقدار |
| BN-F-015 | [Portfolio performance](https://mobbin.com/flows/c1ce0c64-cf1d-4c7e-89e1-ec5dda199f80) | 2 | Performance score به‌عنوان Module مستقل، نه List روزمره |
| BN-F-016 | [Generating transaction records](https://mobbin.com/flows/ff654b02-8cb4-4ad9-860f-a9908fb5f084) | 4 | Filter form، range choice، Generate CTA و Toast/long-running status |

Observationهای بین‌Flow:

- Data row عمدتاً Card نیست؛ Grid، Alignment، whitespace و secondary text ساختار می‌سازند.
- Card-heavy composition در Report یک استثنای موضوعی است، چون هر Module منطق/Chart/Control مستقل دارد.
- رنگ سبز/قرمز برای Delta/Status است؛ Search/Field و Secondary action خنثی می‌مانند.
- Detail یک Object، App-bar title و Action context ثابت دارد؛ Root list از Tab به‌عنوان Scope استفاده می‌کند.

## Batch C — Trade و Commitment

Ledger کامل در [`binance-trade-batch-c-evidence-ledger.md`](binance-trade-batch-c-evidence-ledger.md) ثبت شده است.

Observationهای تثبیت‌شده:

- Amount-first برای مسیر روزمره و Workspace متراکم برای نیاز حرفه‌ای دو Context جدا هستند.
- Progressive disclosure، Source/Destination، State-led CTA، Chart tiers و Commitment disclosure تکرار شده‌اند.
- White base with selective grouping در ۳۸ Screen منحصربه‌فرد تأیید شده است.

## Batch D — Identity، Security، Payment و Recovery

| ID | Flow | Raw | Observationهای اصلی |
|---|---|---:|---|
| BN-F-025 | [Verifying account](https://mobbin.com/flows/751cb937-9513-4233-bf22-09024607475b) | 9 | Full-page Task، Progress line، Choice cards، Instruction panel، Processing و captured-data confirmation |
| BN-F-026 | [Upload photos](https://mobbin.com/flows/74083a77-646d-4f58-8ec3-a187000dbe03) | 3 | Capture/upload choice، Disabled/ready CTA و upload object |
| BN-F-027 | [Unlocking account](https://mobbin.com/flows/4a2b4aee-ce77-42b6-98a5-e90b19a939fb) | 7 | Blocking modal، Requirement page/sheet، Verification، Processing و Under-review result |
| BN-F-028 | [Updating password](https://mobbin.com/flows/68c0f11e-acd8-4677-b3aa-0847a1a1f0e6) | 6 | Risk modal، Full-page form، inline requirement validation و Passkey processing |
| BN-F-029 | [Adding payment method](https://mobbin.com/flows/fd0be83b-48f1-4f88-ab6d-98a019db1bbb) | 9 | Settings entry، Empty state، Requirement sheet، method choice، long form، security verification و object result |
| BN-F-030 | [Buy with card](https://mobbin.com/flows/38f20cb8-7bc0-40c2-9576-2bd69858aee1) | 4 | Receive method page، Tall address sheet، Accordion و Buy form |
| BN-F-031 | [Payment methods](https://mobbin.com/flows/39f9e611-d5b9-4930-b88d-3450adf65bfe) | 2 | Settings entry و Empty/list destination |
| BN-F-032 | [On-chain deposit](https://mobbin.com/flows/20a19a2c-7a22-4024-ad3d-7e243a3928a7) | 6 | Add-funds sheet، Asset full page، Network tall sheet، QR detail و Share sheet |

Observationهای بین‌Flow:

- Form/Verification طولانی Full page است؛ Contextual choice در Sheet باقی می‌ماند.
- Center modal فقط برای Interrupt کوتاه، Risk و یک تصمیم استفاده می‌شود.
- Field سطح خاکستری Filled دارد؛ Choice/Object با Border و Card نشان داده می‌شود.
- Warning زرد کم‌رنگ است؛ Processing خلوت و Result Outcomeمحور است.
- Requirement/Instruction بلند در Panel جدا می‌آید و Helper کوتاه نزدیک Field می‌ماند.

## ورودی G3

۲۴ Candidate سراسری در [`binance-global-ui-language-matrix-v0.1.md`](binance-global-ui-language-matrix-v0.1.md) با Evidence، Counter-example و Confidence تعریف شده‌اند.

Gate G2 چهار Batch: `Complete within each batch / Sufficient to proceed to cross-batch G3 proof`.

