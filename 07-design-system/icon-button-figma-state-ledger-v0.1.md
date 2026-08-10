# State Ledger اجرای Icon Button در Figma — v0.1

تاریخ: 9 Aug 2026  
فایل: `Shemsh Design System — Sandbox`  
File key: `1ww36pr21itLXyAFZdouMy`  
تصمیم‌های مرجع: D-086، D-117، D-129، D-132، D-133  
قرارداد مرجع: `icon-button-component-contract-v0.1.md`

## وضعیت فعلی

- **Observed fact:** صفحه مستقل `11 Icon Button` با ID `189:633` ساخته شد.
- **Observed fact:** Component Set اصلی `Icon Button` با ID `218:2275` دقیقاً ۷۲ Variant یکتا برای `Style=4 × Size=3 × State=6` دارد؛ Set پایلوت `196:650` در فرایند Assemble جایگزین شد.
- **Observed fact:** Propertyهای عمومی شامل `Accessible label`، `Loading label` و `Icon` از نوع Instance Swap هستند؛ سه Axis نیز `Style / Size / State` باقی مانده‌اند.
- **Observed fact:** QA board با ID `198:721` شامل ۲۰ Instance واقعی برای شش State، Icon Swap، سه هدف لمسی مجاور و Light/Dark است.
- **Observed fact:** Audit نهایی صفر Issue ساختاری گزارش کرد؛ Master و Instance، Focus، Disabled، Loading، سه Icon نرمال‌شده و Modeهای Light/Dark در Screenshot واقعی پاس شدند.
- **Observed fact:** مالک محصول Pilot را تأیید بصری کرد؛ Expand و Final structural/token/agent-visual audit با صفر Issue انجام شد.
- **Risk:** Promote به `Tested Candidate` تا تأیید بصری نهایی ماتریس کامل مجاز نیست.
- **Open question:** Phosphor فقط Candidate اجرای Pilot است؛ انتخاب رسمی خانواده، مجوز، Package متناظر کد و Contribution همچنان زیر OQ-052 باز است.

## Node ledger

| نقش | Node / Variable ID | وضعیت |
|---|---|---|
| Page | `189:633` | `11 Icon Button` |
| Page canvas | `210:844` | متصل به `semantic/color/surface/canvas` |
| Component Set | `218:2275` | `Candidate / 72 unique variants / final audit pass` |
| Default | `193:672` | Pass |
| Hover | `195:636` | Pass |
| Pressed | `195:650` | Pass |
| Focus | `195:664` | Pass |
| Disabled | `195:678` | Pass |
| Loading | `195:692` | Pass |
| QA board | `198:721` | ۲۰ Instance واقعی؛ Stress tests pass |
| Private icon holder | `204:895` | مخفی؛ سه Helper نرمال‌شده |
| Helper — X | `204:886` | Phosphor Regular/Stroke، token-bound |
| Helper — Clipboard | `202:886` | Stroke به Outline نرمال‌شده، token-bound |
| Helper — CaretLeft | `204:894` | Stroke به Outline نرمال‌شده، token-bound |
| Component collection | `VariableCollectionId:208:844` | `Component / Icon Button`؛ Modeهای Primary/Secondary/Tertiary/Destructive/Disabled |
| Routed icon token | `VariableID:208:845` | `icon/content`؛ Alias به توکن Content هر Style یا Disabled |

## قرارداد فنی Pilot

- Root و Surface در Medium برابر ۴۸×۴۸ و Icon برابر ۲۰×۲۰ هستند.
- Focus ring برابر ۵۶×۵۶ است و خارج از Surface، بدون Clip، Render می‌شود.
- Hover به `VariableID:9:6`، Pressed به `VariableID:9:7` و Disabled icon به `VariableID:9:11` Resolve می‌شوند.
- Icon قابل Swap یک Instance مستقیم و غیرMask است. Spinner ثابت Loading همچنان Mask داخلی دارد و Swap عمومی نیست.
- Collection کوچک `Component / Icon Button` مقدار تازه‌ای اختراع نمی‌کند؛ فقط Mode `Active` را به `semantic/color/action/tertiary/content` و Mode `Disabled` را به `state/color/control/disabled/content` Alias می‌کند.

## خطاها و بازیابی

### نتیجه Expand و Final audit

- ۷۲ Tuple یکتا ساخته شد: `Primary/Secondary/Tertiary/Destructive × Small/Medium/Large × Default/Hover/Pressed/Focus/Disabled/Loading`.
- Propertyهای عمومی Set جدید: `Accessible label#218:0`، `Loading label#218:73` و `Icon#218:146` از نوع Instance Swap با سه Preferred helper.
- Small دارای Touch target برابر ۴۸، Surface برابر ۴۰ و Icon برابر ۱۶ است؛ Medium برابر ۴۸/۴۸/۲۰ و Large برابر ۵۶/۵۶/۲۴ است.
- Audit خودکار تمام Variantها Anatomy، ابعاد، نمایش Focus/Loading، Tuple یکتا و Binding سطح هر State را بررسی کرد و `0 issue` گزارش داد.
- Screenshot واقعی صفحه کامل، چهار Style، سه Size، شش State، Focus، Disabled، Loading و QA Light/Dark را بدون شکست بصری نشان داد.
- پس از بازبینی مالک محصول، fallback Paint سطح چهار Variant `Tertiary/Small/Hover`، `Tertiary/Small/Pressed`، `Tertiary/Large/Hover` و `Tertiary/Large/Pressed` با نمونه Medium همگام شد؛ Binding همان توکن‌های `9:6` و `9:7` حفظ شد و کنتراست آیکن در Screenshot پاس شد.

1. شناسه داخلی Variant واردشده Phosphor بین دو اجرای Plugin پایدار نماند؛ Import و انتخاب `Regular/Stroke` به یک تراکنش منتقل شد.
2. تنظیم `ABSOLUTE` پیش از appendشدن Focus ring رد شد؛ Batch کامل rollback و ترتیب به `append → absolute` اصلاح شد.
3. پس‌زمینه Component Set با Hover هم‌رنگ بود؛ فقط بستر مستندسازی به `surface/base` تغییر کرد.
4. QA نشان داد `Mask + INSTANCE_SWAP` در Master سالم اما در Instance واقعی به Bounding box مربع تبدیل می‌شود. معماری Mask از Icon عمومی حذف و Helperهای نرمال‌شده مستقیم جایگزین شدند.
5. توکن موجود `semantic/state/opacity/disabled` هنگام Binding مقدار ۰٫۳۸ را به ۰٫۰۰۳۸ Resolve کرد؛ Token سراسری بدون مجوز تغییر نکرد و رنگ Disabled با router مبتنی بر Alias حل شد.
6. یک Transport error برای ویرایش متن QA رخ داد؛ مقدار Node خوانده و پس از اثبات عدم اجرا، Retry idempotent انجام شد.

هیچ Button موجود، از جمله Set اصلی ۱۰۸تایی و Set تاریخی ۷۲تایی، تغییر نکرد.

## Evidence

- Screenshot نهایی: `artifacts/icon-button-pilot-v0.1.png`
- Screenshot ماتریس کامل: `artifacts/icon-button-candidate-72-v0.1.png`
- Figma page: `https://www.figma.com/design/1ww36pr21itLXyAFZdouMy/Shemsh-Design-System---Sandbox?node-id=189-633`

## قدم بعدی مجاز

مالک محصول Screenshot و ماتریس کامل ۷۲تایی را بازبینی می‌کند. در صورت تأیید، Icon Button به `Tested Candidate` Promote و Component بعدی طبق Workflow رسمی آغاز می‌شود؛ در غیر این صورت همین Candidate اصلاح می‌شود.

Gate فعلی: `Sufficient to proceed / Awaiting final owner visual review`؛ Icon Button هنوز `Stable` نیست.
