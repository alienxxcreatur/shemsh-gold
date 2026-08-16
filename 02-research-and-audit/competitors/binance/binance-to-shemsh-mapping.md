# نگاشت Patternهای بایننس به شمش

وضعیت: `Template ready / Awaiting pattern catalog`

## اصل نگاشت

هر Pattern باید هم‌زمان با سه منبع مقایسه شود:

```text
Binance evidence
      ↕
Shemsh approved wireframe
      ↕
Current Shemsh Design System
```

اولویت تعارض:

1. قواعد بیزینس، امنیت، دسترس‌پذیری و تصمیم‌های ثبت‌شده شمش.
2. ساختار و رفتار بخش‌های تأییدشده وایرفریم شمش.
3. Design System و Tokenهای فعلی به‌عنوان Candidate قابل اصلاح.
4. Pattern رقبا به‌عنوان شاهد و پیشنهاد، نه قانون.

## وضعیت تصمیم

- `Adopt`: منطق Pattern تقریباً مستقیم مناسب شمش است.
- `Adapt`: منطق مفید است اما برای برند، RTL، PWA، تومان/گرم یا قواعد مالی تغییر می‌کند.
- `Reject`: با محصول، اعتماد، دسترس‌پذیری یا Scope شمش ناسازگار است.
- `Defer`: تصمیم محصول/خدمات یا Evidence هنوز کافی نیست.

## وضعیت منابع شمش

- `Approved source`: خانه، معامله و App Shell در بخش‌های تأییدشده.
- `Candidate`: حالت‌های فرعی، Chart، Receipt و Patternهای هنوز در Review.
- `Provisional`: خدمات و قابلیت‌های Capability-gated؛ Component عمومی قابل بررسی است اما محتوا/تعداد/حضور آن Stable نمی‌شود.

## ماتریس نگاشت

| Mapping ID | Pattern ID | Shemsh target | Wireframe status | Current DS impact | Decision | Change type | Dependency | Owner review |
|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — |

## Change type

- `Keep`: ساختار و Style فعلی کافی است.
- `Recalibrate`: همان Component/Token با مقادیر یا Treatment تازه.
- `Add`: Component یا Pattern واقعاً غایب است.
- `Deprecate`: Candidate قبلی پس از Migration کنار گذاشته می‌شود؛ حذف مستقیم ممنوع.
- `Defer`: به تصمیم محصول، برند یا Evidence بیشتر وابسته است.

## Gate ورود به Figma

یک Mapping فقط زمانی وارد Candidate Figma می‌شود که:

1. Pattern حداقل `Medium confidence` داشته باشد.
2. وضعیت `Adopt` یا `Adapt` گرفته باشد.
3. Target و State واقعی شمش مشخص باشد.
4. وابستگی بیزینسی/برند با برچسب روشن ثبت شده باشد.
5. Test case در یکی از Pilotهای Trade، Home/Assets یا Trust/Receipt داشته باشد.

## Pilotهای مقصد

| Pilot | چه چیزهایی را معتبر می‌کند |
|---|---|
| Trade Entry | Type عدد، Asset tab، Buy/Sell، Balance context، Unit، CTA، Keypad، Error و No-scroll |
| Home / Assets | Surface، Card/List، Portfolio hierarchy، Privacy، Wallet row، Shortcut و Data density |
| Trust / Receipt | Disclosure، Fee/Rate، Ownership، Tracking، Status، Support و تفاوت واقعی شمش |

## Guardrail مهاجرت

- نسخه فعلی Figma حذف یا overwrite نمی‌شود؛ Candidate تازه کنار آن ساخته می‌شود.
- `Tested Candidate` فعلی فقط با Evidence تازه بازبینی می‌شود و خودکار Demote یا Promote نمی‌شود.
- تصمیم نهایی Visual Direction بعد از G3/G4 ثبت می‌شود.
- سرویس‌های نامطمئن فقط Pattern عمومی را تغذیه می‌کنند و Scope محصول نمی‌سازند.
