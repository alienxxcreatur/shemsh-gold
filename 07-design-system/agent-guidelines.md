# دستورالعمل اجرایی Agentها در سیستم طراحی شمش

وضعیت سند: `Draft / Design assumption`

تاریخ ایجاد: 20 Jul 2026

این سند خروجی قدم ۷ از مسیر `Design System Prep` است. هدف آن استفاده کنترل‌شده از Figma AI Agent و Codex برای اجرای کارهای تکراری، ساخت Draft و Audit است، بدون اینکه Agentها تصمیم محصول، برند یا بلوغ Library را به‌جای انسان بگیرند.

## مبنا

- **Observed fact:** Governance شمش خروجی Agent را فقط در `Sandbox / Draft` مجاز می‌داند.
- **Observed fact:** معماری توکن، Theme، RTL و معیارهای طراحی پیش از این سند تعریف شده‌اند.
- **Design assumption:** Agentها برای اجرای دقیق کار محدود، تولید نمونه و بررسی ساختاری مفیدند.
- **Risk:** Prompt باز یا Context ناقص می‌تواند Duplicate، Detach، Naming پراکنده، مقدار خام، ادعای مالی نادرست یا خروجی ظاهراً کامل اما غیرقابل استفاده ایجاد کند.
- **Business decision:** هیچ خروجی Agent بدون Audit انسانی `Stable` نمی‌شود.

## اصول غیرقابل مذاکره

1. Agent فقط در Scope نوشته‌شده کار می‌کند.
2. خروجی Agent همیشه `Draft` است.
3. منبع حقیقت Repository و تصمیم‌های ثبت‌شده پروژه است، نه حافظه Agent یا Chat.
4. کار Figma فقط در `Sandbox` یا Branch/ناحیه Draft مشخص انجام می‌شود.
5. Component موجود Detach، Flatten یا بازسازی محلی نمی‌شود.
6. Token، Mode، Naming یا Variant تازه بدون فرایند Proposal ساخته نمی‌شود.
7. RTL، Light/Dark، متن واقعی فارسی و Stateهای واقعی شرط پایه‌اند.
8. Agent تصمیم محصول، ادعای اعتماد، عدد مالی یا زبان برند اختراع نمی‌کند.
9. تغییر گسترده، حذف، Rename، Publish و انتقال به Library فقط با تأیید انسانی انجام می‌شود.
10. هر اجرا باید Manifest تغییرات و موارد حل‌نشده داشته باشد.

## نقش‌ها و اختیار

| نقش | مسئولیت | حق تأیید نهایی |
|---|---|---|
| مالک محصول / بیزینس | Scope، Business rule، قابلیت و عددهای محصول | تصمیم‌های محصول |
| طراح / مالک سیستم طراحی | معماری، Naming، کیفیت، Review و مدیریت Figma | طراحی و ورود به Library |
| Figma AI Agent | اجرای محدود در Sandbox طبق Prompt Packet | ندارد |
| Codex | جمع‌آوری Context، تدوین سند و Prompt، پیشنهاد ساختار و Audit | ندارد |
| برند | Palette، Typography، Asset و هویت نهایی | تصمیم‌های برند |
| حقوقی / انطباق | ادعا، مجوز، محدودیت و محتوای حساس | محتوای حقوقی و اعتماد |
| Engineering | امکان پیاده‌سازی، قرارداد کد، Theme، Responsive و Accessibility | آمادگی فنی |
| QA / تحقیق | تست سناریو، دستگاه، Accessibility و کاربر | شاهد تست |

Agent نباید خروجی خودش را تأیید نهایی کند. Codex هم اگر Prompt یا تغییر را ساخته است، فقط می‌تواند Self-audit اولیه انجام دهد؛ تصمیم بلوغ با مالک انسانی سیستم است.

## منابع حقیقت اجباری

پیش از هر کار سیستم طراحی، حداقل این اسناد براساس Scope خوانده می‌شوند:

1. `START-HERE.md`
2. `00-project-management/shemsh-project-context.md`
3. `00-project-management/project-status.md`
4. `00-project-management/decision-log.md`
5. `00-project-management/open-questions.md`
6. سند فعال Flow یا معماری تجربه
7. `07-design-system/governance.md`
8. `07-design-system/design-principles.md`
9. Foundation یا Component contract مرتبط

برای کارهای Foundation:

- `foundations/token-architecture.md`
- `foundations/theme-architecture.md`
- `foundations/rtl-and-localization.md`
- `accessibility-checklist.md`

برای کار Component یا Pattern:

- `component-inventory.md`
- `interaction-patterns.md`
- Flow، State model و Business rule همان قابلیت

Prompt نباید نسخه کپی‌شده و کوتاه‌شده یک تصمیم را جای منبع حقیقت معرفی کند؛ شناسه تصمیم یا مسیر سند هم باید ذکر شود.

## سطح ریسک کار Agent

### سطح A: کم‌ریسک

- چیدن Documentation frame.
- ساخت نمونه‌های Light/Dark و RTL از Instance موجود.
- جای‌گذاری داده واقعی فارسی برای تست طول.
- ساخت State matrix از Variantهای موجود.
- Inventory و Audit خواندنی بدون تغییر.
- مرتب‌سازی نمونه‌های Sandbox بدون تغییر Library.

Agent می‌تواند پس از Preflight این کارها را اجرا کند.

### سطح B: نیازمند Review نزدیک

- ساخت Draft کامپوننت تازه در Sandbox.
- افزودن Variant صریحاً مشخص‌شده در Prompt به نسخه Draft.
- تغییر Auto Layout، Responsive behavior یا Propertyهای Component Draft.
- پیشنهاد Token، Component یا Pattern.
- اصلاح چند Instance یا Documentation frame موجود.
- آماده‌سازی نمونه برای Candidate review.

این کارها باید قبل از اجرا Change list و پس از اجرا Audit کامل داشته باشند.

### سطح C: ممنوع برای Agent

- Publish یا Unpublish Library.
- تغییر خروجی به `Stable` یا `Deprecated`.
- حذف، Rename یا جابه‌جایی گسترده Component، Variable، Style، Page یا Section مشترک.
- تغییر مقدار نهایی Brand token.
- ایجاد یا حذف Variable collection و Theme mode بدون تأیید صریح مالک سیستم.
- Detach، Flatten یا Outline کردن Component و متن.
- تغییر Business rule، Scope، Roadmap یا Decision log به‌عنوان تصمیم نهایی.
- ساخت ادعای حقوقی، عدد مالی یا Evidence ساختگی.
- Overwrite کردن تغییرات انسانی خارج از Scope.

کار سطح C متوقف و به مالک مربوط ارجاع داده می‌شود.

## ناحیه کار در Figma

- کار Agent در ناحیه‌ای با نام روشن مانند `Sandbox / DS Prep / <task-id>` انجام می‌شود.
- هر Task Section مستقل با تاریخ، مالک، وضعیت و Prompt reference دارد.
- Agent به صفحه Library، Published components یا Foundationهای تأییدشده دست نمی‌زند، مگر Prompt صریح برای Read-only audit باشد.
- Frameهای قبلی کاربر حذف یا بازنویسی نمی‌شوند.
- خروجی جایگزین کنار نسخه قبلی ساخته می‌شود تا Diff بصری ممکن باشد.
- ناحیه `Proposed tokens`، `Proposed components` و `Open issues` از خروجی بصری جدا و قابل تشخیص است.
- Temporary value فقط داخل Sandbox و با Label روشن مجاز است؛ وارد Component مشترک یا Library نمی‌شود.

## چرخه استاندارد کار

### ۱. Intake

Agent یا Codex باید Goal، Scope، منبع حقیقت، Deliverable و ممنوعیت‌ها را دریافت کند. عبارت‌هایی مانند «کل دیزاین سیستم را بساز» یا «این صفحه را حرفه‌ای کن» Prompt اجرایی معتبر نیستند.

### ۲. Preflight

پیش از تغییر، این موارد گزارش می‌شوند:

- فایل، Page، Section یا مسیر هدف.
- Componentها، Variables و Styles موجود که مصرف خواهند شد.
- Flow و Stateهای تحت پوشش.
- موارد نامشخص یا متناقض.
- فهرست تغییرات برنامه‌ریزی‌شده.
- مواردی که عمداً خارج از Scope می‌مانند.

اگر Preflight کامل نیست، اجرا شروع نمی‌شود.

### ۳. اجرای محدود

- تغییر در کوچک‌ترین محدوده ممکن انجام می‌شود.
- Instance، Token و Component موجود بر ساخت مورد تازه اولویت دارد.
- هر بخش پس از ساخت بررسی می‌شود؛ Agent یک Batch بزرگ و غیرقابل Audit تولید نمی‌کند.
- Output در طول اجرا `Draft` باقی می‌ماند.
- مسئله تازه به Scope افزوده نمی‌شود؛ در `Open issues` ثبت می‌شود.

### ۴. Self-audit

Agent خروجی را با Prompt، این سند، `design-principles.md` و Foundationهای مرتبط بررسی می‌کند. Self-audit جای Review انسانی را نمی‌گیرد.

### ۵. Output manifest

تمام موارد ساخته‌شده، تغییرکرده، مصرف‌شده، پیشنهادی و حل‌نشده گزارش می‌شوند.

### ۶. Human review

مالک سیستم یا Reviewer انسانی درباره اصلاح، Candidate شدن، رد یا توقف تصمیم می‌گیرد. Agent اجازه انتقال مستقیم به Library را ندارد.

## Prompt Packet اجباری

هر Prompt اجرایی باید این فیلدها را داشته باشد:

| فیلد | الزام |
|---|---|
| `Task ID` | شناسه یکتا و قابل ارجاع |
| `Goal` | یک نتیجه مشخص و قابل بررسی |
| `Maturity` | معمولاً `Sandbox / Draft` |
| `Target` | فایل، Page، Section یا مسیر دقیق |
| `Source of truth` | اسناد، Decisionها و Flow مرتبط |
| `Allowed changes` | فهرست تغییرات مجاز |
| `Forbidden changes` | مرزهایی که نباید لمس شوند |
| `Existing assets` | Component، Token، Style و Asset قابل مصرف |
| `Content` | متن و داده واقعی یا Dataset تست |
| `States` | Stateهای لازم و Stateهای خارج از Scope |
| `Theme` | Light/Dark و Surfaceهای تست |
| `Direction` | RTL، Scopeهای LTR و رفتار Icon |
| `Responsive` | عرض‌ها و رفتار Resize |
| `Accessibility` | Focus، Label، Contrast و Keyboard لازم |
| `Acceptance criteria` | شرایط قابل مشاهده قبولی |
| `Stop conditions` | موارد توقف و گزارش به انسان |
| `Output manifest` | قالب گزارش پس از اجرا |

## قالب Prompt Packet

```text
Task ID:
Goal:
Maturity: Sandbox / Draft
Target:

Source of truth:
-

Allowed changes:
-

Forbidden changes:
- Do not publish, detach, rename shared assets, or create Stable items.

Existing assets to use:
-

Required content and QA data:
-

Required states:
- Default
- Focused
- Disabled
- Loading
- Error

Theme and direction:
- RTL
- Light and Dark
- LTR isolation for identifiers

Responsive targets:
- Small mobile
- Standard mobile
- Web

Accessibility requirements:
-

Acceptance criteria:
-

Stop conditions:
- Missing semantic token
- Missing confirmed business rule
- Conflict with existing component

Return after execution:
- Created/modified items
- Tokens consumed
- Proposed tokens/components
- Overrides or temporary values
- Audit findings
- Open issues
```

Prompt Packet بدون Goal قابل سنجش، Target دقیق یا Stop condition اجرا نمی‌شود.

## قواعد Figma AI Agent

### مجاز است

- Instance موجود را در Sandbox استفاده و تنظیم کند.
- Variantهای صریحاً خواسته‌شده را در Component Draft بسازد.
- Auto Layout و Constraints را طبق قرارداد اصلاح کند.
- نمونه‌های RTL، Light/Dark، State و Responsive بسازد.
- متن واقعی فارسی و Dataset مالی تست را جای‌گذاری کند.
- Documentation layout و State matrix تولید کند.
- Duplicate، Detach، Raw value و Missing state را Audit کند.
- Token یا Component لازم را فقط به‌صورت Proposal ثبت کند.
- اصلاح محدود و قابل Diff روی خروجی Draft انجام دهد.

### مجاز نیست

- Component موجود را Detach، Flatten یا Outline کند.
- نام تازه خارج از Naming system اختراع کند.
- Variant صرفاً برای تفاوت ظاهری کوچک بسازد.
- Fill، Stroke، Effect، Radius یا Spacing خام را داخل Component مشترک تثبیت کند.
- Mode یا Collection تازه بسازد.
- Light و Dark را با Duplicate کردن Component جدا کند.
- RTL را با Flip کل Frame یا Space دستی بسازد.
- متن فارسی یا عدد را Vector کند.
- Placeholder عمومی را جای متن و داده واقعی بگذارد.
- Business rule، نرخ، کارمزد، سقف، زمان یا Status اختراع کند.
- تصویر، Logo یا Evidence ساختگی برای اعتماد بسازد.
- Page یا Library موجود را پاک‌سازی گسترده کند.
- خروجی را Publish، Stable یا Deprecated اعلام کند.

## قواعد Codex

### مجاز است

- Context را از Repository جمع‌آوری و تناقض را مشخص کند.
- سند، Prompt Packet، Dataset تست و Audit report بنویسد.
- Token، Component، State و Pattern gap را پیشنهاد دهد.
- خروجی Figma Agent یا کد را با اصول و قراردادها بررسی کند.
- تغییر محدود و درخواست‌شده در اسناد یا کد انجام دهد.
- سؤال باز و وابستگی بیرونی را با برچسب درست ثبت کند.
- در صورت درخواست، کار Figma را با همان Guardrailهای این سند اجرا کند.

### مجاز نیست

- Chat را جای Source of truth قرار دهد.
- Design assumption را Observed fact بنویسد.
- تصمیم محصول، برند یا حقوقی را بدون تأیید نهایی کند.
- Stage، Roadmap یا Scope را بدون فرایند تأیید ساختاری تغییر دهد.
- عدد یا کپی حساس را از حافظه یا رقیب وارد محصول کند.
- تغییرات کاربر یا خروجی خارج از Scope را Overwrite کند.
- خروجی ساخته‌شده توسط خودش را بدون Review انسانی `Stable` کند.
- از نبود Context عبور کند و با حدس، ساختار نهایی بسازد.

## قانون استفاده از Token

- UI و Component فقط از `semantic`، `state` و در صورت توجیه از `component` token استفاده می‌کنند.
- Primitive مستقیماً در UI محصول مصرف نمی‌شود.
- Agent Token تازه در Collection اصلی ایجاد نمی‌کند.
- نزدیک‌ترین Token فقط وقتی استفاده می‌شود که معنای آن دقیقاً منطبق باشد؛ شباهت رنگ یا اندازه کافی نیست.
- اگر Token لازم وجود ندارد، Agent توقف جزئی می‌کند و Proposal می‌نویسد.
- Temporary value در Sandbox با Label `TEMP / Proposed token` و در Manifest ثبت می‌شود.
- مقدار Light و Dark، نقش، Alias، Context و سوءاستفاده احتمالی Proposal باید مشخص باشند.
- Token پیشنهادی تا Review انسانی `Draft` است.

## قالب Proposed token

| فیلد | مقدار لازم |
|---|---|
| نام پیشنهادی | مطابق معماری Naming |
| لایه | `primitive`، `semantic`، `state` یا `component` |
| نوع | Color، Number، Typography، Shadow یا نوع معتبر |
| نقش | مسئله‌ای که حل می‌کند |
| مصرف‌کننده | Component یا Flow واقعی |
| Alias پیشنهادی | منبع بالادستی، اگر وجود دارد |
| Light / Dark | نیاز هر Mode، بدون تثبیت Brand value |
| شاهد نیاز | تکرار، Accessibility، Flow یا Brand dependency |
| جایگزین‌های بررسی‌شده | Tokenهای موجود و دلیل ناکافی بودن |
| وضعیت | `Draft / Proposed` |

Proposal بدون مصرف‌کننده واقعی یا دلیل Semantic رد می‌شود.

## قانون Component و Variant

- Component تازه فقط با Flow یا نیاز تکرارشونده واقعی پیشنهاد می‌شود.
- Agent ابتدا بررسی می‌کند آیا مسئله با Composition موجود حل می‌شود.
- Component Draft دارای Purpose، Anatomy، State، Property، RTL، Theme و Content constraint است.
- Variant برای تفاوت معنایی یا رفتاری است، نه هر تفاوت کوچک ظاهری.
- Boolean، Instance swap و Text property بر انفجار Variant اولویت دارند.
- State و Size محورهای جدا و محدودند.
- Variant بدون نمونه مصرف واقعی وارد Proposal نمی‌شود.
- Component مالی بدون Flow، Stateهای شکست و داده واقعی حتی `Candidate` نمی‌شود.
- Instance موجود Detach نمی‌شود؛ کمبود API یا ساختار به‌عنوان Issue گزارش می‌شود.

## قالب Proposed component

| فیلد | مقدار لازم |
|---|---|
| نام | مطابق Component naming |
| Job | کاری که پشتیبانی می‌کند |
| Flow / Wave | نیاز واقعی محصول |
| Anatomy | اجزای داخلی |
| Properties | Text، Boolean، Instance swap و موارد لازم |
| Variants | فقط محورهای ضروری |
| States | Default، Focus، Loading، Error و Stateهای دامنه |
| Tokens | Semantic و State tokenهای مصرفی |
| RTL / LTR | رفتار Direction و Identifierها |
| Light / Dark | نمونه و وابستگی |
| Accessibility | Label، Focus، Keyboard و Announcement |
| Content limits | متن بلند، عدد و Empty |
| Maturity | `Draft / Proposed` |

## داده واقعی اجباری

Agent از `لورم ایپسوم`، `12345` و Statusهای عمومی به‌عنوان تنها داده تست استفاده نمی‌کند. حداقل Dataset پایه:

| نوع | نمونه |
|---|---|
| مبلغ | `۱۲۰٬۰۰۰٬۰۰۰٬۰۰۰ تومان` |
| وزن | `۰٫۰۰۱ گرم (۱ سوت)` و `۱۲٫۳۷۵ گرم` |
| درصد | `۰٫۵٪`، `+۲٫۴٪` و `−۱٫۸٪` |
| نرخ | `۱۲٬۴۵۶٬۷۸۹ تومان` با Timestamp |
| موبایل | `0912 345 6789` |
| کد ملی | `0012345678` |
| شبا | `IR06 0170 0000 0000 0000 0000 01` |
| کد پیگیری | `TX-8F2A-0193` |
| تاریخ | `۲۹ تیر ۱۴۰۵، ساعت ۱۴:۳۲` |
| Status | `در حال تطبیق واریز` و `ارسال‌شده به بانک` |
| Error | علت، اثر و اقدام اصلاحی واقعی |

هر Prompt Dataset مرتبط خودش را هم اضافه می‌کند. Agent عدد نمونه را Fact یا Business rule تازه معرفی نمی‌کند.

## ماتریس خروجی اجباری

برای Component یا Pattern تعاملی، Prompt براساس Scope حداقل این ماتریس را پوشش می‌دهد:

| محور | حالت‌های پایه |
|---|---|
| Theme | Light، Dark |
| Direction | RTL و Scopeهای LTR داخل آن |
| Width | موبایل کوچک، موبایل معمول و وب یا عرض‌های مرتبط |
| Content | کوتاه، واقعی، بلند و مقدار بیشینه |
| Interaction | Default، Hover در وب، Pressed، Focus، Disabled |
| Async | Loading، Pending، Success، Error |
| Data | Empty، Populated، Invalid، Stale در صورت نیاز |
| Accessibility | Keyboard، Focus، Label و Zoom |

State نامرتبط حذف و دلیل آن در Prompt نوشته می‌شود؛ Agent نباید برای کامل نشان دادن جدول، State ساختگی ایجاد کند.

## قواعد Responsive و Layout

- Auto Layout، Constraints و اندازه‌های پایدار استفاده می‌شوند.
- متن و عدد نباید Container را بشکنند یا روی Action قرار گیرند.
- Fixed height فقط وقتی Content contract آن را اجازه می‌دهد.
- CTA، Header، Keyboard و Safe area روی موبایل تست می‌شوند.
- Component با Resize یا تغییر متن Layout shift غیرمنطقی ندارد.
- Card داخل Card و Section شناور تزئینی ساخته نمی‌شود.
- متن Panel و Component با Hero scale نمایش داده نمی‌شود.
- Icon button اندازه ثابت، Tooltip مناسب و Hit area کافی دارد.
- Agent برای جا دادن متن، Font size را خودسرانه کاهش نمی‌دهد.

## قواعد RTL و Theme

- Frame اصلی فارسی `RTL` است.
- `start/end`، `leading/trailing` و ترتیب منطقی استفاده می‌شوند.
- موبایل، OTP، شبا، کارت و کد پیگیری LTR و Isolate می‌شوند.
- آیکن فقط طبق قرارداد `rtl-and-localization.md` Mirror می‌شود.
- Light و Dark از یک Component set و Semantic tokenهای مشترک تغذیه می‌شوند.
- نامی مانند `dark-card`، `leftIcon` یا `goldButton2` ساخته نمی‌شود.
- Gold به‌طور خودکار CTA، Success یا افزایش قیمت نیست.
- Focus ring، Error، Disabled و Status در هر دو Theme تست می‌شوند.

## قواعد محتوا و اعتماد

- متن واقعی از Source مشخص می‌آید یا با Label `Draft copy` ثبت می‌شود.
- Agent ادعای «امن»، «تضمین‌شده»، «بدون مالیات» یا مشابه آن را اختراع نمی‌کند.
- Evidence ساختگی، Logo همکاری تأییدنشده یا مجوز Placeholder با ظاهر واقعی ممنوع است.
- Rate، Fee، Limit، SLA و Status فقط از Business rule یا Dataset صریح Prompt می‌آیند.
- محتوای نمونه حساس با برچسب `Sample data` نمایش داده می‌شود.
- Error علت، اثر و اقدام بعدی دارد.
- Empty، Loading و Error با هم جایگزین نمی‌شوند.

## Stop conditionها

Agent باید اجرا را در نقطه مرتبط متوقف و گزارش کند اگر:

- Business rule لازم وجود ندارد یا چند منبع متناقض‌اند.
- Token Semantic مناسب وجود ندارد.
- Component موجود با Prompt تعارض دارد.
- انجام کار نیازمند Detach، Rename، Delete یا Publish است.
- Scope از Task اولیه بزرگ‌تر شده است.
- Variant تازه دلیل معنایی یا Flow واقعی ندارد.
- RTL یا Dark بدون تغییر معماری قابل پشتیبانی نیست.
- محتوای اعتماد، حقوقی یا مالی نیازمند تأیید بیرونی است.
- برندبوک یا Asset نهایی برای تصمیم لازم است.
- Output قبلی کاربر در Target تغییر کرده و خطر Overwrite وجود دارد.
- ابزار Agent امکان حفظ ساختار، Variable binding یا Component relation را ندارد.

Agent بخش‌های مستقل و سالم Scope را می‌تواند تکمیل کند، اما مورد مسدود را حدس نمی‌زند.

## Self-audit ساختاری

پس از اجرا Agent باید پاسخ `بله/خیر/نامرتبط` و شاهد کوتاه بدهد:

### Scope

- فقط Target مشخص تغییر کرده است؟
- هیچ Page، Section یا Component خارج از Scope دست نخورده است؟
- Change list با خروجی نهایی منطبق است؟

### Structure

- Component یا Instance Detach نشده است؟
- Duplicate ناخواسته ایجاد نشده است؟
- Auto Layout و Constraints معتبرند؟
- Layerها نام روشن و منطقی دارند؟
- Hidden overflow یا overlap وجود ندارد؟

### Tokens

- Primitive مستقیم مصرف نشده است؟
- Raw fill، stroke، radius، spacing یا effect داخل Component مشترک وجود ندارد؟
- Tokenها از Naming موجود پیروی می‌کنند؟
- Proposalها جدا و `Draft` هستند؟

### States and behavior

- Stateهای Prompt کامل‌اند؟
- Loading، Pending، Error و Success با هم اشتباه نشده‌اند؟
- Focus، Disabled و Selected قابل تشخیص‌اند؟
- تغییر State اندازه Layout را نمی‌شکند؟

### RTL and content

- Frame واقعاً RTL است و کل Frame Flip نشده است؟
- شناسه‌های LTR ترتیب درست و Copy سالم دارند؟
- متن فارسی واقعی و مقدارهای طولانی تست شده‌اند؟
- Status یا مبلغ Ellipsis نشده است؟

### Theme and accessibility

- Light و Dark با همان Component پوشش داده شده‌اند؟
- Focus، Contrast و Status در هر دو Theme قابل تشخیص‌اند؟
- Label، Keyboard order و Touch target بررسی شده‌اند؟
- Reduced Motion در خروجی متحرک پوشش دارد؟

### Principles

- Hard gateهای `design-principles.md` عبور کرده‌اند؟
- Gold محدود و نقش‌دار است؟
- Evidence نزدیک تصمیم و منبع‌دار است؟
- CTA اصلی در Context روشن است؟
- Motion هدف مشخص دارد؟

## Human audit

Reviewer انسانی حداقل این موارد را بررسی می‌کند:

- درستی Job، Flow و Business rule.
- کافی بودن Stateها و Recovery.
- معنای Token و Variant، نه فقط صحت اتصال.
- سلسله‌مراتب CTA و اطلاعات مالی.
- ادعای اعتماد و منبع Evidence.
- کیفیت RTL، فارسی، عدد و BiDi روی دستگاه یا Prototype.
- Light/Dark، کنتراست و Focus.
- امکان پیاده‌سازی و نگه‌داری در کد.
- Duplicate، Debt یا پیچیدگی غیرضروری.
- بلوغ مناسب خروجی.

نتیجه Human audit یکی از این وضعیت‌هاست:

- `Needs revision`
- `Sufficient to proceed as Draft`
- `Candidate for flow testing`
- `Blocked by external decision`

Agent output مستقیماً نتیجه `Stable` دریافت نمی‌کند؛ مسیر Governance باید کامل شود.

## Output manifest اجباری

پس از هر اجرا این گزارش تحویل می‌شود:

```text
Task ID:
Result: Ready for human review | Needs input | Stopped by guardrail
Maturity: Draft

Created:
-

Modified:
-

Reused components:
-

Consumed tokens:
-

Proposed tokens/components:
-

Temporary values or overrides:
-

States and variants covered:
-

RTL / Light / Dark / Responsive coverage:
-

Self-audit findings:
-

Open issues and stop conditions:
-

Human review needed from:
- Design system owner
- Product / Brand / Legal / Engineering as applicable
```

گزارش خالی یا عبارت کلی «همه‌چیز درست است» قابل قبول نیست.

## پروتکل اصلاح

- اصلاح با Task ID قبلی یا شناسه Revision مرتبط انجام می‌شود.
- Reviewer Finding، شدت و Acceptance criteria را مشخص می‌کند.
- Agent فقط Findingهای تعیین‌شده را اصلاح می‌کند.
- نسخه قبلی برای مقایسه حذف نمی‌شود تا زمانی که Review تأیید کند.
- اصلاح نباید Refactor گسترده یا Naming تازه ایجاد کند.
- پس از اصلاح، Self-audit مربوط دوباره اجرا و Manifest به‌روزرسانی می‌شود.
- اگر اصلاح نیازمند تغییر معماری است، Task متوقف و Proposal جدا ساخته می‌شود.

## Promptهای ممنوع

- «یک دیزاین سیستم کامل و حرفه‌ای بساز.»
- «هرچه لازم است Component اضافه کن.»
- «این صفحه را لوکس‌تر و طلایی‌تر کن.»
- «Dark mode را خودت درست کن.»
- «تمام Variantهای ممکن را بساز.»
- «هر Token کم بود اضافه کن.»
- «خروجی را تمیز کن و موارد اضافی را حذف کن.»
- «براساس بهترین اپ‌های مالی قوانین محصول را کامل کن.»

این Promptها Goal، Scope، منبع حقیقت و Stop condition ندارند و تصمیم‌گیری غیرمجاز را به Agent واگذار می‌کنند.

## نمونه Prompt قابل قبول

```text
Task ID: DS-PREP-INPUT-001
Goal: ساخت Draft نمونه Amount Input برای تست ورود تومان در ماشین‌حساب خرید.
Maturity: Sandbox / Draft
Target: Sandbox / DS Prep / DS-PREP-INPUT-001

Source of truth:
- D-034, D-056, D-060, D-079
- foundations/rtl-and-localization.md
- foundations/theme-architecture.md
- design-principles.md

Allowed changes:
- Build one Draft component and documentation examples in Sandbox.
- Reuse existing Input, Label and Icon instances if available.

Forbidden changes:
- Do not publish, detach, rename shared items, create Stable tokens, or edit Library pages.

Required states:
- Empty, Filled, Focused, Disabled, Loading, Invalid format, Below minimum, Rate unavailable

Theme and direction:
- RTL in Light and Dark
- Numeric value isolated LTR
- Use `۱۲۰٬۰۰۰٬۰۰۰٬۰۰۰ تومان` as long-value QA data

Acceptance criteria:
- Label remains visible.
- Unit is never ambiguous.
- Error explains cause and next action.
- No raw values in shared component.
- No text overlap at small-mobile width.

Stop conditions:
- Missing semantic token
- Existing Input contract conflicts with the requested states
- Minimum amount is not confirmed in the cited flow

Return the required Output manifest.
```

این نمونه مجوز ساخت همان Component نیست؛ فقط شکل Prompt اجرایی معتبر را نشان می‌دهد.

## معیار تکمیل قدم ۷

قدم ۷ زمانی `Sufficient to proceed` است که:

- نقش و محدودیت Figma AI Agent و Codex روشن باشد.
- سطح ریسک کارها و ناحیه Sandbox تعریف شده باشد.
- Prompt Packet استاندارد و Stop condition اجباری باشد.
- قانون Token، Component، Variant، Content، RTL و Theme قابل اجرا باشد.
- Self-audit، Human audit و Output manifest تعریف شده باشند.
- Prompt نامعتبر و نمونه Prompt معتبر قابل مقایسه باشند.
- هیچ مسیر مستقیمی از خروجی Agent به `Stable` وجود نداشته باشد.

## گیت وضعیت فعلی

وضعیت: `Sufficient to proceed for Step 8`

توضیح: قرارداد اجرایی Agentها، Prompt Packet، مرز Sandbox، Stop condition، Proposal، Audit و Manifest ثبت شدند. قدم بعدی بازچینی Component inventory براساس موج‌های Release اول و نیاز واقعی Flowهاست.
