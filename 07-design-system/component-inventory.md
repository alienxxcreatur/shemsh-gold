# فهرست کامپوننت‌ها و Patternهای سیستم طراحی شمش

وضعیت سند: `Draft / Design assumption`

تاریخ بازبینی: 20 Jul 2026

این سند خروجی قدم ۸ از مسیر `Design System Prep` است. Inventory براساس موج‌های تأییدشده Release اول در D-082، Capability Map و معماری تجربه بازچینی شده است. حضور یک مورد در این سند به معنی ساخته‌شدن یا `Stable` بودن آن نیست؛ فقط نیاز، زمان بررسی و وابستگی آن را ثبت می‌کند.

## مبنای Inventory

- **Observed fact:** Release اول در هشت موج طراحی می‌شود: ۱) ورود/احراز/قیمت/ماشین‌حساب، ۲) کیف‌ها/واریز/خریدوفروش/رسید، ۳) برداشت/انتقال/بازیابی مالی، ۴) دریافت فیزیکی و اعتماد، ۵) سفارش هدف و هشدار، ۶) اقساط، ۷) کارت هدیه و ۸) معرفی دوستان — D-082.
- **Observed fact:** اعتماد، شفافیت قواعد، پشتیبانی، اعلان و تاب‌آوری PWA در همه موج‌ها افقی‌اند.
- **Observed fact:** وام با وثیقه، باشگاه وفاداری و کد تخفیف پس از Release اول قرار دارند.
- **Design assumption:** Base componentها می‌توانند پیش از Flow تفصیلی Draft شوند، اما Patternهای مالی باید از Flow و State واقعی تغذیه شوند.
- **Risk:** ساخت Component براساس فهرست عمومی به‌جای نیاز شمش می‌تواند Library بزرگ، Variantهای بی‌مصرف و قراردادهای مالی اشتباه ایجاد کند.

## واژگان

| اصطلاح | تعریف |
|---|---|
| `Base component` | جزء عمومی با API محدود مانند Button، Input یا Dialog |
| `Data component` | نمایش تکرارشونده یک نوع داده مانند Price، Amount یا Status |
| `Domain pattern` | ترکیب چند Component برای Job یا قانون واقعی شمش |
| `Feature module` | ترکیب بزرگ وابسته به یک قابلیت یا صفحه؛ الزاماً وارد Library نمی‌شود |
| `Utility` | Formatter، Parser یا رفتار غیرتصویری؛ Figma Component نیست |
| `Inventory only` | نیاز ثبت شده، اما هنوز خروجی طراحی ساخته نشده است |

## دو محور وضعیت

### وضعیت نیاز

- `Confirmed`: مصرف آن در Release اول و Flow موجود روشن است.
- `Conditional`: اصل نیاز روشن است، اما Anatomy یا رفتار به Flow، داده یا تصمیم باز وابسته است.
- `Deferred`: خارج از Release اول یا زودتر از موعد است.
- `Excluded`: با Scope یا معماری فعلی سازگار نیست.

### وضعیت بلوغ

تا زمانی که خروجی ساخته نشده، وضعیت `Inventory only` است. پس از ساخت، فقط وضعیت‌های Governance یعنی `Draft`، `Candidate`، `Tested`، `Stable` و `Deprecated` استفاده می‌شوند.

## قواعد ساخت

- Base component از Domain pattern جدا می‌ماند.
- Pattern مالی بدون Flow واقعی، State شکست، Recovery و داده واقعی `Candidate` نمی‌شود.
- یک Component عمومی برای همه Statusها، Receiptها یا Walletها با Propertyهای بی‌انتها ساخته نمی‌شود.
- Composition موجود بر Component تازه اولویت دارد.
- Component به‌دلیل تفاوت یک صفحه ساخته نمی‌شود.
- Brandbook مقدار و ظاهر را دقیق می‌کند؛ نیاز واقعی Component از محصول می‌آید.
- Light، Dark، RTL، LTR isolation، Responsive و Accessibility برای هر خروجی الزامی‌اند.
- Agent فقط طبق `agent-guidelines.md` در Sandbox Draft می‌سازد.

## Base componentهای Release اول

| ID | Component | اولین موج | مصرف واقعی | Stateهای پایه | وضعیت نیاز | اقدام ساخت |
|---|---|---:|---|---|---|---|
| BASE-ACT-01 | Button | ۱ | ورود، احراز و همه اقدام‌ها | default, hover, pressed, focus, loading, disabled | Confirmed | Pilot `Primary / Medium` تعمیر و در Light/Dark تست شد؛ توسعه کل Set منتظر تأیید بصری مالک محصول است |
| BASE-ACT-02 | Icon Button | ۱ | Back، Close، Copy، ابزارهای Header | default, hover, pressed, focus, disabled | Confirmed | Draft امن در قدم ۹ |
| BASE-ACT-03 | Text Link | ۱ | قوانین، راهنما، اقدام ثانویه | default, hover, focus, visited در صورت نیاز | Confirmed | پس از قرارداد Navigation/Content |
| BASE-INP-01 | Text Input / Form Field | ۱ | موبایل، کد ملی، متن و شناسه | empty, filled, focus, error, disabled, read-only | Confirmed | Draft امن در قدم ۹ |
| BASE-INP-02 | Amount Input پایه | ۱ | تومان، وزن و قیمت هدف | empty, filled, focus, invalid, disabled, loading | Confirmed | Draft امن در قدم ۹؛ بدون قانون مالی نهایی |
| BASE-INP-03 | OTP Input | ۱ | ورود و احراز مجدد | empty, filled, focus, invalid, expired, loading, throttled | Confirmed | Draft امن در قدم ۹؛ OQ-029 برای Throttle |
| BASE-INP-04 | Date Input | ۱ | تاریخ تولد و انقضای سفارش | empty, filled, focus, error, disabled | Confirmed | پس از Flow احراز؛ Calendar جدا هنوز قطعی نیست |
| BASE-INP-05 | Search Input | ۴ | مرکز تحویل، کاتالوگ و Help | empty, filled, focus, loading, no-result | Confirmed | هنگام موج ۴ |
| BASE-INP-06 | Select / Combobox | ۲ | روش واریز، مقصد و گزینه‌های بلند | closed, open, focus, selected, error, disabled | Conditional | پس از مشخص شدن الگوی انتخاب هر Flow |
| BASE-INP-07 | Textarea | ۳ | پشتیبانی، اعتراض و پیام هدیه | empty, filled, focus, error, disabled | Confirmed | هنگام Flow پشتیبانی؛ موج ۷ برای پیام هدیه |
| BASE-INP-08 | File Upload | ۳ | مدرک پشتیبانی، واریز کلان، تحویل و اقساط | empty, uploading, success, failed, disabled | Conditional | پس از قرارداد فایل، امنیت و Flow |
| BASE-CTL-01 | Checkbox | ۱ | پذیرش یا انتخاب چندگزینه‌ای واقعی | unchecked, checked, mixed, focus, disabled, error | Conditional | فقط پس از مصرف واقعی؛ نه برای متن قوانین به‌صورت پیش‌فرض |
| BASE-CTL-02 | Radio Group | ۲ | انتخاب یک روش یا مقصد محدود | default, selected, focus, disabled, error | Confirmed | پس از Flow واریز |
| BASE-CTL-03 | Switch | ۵ | فعال/غیرفعال‌کردن هشدار یا تنظیم دودویی | off, on, focus, disabled, loading | Confirmed | هنگام موج ۵ |
| BASE-CTL-04 | Segmented Control | ۱ | خرید/فروش و انتخاب حالت محدود | default, selected, focus, disabled | Confirmed | پس از Wireframe ماشین‌حساب |
| BASE-FDB-01 | Alert | ۱ | خطا، هشدار، محدودیت و Context مالی | info, warning, danger, success, neutral | Confirmed | Draft امن در قدم ۹ |
| BASE-FDB-02 | Status Badge | ۱ | احراز، تراکنش، سرویس و تحویل | neutral, info, warning, danger, success | Confirmed | Draft امن در قدم ۹؛ Label نوع‌محور در Pattern |
| BASE-FDB-03 | Toast | ۱ | Copy، ذخیره و بازخورد کوتاه غیرحیاتی | info, success, warning, error | Confirmed | Draft امن در قدم ۹ |
| BASE-FDB-04 | Progress Indicator | ۱ | Loading کنترل‌شده و پردازش | indeterminate, determinate در صورت داده واقعی | Confirmed | پس از قرارداد Motion |
| BASE-FDB-05 | Skeleton | ۱ | بارگذاری Layout پایدار | loading | Conditional | فقط برای داده با ساختار معلوم |
| BASE-FDB-06 | Empty State | ۱ | نبود داده، نتیجه یا سابقه | first-use, no-data, no-result | Confirmed | Pattern محتوایی؛ تصویر الزامی نیست |
| BASE-OVR-01 | Bottom Sheet | ۱ | انتخاب و اقدام موبایل | closed, open, loading, error | Confirmed | Draft امن در قدم ۹ |
| BASE-OVR-02 | Dialog | ۱ | تأیید، هشدار و توقف Context | closed, open, loading, error | Confirmed | Draft امن در قدم ۹ |
| BASE-OVR-03 | Menu / Popover | ۱ | Actionهای ثانویه و وب | closed, open, focus | Confirmed | بعد از قرارداد Navigation |
| BASE-OVR-04 | Tooltip | ۱ | توضیح Icon یا داده در وب | hidden, visible, focus-triggered | Conditional | مصرف محدود؛ جای Label یا Help اصلی نیست |
| BASE-NAV-01 | Top App Bar | ۱ | Header عمومی، محصول و Flow | default, scrolled, back, action | Confirmed | پس از قدم ۱۰ و تثبیت Layout rule |
| BASE-NAV-02 | Bottom Navigation | ۱ | پنج مقصد اصلی موبایل | default, active, focus, badge | Confirmed | پس از بازبینی Navigation model و قدم ۱۰ |
| BASE-NAV-03 | Sidebar Navigation | ۱ | وب عرض زیاد | default, active, focus, collapsed در صورت نیاز | Confirmed | پس از قدم ۱۰ |
| BASE-NAV-04 | Tabs | ۱ | نمای فرعی و دسته داده | default, active, focus, overflow | Confirmed | پس از مصرف واقعی Wireframe |
| BASE-NAV-05 | Stepper | ۱ | احراز و Flow چندمرحله‌ای | current, complete, error, disabled | Conditional | پس از Flow؛ Stepهای ساختگی ممنوع |
| BASE-DAT-01 | Key-value Row | ۱ | نرخ، کارمزد، مبلغ، زمان و Receipt | default, emphasized, warning | Confirmed | پس از Content hierarchy |
| BASE-DAT-02 | List Item | ۱ | منو، مقصد، تراکنش و گزینه‌ها | default, selected, disabled, loading | Confirmed | Anatomy با مصرف واقعی محدود شود |
| BASE-CNT-01 | Accordion / Disclosure | ۱ | FAQ، قانون و جزئیات تکمیلی | collapsed, expanded, focus, disabled | Confirmed | پس از Content model |
| BASE-UTL-01 | Copy Action | ۲ | رسید، شبا، شناسه و کد پیگیری | default, copied, failed, disabled | Confirmed | ترکیب Icon Button + Toast؛ Component تازه فقط در صورت تکرار Anatomy |

## Shortlist قدم ۹

طبق نقشه Prep فقط این موارد برای Draft اولیه Sandbox امن‌اند:

1. Button
2. Icon Button
3. Text Input / Form Field
4. Amount Input پایه
5. OTP Input
6. Alert
7. Status Badge
8. Toast
9. Bottom Sheet
10. Dialog

این Shortlist اجازه ساخت Library کامل نیست. هر مورد با Prompt Packet مستقل، RTL، Light/Dark، Stateهای پایه و داده واقعی ساخته می‌شود.

### وضعیت اجرای Button

- Pilot محدود `Primary / Medium` برای شش State ساخته و طبق D-086 بازبینی شد.
- ۷۹ Paint متصل به Variable از نظر برابری fallback و مقدار resolve‌شده Audit شدند؛ اختلاف ثبت‌شده صفر است.
- QA مستقل روی Master و Instance، Light/Dark، RTL، متن بلند فارسی، Icon، Loading و Hug/Fill انجام شد.
- Focus از Stroke چسبیده به کنترل به حلقه بیرونی ۲px با فاصله ۲px اصلاح شد.
- وضعیت کل Component Set: `Needs revision`؛ ۶۶ Variant خارج از Pilot تا تأیید بصری مالک محصول توسعه یا اصلاح نمی‌شوند.

## Data componentها و Utilityها

| ID | مورد | نوع | اولین موج | State / رفتار | وابستگی | تصمیم Inventory |
|---|---|---|---:|---|---|---|
| DATA-VAL-01 | Money Value | Utility + text role | ۱ | مقدار بزرگ، صفر، منفی در تراکنش | D-079؛ RTL contract | Formatter مرکزی؛ Figma Component مستقل فعلاً لازم نیست |
| DATA-VAL-02 | Gold Weight Value | Utility + text role | ۱ | سه اعشار، گرم/سوت | D-060، D-061 | Formatter مرکزی؛ نقش Typography عددی |
| DATA-VAL-03 | Percentage Value | Utility + text role | ۱ | positive, negative, neutral | RTL/Theme contract | رنگ به‌تنهایی معنا نیست |
| DATA-VAL-04 | Identifier Value | Utility + composition | ۲ | visible, masked, copied | Flow امنیت و Masking | LTR isolation + Copy Action |
| DATA-VAL-05 | Date / Time Value | Utility + text role | ۱ | exact, relative, rate timestamp | BR-021؛ سؤال تاریخ رسمی | Formatter مرکزی؛ Component مستقل فقط با Anatomy تکراری |
| DATA-MKT-01 | Price Quote | Data component | ۱ | loading, live, stale, unavailable | OQ-020، Price service | بعد از قرارداد نرخ؛ Candidate بدون Flow ممنوع |
| DATA-MKT-02 | Price Change | Data component | ۱ | increase, decrease, neutral | Theme/RTL contract | همراه علامت و Label، مستقل از Success/Error |
| DATA-MKT-03 | Rate Freshness | Data component | ۱ | live, refreshing, stale, expired, unavailable | D-061، OQ-020 | بعد از Flow انقضا و Requote |
| DATA-MKT-04 | Price Chart | Domain pattern | ۱ | loading, data, no-data, unavailable | منبع داده و بازه‌ها | موتور Chart اثبات‌شده؛ پیاده‌سازی از صفر ممنوع |
| DATA-AST-01 | Wallet Summary | Domain pattern | ۲ | loading, available, restricted, unavailable | D-063، BR-041، Ledger | فقط دو عدد اصلی طبق BR-041؛ جزئیات باز به Flow |
| DATA-FIN-01 | Financial Breakdown | Domain pattern | ۱ | default, estimated, changed, unavailable | قوانین همان Flow | ترکیب Key-value Row؛ Schema نوع‌محور |
| DATA-HIS-01 | Transaction Item | Domain component | ۲ | pending/type-specific, success, failed | D-076 | Label و Field براساس نوع تراکنش |
| DATA-HIS-02 | Receipt Shell | Domain pattern | ۲ | final, non-final, correction در صورت نیاز | D-061، D-072، OQ-026 | Shell مشترک محدود؛ Schema رسید هر سرویس جدا |
| DATA-HIS-03 | Status Timeline | Domain pattern | ۲/۳ | current, complete, failed, returned | D-076 و Flow هر سرویس | Timeline عمومی با Label نوع‌محور؛ بعد از Flow |

## Patternهای افقی همه موج‌ها

| ID | Pattern | مصرف | Stateهای ضروری | وابستگی | وضعیت نیاز |
|---|---|---|---|---|---|
| CROSS-TRS-01 | Trust Evidence Record | مجوز، بانک کارگشایی، پشتوانه و سند | valid, expired, unavailable, restricted | OQ-007، OQ-019، حقوقی/برند | Confirmed؛ Anatomy پس از محتوای رسمی |
| CROSS-TRS-02 | Contextual Rule Disclosure | نرخ، کارمزد، سقف، زمان و پیش‌نیاز | default, updated, unavailable | OQ-001، OQ-020، OQ-026 | Confirmed؛ منبع واحد محتوا لازم است |
| CROSS-SUP-01 | Contextual Help Entry | کنار خطا و اقدام حساس | default, available, unavailable | OQ-009 | Confirmed |
| CROSS-SUP-02 | Support Case Summary | پرونده، مدرک، Status و کد پیگیری | draft, submitted, in-review, resolved, rejected | OQ-009، OQ-021 | Conditional؛ پس از مدل پرونده |
| CROSS-NTF-01 | Notification Item | تراکنش، امنیت، اختلال، قسط و هشدار | unread, read, actionable, expired | مدل Event و Deep Link | Confirmed |
| CROSS-OPS-01 | Service Incident Banner | اختلال و رفع اختلال | started, updated, resolved | D-075، BR-071 | Confirmed؛ ETA ساختگی ممنوع |
| CROSS-ACC-01 | Auth / Permission Gate | ورود، احراز یا دسترسی محدود | guest, unverified, expired-session, restricted | D-031، D-033، D-054 | Confirmed؛ ورودی و مقصد حفظ شود |
| CROSS-ACC-02 | Account Restriction Panel | دامنه محدودیت و مسیر رفع | operation-limited, finance-limited, login-locked | D-054، OQ-043 | Confirmed؛ جزئیات وابسته به Flow |
| CROSS-PWA-01 | Install Prompt | نصب PWA | eligible, dismissed, unavailable, installed | D-039 | Confirmed؛ OS/browser-aware |
| CROSS-PWA-02 | Update Prompt | نسخه تازه یا ناسازگار | background-ready, safe-to-update, forced | D-039 | Confirmed؛ کار کاربر حفظ شود |
| CROSS-PWA-03 | Offline / Connectivity Banner | قطعی و بازگشت شبکه | offline, reconnecting, online, stale-data | D-039، D-075 | Confirmed؛ عملیات مالی آفلاین ممنوع |
| CROSS-NAV-01 | Deep-link Return Context | بازگشت پس از Login/KYC | gating, resumed, failed, expired-link | IA و Navigation model | Confirmed؛ بیشتر Pattern رفتاری است تا Component |

## موج ۱ — ورود، احراز، قیمت و ماشین‌حساب

| ID | Pattern / Module | قابلیت | Stateهای ضروری | وابستگی | وضعیت و زمان ساخت |
|---|---|---|---|---|---|
| W1-AUTH-01 | Mobile Entry Form | CAP-AUTH-01 | empty, valid, invalid, submitting, throttled | D-030، OQ-029 | Confirmed؛ پس از Flow ورود |
| W1-AUTH-02 | OTP Verification | CAP-AUTH-01/02 | entering, autofill, invalid, expired, resend-wait, throttled, success | D-030، OQ-029 | Confirmed؛ پایه در قدم ۹، Pattern بعد از Flow |
| W1-AUTH-03 | Instant KYC Form | CAP-AUTH-02 | empty, validating, mismatch, failed, verified | D-029؛ سرویس KYC | Confirmed؛ Date/Input behavior نیازمند Flow |
| W1-AUTH-04 | Guest / KYC Gate | CAP-AUTH-03/04 | guest, logged-in-unverified, session-expired, restricted | D-031، D-053 | Confirmed؛ باید ورودی و مقصد را حفظ کند |
| W1-MKT-01 | Market Price Panel | CAP-MKT-01 | loading, live, refreshing, stale, unavailable | OQ-020، Price service | Conditional؛ Data contract لازم است |
| W1-MKT-02 | Price Chart Module | CAP-MKT-02 | loading, data, no-data, unavailable | Data source و بازه زمانی | Conditional؛ کتابخانه Chart لازم است |
| W1-MKT-03 | Buy/Sell Calculator | CAP-MKT-03 | empty, calculating, result, invalid, limit-error, rate-unavailable | D-034، OQ-001/020 | Confirmed؛ پس از Flow و فرمول معتبر |
| W1-MKT-04 | Dual Amount Converter | CAP-MKT-03 | input-toman, input-weight, recalculating, error | D-034، D-060 | Confirmed؛ Composition از Amount Inputها |
| W1-MKT-05 | Calculation Breakdown | CAP-MKT-03 | estimated, rate-changed, unavailable | OQ-001/020 | Conditional؛ Schema با Flow |
| W1-ACC-01 | Session Expiry Notice | CAP-ACC-02 | warning, expired, reauthenticating, resumed | D-030، D-033 | Confirmed؛ Context کاربر حفظ شود |

## موج ۲ — کیف‌ها، واریز، خریدوفروش و رسید

| ID | Pattern / Module | قابلیت | Stateهای ضروری | وابستگی | وضعیت و زمان ساخت |
|---|---|---|---|---|---|
| W2-AST-01 | Toman Wallet Summary | CAP-AST-02 | loading, available, in-operation, restricted, unavailable | BR-041، Ledger، OQ-021 | Confirmed؛ بعد از Flow دارایی |
| W2-AST-02 | Gold Wallet Summary | CAP-AST-01 | loading, available, restricted, unavailable | BR-041، Ledger | Confirmed؛ جزئیات قفل/رزرو بیرون دو عدد اصلی |
| W2-MNY-01 | Deposit Method Option | CAP-MNY-01 | recommended, available, unavailable, disrupted | D-035، D-068، OQ-021 | Confirmed |
| W2-MNY-02 | Deposit Method Comparison | CAP-MNY-01 | loading, available, partial-outage, all-unavailable | D-035، D-068 | Confirmed؛ Composition، نه Data table سنگین |
| W2-MNY-03 | Large Deposit Entry | CAP-MNY-04 | eligible, information-needed, submitted, in-review | D-044، OQ-031 | Conditional؛ جزئیات تا پاسخ OQ-031 قفل است |
| W2-TRD-01 | Trade Entry Form | CAP-TRD-01/02 | empty, filled, insufficient-balance, rate-unavailable, restricted | D-079، OQ-001/020 | Confirmed؛ پس از Flow خرید/فروش |
| W2-TRD-02 | Trade Preview / Confirmation | CAP-TRD-01/02 | valid, rate-refreshing, changed, expired, submitting | D-061، D-075، D-079 | Confirmed؛ Hard gate مالی |
| W2-TRD-03 | Trade Result | CAP-TRD-03 | finalizing, success, failed, unknown-result | D-072، D-076 | Confirmed؛ Recovery لازم |
| W2-HIS-01 | Transaction Filter | CAP-HIS-01 | default, applied, empty-result | D-076 | Confirmed؛ کنترل مناسب پس از Wireframe |
| W2-HIS-02 | Transaction List | CAP-HIS-01 | loading, data, empty, error, pagination/loading-more if needed | D-076 | Confirmed؛ Pagination هنوز Design assumption نیست |
| W2-HIS-03 | Receipt / Transaction Detail | CAP-HIS-02 | non-final, final, failed, corrected if applicable | D-061، D-072، OQ-026 | Confirmed؛ Schema نوع‌محور بعد از Flow |

## موج ۳ — برداشت، انتقال و بازیابی مالی

| ID | Pattern / Module | قابلیت | Stateهای ضروری | وابستگی | وضعیت و زمان ساخت |
|---|---|---|---|---|---|
| W3-MNY-01 | Bank Destination Item | CAP-MNY-03 | active, unavailable, ownership-error, disabled | D-059، D-071 | Confirmed |
| W3-MNY-02 | Bank Destination Selector | CAP-MNY-02/03 | none, selected, unavailable, limit-reached | D-071، OQ-021 | Confirmed |
| W3-MNY-03 | Withdrawal Form / Preview | CAP-MNY-02 | empty, invalid, below-min, above-limit, bank-disrupted, submitting | D-069/071، OQ-021 | Confirmed؛ SLA/اختلال وابسته |
| W3-MNY-04 | Withdrawal Result / Status | CAP-MNY-02 | registered, reviewing, sent-to-bank, paid, failed, returned | D-069، D-076 | Confirmed؛ Label رسمی |
| W3-TFR-01 | Recipient Identifier Input | CAP-TFR-01/02 | empty, scanning, resolving, invalid, self, restricted | D-036، D-079 | Confirmed |
| W3-TFR-02 | Recipient Identity Confirmation | CAP-TFR-01 | resolved, mismatch, unavailable | D-036 | Confirmed؛ فقط اطلاعات مجاز |
| W3-TFR-03 | Receive ID / QR Panel | CAP-TFR-02 | visible, copied, share-failed, unavailable | D-036 | Confirmed؛ QR و Copy با حفظ Privacy |
| W3-TFR-04 | Gold Transfer Preview / Result | CAP-TFR-01 | valid, fee-unknown, submitting, success, failed, unknown-result | D-079، OQ-002 | Conditional؛ کارمزد باز است |
| W3-REC-01 | Financial Recovery Panel | CAP-SUP-02/ACC-05 | retry-safe, needs-support, pending-result, resolved | D-068/075، OQ-009/021 | Confirmed؛ Retry کور ممنوع |
| W3-REC-02 | Support Case Flow | CAP-SUP-02 | composing, uploading, submitted, in-review, resolved | OQ-009، OQ-021 | Conditional؛ مدل پرونده و SLA لازم است |

## موج ۴ — دریافت فیزیکی و اعتماد

| ID | Pattern / Module | قابلیت | Stateهای ضروری | وابستگی | وضعیت و زمان ساخت |
|---|---|---|---|---|---|
| W4-PHY-01 | Physical Product Item | CAP-PHY-01 | loading, available, unavailable, unknown-stock | OQ-007، OQ-017 | Conditional؛ تصویر و وزن رسمی لازم است |
| W4-PHY-02 | Physical Product Detail | CAP-PHY-01 | available, unavailable, evidence-missing | OQ-007، OQ-017 | Conditional؛ Feature module، نه لزوماً Component |
| W4-PHY-03 | Fulfillment Center Item | CAP-PHY-04 | available, unavailable, disrupted, unknown-hours | D-037، OQ-003/004 | Confirmed؛ داده عملیات لازم است |
| W4-PHY-04 | Product-to-Center Selector | CAP-PHY-02/04 | selecting-product, loading-centers, no-center, selected | D-037، OQ-003/017 | Confirmed؛ اول محصول سپس مرکز |
| W4-PHY-05 | Delivery / Pickup Method | CAP-PHY-02 | available, unavailable, restricted | OQ-003/004 | Conditional؛ VIP و ارسال باز است |
| W4-PHY-06 | Physical Request Preview | CAP-PHY-02 | valid, cost-unknown, submitting, cancelled, failed | D-079، OQ-003/040 | Conditional؛ نقطه لغو و هزینه باز است |
| W4-PHY-07 | Physical Fulfillment Status | CAP-PHY-03 | registered, preparing, ready, shipped, delivered, cancelled, failed | D-076 | Confirmed؛ Timeline نوع‌محور |
| W4-PHY-08 | Pickup Code / Certificate Record | CAP-PHY-03 | valid, used, unavailable, disputed | OQ-007، عملیات | Conditional؛ Security و Evidence لازم است |
| W4-TRS-01 | License / Evidence Detail | CAP-TRS-01/02 | valid, expired, unavailable | OQ-007، حقوقی/برند | Confirmed؛ محتوای رسمی شرط ساخت |

## موج ۵ — سفارش هدف و هشدار قیمت

| ID | Pattern / Module | قابلیت | Stateهای ضروری | وابستگی | وضعیت و زمان ساخت |
|---|---|---|---|---|---|
| W5-ORD-01 | Target Order Form | CAP-TRD-04 | empty, valid, insufficient-asset, invalid-price, restricted | D-040، D-079، OQ-020 | Confirmed؛ بعد از Flow سفارش |
| W5-ORD-02 | Expiration Selector | CAP-TRD-04 | until-cancelled, date-selected, invalid-date | D-040 | Confirmed؛ از Date Input تغذیه می‌شود |
| W5-ORD-03 | Reservation Preview | CAP-TRD-04 | valid, changed, unavailable | D-040، D-079 | Confirmed؛ فقط سفارش هدف رزرو دارد |
| W5-ORD-04 | Target Order Item / Status | CAP-TRD-04 | active, executed, cancelled, expired, failed | D-076 | Confirmed |
| W5-ALT-01 | Price Alert Form | CAP-MKT-04 | empty, valid, duplicate, permission-needed, saved | D-043 | Confirmed؛ ورود لازم، احراز لازم نیست |
| W5-ALT-02 | Price Alert Item | CAP-MKT-04 | active, triggered, paused/disabled if supported, expired | D-043، مدل اعلان | Conditional؛ Pause فقط اگر Flow تأیید کند |
| W5-ALT-03 | Notification Permission Prompt | CAP-MKT-04/ACC-03 | unknown, granted, denied, blocked | D-043، PWA capability | Confirmed؛ Browser-aware |

## موج ۶ — خرید اقساطی طلای دیجیتال

| ID | Pattern / Module | قابلیت | Stateهای ضروری | وابستگی | وضعیت و زمان ساخت |
|---|---|---|---|---|---|
| W6-INS-01 | Installment Calculator | CAP-INS-01 | empty, calculated, ineligible, data-unavailable | D-080، OQ-005 | Conditional؛ عدد و فرمول باز |
| W6-INS-02 | Provider / Plan Comparison | CAP-INS-01 | loading, available, unavailable, selected | D-038، OQ-005 | Conditional؛ شریک و داده رسمی لازم است |
| W6-INS-03 | Eligibility / Document Flow | CAP-INS-02 | checking, eligible, ineligible, upload, review | OQ-005، شریک/حقوقی | Blocked by external decision |
| W6-INS-04 | Contract Summary / Consent | CAP-INS-02 | draft-copy, ready, signing, signed, failed | D-080، OQ-005 | Blocked by contract/legal |
| W6-INS-05 | Installment Schedule | CAP-INS-03 | upcoming, due, paid, overdue, settled | D-080، OQ-005 | Conditional؛ Status و جریمه باز |
| W6-INS-06 | Installment Payment Item | CAP-INS-03 | upcoming, payable, processing, paid, failed, overdue | OQ-005 | Conditional |
| W6-INS-07 | Locked Gold Summary | CAP-INS-03 | locked, overdue, fully-released | D-080 | Confirmed need؛ Anatomy پس از Flow |
| W6-INS-08 | Overdue / Settlement Alert | CAP-INS-03 | due-soon, overdue, forced-settlement-risk, resolved | D-080، OQ-005 | Blocked by legal/financial rules |

بررسی شریک، قرارداد، اعتبارسنجی، جریمه و تسویه از موج ۱ موازی آغاز می‌شود، اما Componentهای موج ۶ پیش از پاسخ‌های لازم `Candidate` نمی‌شوند.

## موج ۷ — کارت هدیه طلا

| ID | Pattern / Module | قابلیت | Stateهای ضروری | وابستگی | وضعیت و زمان ساخت |
|---|---|---|---|---|---|
| W7-GFT-01 | Fixed Weight Selector | CAP-GFT-01 | available, selected, unavailable | D-080، OQ-006 | Blocked by official weights |
| W7-GFT-02 | Funding Source Selector | CAP-GFT-01 | toman, gold, insufficient, rate-unavailable | D-080 | Confirmed need؛ بعد از Flow |
| W7-GFT-03 | Gift Recipient / Message | CAP-GFT-01 | empty, valid, invalid, limit-error | D-080، OQ-006 | Conditional |
| W7-GFT-04 | Gift Preview | CAP-GFT-01 | draft, ready, rate-changed, unavailable | Brandbook، D-080 | Conditional؛ Visual identity وابسته به Brand |
| W7-GFT-05 | Gift Claim Panel | CAP-GFT-02 | valid, auth-required, claimed, expired, invalid | D-080، OQ-006 | Conditional؛ انقضا و دریافت‌نشده باز |
| W7-GFT-06 | Gift Status / Receipt | CAP-GFT-01/02 | issued, claimed, unclaimed, cancelled/expired if approved, failed | OQ-006، OQ-040 | Blocked by business/legal states |

## موج ۸ — معرفی دوستان

| ID | Pattern / Module | قابلیت | Stateهای ضروری | وابستگی | وضعیت و زمان ساخت |
|---|---|---|---|---|---|
| W8-REF-01 | Referral Code / Link Panel | CAP-GRW-01 | available, copied, share-failed, unavailable | D-024، D-080 | Confirmed |
| W8-REF-02 | Share Action | CAP-GRW-01 | available, native-share, fallback, failed | PWA/Browser API | Confirmed؛ Native share بر Share sheet سفارشی اولویت دارد |
| W8-REF-03 | Referral Status Item | CAP-GRW-01 | invited, registered, verified, qualified, rejected if approved | OQ-026 | Conditional؛ Status و شرط پاداش باز |
| W8-REF-04 | Reward Summary | CAP-GRW-01 | none, pending, earned, paid, reversed if approved | OQ-026، ضدسوءاستفاده | Blocked by reward rules |
| W8-REF-05 | Referral Empty / Help | CAP-GRW-01 | first-use, no-invites, unavailable | Content/Rules | Confirmed؛ بدون ادعای پاداش حل‌نشده |

## مواردی که Component مستقل نیستند

| مورد | تصمیم |
|---|---|
| Formatter تومان، وزن، درصد و تاریخ | Utility مشترک کد و نقش Typography است، نه Figma Component مستقل |
| Safe area، Grid و Breakpoint | Foundation/Layout rule است |
| حفظ Context پس از Login/KYC | Interaction pattern و Navigation state است |
| منبع حقیقت نرخ و قوانین | Content/Data contract است |
| Card عمومی برای هر Section | ساخته نمی‌شود؛ Surface و Composition براساس Anatomy واقعی استفاده می‌شوند |
| Universal Receipt با ده‌ها Property | ساخته نمی‌شود؛ Shell محدود + Schema نوع‌محور |
| Universal Status component با Labelهای داخلی | Badge پایه + Status pattern هر دامنه |
| Share sheet سفارشی | تا جای ممکن از قابلیت Native/PWA استفاده می‌شود |
| Chart engine | از Library اثبات‌شده استفاده می‌شود؛ فقط Theme/Wrapper شمش طراحی می‌شود |

## خارج از Inventory ساخت Release اول

- Password Input؛ مدل ورود OTP است.
- Componentهای پنل ادمین، عملیات و پشتیبانی داخلی؛ خارج از Scope تجربه کاربر نهایی‌اند.
- Native iOS/Android component؛ خروجی اصلی PWA و Android WebView است.
- وام با وثیقه طلا؛ بعد از Release اول طبق Feature prioritization.
- باشگاه وفاداری و مکانیک امتیاز؛ بعد از Release اول و وابسته به OQ-034.
- کنترل کد تخفیف دائمی؛ قابلیت کمپینی بعد از Release اول و وابسته به OQ-036.
- کارت پرداخت متصل به دارایی، چندفلزی، VIP، تضمین افت قیمت و معامله اهرمی؛ منتظر تصمیم‌های مربوط.
- Wallet یا Trading component برای نقره و سایر فلزها.
- Componentهای Gamification، Carousel تبلیغاتی یا Promotion بدون Flow قطعی.
- Data grid، Calendar پیچیده، Slider مالی و Mega menu تا زمانی که Wireframe مصرف واقعی را ثابت کند.

## وابستگی‌های اصلی

| وابستگی | اثر روی Inventory |
|---|---|
| Stage 4 / Navigation | App shell، Bottom Navigation، Sidebar، App Bar و Hub service |
| Stage 5 / Flow contracts | State، Anatomy و Recovery تمام Patternهای مالی |
| Brandbook | Palette، Typography، Radius، Icon، Asset و Gift preview؛ نه اصل Inventory |
| OQ-001/020/021/026 | قیمت، کارمزد، سقف، بانک، Receipt و Statusهای مالی |
| OQ-003/004/007/017/040 | دریافت فیزیکی، مرکز، مدرک، وزن و لغو |
| OQ-005 | اقساط، قرارداد، جریمه و تسویه |
| OQ-006 | وزن، انقضا، لغو و Status کارت هدیه |
| Engineering | Chart library، QR/Scanner، Native share، PWA prompt، Theme و Accessibility |

## ترتیب تصمیم ساخت

1. آیا نیاز در Capability، Flow یا موج Release ثبت شده است؟
2. آیا با Base component و Composition موجود حل می‌شود؟
3. آیا Anatomy یا رفتار در بیش از یک Context تکرار می‌شود؟
4. آیا State، RTL، Theme، Accessibility و Content constraint مشخص‌اند؟
5. آیا Business rule و منبع داده کافی‌اند؟
6. آیا خروجی باید Component، Domain pattern، Feature module یا Utility باشد؟
7. آیا Prompt Packet و Sandbox برای Draft آماده‌اند؟

اگر پاسخ ۱ یا ۵ منفی باشد، ساخت متوقف و وابستگی ثبت می‌شود.

## معیار تکمیل قدم ۸

قدم ۸ زمانی `Sufficient to proceed` است که:

- Base componentها از Data component، Domain pattern، Feature module و Utility جدا شده باشند.
- هر مورد اولین موج، مصرف واقعی، State و وابستگی داشته باشد.
- Shortlist امن قدم ۹ مشخص باشد.
- Patternهای مالی به Flow و تصمیم‌های باز متصل باشند.
- قابلیت‌های افقی در همه موج‌ها پوشش داده شده باشند.
- موارد بعد از Release اول یا خارج از Scope صریحاً حذف شده باشند.
- هیچ Component مالی بدون Flow واقعی برای `Stable` شدن معرفی نشده باشد.

## گیت وضعیت فعلی

وضعیت: `Sufficient to proceed for Step 9`

توضیح: Inventory از یک فهرست عمومی به نقشه نیازمحور Base componentها، Data componentها، Patternهای افقی و Patternهای هشت موج تبدیل شد. ده Component کم‌ریسک برای Draft در Sandbox مشخص‌اند؛ Patternهای مالی تا رسیدن Flow و تصمیم‌های وابسته `Inventory only` می‌مانند.
