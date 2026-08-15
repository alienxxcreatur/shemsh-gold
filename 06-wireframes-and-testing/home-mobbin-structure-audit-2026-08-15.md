# ممیزی ساختار خانه با Mobbin

تاریخ: ۱۵ اوت ۲۰۲۶  
منبع: Mobbin MCP، مشاهده مستقیم Preview اسکرین‌ها  
دامنه: صفحه خانه وایرفریم چندفلزی شمش  
وضعیت: `Partially superseded by D-159`؛ پیشنهاد سه‌ردیفه تاریخی است و مسیر فعال Cardمحور با اولویت بصری طلاست

خروجی تصویری تاریخی: `artifacts/home-mobbin-structure-candidate.png` — وایرفریم سه‌ردیفه ردشده در Review  
خروجی تصویری فعال: `artifacts/home-mobbin-card-priority-candidate-v2.png` — Rail Cardمحور با طلا به‌عنوان Card اصلی، نقره ثانویه و Peek مس

## نتیجه Review مالک محصول — D-159

- `Business decision`: حالت Card مستقل فلزها حفظ می‌شود.
- `Business decision`: طلا بر اساس تمایل مورد انتظار بیشتر کاربران، Card اصلی و بزرگ‌تر خانه است؛ نقره اولویت دوم و مس اولویت سوم دارد.
- `Business decision`: این اولویت Geometry خانه است و هویت چندفلزی، دسترسی، قواعد یا Capability سایر فلزها را کاهش نمی‌دهد.
- `Superseded candidate`: Container سه‌ردیفه هم‌وزن دیگر مسیر پیشنهادی نیست.

## مسئله مشاهده‌شده در وایرفریم فعلی

- `Observed fact`: Rail دارایی با Cardهای نابرابر، طلا را بزرگ‌تر از نقره نشان می‌دهد و مس در Fold اول دیده نمی‌شود؛ این Geometry ممکن است با هویت غیرطلامحور D-105 تعارض ادراکی بسازد.
- `Observed fact`: CTA خریدوفروش واضح است، اما کیف تومان و چهار Shortcut تقریباً وزن بصری مشابه دارند؛ سلسله‌مراتب «دارایی ← اقدام اصلی ← پول ← کارهای فرعی» ضعیف می‌شود.
- `Observed fact`: چهار Shortcut در Grid دو در دو فضای عمودی زیادی می‌گیرند و Banner را به نزدیکی Bottom navigation هل می‌دهند.
- `Observed fact`: چشم مخفی‌کردن موجودی در چند سطح دیده می‌شود، اما جای آن میان Cardها یکدست نیست.
- `Risk`: خانه با ترکیب Card دارایی، CTA، کیف، چهار Shortcut و Banner در ارتفاع کوچک 667px احتمالاً Banner یا بخشی از Shortcutها را زیر Fold می‌برد.

## شواهد مستقیم Mobbin

- `Observed fact`: [Revolut — Capital at risk](https://mobbin.com/screens/01a009e9-42f7-4f74-9727-9abbec97f393) عدد اصلی را در یک ناحیه آرام نگه می‌دارد، چهار اقدام را در یک ردیف فشرده می‌چیند و Holdings را داخل یک Card لیستی قرار می‌دهد.
- `Observed fact`: [Revolut — Total wealth](https://mobbin.com/screens/a2d088dd-3c73-4d57-a905-420857a2aa7a) ثروت را با ردیف‌های Cash/Interest/Invest/Crypto در یک Container مشترک نمایش می‌دهد؛ هر ردیف مقصد مستقل و هم‌وزن دارد.
- `Observed fact`: [Coinbase — Portfolio expanded](https://mobbin.com/screens/9cc67605-c277-4edc-816d-010d0d50c0b3) عدد پورتفوی، نمودار، ردیف‌های Crypto/Cash و CTA دوگانه را پیش از محتوای اکتشافی قرار می‌دهد.
- `Observed fact`: [Coinbase — Portfolio compact](https://mobbin.com/screens/6e1821a9-8461-42cb-a28d-ee4c620253b2) در حالت فشرده فقط عدد، دو ردیف دارایی و Banner را بالای فهرست قیمت نگه می‌دارد؛ CTAها نزدیک Bottom navigation ثابت می‌مانند.
- `Observed fact`: [Coinbase — My assets](https://mobbin.com/screens/c3888b90-3f9a-45db-bdd6-d8329f4ccbc8) عنوان و ارزش دارایی را در Header محتوا می‌آورد و Buy & sell / Transfer را به‌صورت Action bar پایدار نمایش می‌دهد.
- `Observed fact`: [N26 — Home](https://mobbin.com/screens/c13cf3fd-f558-45f6-a093-38c3a80af173) حساب اصلی را یک Card می‌کند و Add money / Send money / Scheduled / More را در یک ردیف ۴تایی با Targetهای بزرگ قرار می‌دهد.
- `Observed fact`: [Fidelity — Positions](https://mobbin.com/screens/ceb6a911-7014-43dc-a3a7-33d7044c0644) Positionها را Rowمحور و بسیار قابل اسکن می‌کند، اما تراکم اطلاعات آن برای خانه شمش زیاد است و فقط مرجع Geometry ردیف دارایی است.

## پیشنهاد ساختاری اصلی

### ترتیب محتوا

1. Header ساده خانه
2. بلوک واحد «دارایی‌های فلزی» با سه ردیف هم‌وزن طلا، نقره و مس
3. CTA فشرده «خرید و فروش» بلافاصله زیر دارایی‌ها
4. Card کیف تومان با Affordance روشن برای بازشدن عملیات واریز/برداشت
5. یک ردیف ۴تایی Shortcut فشرده
6. Banner کمپین
7. Bottom navigation

`Design assumption`: تبدیل Cardهای نامتقارن فلز به Container واحد با سه Row، مقایسه و Scan را بهتر و سلطه بصری طلا را کمتر می‌کند. این پیشنهاد با الگوی Holdings در Revolut هم‌راستاست، ولی قبل از جایگزینی Rail فعلی باید با D-149 و مالک محصول تأیید شود.

## اندازه‌های پیشنهادی برای Frame عرض 390px

| بخش | اندازه پیشنهادی | توضیح |
|---|---:|---|
| Gutter افقی | 16px | عرض مفید 358px؛ در 320px به 12px کاهش یابد |
| فاصله عمودی Sectionها | 16px | داخل گروه وابسته 8 یا 12px |
| Header محتوا | 56px + safe area | آیکن‌ها 24px داخل Target حداقل 44px |
| Container دارایی‌ها | 220–236px | Header داخلی 36–40px + سه Row هرکدام 56–60px |
| Row هر فلز | 56–60px | Icon 32px؛ دو خط متن؛ Chevron/Status در انتها |
| CTA خریدوفروش | 48px | عرض کامل؛ Radius پیشنهادی 14–16px |
| Card کیف تومان | 76–84px | موجودی، Eye و Affordance Sheet در یک Row؛ کل Card قابل لمس |
| Shortcut grid یک‌ردیفه | 4 × 80–84px | فاصله 8px؛ Icon container برابر 40–44px؛ Label 13–14px |
| Banner | 88–104px | یک پیام، حداکثر دو خط عنوان/توضیح و یک Chevron |
| Bottom navigation | 64px + safe area | 3 مقصد؛ Target هر مقصد حداقل 48px |
| Radius Card اصلی | 16px | Card کوچک 14px؛ Chip/Icon container حدود 12px |
| عنوان عدد اصلی | 20–24px | رقم حساس؛ Labelها 12–14px، Body اصلی 14–16px |

این اعداد از نسبت‌های مشاهده‌شده در Previewهای Mobbin به Frame موبایل و تطبیق با قرارداد Touch-first پروژه استخراج شده‌اند؛ Spec نهایی Design System نیستند.

## اصلاح کم‌ریسک بدون تغییر قرارداد فعلی

اگر Rail دارایی و Grid دو در دو باید حفظ شوند:

- Cardهای فلز را هم‌عرض کنید: عرض 280–292px با Peek حدود 48–56px؛ هیچ Card فلزی بزرگ‌تر از دیگری نباشد.
- ارتفاع Card فلز را از حدود 120px به 104–112px کاهش دهید؛ Label، وزن و معادل ریالی را در سه خط ثابت نگه دارید.
- CTA خریدوفروش 48px و فاصله آن با Rail فقط 8px باشد تا رابطه آن‌ها روشن شود.
- ارتفاع هر Shortcut از حدود 112px به 84–92px کاهش یابد؛ Icon 40px و Target کل Card حفظ شود.
- Eye هر Card در یک Slot ثابت کنار Label «موجودی من» قرار گیرد و تغییر Layout ایجاد نکند.
- Banner را 88–96px نگه دارید و متن فرعی را به دو خط محدود کنید.

## تغییرات نیازمند تأیید مالک محصول

- `Design candidate`: جایگزینی Rail فلزها با Container سه‌ردیفه؛ اثر مستقیم بر هندسه D-149 دارد.
- `Design candidate`: انتقال «تاریخچه عملیات» از Grid خدمات به Row مستقل 56–64px همراه آخرین Status؛ Mobbin بانک‌ها History را در خانه قابل اسکن می‌کند، اما این تغییر D-148 را باز می‌کند.
- `Design candidate`: دو CTA مستقل «خرید / فروش» به‌جای CTA واحد؛ نمونه Coinbase این کار را روشن انجام می‌دهد، اما با D-147 و ورودی واحد معامله باید تصمیم‌گیری شود.

## توصیه نهایی برای دور بعدی Wireframe

Variant فعال D-159 با Rail نامتقارن ساخته و Review شود: طلا Card اصلی، نقره Card ثانویه، Peek/Indicator برای مس، Shortcutهای فشرده و Banner کوتاه. معیار Review: تشخیص وجود سه فلز، یافتن خریدوفروش، فهم امکان پیمایش Rail، یافتن کیف/واریز و رسیدن به تاریخچه در کمتر از ۵ ثانیه.

Gate این یادداشت: `Sufficient to proceed` برای ادغام Candidate Cardمحور در Prototype و QA؛ Gate 6 پروژه تغییری نکرده است.
