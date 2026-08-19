# بسته Preview موقت وایرفریم

این بسته یک خروجی Static قابل انتشار از Artifact فعال می‌سازد و خودش منبع طراحی نیست.

## ساخت خروجی

از همین پوشه اجرا شود:

```powershell
npm run build
npm run verify
```

خروجی در `dist/` ساخته و فایل `shemsh-wireframe-qa-preview.zip` نیز در همان پوشه بسته تولید می‌شود. برای Preview موقت HTTPS، محتوای `dist` یا ZIP تولیدشده را روی یک Static host خصوصی یا موقت قرار دهید.

مسیرهای اصلی پس از انتشار:

- حالت تعاملی: `/index.html`
- نمای کلی همه نماها: `/index.html?overview=1`
- Auth/KYC: `/wave-1-auth-kyc-wireframe.html`

## قرارداد همگام‌سازی

- فایل مرجع همیشه `../artifacts/multi-metal-waves-1-and-3-wireframe.html` است.
- هر تغییر HTML با اجرای دوباره `npm run build` وارد Preview می‌شود.
- `dist` خروجی تولیدشده است و نباید دستی ویرایش شود.
- فقط HTMLهای لازم، `password-policy.js` و فونت استفاده‌شده بسته‌بندی می‌شوند؛ کل مخزن منتشر نمی‌شود.

## نکته امنیتی

این وایرفریم داده نمونه دارد. Preview را عمومی و قابل ایندکس نگه ندارید. فایل `robots.txt` ایندکس‌کردن را منع می‌کند، اما جای Access control واقعی را نمی‌گیرد.
