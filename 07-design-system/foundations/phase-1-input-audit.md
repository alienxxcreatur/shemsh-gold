# ممیزی ورودی‌های فاز ۱ Foundations

وضعیت: `Active / Draft`

تاریخ: ۱۷ مرداد ۱۴۰۵ / 8 Aug 2026

## هدف

تعیین اینکه کدام بخش از Design System Prep، برندگاید قبلی و موج ۱ می‌تواند وارد سیستم طراحی اصلی شود، کدام بخش نیازمند بازطراحی است و کدام بخش باید تا رسیدن شواهد بیشتر `Draft` بماند.

## منابع بررسی‌شده

- `../design-system-prep-plan.md`
- `../design-principles.md`
- `../governance.md`
- `token-architecture.md`
- `theme-architecture.md`
- `rtl-and-localization.md`
- `../component-inventory.md`
- `../interaction-patterns.md`
- `../accessibility-checklist.md`
- `../legacy-brand/shemshbrand guideline.V.1.pdf`
- `../../06-wireframes-and-testing/artifacts/wave-1-app-shell-wireframe.html`
- `../../06-wireframes-and-testing/artifacts/wave-1-auth-kyc-wireframe.html`

## واژگان ممیزی

| نتیجه | معنی |
|---|---|
| `Promote` | ساختار یا قانون می‌تواند وارد مسیر رسمی شود؛ مقدار یا بلوغ نهایی همچنان تابع Gate است |
| `Revise` | ورودی مفید است اما برای محصول فعلی، دسترس‌پذیری یا معماری تازه باید اصلاح شود |
| `Keep Draft` | هنوز شواهد کافی برای استفاده رسمی یا `Stable` شدن ندارد |

## نتیجه ممیزی Prep

| ورودی | نتیجه | دلیل و اقدام |
|---|---|---|
| Governance | `Promote` | مدل بلوغ و مسیر Sandbox تا Stable مبنای رسمی مرحله ۷ می‌ماند |
| Token architecture | `Promote` | لایه‌های Primitive، Semantic، State و Component مناسب‌اند؛ مقادیر واقعی در فاز ۱ تعیین می‌شوند |
| Theme architecture | `Promote` | Light/Dark از یک قرارداد مشترک تغذیه می‌شوند؛ Palette قدیمی فقط Candidate است |
| RTL و Localization | `Promote` | قرارداد start/end، BiDi، واحدهای مالی و اعداد مبنای رسمی‌اند؛ Font metrics باید با Yekan Bakh واقعی تست شود |
| Design principles | `Promote` | دقت مالی، Gold کنترل‌شده، Trust از Evidence و یک CTA اصلی با جهت محصول هم‌راستاست |
| Component inventory | `Revise` | باید با بسته‌شدن موج ۱، شروع موج ۲ و نیازهای واقعی App Shell/Trade/Deposit به‌روزرسانی شود |
| Interaction patterns | `Keep Draft` | فهرست فعلی برای Behavior contractهای مالی کافی نیست و در فاز ۴ توسعه می‌یابد |
| Accessibility checklist | `Revise` | پایه مفید است؛ باید کنتراست جفت‌رنگ، Focus، Touch target، Dynamic Type و Screen Reader به تست‌های اجرایی وصل شود |
| Draft Button قدیمی | `Keep Draft` | تا تثبیت Foundations و عبور Pilot از D-086 توسعه کامل Variantها مجاز نیست |

## نتیجه ممیزی موج ۱

### Observed fact

- هر دو Prototype اصلی از Yekan Bakh استفاده می‌کنند.
- Wave 1 یک Palette خنثی موقت با Primary تیره، Accent طلایی کنترل‌شده و Statusهای تیره‌تر از برندگاید قدیمی دارد.
- App Shell مقادیر موقت Radius برابر ۱۰، ۱۴ و ۱۸ پیکسل و Shadow واحد دارد.
- جریان‌های Auth/KYC و Trade حالت‌های Focus، Disabled، Loading، Error، Success، Warning، Pending و Recovery واقعی دارند.
- مقادیر CSS وایرفریم منبع نهایی برند نیستند؛ آن‌ها شواهد مصرف و Stress case هستند.

### Promote

- نقش‌های Semantic برای Surface، Text، Border، Action، Status، Trust، Financial و Gold.
- نیاز به Tabular figures و ثبات عرض اعداد مالی.
- Focus ring مستقل از Border.
- CTA ثابت پایین در Contextهای تصمیم مالی.
- الگوی Preview، Pending، Result و Receipt به‌عنوان ورودی Behavior contract.

### Revise

- Palette خنثی وایرفریم باید با هویت برند قبلی و Light/Dark بازطراحی شود.
- Radiusهای ۱۰/۱۴/۱۸ فقط Candidate مصرفی‌اند و هنوز مقیاس رسمی نیستند.
- Shadow وایرفریم نباید به‌صورت یک مقدار عمومی برای همه Elevationها منتقل شود.
- Gold وایرفریم و Gold برندگاید باید به نقش‌های هویتی محدود و قابل کنتراست نگاشت شوند.

### Keep Draft

- رنگ نهایی Primary action.
- تم پیش‌فرض PWA و وجود کنترل دستی Theme.
- مقیاس نهایی Typography و Line height.
- Grid و Breakpointهای تبلت/وب.
- Icon family و Motion personality.

## جمع‌بندی برندگاید قبلی

برندگاید ۲۶صفحه‌ای از نظر ساختار لوگو، نسخه‌های تک‌رنگ، Clear space، رنگ‌های پایه و خانواده فونت ورودی معتبر طراحی است. بااین‌حال قواعد UI آن بدون تطبیق وارد سیستم جدید نمی‌شوند. نقشه دقیق Candidateها و تست کنتراست در `legacy-brand-candidate-map.md` ثبت شده است.

## شکاف‌های فعال

- OQ-052 برای انتخاب مقادیر واقعی Foundations باز است.
- مجوز و دامنه استفاده Yekan Bakh باید پیش از تحویل نهایی به توسعه تأیید شود.
- Palette قدیمی برای Focus، Info، Neutral، Disabled، Overlay، Dark surface و نمودار چندسری کامل نیست.
- رنگ‌های Success/Warning/Error قدیمی برای متن و Container در Light/Dark به Ramp و جفت‌رنگ جدا نیاز دارند.
- لوگو باید در اندازه Header، App icon، Splash و زمینه‌های روشن/تیره تست شود.

## قدم بعدی

ساخت Candidate Set نسخه ۰.۱ برای Color و Typography، سپس آزمایش آن روی نمونه‌های واقعی موج ۱ در Light/Dark و عرض‌های ۳۲۰ و ۳۶۰ پیکسل.

## وضعیت Gate

ممیزی ورودی: `Sufficient to proceed`

فاز ۱: `In progress`

