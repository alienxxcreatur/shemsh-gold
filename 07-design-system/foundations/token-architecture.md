# معماری توکن‌های سیستم طراحی شمش

وضعیت سند: `Draft / Design assumption`

تاریخ ایجاد: 20 Jul 2026

این سند خروجی قدم ۳ از مسیر `Design System Prep` است. هدف آن تعریف اسکلت پایدار توکن‌ها پیش از رسیدن برندبوک و پیش از شروع رسمی مرحله ۷ است. این سند نام رنگ، فونت، Radius یا Motion نهایی برند را تعیین نمی‌کند.

## مبنای معماری

- **Observed fact:** محصول اصلی شمش PWA و رابط آن فارسی و RTL است.
- **Observed fact:** محصول با داده‌های مالی، قیمت لحظه‌ای، تراکنش، طلای دیجیتال و دریافت فیزیکی طلا سروکار دارد.
- **Business decision:** تجربه باید قابل‌اعتماد، روزمره، کمی پریمیوم و از نظر استفاده از طلایی کنترل‌شده باشد.
- **Design assumption:** معماری چهارلایه `primitive`، `semantic`، `state` و `component` برای مقیاس فعلی و آینده شمش مناسب است.
- **Design assumption:** Light و Dark از یک قرارداد معنایی مشترک استفاده می‌کنند و تفاوت تم نباید وارد نام توکن شود.
- **Risk:** مقادیر نهایی وابسته به برندبوک، تست کنتراست و رفتار واقعی فلوها هستند؛ تثبیت زودهنگام آن‌ها باعث بازکاری می‌شود.

## اهداف معماری

- جدا کردن معنای محصول از مقدار خام رنگ، اندازه یا فونت.
- امکان تغییر برند بدون تغییر نام توکن‌های مصرف‌شده در کامپوننت‌ها.
- پشتیبانی از Light و Dark با یک ساختار مشترک.
- پشتیبانی از RTL با استفاده از جهت‌های منطقی `start/end` و `inline/block`.
- ایجاد نقش‌های روشن برای اعتماد، وضعیت مالی، طلا و داده‌های حساس.
- جلوگیری از تولید توکن‌های تکراری توسط طراح، توسعه‌دهنده یا Agent.
- قابل‌انتقال بودن ساختار میان مستندات، Figma و کد.

## خارج از محدوده این قدم

- انتخاب کد رنگ نهایی.
- انتخاب خانواده و وزن‌های نهایی فونت.
- تعیین مقدار نهایی Radius، Elevation و Motion personality.
- پیاده‌سازی Variables در Figma یا خروجی توکن در کد.
- تعریف نهایی وضعیت‌های مالی وابسته به فلوهای مرحله ۵ و ۶.
- تعیین فرمت نمایش تومان، گرم، سوت، درصد و تاریخ؛ این موارد قانون محتوا و Localization هستند و در قدم ۵ پوشش داده می‌شوند.

## مدل وابستگی

```text
primitive ────────> semantic ─────────────> component
     │                  │                       ▲
     └──────────────────┴──────> state ─────────┘
```

قانون اصلی مصرف:

- محصول و صفحه‌ها از `semantic` و در صورت نیاز از `component` استفاده می‌کنند.
- کامپوننت‌ها از `semantic` و `state` تغذیه می‌شوند.
- `primitive` فقط منبع مقدار است و مستقیماً وارد UI محصول نمی‌شود.
- `component` فقط برای نیاز تکرارشونده‌ای ساخته می‌شود که با توکن معنایی عمومی قابل بیان نیست.

## لایه ۱: Primitive

`primitive` مقدارهای خام و بدون معنای کاربردی را نگه می‌دارد. تغییر برند بیشترین اثر را در این لایه دارد.

نمونه نام‌ها:

- `primitive.color.neutral.0`
- `primitive.color.neutral.100`
- `primitive.color.gold.500`
- `primitive.dimension.space.4`
- `primitive.dimension.radius.2`
- `primitive.typography.size.3`
- `primitive.motion.duration.2`

قواعد:

- نام Primitive باید خانواده و درجه را توصیف کند، نه محل مصرف را.
- Primitive نباید نام صفحه یا کامپوننت داشته باشد.
- عدد انتهای نام بیانگر ترتیب در مقیاس است، نه الزاماً مقدار واقعی.
- مقادیر برندمحور تا رسیدن برندبوک `Draft` می‌مانند.
- مصرف مستقیم Primitive فقط در صفحه مستندات Foundation و بررسی مقیاس مجاز است.

## لایه ۲: Semantic

`semantic` نقش پایدار هر مقدار را در تجربه تعریف می‌کند. این لایه قرارداد اصلی میان طراحی و کد است و Light/Dark در همین سطح نگاشت می‌شوند.

نمونه نام‌ها:

- `semantic.color.surface.canvas`
- `semantic.color.text.primary`
- `semantic.color.border.default`
- `semantic.color.action.primary.container`
- `semantic.color.status.danger.foreground`
- `semantic.color.trust.verified.foreground`
- `semantic.color.financial.increase.foreground`
- `semantic.color.gold.accent`
- `semantic.color.overlay.scrim`
- `semantic.color.focus.ring`

قواعد:

- نام باید «نقش» را توصیف کند، نه ظاهر را؛ `text.primary` درست و `text.black` ممنوع است.
- نام تم وارد توکن نمی‌شود؛ `surface.canvas.dark` ممنوع است.
- هر توکن رنگ Semantic باید نگاشت Light و Dark داشته باشد.
- تغییر مقدار توکن نباید نیازمند تغییر نام آن در مصرف‌کننده باشد.
- نقش‌های مالی و اعتماد فقط وقتی اضافه می‌شوند که تفاوت معنایی واقعی داشته باشند.

## لایه ۳: State

`state` رفتارهای مشترک تعاملی و وضعیت‌های سیستمی را تعریف می‌کند. این لایه از تکثیر Hover، Pressed، Focus و Disabled در تک‌تک کامپوننت‌ها جلوگیری می‌کند.

نمونه نام‌ها:

- `state.color.action.primary.hover`
- `state.color.action.primary.pressed`
- `state.color.action.destructive.hover`
- `state.color.control.disabled.container`
- `state.color.control.disabled.content`
- `state.opacity.disabled`
- `state.focus.ring.color`
- `state.focus.ring.width`
- `state.motion.feedback.duration`

قواعد:

- State فقط وقتی عمومی است که حداقل در چند خانواده کامپوننت رفتار یکسان داشته باشد.
- وضعیت خاص یک کامپوننت در لایه `component` باقی می‌ماند.
- Focus با Hover یکی نیست و باید توکن و معیار مستقل داشته باشد.
- Disabled فقط کاهش Opacity نیست؛ خوانایی، کنتراست و قابل‌تشخیص بودن آن باید بررسی شود.
- Success، Warning و Error وضعیت معنایی‌اند و در `semantic.color.status` قرار می‌گیرند؛ Hover و Pressed رفتار تعاملی‌اند و در `state` قرار می‌گیرند.

## لایه ۴: Component

`component` آخرین لایه و نزدیک‌ترین سطح به UI است. این لایه تنها برای کامپوننت‌های پایدار و پیچیده استفاده می‌شود.

نمونه نام‌ها:

- `component.button.primary.container.default`
- `component.button.primary.container.hover`
- `component.button.primary.content.default`
- `component.input.container.focused`
- `component.price-ticker.value.increase`
- `component.transaction-status.pending.container`

قواعد:

- یک کامپوننت ساده ابتدا باید مستقیماً با Semantic و State ساخته شود.
- توکن Component زمانی ساخته می‌شود که قرارداد آن در چند Variant یا محل مصرف تکرار شود.
- نام Component نباید نام یک صفحه خاص مثل `home` یا `profile` را وارد سیستم کند.
- توکن Component باید به Semantic یا State Alias شود، نه به مقدار خام.
- کامپوننت `Draft` اجازه تولید توکن `Stable` ندارد.

## قرارداد نام‌گذاری

فرم عمومی:

```text
[layer].[category].[role].[subrole].[property].[state]
```

همه بخش‌ها اجباری نیستند؛ کوتاه‌ترین نامی استفاده می‌شود که معنا را بدون ابهام منتقل کند.

قواعد نام:

- نام مرجع در مستندات با `dot.case` نوشته می‌شود.
- معادل Figma با `/` نمایش داده می‌شود؛ برای مثال `semantic/color/text/primary`.
- معادل پیشنهادی CSS با `--` و خط تیره است؛ برای مثال `--semantic-color-text-primary`.
- نام‌ها انگلیسی، lowercase و بدون مخفف مبهم هستند.
- واژه‌های فیزیکی مانند `left/right` برای فاصله و چیدمان ممنوع‌اند؛ از `start/end` و `inline/block` استفاده می‌شود.
- مقدار، تم، پلتفرم و نام صفحه وارد نام Semantic نمی‌شوند.
- وضعیت در انتهای نام می‌آید: `default`، `hover`، `pressed`، `focused`، `disabled`، `loading`.
- `default` فقط زمانی نوشته می‌شود که همان خانواده Stateهای دیگری هم داشته باشد.

## دسته‌های پایه

| دسته | نقش | نمونه |
|---|---|---|
| `color` | Surface، متن، مرز، Action، Status، Trust، Finance، Gold، Overlay و Focus | `semantic.color.text.primary` |
| `typography` | خانواده، اندازه، وزن، Line-height و نقش اعداد | `semantic.typography.number.amount` |
| `dimension.space` | فاصله داخلی و خارجی | `primitive.dimension.space.4` |
| `dimension.size` | اندازه کنترل، آیکن و Touch target | `semantic.dimension.control.height.medium` |
| `dimension.radius` | گردی سطح و کنترل | `semantic.dimension.radius.control` |
| `dimension.stroke` | ضخامت Border و Focus ring | `semantic.dimension.stroke.focus` |
| `elevation` | جداسازی سطوح و Overlay | `semantic.elevation.overlay` |
| `motion` | Duration و Easing بر اساس نقش | `semantic.motion.feedback.duration` |
| `opacity` | Scrim، Disabled و محتوای ثانویه در صورت نیاز | `state.opacity.disabled` |
| `icon` | اندازه و Stroke نقش‌های آیکن | `semantic.icon.size.control` |
| `layer` | ترتیب نمایش Overlayها | `semantic.layer.modal` |

Breakpoint، فرمت عدد، واحد مالی، Locale و Direction بخشی از قرارداد پلتفرم‌اند؛ فقط در صورت وجود مصرف واقعی مشترک به توکن تبدیل می‌شوند.

## واژگان اولیه رنگ‌های Semantic

این فهرست نام و نقش را مشخص می‌کند، نه مقدار را.

### Surface

- `semantic.color.surface.canvas`: پس‌زمینه اصلی صفحه.
- `semantic.color.surface.base`: سطح محتوای هم‌سطح با صفحه.
- `semantic.color.surface.raised`: سطح جداشده مانند منو یا Sheet.
- `semantic.color.surface.sunken`: سطح فرورفته برای ناحیه کم‌تاکید.
- `semantic.color.surface.inverse`: سطح با کنتراست معکوس.
- `semantic.color.surface.disabled`: سطح غیرفعال.

### Text and icon content

- `semantic.color.text.primary`
- `semantic.color.text.secondary`
- `semantic.color.text.tertiary`
- `semantic.color.text.inverse`
- `semantic.color.text.disabled`
- `semantic.color.text.link`
- `semantic.color.icon.primary`
- `semantic.color.icon.secondary`
- `semantic.color.icon.inverse`
- `semantic.color.icon.disabled`

### Border

- `semantic.color.border.subtle`
- `semantic.color.border.default`
- `semantic.color.border.strong`
- `semantic.color.border.interactive`
- `semantic.color.border.disabled`
- `semantic.color.border.divider`

### Action

- `semantic.color.action.primary.container`
- `semantic.color.action.primary.content`
- `semantic.color.action.secondary.container`
- `semantic.color.action.secondary.content`
- `semantic.color.action.tertiary.content`
- `semantic.color.action.destructive.container`
- `semantic.color.action.destructive.content`

### Status

برای هر نقش `success`، `warning`، `danger`، `info` و `neutral` در صورت نیاز این Propertyها مجازند:

- `foreground`
- `container`
- `border`
- `icon`

نمونه: `semantic.color.status.warning.container`.

### Trust

- `semantic.color.trust.evidence.foreground`
- `semantic.color.trust.evidence.container`
- `semantic.color.trust.verified.foreground`
- `semantic.color.trust.verified.container`
- `semantic.color.trust.pending.foreground`
- `semantic.color.trust.pending.container`

توکن Trust مجوز ساخت ادعای اعتماد نیست؛ فقط شواهد یا وضعیت تأییدشده محصول را نمایش می‌دهد.

### Financial data

- `semantic.color.financial.increase.foreground`
- `semantic.color.financial.decrease.foreground`
- `semantic.color.financial.neutral.foreground`
- `semantic.color.financial.pending.foreground`
- `semantic.color.financial.locked.foreground`
- `semantic.color.financial.live.indicator`

افزایش و کاهش نباید فقط با رنگ منتقل شوند؛ علامت، Label یا Icon هم لازم است.

### Gold accent

- `semantic.color.gold.accent`
- `semantic.color.gold.on-accent`
- `semantic.color.gold.container`
- `semantic.color.gold.border`

طلایی نقش هویت و تأکید محدود دارد و جایگزین Action، Success یا Surface عمومی نیست.

### Overlay and focus

- `semantic.color.overlay.scrim`
- `semantic.color.overlay.highlight`
- `semantic.color.focus.ring`
- `semantic.color.focus.ring.inverse`

## معماری Typography

Primitiveها مقدارهای خام خانواده، اندازه، وزن و Line-height را نگه می‌دارند. Semanticها نقش مصرف را مشخص می‌کنند.

نقش‌های اولیه:

- `semantic.typography.display.large`
- `semantic.typography.heading.large`
- `semantic.typography.heading.medium`
- `semantic.typography.heading.small`
- `semantic.typography.body.large`
- `semantic.typography.body.medium`
- `semantic.typography.body.small`
- `semantic.typography.label.large`
- `semantic.typography.label.medium`
- `semantic.typography.label.small`
- `semantic.typography.number.price`
- `semantic.typography.number.amount`
- `semantic.typography.number.balance`
- `semantic.typography.number.metadata`

قواعد:

- نقش‌های عددی باید امکان استفاده از ارقام Tabular را داشته باشند.
- نام نقش Typography اندازه پیکسلی را حمل نمی‌کند.
- Display فقط برای نقاط واقعاً برجسته است و داخل پنل‌ها یا کنترل‌های فشرده استفاده نمی‌شود.
- خانواده فونت نهایی تا دریافت برندبوک `Open question` باقی می‌ماند.

## معماری Dimension، Elevation و Motion

- Spacing بر اساس یک مقیاس محدود و قابل ترکیب ساخته می‌شود؛ ریتم 4/8 فعلاً `Design assumption` است.
- اندازه‌ها با نقش‌هایی مانند `control.height.small|medium|large` و `icon.size.small|medium|large` بیان می‌شوند.
- Radius به نقش‌های محدود مانند `control`، `container`، `overlay` و `full` نگاشت می‌شود.
- Elevation به نقش‌هایی مانند `raised`، `sticky`، `overlay` و `modal` محدود می‌شود.
- Motion بر اساس هدف نام‌گذاری می‌شود: `feedback`، `transition`، `enter` و `exit`.
- Reduced Motion باید قرارداد جایگزین داشته باشد و فقط کاهش تصادفی Duration کافی نیست.

## معماری Light و Dark

- Primitiveها معمولاً Mode ندارند و منبع مقادیر خام‌اند.
- Semantic Color دارای Modeهای `Light` و `Dark` است.
- State Color در هر دو Mode بررسی و در صورت نیاز جداگانه نگاشت می‌شود.
- Component token به Semantic و State Alias می‌شود و مقدار ثابت تم‌محور ندارد.
- نام توکن در دو تم ثابت می‌ماند؛ فقط Alias یا مقدار نهایی تغییر می‌کند.
- Dark Mode معکوس‌کردن مکانیکی Light نیست؛ نقش سطح، عمق، کنتراست و طلایی جداگانه ارزیابی می‌شود.

تعریف Modeها و قواعد تغییر تم در `theme-architecture.md` ثبت شده است. مقدارهای نهایی Light/Dark پس از برندبوک و تست کنتراست تکمیل می‌شوند.

## معماری RTL

- Direction بخشی از نام Color یا Typography نیست.
- فاصله‌ها و Positionهای جهت‌دار با `inline-start`، `inline-end`، `block-start` و `block-end` تعریف می‌شوند.
- آیکن جهت‌دار باید در RTL رفتار Mirror مشخص داشته باشد؛ این رفتار قانون Icon است، نه رنگ.
- عدد، کد پیگیری، شماره موبایل و شناسه می‌توانند داخل رابط RTL ناحیه LTR مستقل داشته باشند.
- جزئیات عملی RTL و Localization در `rtl-and-localization.md` ثبت شده است.

## قرارداد ثبت هر توکن

هر توکن پیشنهادی باید حداقل این اطلاعات را داشته باشد:

| فیلد | توضیح |
|---|---|
| نام مرجع | نام کامل مطابق Naming |
| لایه | `primitive`، `semantic`، `state` یا `component` |
| نوع | Color، Number، String، Boolean، Shadow یا Typography composite |
| نقش | مسئله‌ای که توکن حل می‌کند |
| Alias یا مقدار | منبع بالادستی |
| مقدار Light | در صورت Theme-aware بودن |
| مقدار Dark | در صورت Theme-aware بودن |
| وضعیت | `Draft`، `Candidate`، `Tested`، `Stable` یا `Deprecated` |
| وابستگی | برندبوک، فلو، Accessibility، Engineering یا تصمیم محصول |
| مثال مصرف | محل استفاده صحیح |
| ممنوعیت | محل استفاده نادرست |
| مالک | مسئول بازبینی و تغییر |

## نمونه مسیر Alias

```text
Light:
primitive.color.neutral.0
  -> semantic.color.surface.canvas
  -> component.sheet.container

Dark:
primitive.color.neutral.950
  -> semantic.color.surface.canvas
  -> component.sheet.container

Interaction:
semantic.color.action.primary.container
  -> state.color.action.primary.hover
  -> component.button.primary.container.hover
```

این مثال فقط وابستگی را نشان می‌دهد و مقدار یا Palette نهایی را تعیین نمی‌کند.

## سیاست مصرف در Figma و کد

- صفحه و Feature جدید حق مصرف Primitive را ندارند.
- مقدار خام فقط در تعریف Primitive مجاز است.
- Semantic سطح عمومی مصرف است.
- Component token سطح استثناست و باید طبق Governance توجیه شود.
- نام مرجع در Figma و کد باید قابل نگاشت یک‌به‌یک باشد.
- Alias شکسته، Variable بدون مصرف و مقدار Duplicate در Audit ثبت می‌شود.
- تغییر مقدار Semantic تغییر ظاهری است؛ تغییر معنای Semantic نیازمند بازبینی نام و اثر روی مصرف‌کنندگان است.

## ضدالگوهای ممنوع

- `color.gray.700` داخل کامپوننت محصول.
- نام‌هایی مانند `dark-background`، `homepage-gold` یا `nice-shadow`.
- ساخت توکن جدید فقط برای یک مقدار تصادفی در یک صفحه.
- استفاده از `success` برای افزایش قیمت بدون تأیید معنای محصول.
- استفاده از طلایی برای همه Actionهای اصلی صرفاً به دلیل هویت برند.
- یکی‌گرفتن Error، Destructive action و Financial decrease.
- ساخت State فقط با تغییر Opacity بدون بررسی کنتراست.
- انتقال مفهوم مالی یا وضعیت فقط با رنگ.
- ورود `left/right` به توکن‌های Layout و Spacing.
- Stable کردن توکن وابسته به برندبوک یا فلو حل‌نشده.

## تصمیم‌های باز

- **Open question:** Palette، فونت، Radius و Motion نهایی برند چه زمانی تحویل می‌شوند؟
- **Open question:** فرمت نهایی ذخیره و تبدیل توکن‌ها در کد چیست؛ JSON، CSS variables یا ابزار Build اختصاصی؟
- **Open question:** تغییر تم در PWA فقط دستی است، از تنظیم سیستم پیروی می‌کند یا هر دو؟
- **Open question:** وضعیت‌های دقیق مالی و تراکنش پس از تکمیل فلوها چه هستند؟
- **Open question:** آیا در آینده تم یا White-label دیگری غیر از Light/Dark لازم خواهد شد؟

## معیار تکمیل قدم ۳

قدم ۳ زمانی `Sufficient to proceed` است که:

- وابستگی چهار لایه و قانون مصرف هر لایه روشن باشد.
- قرارداد Naming برای مستندات، Figma و کد تعریف شده باشد.
- دسته‌های Foundation و واژگان اولیه Semantic مشخص باشند.
- مصرف مستقیم Primitive در محصول ممنوع شده باشد.
- Light و Dark بتوانند با نام‌های مشترک از Semantic تغذیه شوند.
- RTL در Naming به جهت‌های منطقی متکی باشد.
- وابستگی‌های برند و محصول با برچسب سؤال باز جدا شده باشند.

## گیت وضعیت فعلی

وضعیت: `Sufficient to proceed for Step 4`

توضیح: اسکلت توکن‌ها، قرارداد Naming، لایه‌های مصرف و واژگان اولیه تعریف شده‌اند. مقادیر نهایی عمداً باز مانده‌اند. این خروجی مبنای تعریف معماری Theme و نگاشت Light/Dark در `theme-architecture.md` قرار گرفته است.
