# Ledger مهاجرت مستقیم Navy-first — نسخه ۰.۱

تاریخ: ۲۸ مرداد ۱۴۰۵ / 19 Aug 2026  
تصمیم: D-221  
فایل هدف: `Shemsh Design System — Sandbox`  
File key: `1ww36pr21itLXyAFZdouMy`  
وضعیت: `Executed / Technical + agent-visual QA PASS / Owner visual review pending`

## قرارداد تغییر

- Migration مستقیم روی Collectionهای موجود `Primitive / Semantic / State` انجام می‌شود.
- خانواده‌های Legacy حذف نمی‌شوند تا Rollback و مقایسه ممکن بماند.
- API، Anatomy و Variantهای Component setها تغییر نمی‌کنند.
- مقدارهای Palette v2 تا تکمیل Ramp و QA `Candidate / Not Stable` هستند.
- Baseline مرحله ۶ و فایل‌های محصول تغییر نمی‌کنند.

## Snapshot پیش از Write

| مورد | مقدار |
|---|---|
| Page | ۸؛ `10 Button` تا `17 Toast` |
| Variable collection | ۸ |
| Variable | ۲۹۰ |
| Primitive | ۱۳۰؛ ۵۶ Color |
| Semantic | ۸۸؛ ۵۶ Color؛ Light/Dark |
| State | ۱۶ Color؛ Light/Dark |
| Text style | ۱۲ |
| Effect style | ۳ |
| Paint style | ۰ |

### خانواده‌های رنگ قبلی

`neutral / blue / green / amber / red / alpha`

Navy، Warm Neutral، Lime و Metal قبل از D-221 وجود نداشتند.

### Aliasهای اصلی قبل از Migration

| Role | Light | Dark |
|---|---|---|
| `surface.canvas` | `neutral/50` | `neutral/950` |
| `surface.base` | `neutral/0` | `neutral/900` |
| `surface.raised` | `neutral/0` | `neutral/800` |
| `surface.sunken` | `neutral/100` | `neutral/900` |
| `surface.inverse` | `neutral/900` | `neutral/50` |
| `text.primary` | `neutral/900` | `neutral/50` |
| `text.secondary` | `neutral/600` | `neutral/300` |
| `text.tertiary` | `neutral/500` | `neutral/400` |
| `border.default` | `neutral/300` | `neutral/700` |
| `border.interactive` | `blue/700` | `blue/400` |
| `action.primary.container` | `neutral/900` | `neutral/50` |
| `action.primary.content` | `neutral/0` | `neutral/950` |
| `text.link` | `blue/700` | `blue/300` |
| `focus.ring` | `blue/600` | `blue/300` |
| `state.primary.hover` | `neutral/800` | `neutral/200` |
| `state.primary.pressed` | `neutral/950` | `neutral/300` |

### Scope/Code syntax قبل از Migration

- هشت Variable مجموعه `Component / Text Input` دارای `ALL_SCOPES` و بدون Code syntax بودند.
- Variable `Component / Icon Button / icon/content` Scope درست داشت اما Code syntax نداشت.

## برنامه Batchها

### Batch A — Source primitives

- `warm-neutral/50..900`
- Navy source: Light base، Dark base/default/hover، Surface 1..3، Border subtle/strong و Soft content
- Lime: Highlight، Pressed و Dark container
- Gold/Silver/Copper: Base light، Surface dark و Text dark
- Status source: Success/Warning/Error/Info در Base light، Surface dark و Text dark

Gate: Variable count، مقدار Hex، Scope خالی، Code syntax و Duplicate صفر.

### Batch B — Semantic/State migration

- Remap مستقیم Surface/Text/Icon/Border/Action/Focus؛
- Remap Stateهای Primary/Secondary/Tertiary؛
- Status Dark از Source PDF و Status Light فقط با نقش قابل‌دسترس؛
- افزودن Roleهای Metal و Financial؛
- اصلاح Scope و Code syntax مجموعه Text Input و Icon Button.

Gate: Broken alias صفر، `ALL_SCOPES` صفر، Missing WEB syntax در Variableهای تغییرکرده صفر.

### Batch C — Visual/technical QA

- Button، Icon Button، Checkbox، Radio، Switch، Inputs، Alert و Toast؛
- Light/Dark، RTL، Focus، Disabled، Loading، Error/Success و متن فارسی؛
- بررسی Hardcode paint و Screenshot صفحه/Set.

## محدودیت‌های کنتراست

| ترکیب | نسبت | قرارداد |
|---|---:|---|
| `#F5F3EF` روی `#1E2F56` | `11.87:1` | Primary Light مجاز |
| `#0B1220` روی `#7C97C2` | `6.30:1` | Primary Dark مجاز |
| `#F5F3EF` روی `#5779AC` | `4.00:1` | متن عادی ممنوع؛ Restricted |
| `#1E2F56` روی `#9FE870` | `8.93:1` | Container/Highlight مجاز |
| `#9FE870` روی `#FAF9F7` | `1.40:1` | Text/Icon مستقل Light ممنوع |

## نتیجه اجرا

### Batch A — Source primitives

- ۴۵ Variable رنگ به Collection موجود `Primitive` افزوده شد؛ IDها از `VariableID:483:229` تا `VariableID:483:273`.
- خانواده‌ها: ۱۰ Warm Neutral، ۱۰ Navy/On-dark، سه Lime، نه Metal و ۱۲ Status source.
- شمار نهایی Primitive برابر ۱۷۵، Duplicate برابر صفر، Scope اشتباه برابر صفر و Missing WEB syntax برابر صفر است.

### Batch B — Semantic/State

- ۴۹ Role رنگ موجود `Semantic` و شش Role موجود `State` مستقیم بازنگاشت شدند.
- ۱۲ Role تازه برای Gold/Silver/Copper و Financial increase/decrease/neutral ساخته شد؛ IDها از `VariableID:484:229` تا `VariableID:484:240`.
- هشت Variable مجموعه `Component / Text Input` از `ALL_SCOPES` خارج و بر اساس مصرف واقعی به Fill/Stroke/Text محدود شدند؛ Code syntax همان هشت Variable و `Component / Icon Button / icon/content` تکمیل شد.
- شمار نهایی Variableها ۳۴۷، Broken alias برابر صفر، `ALL_SCOPES` برابر صفر و Missing WEB syntax در Collectionهای تغییرکرده برابر صفر است.

### Batch C — QA فنی و بصری

| Component set | Variant پیش/پس | نتیجه Source paint |
|---|---:|---|
| Button | ۱۰۸ / ۱۰۸ | PASS؛ ۱۳۰ Paint فقط داخل Instanceهای آیکن Library خارجی است |
| Icon Button | ۷۲ / ۷۲ | PASS؛ ۱۴۴ Paint فقط متن‌های داخلی Accessibility/Loading label است |
| Checkbox | ۱۲ / ۱۲ | ۱۰۰٪ Token-bound |
| Radio | ۸ / ۸ | ۱۰۰٪ Token-bound |
| Switch | ۱۰ / ۱۰ | ۱۰۰٪ Token-bound |
| Text Input | ۱۴ / ۱۴ | ۱۰۰٪ Token-bound |
| Amount Input | ۱۶ / ۱۶ | ۱۰۰٪ Token-bound |
| OTP Input | ۳۲ / ۳۲ | ۱۰۰٪ Token-bound |
| Search Input | ۱۲ / ۱۲ | ۱۰۰٪ Token-bound |
| Alert | ۱۰ / ۱۰ | ۱۰۰٪ Token-bound |
| Toast | ۵ / ۵ | ۱۰۰٪ Token-bound |

- Hardcode مؤثر در Source componentها صفر است؛ موارد مستثنا فقط Childهای Library خارجی Button و متن‌های غیرنمایشی دسترس‌پذیری Icon Button هستند.
- Screenshot واقعی Button، Icon Button Light/Dark، Inputs، Alert و Toast Light/Dark بررسی شد. Navy/Warm Neutral/Lime، Focus، Status، RTL و متن فارسی بدون Regression بحرانی پاس شدند.
- Canvas خود Alert و فریم‌های Documentation/QA Toast به `semantic/color/surface/*` متصل شدند. هر چهار فریم Toast Light/Dark اکنون Mode صریح `Semantic + State` دارند؛ پس‌زمینه Dark قدیمی `#141414` حذف و از `#0B1220` حل می‌شود.
- API، Anatomy و تعداد Variant هیچ Component setی تغییر نکرد؛ Baseline مرحله ۶ نیز دست‌نخورده ماند.

## Rollback

Rollback با بازگرداندن Aliasهای جدول Snapshot انجام می‌شود؛ Source primitiveهای تازه می‌توانند برای Audit باقی بمانند و فقط پس از تصمیم جداگانه با ID دقیق حذف شوند. Cleanup با Prefix یا Name ممنوع است.

## Gate فعلی

`Sufficient to proceed / Migration complete / Technical + agent-visual QA PASS / Owner visual review pending`

این Gate مجوز `Stable` نیست. Device واقعی، Screen Reader/Dynamic Type و تکمیل Rampهای هویتی و نقش‌های فلزمحور زیر OQ-052/OQ-056 باز می‌مانند.
