# معماری تم Light و Dark سیستم طراحی شمش

وضعیت سند: `Draft / Design assumption`

تاریخ ایجاد: 20 Jul 2026

این سند خروجی قدم ۴ از مسیر `Design System Prep` است و قرارداد تم‌های Light و Dark را روی معماری توکن‌های شمش تعریف می‌کند. در این قدم نقش‌ها، وابستگی‌ها، رفتار تغییر تم و معیارهای بررسی مشخص می‌شوند؛ مقدار نهایی رنگ‌ها همچنان به برندبوک و تست Accessibility وابسته است.

## مبنا و محدودیت

- **Observed fact:** معماری توکن‌ها در `token-architecture.md` بر چهار لایه `primitive`، `semantic`، `state` و `component` بنا شده است.
- **Observed fact:** چک‌لیست Accessibility پروژه بررسی مستقل Light و Dark و حداقل کنتراست 4.5:1 برای متن عادی را الزام می‌کند.
- **Business decision:** کیفیت بصری شمش باید آرام، دقیق، مالی، کمی پریمیوم و با طلایی کنترل‌شده باشد.
- **Design assumption:** Light و Dark دو Mode از یک سیستم معنایی‌اند، نه دو سیستم طراحی جدا.
- **Design assumption:** هر دو تم از شروع طراحی و تست، اهمیت یکسان دارند؛ Light نسخه اصلی و Dark نسخه فرعی محسوب نمی‌شود.
- **Risk:** انتخاب مقدارهای نهایی پیش از برندبوک و تست روی دستگاه واقعی می‌تواند کنتراست، هویت برند یا خوانایی داده مالی را آسیب بزند.

## هدف

- حفظ معنای ثابت توکن‌ها در Light و Dark.
- تغییر تم بدون تعویض کامپوننت یا Override محلی.
- جلوگیری از استفاده مستقیم رنگ ثابت در UI.
- تعریف سلسله‌مراتب Surface، متن، Border و Elevation در هر دو تم.
- کنترل استفاده از طلایی و جلوگیری از غالب شدن آن.
- تفکیک جهت تغییر قیمت از Success و Error.
- تضمین Focus، Status و داده مالی قابل‌تشخیص در هر دو تم.
- آماده کردن قرارداد مشترک برای Figma و پیاده‌سازی PWA.

## خارج از محدوده این قدم

- انتخاب Hex، RGB، OKLCH یا هر مقدار نهایی رنگ.
- تعیین Palette نهایی برند.
- طراحی کنترل تغییر تم در UI.
- تصمیم نهایی درباره تم پیش‌فرض محصول.
- ساخت Variables در Figma یا CSS variables در کد.
- تعریف تم High Contrast یا White-label.
- تعیین Palette نهایی نمودارها پیش از مشخص شدن نیاز واقعی فلوها.

## اصل محوری

نام و معنای توکن در تم‌ها ثابت می‌ماند؛ فقط Alias آن به Primitive تغییر می‌کند.

```text
semantic.color.surface.canvas
  Light -> primitive.color.neutral.[light-value]
  Dark  -> primitive.color.neutral.[dark-value]

component.card.container
  -> semantic.color.surface.raised
```

کامپوننت `card` از وجود Light یا Dark اطلاع ندارد. با تغییر Mode مجموعه Semantic، ظاهر آن بدون تغییر ساختار به‌روز می‌شود.

## ساختار Collection و Mode

| Collection | Mode | مسئولیت | مصرف مستقیم در محصول |
|---|---|---|---|
| `Primitive` | `Base` | Palette و مقیاس‌های خام | ممنوع |
| `Semantic` | `Light`, `Dark` | نقش‌های عمومی UI | مجاز و ترجیحی |
| `State` | `Light`, `Dark` | رفتارهای Hover، Pressed، Focus و Disabled | مجاز در کامپوننت |
| `Component` | `Base` | Aliasهای محدود و خاص کامپوننت | فقط داخل کامپوننت مربوط |

قواعد:

- Mode با نام توکن ترکیب نمی‌شود؛ نام‌هایی مانند `surface.dark` یا `text.light` ممنوع‌اند.
- Primitive منبع مشترک هر دو تم است و معمولاً Mode ندارد.
- Semantic و State محل اصلی تفاوت Light/Dark هستند.
- Component مقدار رنگ مستقل ندارد و به Semantic یا State Alias می‌شود.
- اگر یک توکن در هر دو تم مقدار یکسان دارد، باز هم قرارداد مصرف آن Semantic باقی می‌ماند.
- Theme نباید با Duplicate کردن Component set ساخته شود.

## قرارداد Surface

Surfaceها ساختار عمق و گروه‌بندی را می‌سازند. نقش‌ها در هر دو تم یکسان‌اند:

- `semantic.color.surface.canvas`: زمینه اصلی صفحه.
- `semantic.color.surface.base`: سطح محتوای هم‌سطح.
- `semantic.color.surface.raised`: سطح بالاتر مانند Menu، Popover یا Sheet.
- `semantic.color.surface.sunken`: ناحیه کم‌تأکید یا فرورفته.
- `semantic.color.surface.inverse`: سطح با کنتراست معکوس و مصرف محدود.
- `semantic.color.surface.disabled`: سطح کنترل غیرفعال.

### رفتار Light

- Canvas روشن‌ترین یا یکی از روشن‌ترین سطوح خنثی است.
- Raised با تغییر کنترل‌شده Tone، Border یا Elevation از Canvas جدا می‌شود.
- Shadow تنها وسیله جداسازی نیست.
- سطح‌ها نباید با کارت‌های تزئینی متعدد تکه‌تکه شوند.

### رفتار Dark

- Canvas الزاماً مشکی خالص نیست؛ مقدار نهایی باید با برند، خستگی چشم و نمایشگر واقعی تست شود.
- Surface بالاتر معمولاً با Tone روشن‌تر، Border یا ترکیبی کنترل‌شده از این دو جدا می‌شود.
- Shadow در Dark به‌تنهایی برای بیان عمق قابل اتکا نیست.
- استفاده زیاد از خاکستری‌های نزدیک نباید سلسله‌مراتب را نامرئی کند.
- سفید خالص برای همه متن‌ها یا سطح‌ها پیش‌فرض نیست و باید براساس نقش نگاشت شود.

### قواعد مشترک

- هر Surface باید جفت‌های مجاز Text، Icon و Border مشخص داشته باشد.
- Overlay و Modal روی نقش‌های Surface موجود سوار می‌شوند و Surface تازه اختراع نمی‌کنند.
- تصویر، Illustration و Logo با CSS invert به تم دیگر تبدیل نمی‌شوند؛ Asset مناسب هر تم یا نسخه مشترک تأییدشده لازم است.

## قرارداد Text و Icon

| نقش | کاربرد | جفت معمول |
|---|---|---|
| `text.primary` | عنوان، عدد اصلی و محتوای حیاتی | Canvas، Base، Raised |
| `text.secondary` | توضیح و داده پشتیبان | Canvas، Base، Raised |
| `text.tertiary` | Metadata کم‌تأکید | فقط در اندازه و کنتراست قابل قبول |
| `text.inverse` | متن روی Surface یا Action معکوس | Inverse یا Container تأییدشده |
| `text.disabled` | محتوای غیرفعال | Surface غیرفعال یا معمول |
| `text.link` | Action متنی و لینک | Surfaceهای عمومی |
| `icon.primary` | آیکن اطلاعاتی اصلی | Surfaceهای عمومی |
| `icon.secondary` | آیکن کم‌تأکید | Surfaceهای عمومی |
| `icon.inverse` | آیکن روی Container معکوس | Container تأییدشده |

قواعد:

- `primary` در Dark به معنی سفید خالص و در Light به معنی مشکی خالص نیست.
- Text و Icon ممکن است مقدار مشترک داشته باشند، اما نقش‌های جدا نگه داشته می‌شوند تا بعداً مستقل تغییر کنند.
- Placeholder با `text.tertiary` یکی فرض نمی‌شود و در صورت نیاز واقعی نقش مستقل می‌گیرد.
- Disabled باید همچنان قابل خواندن و قابل تشخیص از Enabled باشد.
- هیچ متن یا آیکنی مقدار ثابت مخصوص یک تم داخل Component ندارد.

## قرارداد Border و Divider

- `border.subtle`: جداسازی کم‌تأکید.
- `border.default`: مرز عمومی کنترل و Container.
- `border.strong`: جداسازی مهم یا ساختار متراکم.
- `border.interactive`: مرز کنترل قابل تعامل.
- `border.disabled`: مرز وضعیت غیرفعال.
- `border.divider`: تقسیم محتوایی بدون ساخت Container جدید.

قواعد:

- Border در Dark ممکن است برای بیان ساختار نقش پررنگ‌تری از Shadow داشته باشد.
- Border نباید جای Focus ring را بگیرد.
- Divider تزئینی بدون نقش در سلسله‌مراتب اضافه نمی‌شود.
- تفاوت Subtle و Default باید روی Surfaceهای اصلی هر دو تم قابل مشاهده باشد.

## قرارداد Action

هر Action حداقل Container و Content سازگار دارد:

- `action.primary.container` + `action.primary.content`
- `action.secondary.container` + `action.secondary.content`
- `action.tertiary.content`
- `action.destructive.container` + `action.destructive.content`

قواعد:

- Primary معنای «اقدام اصلی صفحه» دارد، نه «رنگ برند».
- طلایی به‌طور خودکار رنگ Primary Action نیست.
- Destructive از Error و Financial decrease جدا است.
- Hover، Pressed، Focus و Disabled از State tokenها تغذیه می‌شوند.
- Stateها باید در Light و Dark مستقل بررسی شوند؛ تغییر عددی یکسان تضمین‌کننده ادراک یکسان نیست.
- رابط Touch نباید برای فهم Action به Hover وابسته باشد.

## قرارداد Gold

طلایی در شمش نشانه هویت، ارزش و ارتباط با طلای واقعی است؛ اما استفاده زیاد از آن کیفیت مالی و خوانایی را کاهش می‌دهد.

نقش‌های مجاز اولیه:

- `semantic.color.gold.accent`: تأکید هویتی محدود.
- `semantic.color.gold.on-accent`: محتوای روی Accent تأییدشده.
- `semantic.color.gold.container`: زمینه طلایی کم‌تأکید.
- `semantic.color.gold.border`: مرز یا Highlight محدود.

موارد مصرف پیشنهادی:

- جزئیات هویتی برند.
- Highlight محدود دارایی طلا یا محصول فیزیکی.
- نقطه تأکید در Evidence مرتبط با ماهیت طلای واقعی، پس از تأیید محتوا.
- Selected یا Premium فقط وقتی معنای محصولی روشن دارد.

موارد ممنوع:

- استفاده برای تمام CTAها.
- استفاده به‌عنوان Success، Warning یا افزایش قیمت.
- استفاده گسترده روی Canvas و Surfaceهای اصلی.
- متن طلایی ریز بدون تست کنتراست.
- Glow، Gradient یا درخشش تزئینی برای القای لوکس بودن.

قواعد تم:

- Gold در Light و Dark می‌تواند به Primitive متفاوت Alias شود.
- Gold در Dark نباید صرفاً روشن‌تر یا درخشان‌تر شود؛ Saturation، Luminance و مساحت مصرف باید باهم بررسی شوند.
- `gold.on-accent` برای هر تم مستقل تست می‌شود.
- اگر Gold کنتراست کافی ندارد، نقش آن باید Border، Icon بزرگ یا تزئین غیرمتنی باشد؛ کنتراست با Shadow جبران نمی‌شود.

## قرارداد وضعیت‌های مالی

جهت تغییر بازار با نتیجه عملیات یکی نیست:

- `financial.increase`: افزایش عدد یا قیمت.
- `financial.decrease`: کاهش عدد یا قیمت.
- `financial.neutral`: بدون تغییر یا حالت خنثی.
- `financial.pending`: داده یا عملیات در انتظار.
- `financial.locked`: مقدار غیرقابل استفاده یا رزروشده.
- `financial.live`: نشانگر زنده بودن داده.

قواعد:

- Increase معادل Success نیست؛ افزایش قیمت ممکن است برای خریدار مطلوب نباشد.
- Decrease معادل Error یا Destructive نیست.
- رنگ جهت تغییر همراه علامت، Label، Arrow یا تغییر عددی قابل فهم استفاده می‌شود.
- Pending با Loading یکی نیست؛ Pending وضعیت کسب‌وکار و Loading وضعیت رابط است.
- Live فقط وقتی استفاده می‌شود که تازگی داده واقعاً قابل تضمین باشد.
- رنگ‌های نمودار و Price ticker در هر تم جدا تست می‌شوند و نباید صرفاً Invert شوند.
- فلش جهت تغییر قیمت باید با RTL و جهت هندسی افزایش/کاهش سازگار باشد؛ قرارداد آن در `rtl-and-localization.md` ثبت شده است.

## قرارداد Status و Trust

### Status

`success`، `warning`، `danger`، `info` و `neutral` برای نتیجه یا اهمیت سیستم استفاده می‌شوند. هر نقش در صورت نیاز دارای `foreground`، `container`، `border` و `icon` است.

### Trust

`evidence`، `verified` و `pending` برای نمایش مدرک، تأیید یا وضعیت بررسی استفاده می‌شوند.

قواعد:

- Verified فقط برای وضعیت واقعاً تأییدشده استفاده می‌شود.
- Trust token جایگزین Evidence، منبع، تاریخ یا توضیح نیست.
- Success و Verified حتی اگر مقدار بصری نزدیک داشته باشند، Alias معنایی یکسان محسوب نمی‌شوند.
- Warning و Trust pending یکی نیستند.
- همه Statusها در هر تم علاوه بر Hue با متن یا Icon قابل تشخیص‌اند.

## قرارداد State

Stateهای پایه:

- `default`
- `hover`
- `pressed`
- `focused`
- `selected`
- `disabled`
- `loading`
- `read-only` در کنترل‌های لازم

قواعد:

- Hover و Pressed باید نسبت به Default قابل تشخیص باشند، اما Layout را تغییر ندهند.
- Focus ring روی تمام Surfaceهای مجاز Component تست می‌شود.
- Selected یک وضعیت ماندگار است و نباید فقط شبیه Hover باشد.
- Loading معنای Action را مخفی نمی‌کند و از تغییر ناگهانی اندازه کنترل جلوگیری می‌کند.
- Disabled نباید تنها با کاهش شدید Opacity ساخته شود.
- Read-only با Disabled تفاوت دارد: محتوا قابل خواندن و در صورت نیاز قابل انتخاب باقی می‌ماند.
- State tokenهای رنگی در Light و Dark Mode مستقل دارند.

## Focus Ring

توکن‌های پایه:

- `semantic.color.focus.ring`
- `semantic.color.focus.ring.inverse`
- `state.focus.ring.width`
- `state.focus.ring.offset`

قواعد:

- Focus ring از Border عادی Component مستقل است.
- روی Canvas، Raised، Inverse، Action و Overlay تست می‌شود.
- Focus با تغییر رنگ متن یا Border به‌تنهایی نمایش داده نمی‌شود.
- Keyboard focus نباید با Hover پنهان شود.
- اگر یک Ring در همه زمینه‌ها کنتراست مناسب ندارد، نقش `inverse` برای زمینه‌های خاص استفاده می‌شود؛ Override محلی ممنوع است.

## Overlay، Scrim و Elevation

- `overlay.scrim` در هر تم مقدار مستقل دارد.
- Scrim باید محتوای زیرین را کم‌تأکید کند، بدون اینکه Modal یا Sheet را ناخوانا کند.
- Surface خود Overlay از `surface.raised` یا نقش تأییدشده Component تغذیه می‌شود.
- در Dark، Border و Tone بخشی از Elevation هستند و Shadow تنها نشانه عمق نیست.
- Tooltip، Popover، Sheet و Modal نباید هرکدام رنگ محلی و مستقل اختراع کنند.
- Toast و Banner براساس Status ساخته می‌شوند، نه براساس Scrim.

## تصویر، Logo و محتوای تصویری

- Asset مشترک فقط وقتی در هر دو تم استفاده می‌شود که خوانایی و لبه‌های آن حفظ شوند.
- Logo یا Mark در صورت نیاز می‌تواند نسخه `on-light` و `on-dark` داشته باشد؛ این تفاوت Asset است، نه نام Semantic Color.
- تصویر محصول فیزیکی طلا نباید با فیلتر تم تغییر ماهیت یا رنگ واقعی پیدا کند.
- Screenshot، QR code، Barcode و اسناد باید زمینه و Quiet zone قابل اعتماد داشته باشند.
- نمودار و Illustration برای Dark به بازبینی مستقل نیاز دارند و با Invert خودکار ساخته نمی‌شوند.

## رفتار تغییر تم در PWA

قرارداد فنی پیشنهادی:

1. انتخاب کاربر، در صورت وجود، بالاترین اولویت را دارد.
2. در حالت `System`، تنظیم `prefers-color-scheme` مبنا قرار می‌گیرد.
3. انتخاب تم باید پیش از اولین Paint اعمال شود تا Flash تم اشتباه رخ ندهد.
4. تغییر تم بدون Reload انجام می‌شود.
5. انتخاب کاربر به‌شکل پایدار ذخیره می‌شود.
6. `color-scheme` و رنگ نوار مرورگر PWA با تم فعال هماهنگ می‌شوند.
7. اگر حالت System فعال است، تغییر تنظیم سیستم در زمان اجرا دنبال می‌شود.
8. Transition تغییر تم کوتاه و محدود است و با Reduced Motion حذف یا ساده می‌شود.

- **Design assumption:** پشتیبانی از گزینه‌های `Light`، `Dark` و `System` الگوی مناسب اولیه است.
- **Open question:** آیا محصول در نسخه اول کنترل دستی تم خواهد داشت و تم پیش‌فرض چه خواهد بود؟

## قرارداد Figma

- مجموعه `Semantic` دارای Modeهای `Light` و `Dark` است.
- مجموعه `State` نیز Modeهای `Light` و `Dark` دارد.
- تمام Fill، Stroke، Effect و Text colorهای قابل توکن به Variable متصل می‌شوند.
- Component set برای تم Duplicate نمی‌شود.
- صفحه مستندات هر Foundation نمونه Light و Dark کنار هم دارد.
- نمونه‌های مالی، Trust، Error، Disabled و Focus با متن واقعی فارسی تست می‌شوند.
- هیچ Variable با نام Theme-specific مانند `dark-card` ساخته نمی‌شود.
- مقدار محلی فقط در Sandbox و با برچسب `Proposed token` مجاز است.
- Agent اجازه ندارد Mode تازه، مقدار نهایی یا Override محلی بدون Prompt صریح بسازد.

## قرارداد کد

- Component فقط Semantic، State یا Component token مصرف می‌کند.
- تغییر Theme در Root برنامه یا Scope کنترل‌شده انجام می‌شود.
- نام توکن‌ها در کد نگاشت یک‌به‌یک با نام مرجع دارند.
- مقدار Hex یا رنگ ثابت داخل Component ممنوع است.
- SSR یا Shell اولیه PWA باید Theme را پیش از Paint تعیین کند.
- Theme preference و Theme resolved از هم جدا نگه داشته می‌شوند؛ برای مثال Preference می‌تواند `system` و مقدار resolved برابر `dark` باشد.
- تست Visual regression برای هر دو Theme روی جریان‌های اصلی لازم است.
- Componentهای ثالث باید از طریق Adapter یا Theme bridge به Semantic tokenها وصل شوند.

## ماتریس بررسی اجباری

هر Theme باید حداقل این ترکیب‌ها را پوشش دهد:

| زمینه | محتوا یا State لازم |
|---|---|
| Canvas | Text primary/secondary، Link، Border، Focus |
| Base | Text، Icon، Divider، Input |
| Raised | Text، Menu item، Selected، Focus |
| Inverse | Text inverse، Icon inverse، Focus inverse |
| Primary action | Content، Hover، Pressed، Focus، Disabled، Loading |
| Destructive action | Content، Hover، Pressed، Focus، Disabled |
| Status containers | Success، Warning، Danger، Info، Neutral |
| Trust containers | Evidence، Verified، Pending |
| Financial data | Increase، Decrease، Neutral، Pending، Locked، Live |
| Gold | Accent، On-accent، Container، Border |
| Overlay | Scrim، Modal/Sheet surface، Focus، Close action |

همه ردیف‌ها با Light و Dark، متن فارسی واقعی، عدد مالی و اندازه‌های اصلی نمایش بررسی می‌شوند.

## معیار پذیرش هر توکن Theme-aware

- نقش آن در دو تم ثابت است.
- Light و Dark هر دو Alias مشخص دارند.
- جفت Foreground/Background آن ثبت شده است.
- کنتراست براساس چک‌لیست Accessibility بررسی می‌شود.
- وضعیت فقط با رنگ منتقل نمی‌شود.
- مقدار ثابت داخل Component ندارد.
- روی Surfaceهای مجاز و Stateهای اصلی تست شده است.
- وابستگی به برندبوک یا فلو با برچسب وضعیت ثبت شده است.

## ضدالگوهای ممنوع

- Duplicate کردن کل کتابخانه برای Dark.
- افزودن `light` یا `dark` به نام Semantic token.
- Invert کردن خودکار Palette، تصویر یا Logo.
- استفاده از مشکی و سفید خالص به‌عنوان پیش‌فرض بدون تست.
- ساخت Dark با کم کردن روشنایی تمام رنگ‌های Light.
- جبران کنتراست ضعیف متن با Shadow یا Glow.
- استفاده از Gold برای تمام CTAها یا تمام سطح‌های مهم.
- یکی گرفتن Increase با Success و Decrease با Error.
- Override محلی برای حل یک کامپوننت در یک تم.
- اتکا به Hover در تجربه موبایل.
- تغییر اندازه Border در Hover به‌شکلی که Layout جابه‌جا شود.
- نمایش Focus فقط در یکی از تم‌ها.

## تصمیم‌های باز

- **Open question:** تم پیش‌فرض PWA چیست؟
- **Open question:** نسخه اول کنترل `Light / Dark / System` دارد یا فقط از سیستم پیروی می‌کند؟
- **Open question:** Palette و نسبت دقیق طلایی در برندبوک چگونه تعریف می‌شود؟
- **Open question:** آیا Logo و Assetهای برند نسخه جدا برای زمینه روشن و تیره خواهند داشت؟
- **Open question:** فرمت فنی توکن‌ها و Theme bridge در کد چیست؟
- **Open question:** آیا نمودارهای مالی در موج‌های اول به Palette داده چندسری نیاز دارند؟
- **Open question:** آیا نیاز آینده به High Contrast یا White-label وجود دارد؟

## معیار تکمیل قدم ۴

قدم ۴ زمانی `Sufficient to proceed` است که:

- Light و Dark به‌عنوان Modeهای یک قرارداد مشترک تعریف شده باشند.
- مسئولیت Theme در Primitive، Semantic، State و Component روشن باشد.
- قواعد Surface، Text، Border، Action، Gold، Finance، Trust و Focus ثبت شده باشند.
- تغییر تم بدون Duplicate یا مقدار ثابت در Component ممکن باشد.
- قرارداد اولیه Figma و PWA مشخص باشد.
- ماتریس تست هر دو تم تعریف شده باشد.
- تصمیم‌های وابسته به برند و محصول به‌عنوان سؤال باز باقی مانده باشند.

## گیت وضعیت فعلی

وضعیت: `Sufficient to proceed for Step 5`

توضیح: قرارداد مشترک Light/Dark، Modeها، قواعد نگاشت Semantic و State، کنترل Gold، وضعیت‌های مالی، Focus و رفتار پیشنهادی PWA تعریف شدند. مقدارهای نهایی همچنان `Draft` هستند. این خروجی مبنای قواعد RTL و اعداد مالی در `rtl-and-localization.md` قرار گرفته است.
