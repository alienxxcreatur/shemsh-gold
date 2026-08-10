# قرارداد Icon Button — v0.1

وضعیت: `Candidate / 72 variants built / Awaiting final owner visual review`

تاریخ: 9 Aug 2026  
Workflow مرجع: `component-set-workflow-v1.0.md`  
تصمیم‌های مرجع: D-086، D-117، D-122، D-129  
وابستگی Foundation: OQ-052

## هدف و مصرف واقعی

Icon Button یک Action بدون Label بصری است و برای فضاهای فشرده و آیکن‌های شناخته‌شده استفاده می‌شود.

**Observed fact:** مصرف‌های تأییدشده در Inventory و اسناد موج ۱ شامل Back، Close، Copy و ابزارهای Header است. Show/Hide password نیز Action آیکنی دارد، اما رفتار Toggle آن باید جداگانه مدل شود.

**Observed fact:** Copy Action ترکیب Icon Button و Feedback/Toast است و Stateهای `copied/failed` به‌تنهایی Variant پایه Icon Button نیستند.

**Observed fact:** در Libraryهای متصل، `Phosphor Icons (Community)` فعال است و Button فعلی برای `Plus` و `SpinnerGap` از Variant `Format=Stroke, Weight=Regular` همین Library استفاده می‌کند.

**Open question:** انتخاب رسمی خانواده آیکن، مجوز، Package متناظر کد، پوشش آیکن‌ها، Stroke/Weight و قواعد Contribution هنوز بخشی از OQ-052 است. Phosphor در این قرارداد فقط Candidate است.

## مرز Component

### داخل Scope

- Action لحظه‌ای: Back، Close، Copy، Menu، Search، Filter و Header utility.
- Action مخرب فشرده فقط وقتی Context و Accessible label آن روشن است.
- Loading برای Action واقعاً async.

### خارج از Scope

- Toggle Icon Button مانند Show/Hide password، Favorite یا Mute؛ نیازمند قرارداد Selected/Pressed مستقل.
- Icon داخل Text Button؛ تحت قرارداد Button است.
- Navigation tab، Chip یا Segmented control.
- Copy success/error؛ توسط Feedback composition پوشش داده می‌شود.
- Tooltip به‌عنوان فرزند دائمی Master؛ Tooltip Component/Pattern جداست.

## Anatomy پیشنهادی

1. Touch target root
2. Surface
3. Focus ring مستقل
4. Icon slot
5. Loading indicator
6. Accessible-label annotation؛ غیرقابل‌مشاهده و فقط برای Handoff

## Component propertyهای پیشنهادی

- `Icon` — Instance swap
- `Accessible label` — Text؛ اجباری در مصرف
- `Loading label` — Text؛ پیش‌فرض «در حال انجام» برای Handoff/Screen Reader

Tooltip property داخل Master ساخته نمی‌شود. Tooltip یا Annotation باید از `Accessible label` تغذیه شود و روی Hover و Focus قابل دسترسی باشد.

## گزینه‌های Variant matrix

### گزینه A — ماتریس هماهنگ با Button

- `Emphasis = Primary / Secondary / Tertiary`
- `Tone = Neutral / Destructive`
- `Size = Small / Medium / Large`
- `State = Default / Hover / Pressed / Focus / Disabled / Loading`
- تعداد: `3 × 2 × 3 × 6 = 108`

مزیت: API معنایی هم‌راستا با Button.  
ریسک: ترکیب‌های Primary/Destructive و بعضی Loadingها برای Icon-only مصرف واقعی کمی دارند.

### گزینه B — ماتریس Curated

- `Style = Primary / Secondary / Tertiary / Destructive`
- `Size = Small / Medium / Large`
- `State = Default / Hover / Pressed / Focus / Disabled / Loading`
- تعداد: `4 × 3 × 6 = 72`

مزیت: Variant نامصرف کمتر و مدل ساده‌تر.  
ریسک: `Destructive` سطح تأکید مستقل ندارد و Naming آن با Button دقیقاً یکسان نیست.

**Business decision:** گزینه B با هدف دقیق ۷۲ Variant تأیید شد، چون مصرف فعلی Icon Button مخرب به سطح تأکیدهای متعدد نیاز اثبات‌شده ندارد. اگر وایرفریم مصرف واقعی Secondary/Primary Destructive نشان دهد، قرارداد پیش از Expand بازنگری می‌شود؛ Variant فرضی برای کامل‌کردن ماتریس ساخته نمی‌شود.

## Size و Touch target پیشنهادی

| Size | سطح بصری | Touch target | Icon |
|---|---:|---:|---:|
| Small | 40 | 48 | 16 |
| Medium | 48 | 48 | 20 |
| Large | 56 | 56 | 24 |

- **Business decision:** Small سطح ۴۰ و Interaction box برابر ۴۸ دارد؛ این تصمیم Button موجود را تغییر نمی‌دهد.
- Icon همیشه Optical center می‌شود؛ Bounding box خام معیار نهایی تراز نیست.
- Shape تأییدشده Rounded square با Radius توکن Control است؛ Shape محور Variant نیست.

## رفتار State

- `Default`: رنگ و Surface از Style می‌آیند.
- `Hover`: فقط در Pointer device؛ Touch به Hover وابسته نیست.
- `Pressed`: بازخورد فوری روی pointer-down.
- `Focus`: Ring مستقل و قابل مشاهده در Light/Dark.
- `Disabled`: Action از Focus و activation خارج و فقط با opacity بیان نمی‌شود.
- `Loading`: Icon با Spinner داخلی جایگزین، ابعاد ثابت و activation موقتاً غیرفعال می‌شود.

## Accessibility

- Accessible name برای هر Instance اجباری است؛ نام آیکن جای نام Action نیست.
- Action با `Enter` و `Space` فعال می‌شود.
- Touch target کمتر از ۴۸ برای Candidate تازه مجاز نیست.
- Tooltip کوتاه روی Hover و Focus برای آیکن‌های بدون Label بصری ارائه می‌شود؛ اطلاعات حیاتی فقط در Tooltip قرار نمی‌گیرد.
- Loading باید نام قابل‌اعلام داشته باشد و تغییر State فقط بصری نباشد.
- چند Icon Button مجاور باید فاصله کافی و ترتیب Focus هم‌راستا با RTL داشته باشند.

## RTL

- Back، Forward، Chevron ورود به جزئیات و فلش مرحله‌ای Mirror می‌شوند.
- Close، Search، Info، Warning، Settings، Download/Upload عمودی و نشان برند Mirror نمی‌شوند.
- Mirror ویژگی Icon source/Instance است، نه چرخاندن کل Component.

## Token mapping اولیه

- Color و State از همان خانواده Semantic/State تأییدشده Button تغذیه می‌شوند.
- Surface، Content، Border، Disabled و Focus نباید مقدار Raw داشته باشند.
- Size/Touch/Icon از Dimension variable متصل می‌شوند.
- Loading از Spinner Component داخلی استفاده می‌کند؛ آیکن خام Spinner مستقیماً داخل هر Variant کپی نمی‌شود.

## Pilot پیشنهادی

- ترکیب نماینده: `Tertiary / Medium`
- Stateها: `Default / Hover / Pressed / Focus / Disabled / Loading`
- Icon پایه: `Close`
- Phosphor: `Format=Stroke, Weight=Regular` به‌عنوان Candidate

## Stress test اجباری

- Back در RTL و LTR
- Close بدون Mirror
- Copy همراه Tooltip و Feedback composition
- Destructive delete با Context روشن
- Loading و Loading label
- سه Icon Button مجاور در Header
- Light/Dark
- Keyboard focus و Tooltip روی Focus
- Small با سطح ۴۰ و Touch target واقعی ۴۸
- Instance swap میان Iconهای ۱۶/۲۰/۲۴

## نتیجه Review پیش از Pilot

مالک محصول در 9 Aug 2026 هر چهار مورد را تأیید کرد:

1. گزینه B با ۷۲ Variant.
2. Rounded square بدون Shape axis.
3. Phosphor Regular/Stroke برای Pilot، با حفظ OQ-052 تا تصمیم رسمی Foundation.
4. Toggle Icon Button در قرارداد مستقل بعدی.

## منابع معیار

- [Apple HIG — Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons): Hit region، Press state، نقش Icon و Shape.
- [Android Developers — Accessibility](https://developer.android.com/guide/topics/ui/accessibility/apps.html): Touch target پیشنهادی ۴۸dp.
- [Carbon — Tooltip usage](https://carbondesignsystem.com/components/tooltip/usage/): Tooltip کوتاه برای Icon-only action روی Hover/Focus.
- [Carbon — Icon usage](https://carbondesignsystem.com/elements/icons/usage/): ثبات اندازه Icon و جداسازی Glyph از Touch target.

Pilot شش‌حالته در صفحه `11 Icon Button` ساخته و Technical/Stress/Agent-visual QA را بدون Issue پاس کرد و سپس با تأیید بصری مالک محصول به Set کامل ۷۲تایی گسترش یافت. Final audit ساختار، State، Geometry، Token binding و Propertyهای عمومی صفر Issue داشت. جزئیات Nodeها و بازیابی خطاها در `icon-button-figma-state-ledger-v0.1.md` ثبت شده‌اند.

Gate فعلی: `Sufficient to proceed / Awaiting final owner visual review`؛ Promote به `Tested Candidate` فقط پس از تأیید بصری ماتریس کامل مجاز است.
