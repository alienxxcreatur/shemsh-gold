# برنامه اجرای کنترل‌شده Stage 7 — نسخه ۰.۱

تاریخ: ۲۸ مرداد ۱۴۰۵ / 19 Aug 2026  
وضعیت: `Superseded in execution by D-223 / Figma write paused / Evidence retained`  
تصمیم مرجع: D-220  
Baseline ساختاری: `Pre-Binance 1.0 / V-159 / D-219`

## هدف

تبدیل Baseline فریز‌شده مرحله ۶ و شواهد ساختاری Binance به یک مسیر قابل‌کنترل برای زبان بصری Navy-first و High-fidelity؛ بدون تغییر Artifact مرجع، بدون اختراع قانون بیزینس و بدون Migration سراسری Figma پیش از Review.

## مسیر تاریخی — اجرای Figma با D-223 متوقف شده

1. همگام‌سازی منابع حقیقت و ثبت مسیر اجرا؛
2. مهاجرت مستقیم کنترل‌شده پالت Navy-first در Collectionهای اصلی Figma — D-221؛
3. تکمیل Mapping ده نمای نماینده؛
4. ~~ساخت Candidateهای Screen-led ده نما در همان Figma~~ — با D-223 متوقف و خروجی Home رد شد؛
5. مسیر جاری: کپی HTML مرحله ۸ → Patternهای ساختاری → Review مالک → Palette/visual polish → Responsive/A11y/QA؛ بازگشت به Figma فقط با دستور صریح.

## Phase 0 — Discovery و قفل Scope

### یافته‌های Local/codebase

- **Observed fact:** منبع زنده محصول Prototype HTML/CSS/JS مرحله ۶ است؛ پیاده‌سازی Production و قرارداد Design-to-code نهایی هنوز قفل نشده است.
- **Observed fact:** معماری توکن چهارلایه `Primitive → Semantic → State → Component`، Modeهای `Light/Dark` و نام‌گذاری dot/slash/CSS از قبل مستند شده‌اند.
- **Observed fact:** Candidateهای موجود شامل Button، Icon Button، Checkbox، Radio، Switch، خانواده Input، Alert، Toast و Tier 0 هستند؛ بازسازی Anatomy یا Variant آن‌ها جزو Pilot رنگ نیست.
- **Observed fact:** PDF پالت v2 داخل مخزن با فایل تحویلی کاربر یکسان است و مرجع جاری `foundations/navy-first-palette-candidate-v0.3.md` است.
- **Observed fact:** جهت Navy-first تأیید شده، اما Ramp کامل Navy/Lime، Metalهای قابل‌دسترس، Art direction و Logo usage هنوز تحویل نهایی نشده‌اند.
- **Observed fact:** شواهد Binance در G2/G3/G4/G5 ثبت شده‌اند؛ این شواهد فقط منطق Grouping، Hierarchy، Density و Container را تغذیه می‌کنند و منبع رنگ یا قانون محصول نیستند.
- **Risk:** Hardcode کردن Hexهای Candidate در Component یا Pilot، مسیر Migration را شکننده و خلاف معماری Alias می‌کند.

### وضعیت Figma

- فایل Sandbox شناخته‌شده: `Shemsh Design System — Sandbox` با File key `1ww36pr21itLXyAFZdouMy`.
- فایل Pilot قدیمی Binance جدا از Sandbox و فقط Evidence تاریخی است؛ مبنای Pilot تازه نیست.
- **Observed fact:** اتصال Figma در 19 Aug 2026 دوباره احراز و Phase 0 به‌صورت Read-only کامل شد؛ هیچ Write انجام نشد.
- **Observed fact:** Sandbox هشت صفحه `10 Button` تا `17 Toast`، هشت Variable Collection، ۲۹۰ Variable، دوازده Text style، سه Effect style و صفر Paint style دارد.
- **Observed fact:** Collections اصلی شامل `Primitive` با ۱۳۰ Variable، `Semantic` با ۸۸ Variable و Modeهای Light/Dark، `State` با ۱۶ Variable و Modeهای Light/Dark، به‌علاوه Motion، Foundation، Responsive و دو Collection کامپوننتی هستند.
- **Observed fact:** API کامپوننت‌های موجود کامل و قابل حفظ است: Button ۱۰۸، Icon Button ۷۲، Checkbox ۱۲، Radio ۸، Switch ۱۰، Text Input ۱۴، Amount Input ۱۶، OTP ۳۲، Search ۱۲، Alert ۱۰ و Toast ۵ Variant.
- **Observed fact:** رنگ‌های Primitive فعلی فقط خانواده‌های `neutral / blue / green / amber / red / alpha` هستند؛ Navy، Lime، Gold، Silver و Copper وجود ندارند. Semantic نیز نقش‌های `financial` و `trust` ندارد.
- **Observed fact:** چهار Library عمومی Phosphor، Material 3، Simple Design System و iOS 18 به فایل اضافه‌اند. Search همچنین دو Library منتشرشده Legacy با نام‌های `Shemsh` و `Shemsh Design system` و APIهای Button تکراری پیدا کرد؛ آن‌ها وارد Pilot نمی‌شوند.
- **Risk:** هشت Variable رنگ `Component / Text Input` از Scope عمومی `ALL_SCOPES` و بدون Code syntax استفاده می‌کنند. Pilot Scopeهای دقیق خواهد داشت، اما اصلاح Collection اصلی به Migration بعد از Review موکول می‌شود.

### Scope قفل‌شده Migration مستقیم

| حوزه | داخل Scope | خارج Scope |
|---|---|---|
| رنگ | افزودن Source primitive به Collection موجود و Remap مستقیم Semantic/State Light/Dark، Focus/Disabled/Status و Metal roleهای برچسب‌دار | Ramp نهایی برند، Logo rules، اعلام Stable |
| کامپوننت | Remap مستقیم همه Componentهای موجود از راه Alias با حفظ API/Variant | بازسازی Variant، تغییر Anatomy، Promote به Stable |
| Composition | Home، Trade entry/preview، Operation detail روی کپی مستقل | تغییر Artifact `Pre-Binance 1.0` |
| تحقیق رقیب | Patternهای مستند G4/G5 با `Adopt/Adapt/Reject/Defer` | کپی رنگ زرد/مشکی، Taxonomy کریپتو یا عدد دقیق Binance |
| قوانین محصول | حفظ رفتار، State، RTL، Touch، Focus و Gateهای موجود | بستن D-206، OQ-055، OQ-056 یا ساخت عدد/قانون تازه |

## نگاشت پیشنهادی Token → Figma

این جدول قرارداد ساخت است؛ مقدار دقیق فقط پس از Inspection فایل و تأیید Phase 1 نوشته می‌شود.

| منبع | Collection مقصد | نام نمونه | Type | Mode | تصمیم |
|---|---|---|---|---|---|
| Swatchهای دقیق PDF بدون جعل Ramp | `Pilot / Palette v2 Source` | `navy/light-base`, `navy/dark-default`, `warm-neutral/50` | Color | `Base` | New/isolated؛ حدود ۴۵ Source swatch و بدون مصرف مستقیم UI |
| Surface/Text/Icon/Border/Action/Status/Metal | `Pilot / Semantic` | `color/surface/canvas`, `color/text/primary` | Color | `Light`, `Dark` | حدود ۵۵ نقش؛ Alias به Source |
| Hover/Pressed/Focus/Disabled/Selected | `Pilot / State` | `color/action/primary/hover` | Color/Float | `Light`, `Dark` | حدود ۱۲ تا ۱۶ نقش؛ Alias و Scope دقیق |
| Component-specific فقط در صورت تکرار واقعی | Collection موجود Component یا Pilot جدا | `button/primary/container/default` | Color | `Base` | فقط Alias؛ Hardcode ممنوع |
| Elevation | Effect Styles موجود/آزمایشی | `elevation/overlay` | Effect style | — | Variable ساخته نمی‌شود |

## Gap و Conflictهای ثبت‌شده در Phase 0

1. **Resolved direction conflict:** Figma فعلی Primary مشکی/Neutral است، اما D-202 جهت Navy-first را قطعی کرده؛ Existing values تاریخی و دست‌نخورده می‌مانند و Pilot در Collection جدا ساخته می‌شود.
2. **Brand gap:** PDF Ramp کامل Navy/Lime ندارد. Source tokenها با نام‌های موقت منبع‌محور ساخته می‌شوند؛ Grade عددی ساختگی و مقدار `Stable` تولید نمی‌شود.
3. **Contrast conflict:** متن `#F5F3EF` روی `#5779AC` فقط `4.00:1` و متن `#0B1220` روی آن `4.22:1` است؛ این Swatch برای متن عادی CTA قابل‌قبول نیست. Pilot، `#5779AC` را فقط در نقش‌های مجاز آزمایش و Primary CTA را با Candidateهای پرکنتراست مقایسه می‌کند.
4. **Accent conflict:** `#9FE870` روی زمینه روشن `1.40:1` است؛ Lime فقط Highlight/Container با متن Navy و نه Text/Icon مستقل روی Light استفاده می‌شود. Navy روی Lime برابر `8.93:1` است.
5. **Status/Metal gap:** Success/Warning و Gold/Silver/Copper روشن به‌تنهایی برای متن یا Icon فعال کنتراست کافی ندارند. Surface/Border/Content و Label/Icon/Pattern جدا لازم‌اند.
6. **Scope conflict:** Component Text Input فعلی `ALL_SCOPES` دارد. Pilot Scope درست را اعمال می‌کند؛ اصلاح Main collection خارج Scope این فاز است.
7. **Library conflict:** Buttonهای منتشرشده Legacy با Sandbox جدید تداخل API دارند؛ Import نمی‌شوند و Componentهای محلی Sandbox منبع Pilot می‌مانند.
8. **Implementation gap:** Code syntax نهایی تا مشخص‌شدن Source تولید Design token قطعی نمی‌شود؛ نام پیشنهادی CSS فقط قرارداد اولیه است.

## برنامه مستقیم Phase 1 — جایگزین‌شده با D-221

1. Snapshot Alias/Scope/Code syntax فعلی برای Rollback؛
2. افزودن Source primitiveها به `Primitive` موجود، بدون حذف خانواده‌های Legacy؛
3. Remap مستقیم `Semantic/State` موجود و افزودن Roleهای Metal/Financial لازم؛
4. اصلاح Scopeهای `Component / Text Input` و تکمیل Code syntax محلی؛
5. Audit همه Aliasها، Scopeها و Paint bindingها؛
6. Visual QA هر هشت صفحه در Light/Dark/RTL؛
7. ثبت IDها و نتیجه در Ledger؛ مقادیر تا Owner review `Candidate / Not Stable`.

## خروجی هر فاز و Gate

| فاز | خروجی | Gate |
|---|---|---|
| ۰ | Discovery محلی، Inspection Figma، Library search، Conflict list، Scope و Plan | `Complete` |
| ۱ | `Palette v2 / Pilot`، Alias map، Contrast matrix و نمونه Component | `Owner review required` |
| ۲ | Mapping ده نما و Component/Composition impact | `Complete as candidate mapping` |
| ۳ | Candidateهای Screen-led Home/Trade/Operation detail در همان Figma | `Superseded / Home rejected / no further Figma write` |
| ۴ | QA 320/375/390 و 812×375، RTL، Focus، Touch، Light/Dark و Console | `Owner review required` |
| ۵ | تصمیم `Scale / Revise / Stop` و Changelog | فقط پس از تأیید صریح |

## معیارهای عدم‌تخریب

- Hash و فایل‌های Baseline D-219 تغییر نمی‌کنند.
- فایل و Componentهای اصلی Figma تا Review دست‌نخورده می‌مانند.
- هیچ Candidate به `Stable` ارتقا نمی‌یابد.
- هر مقدار باز با `Design assumption` یا `Open question` برچسب می‌خورد.
- هر تغییر Figma با Ledger شامل Object name، ID، Variable alias و وضعیت QA ثبت می‌شود.

## Gate فعلی

`Figma route paused; HTML pattern layer owner visual review required — D-223`
