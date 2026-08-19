# Ledger اجرای Screen-led systemization — نسخه ۰.۱

تاریخ: ۲۸ مرداد ۱۴۰۵ / 19 Aug 2026  
تصمیم: D-222  
Figma file key: `1ww36pr21itLXyAFZdouMy`  
Baseline: `Pre-Binance 1.0 / V-159 / D-219`  
وضعیت: `Superseded by D-223 / Figma wave rejected / Non-authoritative`

## قرارداد

- ساختار، رفتار، Copy و Stateهای وایرفریم فریز‌شده منبع حقیقت‌اند.
- Patternهای Binance فقط با `Adopt / Adapt / Reject / Defer` وارد Candidate می‌شوند.
- این مسیر با D-223 متوقف شده است. هیچ Candidate تازه‌ای در Figma ساخته نمی‌شود و Objectهای موج H مبنای ادامه نیستند. HTML Baseline تغییر نمی‌کند؛ کپی نسخه‌دار مرحله ۸ منبع کار جاری است.
- رنگ از Tokenهای Navy-first موجود، Typography از Styleهای شمش و Componentها تا حد ممکن از Setهای محلی استفاده می‌کنند.
- هر Pattern پیش از استخراج به Design System باید در بیش از یک Context یا با Evidence صریح، QA فنی/بصری و Review مالک محصول پشتیبانی شود.

## ترتیب موج‌ها

| موج | نماها | وضعیت |
|---|---|---|
| H | Home default `WF-MM-001` + zero `WF-MM-018` | Rejected / Non-authoritative / do not continue |
| T | Trade entry `WF-MM-008` + preview | Pending |
| O | Operation detail `WF-MM-017` + buy success `WF-ST-T02` | Pending |
| R | Auth، asset detail، deposit، history | Pending |

## موج H — تصمیم‌های Candidate

| موضوع | تصمیم | Evidence/Mapping | اثر DS | وضعیت |
|---|---|---|---|---|
| یک Anchor اصلی در Module پورتفوی | `Adapt` | G4-G-025 / Mapping view 2 | Numeric hierarchy | Implemented + QA pass |
| Object قابل ورود برای هر فلز | `Adapt` | G4-G-013/016 | Asset object/row composition | Implemented + QA pass |
| کیف و Shortcut بدون Wrapper سنگین | `Adapt` | G4-G-016/029 | Flat row + spacing tier | Implemented + QA pass |
| Campaign جدا از Product UI | `Adapt` | G4-G-029 | Promo banner composition | Implemented + QA pass |
| Empty فقط جایگزین Module دارایی | `Adopt + Adapt` | D-212/D-214 / Mapping view 3 | Empty module | Implemented + QA pass |
| Yellow/Black و Taxonomy Binance | `Reject` | Brand/product guardrail | None | Locked |

## خروجی Figma موج H — ردشده و غیرمرجع

| Object | Figma ID | وضعیت |
|---|---|---|
| Page `20 Screen-led / Home` | `499:229` | Rejected / Non-authoritative |
| `H01 / Home / Default / Light / 390` | `499:236` | Rejected; technical QA does not imply design approval |
| `H02 / Home / Zero / Light / 390` | `514:310` | Rejected; technical QA does not imply design approval |
| `.Candidate/Home/Asset Object` | `501:755` | Rejected as continuation source |
| `.Candidate/Home/Shortcut` | `504:229` | Rejected as continuation source |
| `.Candidate/App/Nav Item` | `508:248` | Private candidate؛ `State=Active/Inactive` |

## QA موج H

- `25/25` Target تعاملی بررسی‌شده حداقل `44×44` یا بزرگ‌تر است.
- `0` Overflow در Main هر دو قاب.
- `0` Paint رنگی Hardcoded در دو Screen؛ رنگ‌ها به Variableهای موجود متصل‌اند.
- Typography فقط `Yekan Bakh FaNum / Regular, SemiBold, Bold` است.
- API سه Building block شامل Variant/Text/Instance-swap مورد انتظار و بدون Duplicate است.
- Raw captureهای HTML با IDهای `491:229` و `492:229` پس از QA از Page `10 Button` حذف شدند؛ Baseline HTML فریز‌شده تغییر نکرد.

## Gapهای استخراج‌شده

| Gap | برچسب | اقدام |
|---|---|---|
| `semantic/dimension/radius/container` در Figma فعلی برابر ۸ است، اما G5 برای Container مقدار ۱۶ را می‌خواهد | `Open question / OQ-064` | در Candidate موج H از Primitive ۱۶ استفاده شد؛ پیش از استخراج به DS باید نقش Semantic با شواهد Trade/Operation detail حل شود |
| Asset Object فقط در Home اثبات شده است | `Design assumption` | تا مصرف در Context دوم Private/Not Stable بماند |
| Shortcut و Nav Item فقط shell خانه را پوشش داده‌اند | `Design assumption` | در Trade و Operation detail دوباره مصرف و سپس درباره Promote تصمیم‌گیری شود |

## Gate موج H

`Technical QA complete / Owner visual review required before accepting wave H or extracting any pattern to Design System`
