# Candidate Foundations مشکی خنثی — نسخه ۰.۲

وضعیت: `Approved direction / In implementation / Not Stable`

تاریخ: ۱۷ مرداد ۱۴۰۵ / 8 Aug 2026

تصمیم مرجع: D-117

فایل اجرایی: `Shemsh Design System Sandbox` با کلید `1ww36pr21itLXyAFZdouMy`

## تصمیم تأییدشده

- **Business decision:** Foundations و Base componentهای مستقل از فلز هم‌زمان با بازتنظیم چندفلزی ادامه می‌یابند.
- **Design assumption approved for Candidate:** رنگ محوری و Primary سیستم `Black-neutral` است؛ این تصمیم به معنی Dark-only بودن محصول نیست.
- **Design assumption approved for Candidate:** Statusهای Success، Warning، Danger و Info رنگ معنایی مستقل دارند.
- **Business decision:** رنگ فلز فقط Accent کمکی همراه Label/Icon است و Primary یا تنها حامل معنا نیست — D-115.
- **Business decision:** Set قبلی ۷۲تایی برای تاریخچه حفظ و ویرایش نمی‌شود؛ Candidate اصلی D-122 یک Set واحد با ۱۰۸ Variant است و به Setهای کوچک‌تر تقسیم نمی‌شود.

## نگاشت اولیه Light/Dark

| نقش | Light | Dark |
|---|---:|---:|
| Canvas | `#FAFAFA` | `#0A0A0A` |
| Surface base | `#FFFFFF` | `#171717` |
| Surface raised | `#FFFFFF` | `#262626` |
| Text primary | `#171717` | `#FAFAFA` |
| Primary container | `#171717` | `#FAFAFA` |
| Primary content | `#FFFFFF` | `#0A0A0A` |
| Primary hover | `#262626` | `#E5E5E5` |
| Primary pressed | `#0A0A0A` | `#D4D4D4` |

Focus باید حلقه مستقل و قابل مشاهده با فاصله از Control باشد. رنگ‌های Info/Link و Status از Rampهای معنایی استفاده می‌کنند و بخشی از هویت Primary نیستند.

یادداشت D-177: قرارداد [`visual-direction-contract-g5-v0.1.md`](../visual-direction-contract-g5-v0.1.md) برای Pilot Home/Assets مقدار Light Canvas برابر `#FFFFFF` را در برابر `#FAFAFA` این Candidate می‌آزماید. این Override فقط Pilot است و تا نتیجه QA، مقدار این سند یا Variableهای Figma را جایگزین نمی‌کند.

## موارد قابل استفاده مجدد از Sandbox

- Collectionهای `Primitive`، `Semantic` و `State` و قرارداد Alias.
- Modeهای Light/Dark، Scopeهای هدفمند و WEB code syntax.
- Ramp خنثی، Status، Spacing، Size، Radius و Stroke.
- Effect Styleهای Raised، Overlay و Modal به‌عنوان Draft.
- Phosphor Icons با Format `Stroke` و Weight `Regular`.
- Button با Hierarchyهای Primary/Secondary/Tertiary/Destructive، سه Size و شش State.

## اصلاح‌های لازم

- نگاشت Primary و Stateهای آن از Blue به Neutral.
- جایگزینی Text Styleهای Vazirmatn با Yekan Bakh FaNum.
- حذف مصرف مستقیم Typography Primitive در Button و اتصال به Text Style معنایی.
- تکمیل نقش‌های Typography، Grid، Motion، Opacity و Layer.
- ساخت صفحات Foundations، Documentation، Changelog و Deprecated.
- نگه‌داری نسخه تکراری Button در Page 3 تا انتقال کنترل‌شده به Deprecated؛ حذف خودکار مجاز نیست.

## وابستگی‌ها

- **Open question:** `Yekan Bakh NoEn` در محیط فعلی Figma در دسترس نیست؛ OTP و Identifier تا فعال‌شدن فونت یا تصویب Fallback در وضعیت Candidate می‌مانند.
- **Open question:** Palette و Accent نهایی طلا، نقره، مس و نمودار چندسری زیر OQ-056 باز است.
- **Risk:** مقادیر Black-neutral باید روی Device واقعی، نور شدید، Dark Mode و Focus/Disabled تست شوند.

## Gate

- جهت و Scope: `Complete`
- پیاده‌سازی Variable/Style: `In progress`
- Component migration: `Not started`
- Stable: `Not issued`
