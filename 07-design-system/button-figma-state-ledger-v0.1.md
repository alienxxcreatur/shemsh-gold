# State Ledger اجرای Button در Figma — v0.1

تاریخ: 9 Aug 2026  
فایل: `Shemsh Design System — Sandbox`  
File key: `1ww36pr21itLXyAFZdouMy`  
تصمیم مرجع: D-122  
قرارداد مرجع: `button-component-contract-v0.3.md`

## وضعیت فعلی

- **Observed fact:** صفحه اختصاصی `10 Button` با ID `150:633` ساخته شد.
- **Observed fact:** Component Set اصلی با ID `157:801` اکنون دقیقاً ۱۰۸ Variant یکتا برای `Emphasis × Tone × Size × State` دارد.
- **Observed fact:** QA board با ID `161:641` و نام `Button / Candidate QA` شامل Instanceهای واقعی برای RTL، متن بلند، Start/End icon، Loading با/بدون Label، Focus و Fill 320px است.
- **Observed fact:** Audit نهایی روی Pilot صفر خطای ساختاری و صفر mismatch بین paint و resolved Variable گزارش کرد.
- **Observed fact:** Screenshot نهایی Master Set و QA board بررسی شد؛ Focus ring، RTL، Loading، Hug و Fill پس از اصلاح پاس شدند.
- **Observed fact:** مالک محصول در 9 Aug 2026 تأیید بصری Pilot را اعلام کرد؛ Expand اجرا شد.
- **Observed fact:** Final technical audit روی ۱۰۸ Variant، ۱۰۸ tuple یکتا، ۱۰ تعریف Property، ۱۰۸ Anatomy کامل، ۱۰۸ ترتیب RTL صحیح، ۱۰۸ اتصال Property صحیح، ۱۰۸ رفتار State صحیح، ۱۰۸ هندسه صحیح و ۶۶۶ Paint متصل با صفر mismatch را گزارش کرد.
- **Observed fact:** Screenshot نهایی Master Set و Candidate QA توسط Agent بررسی و پاس شد.
- **Risk:** Promote نهایی به `Tested` نیازمند تأیید بصری مالک محصول روی ماتریس کامل است؛ `Stable` علاوه بر آن به تست‌های Light/Dark، دسترس‌پذیری و Device واقعی وابسته است.

## Node ledger

| نقش | Node ID | وضعیت |
|---|---|---|
| Page | `150:633` | ساخته‌شده |
| Component Set اصلی | `157:801` | `Candidate / 108 variants / Final technical audit pass` |
| Default | `157:633` | Audit pass |
| Hover | `157:661` | Audit pass |
| Pressed | `157:689` | Audit pass |
| Focus | `157:717` | Audit pass |
| Disabled | `157:745` | Audit pass |
| Loading | `157:773` | Audit pass |
| QA board | `161:641` | `Button / Candidate QA`؛ Stress tests pass |
| QA — Start icon / RTL | `161:646` | Pass |
| QA — Long label + both icons | `161:665` | Pass؛ عرض Hug برابر 209px |
| QA — Loading + label | `161:717` | Pass |
| QA — Loading icon only | `161:751` | Pass |
| QA — Focus ring | `161:779` | Pass |
| QA — Fill container | `161:811` | Pass؛ عرض 320px |

## خطاها و بازیابی

1. اتصال Boolean property پیش از قرارگرفتن Icon slot داخل Component رد شد؛ Figma کل Batch را rollback کرد و صفحه خالی ماند.
2. تنظیم Absolute برای Focus ring پیش از قرارگرفتن داخل Surface رد شد؛ Figma دوباره rollback کامل انجام داد.
3. Screenshot نخست جابه‌جایی Focus ring را آشکار کرد؛ Ring به Root بدون Padding منتقل شد.
4. Stress test بریدگی متن بلند و Fill ناقص Surface را آشکار کرد؛ Content به جریان Root منتقل و Surface/Focus ring به لایه‌های Absolute و Stretch تبدیل شدند.
5. ترتیب RTL به `End icon / Label / Start icon / Loading icon` اصلاح شد.

هیچ Node قدیمی، از جمله Button قبلی ۷۲تایی، حذف یا ویرایش نشد.

## Token gap بسته‌شده برای Expand

- Color: `166:633` تا `166:640` برای Secondary/Tertiary Destructive در Container، Content، Border، Hover و Pressed.
- Dimension: `166:641` تا `166:649` برای Touch height، Surface height و Padding inline سه Size.

## Batch ledger توسعه

- Primary / Neutral / Small: `169:724` تا `169:794`؛ Medium همان Pilot؛ Large: `173:732` تا `173:802`.
- Secondary / Neutral: Small `173:1566` تا `173:1636`؛ Medium `173:1658` تا `173:1728`؛ Large `174:756` تا `174:826`.
- Tertiary / Neutral: Small `174:1590` تا `174:1660`؛ Medium `174:1682` تا `174:1752`؛ Large `174:1774` تا `174:1844`.
- Primary / Destructive: Small `176:1714` تا `176:1784`؛ Medium `176:788` تا `176:858`؛ Large `176:1622` تا `176:1692`.
- Secondary / Destructive: Small `176:1806` تا `176:1876`؛ Medium `176:1898` تا `176:1968`؛ Large `176:1990` تا `176:2060`.
- Tertiary / Destructive: Small `176:2082` تا `176:2152`؛ Medium `176:2174` تا `176:2244`؛ Large `176:2266` تا `176:2336`.

## قدم بعدی مجاز

مالک محصول Screenshot ماتریس کامل و QA board را بازبینی می‌کند. در صورت تأیید، Button به `Tested Candidate` Promote و Component Set بعدی با همین Workflow شروع می‌شود.

Gate فعلی: `Sufficient to proceed / Awaiting final owner visual review`؛ Button هنوز `Stable` نیست.
