# مسیر High-fidelity روی HTML — نسخه ۰.۱

تاریخ: ۲۸ مرداد ۱۴۰۵ / 19 Aug 2026  
تصمیم مرجع: D-223  
وضعیت: `Pattern layer v0.1 complete / Owner visual review required`

## هدف

تبدیل تدریجی وایرفریم سرتاسری شمش به High-fidelity در همان محیط HTML تعاملی، بدون از دست‌دادن رفتار، سناریوها، RTL، Copy و Stateهای Baseline و بدون انتقال به Figma تا دستور صریح مالک محصول.

## منابع

- Baseline فریز‌شده: `../06-wireframes-and-testing/artifacts/multi-metal-waves-1-and-3-wireframe.html`
- فایل کاری نسخه‌دار: `artifacts/multi-metal-high-fidelity-v0.1.html`
- Mapping ده نما: `../07-design-system/binance-ten-view-mapping-v0.1.md`
- قرارداد جهت بصری: `../07-design-system/visual-direction-contract-g5-v0.1.md`
- Handoff ساختاری: `../06-wireframes-and-testing/binance-structural-handoff-brief-v1.0.md`

## ترتیب Passها

1. **Pattern layer:** Hierarchy، Grouping، Density، Card taxonomy، Numeric anchor و CTA؛
2. **Owner review:** اصلاح معماری بصری پیش از رنگ‌آمیزی؛
3. **Brand layer:** Palette v2، Typography tuning، Icon/metal accents و Visual polish؛
4. **Responsive/A11y:** عرض‌های 320/375/390 و 812×375، Focus، Touch، Dynamic Type و Contrast؛
5. **Coverage/QA:** پوشش تمام فلوها و Stateهای Release، Error recovery و Handoff؛
6. **Figma:** فقط در صورت دستور صریح تازه مالک محصول.

## Patternهای اعمال‌شده در v0.1

| بخش | Evidence/Pattern | تصمیم شمش |
|---|---|---|
| Home | یک لنگر مالی و Objectهای دارایی | Summary از Rail جدا شد؛ فلزها Objectهای قابل پیمایش باقی ماندند |
| Zero | جایگزینی فقط ماژول بی‌داده | Shell، کیف، Shortcut، Campaign و Navigation حفظ شدند |
| Asset detail | یک Numeric anchor و تفکیک Chart/range | وزن لنگر اصلی است؛ Chart یک ماژول مستقل می‌ماند |
| Trade entry | Asset/Direction taxonomy، Amount hero، Contextual balance | رفتار و کیبورد Baseline حفظ و سلسله‌مراتب عدد تقویت شد |
| Trade preview | یک Anchor و Breakdown تخت | مبلغ پرداخت/دریافت لنگر شد؛ جزئیات تکراری حذف شد |
| History | Filter choice + flat rows | ردیف‌ها تخت و Scan-first شدند؛ Context فلز فقط در عملیات مرتبط می‌ماند |
| Operation detail | Outcome + anchor + type/status fields | Composition D-218 حفظ شد؛ Document outer card تخت شد |

## Guardrailها

- Binance منبع رنگ، Feature، Taxonomy یا قانون محصول نیست.
- Palette v2 در این Pass اعمال نشده است.
- شعاع ۱۶ فقط Candidate محلی این Artifact است و OQ-064 را حل نمی‌کند.
- D-206، OQ-055، OQ-056 و OQ-062 باز می‌مانند.
- فایل Baseline مرحله ۶ هرگز در این مسیر ویرایش نمی‌شود؛ هر موج High-fidelity Version تازه دارد.
- خروجی‌های Figma موج D-222 ردشده و Non-authoritative هستند.

## QA فعلی

- Hash Baseline پس از ساخت و اصلاح کپی: `CFE3BFB166B3D1D1F4BB35CD57E92FF3D8317E30F0F3D08C99898FA2BC4081C6`
- JavaScript: دو بلوک Inline، هر دو Parse pass.
- Browser visual QA: به‌دلیل Block شدن `file://` در مرورگر داخلی اجرا نشد؛ Review دستی و Device matrix هنوز باز است.

## Gate

`Sufficient for owner visual review` — برای شروع Palette/visual polish هنوز تأیید نشده است.
