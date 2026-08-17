# پایه‌های سیستم طراحی

## وضعیت فاز ۱

- ممیزی ورودی‌ها: `foundations/phase-1-input-audit.md`
- نقشه Candidateهای برند قبلی: `foundations/legacy-brand-candidate-map.md`
- Candidate رنگ: `foundations/color-candidate-v0.1.md`
- Candidate جایگزین جهت Primary و Sandbox: `foundations/black-neutral-foundations-candidate-v0.2.md`
- Candidate تایپوگرافی: `foundations/typography-candidate-v0.1.md`
- قرارداد جهت بصری و مقدارهای Pilot: `visual-direction-contract-g5-v0.1.md`
- گزارش تست: `foundations/candidate-v0.1-test-report.md`
- منبع برند: `legacy-brand/shemshbrand guideline.V.1.pdf`
- هیچ مقدار برندگاید در این مرحله خودکار `Stable` نیست.

| Foundation | تصمیم / توکن | وضعیت | معیار بررسی |
|---|---|---|---|
| Color | Semantic colors برای Surface، Text، Action، Status، Financial و Accent فلز | `Candidate v0.2 / In implementation` با Black-neutral؛ هنوز `Stable` نیست؛ D-117/OQ-052/OQ-056 | کنتراست Light/Dark، Device واقعی و Palette فلز/نمودار |
| Typography | مقیاس فارسی، وزن‌ها، اعداد انسانی/ماشینی | `Tested Candidate v0.1`؛ مجوز و Dynamic Type باز؛ OQ-052 | خوانایی، Fallback و Dynamic Type |
| Spacing | ریتم محدود ۴/۸ و Scale `4..48` | `G5 Pilot Candidate / Not Stable` | Home/Assets، Form، List و Receipt |
| Radius | نقش‌های Control/Input/Container/Overlay/Full | `G5 Pilot Candidate` برابر ۱۲/۱۴/۱۶/۲۰/Full؛ Migration نشده | هماهنگی حس برند و مصرف واقعی |
| Elevation | None/Sticky/Overlay/Modal | `G5 Pilot Candidate`؛ Card عادی بدون Shadow | Light/Dark و هم‌پوشانی واقعی |
| Iconography | یک خانواده و Stroke ثابت | باز | Label و کنتراست |
| Motion | Duration و Easing معنایی | باز | Reduced Motion |
| Grid | Mobile-first و Breakpointها | باز | کوچک، بزرگ، تبلت، Landscape |
| Number format | تومان، گرم/سوت، جداکننده، تاریخ شمسی و شناسه LTR | Draft؛ قرارداد در `foundations/rtl-and-localization.md` | بدون ابهام واحد و شکست BiDi |

رنگ خام یا مقدار پراکنده داخل کامپوننت‌ها نباید جای توکن را بگیرد.
