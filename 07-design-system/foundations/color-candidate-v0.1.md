# Candidate Set رنگ — نسخه ۰.۱

وضعیت: `Superseded for Primary by D-117 and D-202 / Historical Tested Candidate`

> جهت Purple ابتدا با Black-neutral در D-117 و سپس Black-neutral با Navy-first در D-202 جایگزین شد. Rampها و تست‌های این سند شاهد تاریخی‌اند؛ مرجع جاری [`navy-first-palette-candidate-v0.3.md`](navy-first-palette-candidate-v0.3.md) است.

تاریخ: ۱۷ مرداد ۱۴۰۵ / 8 Aug 2026

منابع:

- `legacy-brand-candidate-map.md`
- `phase-1-input-audit.md`
- `theme-architecture.md`
- `token-architecture.md`
- موج ۱ App Shell و Auth/KYC

## جهت پیشنهادی

زبان رنگی نسخه ۰.۱ از سه خانواده تشکیل می‌شود:

1. خنثی‌های آرام و کمی گرم برای استفاده روزمره و طولانی.
2. بنفش برند برای Action، Focus و هویت دیجیتال.
3. طلایی محدود برای هویت طلا، دارایی فیزیکی و Highlightهای کنترل‌شده.

Status و Financial direction خانواده‌های معنایی جدا هستند. هیچ رنگی به‌تنهایی معنی Success، Trust، Increase یا Decrease را منتقل نمی‌کند.

## تصمیم‌های Candidate

- **Design assumption:** Purple خانواده Primary action و Focus است.
- **Design assumption:** Gold خانواده Accent است و Primary CTA پیش‌فرض نیست.
- **Design assumption:** Canvas عمومی خنثی و کم‌تنش است؛ Sea Shell فقط Surface هویتی محدود است.
- **Design assumption:** Dark Mode نسخه معکوس Light نیست و Aliasهای مستقل دارد.
- **Design assumption:** رنگ‌های قدیمی Success/Warning/Error فقط نقطه شروع Primitive هستند و مستقیم مصرف نمی‌شوند.

## Primitiveهای اصلی

### Purple

| Token | مقدار | منبع |
|---|---:|---|
| `primitive.color.purple.50` | `#F5F1FF` | توسعه Candidate |
| `primitive.color.purple.100` | `#E9E0FF` | توسعه Candidate |
| `primitive.color.purple.200` | `#D4C3FF` | توسعه Candidate |
| `primitive.color.purple.300` | `#B99EF2` | توسعه Candidate |
| `primitive.color.purple.400` | `#9A78E6` | توسعه Candidate |
| `primitive.color.purple.500` | `#7C5DD9` | Shemsh Royal Purple برندگاید |
| `primitive.color.purple.600` | `#6946C3` | توسعه Candidate |
| `primitive.color.purple.700` | `#5635A5` | توسعه Candidate |
| `primitive.color.purple.800` | `#42297F` | توسعه Candidate |
| `primitive.color.purple.900` | `#30205A` | توسعه Candidate |

### Gold

| Token | مقدار | منبع |
|---|---:|---|
| `primitive.color.gold.50` | `#FEF9EB` | توسعه Candidate |
| `primitive.color.gold.100` | `#F9EDC8` | توسعه Candidate |
| `primitive.color.gold.200` | `#EFD894` | توسعه Candidate |
| `primitive.color.gold.300` | `#DEBB5E` | توسعه Candidate |
| `primitive.color.gold.400` | `#C89D38` | Satin Sheen Gold برندگاید |
| `primitive.color.gold.500` | `#A77B1D` | توسعه Candidate |
| `primitive.color.gold.600` | `#806015` | توسعه Candidate |
| `primitive.color.gold.700` | `#5E4611` | توسعه Candidate |
| `primitive.color.gold.800` | `#40300D` | توسعه Candidate |
| `primitive.color.gold.900` | `#2B210A` | توسعه Candidate |

### Neutral

| Token | مقدار | نقش اولیه |
|---|---:|---|
| `primitive.color.neutral.0` | `#FFFFFF` | Surface روشن |
| `primitive.color.neutral.50` | `#F8F7F4` | Canvas روشن |
| `primitive.color.neutral.100` | `#F2F0EA` | Surface کم‌تأکید |
| `primitive.color.neutral.200` | `#E7E3DC` | Border/Subtle fill |
| `primitive.color.neutral.300` | `#D3CEC5` | Disabled/Divider |
| `primitive.color.neutral.400` | `#AAA39A` | Placeholder candidate |
| `primitive.color.neutral.500` | `#7D776F` | Tertiary candidate |
| `primitive.color.neutral.600` | `#5F5A54` | Secondary candidate |
| `primitive.color.neutral.700` | `#46423E` | Strong content |
| `primitive.color.neutral.800` | `#333333` | Dark Charcoal برندگاید |
| `primitive.color.neutral.900` | `#1A1918` | Primary content |
| `primitive.color.neutral.950` | `#11100F` | Deep surface |

## Semantic Light

| نقش | مقدار Candidate | توضیح |
|---|---:|---|
| `semantic.color.surface.canvas` | `#F8F7F4` | زمینه عمومی |
| `semantic.color.surface.base` | `#FFFFFF` | Card و Input |
| `semantic.color.surface.subtle` | `#F2F0EA` | گروه‌بندی کم‌تأکید |
| `semantic.color.surface.brand-tint` | `#FDF7EB` | Sea Shell؛ مصرف محدود |
| `semantic.color.text.primary` | `#1A191D` | متن و عدد اصلی |
| `semantic.color.text.secondary` | `#5F5B66` | توضیح |
| `semantic.color.text.tertiary` | `#746F7B` | Metadata |
| `semantic.color.border.subtle` | `#D9D4DE` | Divider و Card |
| `semantic.color.border.interactive` | `#8D8696` | مرز کنترل؛ کنتراست ۳:۱+ |
| `semantic.color.action.primary.container` | `#7C5DD9` | Purple برند |
| `semantic.color.action.primary.content` | `#FFFFFF` | `4.75:1` |
| `semantic.color.action.primary.hover` | `#6946C3` | Hover |
| `semantic.color.action.primary.pressed` | `#5635A5` | Pressed |
| `semantic.color.focus.ring` | `#6946C3` | مستقل از Border |
| `semantic.color.gold.accent` | `#806015` | متن/Icon کوچک روی Light |
| `semantic.color.gold.container` | `#F9EDC8` | زمینه هویتی |
| `semantic.color.gold.on-container` | `#40300D` | `10.92:1` |

## Semantic Dark

| نقش | مقدار Candidate | توضیح |
|---|---:|---|
| `semantic.color.surface.canvas` | `#141319` | زمینه عمومی |
| `semantic.color.surface.base` | `#1D1B23` | Card و Input |
| `semantic.color.surface.raised` | `#27232F` | Sheet و Menu |
| `semantic.color.text.primary` | `#F6F3FA` | متن و عدد اصلی |
| `semantic.color.text.secondary` | `#C9C4D1` | توضیح |
| `semantic.color.text.tertiary` | `#A29DAD` | Metadata |
| `semantic.color.border.subtle` | `#3C3745` | Divider و Card |
| `semantic.color.border.interactive` | `#81778C` | مرز کنترل؛ `4.01:1` روی Base |
| `semantic.color.action.primary.container` | `#B99EF2` | Purple روشن‌شده |
| `semantic.color.action.primary.content` | `#24143B` | `7.46:1` |
| `semantic.color.action.primary.hover` | `#C7AFF7` | Hover |
| `semantic.color.action.primary.pressed` | `#A889E7` | Pressed |
| `semantic.color.focus.ring` | `#B99EF2` | مستقل از Border |
| `semantic.color.gold.accent` | `#DEBB5E` | متن/Icon کوچک روی Dark |
| `semantic.color.gold.container` | `#40300D` | زمینه هویتی |
| `semantic.color.gold.on-container` | `#F9EDC8` | محتوای Gold container |

## Status و Financial

| نقش | Light foreground / container | Dark foreground / container |
|---|---|---|
| `status.success` | `#176B43` / `#E7F6EE` | `#73D5A5` / `#143D2B` |
| `status.warning` | `#765108` / `#FFF4D6` | `#F2CD6A` / `#40310F` |
| `status.danger` | `#A62B2B` / `#FDEEEE` | `#FF9B9B` / `#4A1D20` |
| `status.info` | `#385AA8` / `#EBF1FF` | `#AFC5FF` / `#1A2D58` |
| `financial.increase` | `#176B43` + Arrow/Label | `#73D5A5` + Arrow/Label |
| `financial.decrease` | `#A62B2B` + Arrow/Label | `#FF9B9B` + Arrow/Label |
| `financial.neutral` | `#5F5B66` | `#C9C4D1` |
| `financial.pending` | `#765108` + Label | `#F2CD6A` + Label |

شباهت مقدار Primitive میان Status و Financial مجاز است؛ Alias معنایی آن‌ها مشترک نیست.

## کنتراست‌های تأییدشده Candidate

| جفت | نسبت |
|---|---:|
| Text primary / Light canvas | `16.33:1` |
| Text secondary / Light canvas | `6.17:1` |
| Text tertiary / Light canvas | `4.56:1` |
| White / Purple 500 | `4.75:1` |
| Purple ink / Purple 300 | `7.46:1` |
| Gold 600 / Light canvas | `5.44:1` |
| Gold 800 / Gold 100 | `10.92:1` |
| Text primary / Dark canvas | `16.82:1` |
| Text secondary / Dark canvas | `10.82:1` |
| Text tertiary / Dark canvas | `7.00:1` |
| Gold 300 / Dark canvas | `10.01:1` |
| Success foreground / container | `5.84:1` Light، `6.81:1` Dark |
| Warning foreground / container | `6.49:1` Light، `8.24:1` Dark |
| Danger foreground / container | `6.21:1` Light، `7.00:1` Dark |
| Info foreground / container | `5.81:1` Light، `7.85:1` Dark |

## موارد باز

- Purple 500 در `4.75:1` حاشیه امن کمی دارد؛ تست Rendering واقعی Yekan Bakh لازم است.
- Disabled با کنتراست حدود `3.2–3.5:1` قابل تشخیص است اما برای متن اطلاعاتی استفاده نمی‌شود.
- Palette نمودار چندسری، Overlay، Scrim و Trust evidence هنوز کامل نشده‌اند.
- Imperial Blue `#162266` در این نسخه Alias رسمی ندارد و تا تصمیم نقش آن `Keep Draft` است.

## Gate

ساخت Candidate Set: `Complete`

تست بصری اولیه: `Complete` — `candidate-v0.1-test-report.md`

ورود به Token library رسمی: `Sufficient to proceed as Candidate`؛ برای `Stable` شدن به تست Device واقعی، Dynamic Type/Screen Reader و تکمیل Paletteهای باز نیاز دارد.
