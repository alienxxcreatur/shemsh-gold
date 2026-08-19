# چک‌لیست Design QA

## نتیجه Pass ساختاری v0.1 — 19 Aug 2026

- [x] کپی نسخه‌دار از Baseline D-219 ساخته شد و Hash سورس مرحله ۶ ثابت ماند.
- [x] دو بلوک JavaScript فایل فعال بدون خطای Parse بررسی شدند.
- [x] Home یک Numeric anchor مستقل و Asset objectهای جدا دارد؛ Zero فقط ماژول دارایی را جایگزین می‌کند.
- [x] Trade hierarchy شامل Asset/Direction، موجودی Contextual، Amount hero، معادل و CTA حفظ و تقویت شد.
- [x] Preview یک Anchor عددی و Breakdown تخت دارد؛ History و Operation detail به Scan-first/Key-value تخت نزدیک شدند.
- [ ] QA بصری مستقیم 320/375/390 و 812×375؛ مرورگر داخلی دسترسی `file://` را مسدود کرد و تست دستی/Preview محلی لازم است.
- [ ] تأیید بصری مالک محصول پیش از اعمال Palette v2 و Visual polish.

## ساختار و محتوا

- [ ] ترتیب و سلسله‌مراتب با طراحی تأییدشده یکی است.
- [ ] متن‌ها و اعداد واقعی‌اند و Overflow ندارند.
- [ ] RTL، اعداد و واحدها درست نمایش داده می‌شوند.
- [ ] Loading، Empty، Error، Pending و Success پیاده شده‌اند.

## تعامل

- [ ] Back، Cancel و حفظ State درست‌اند.
- [ ] Loading از ارسال دوباره جلوگیری می‌کند.
- [ ] خطا علت و اقدام بعدی دارد.
- [ ] انقضای نرخ و Refresh رفتار مشخص دارد.

## بصری و Responsive

- [ ] توکن‌ها و کامپوننت‌های رسمی استفاده شده‌اند.
- [ ] کوچک‌ترین موبایل، موبایل بزرگ، تبلت و Landscape بررسی شده‌اند.
- [ ] Safe area و عناصر ثابت محتوا را نمی‌پوشانند.
- [ ] آیکن، فاصله و Alignment منسجم‌اند.

## دسترس‌پذیری و عملکرد

- [ ] چک‌لیست `../07-design-system/accessibility-checklist.md` پاس شده است.
- [ ] تصاویر ابعاد رزروشده و فرمت مناسب دارند.
- [ ] Skeleton و Loading باعث پرش Layout نمی‌شوند.
