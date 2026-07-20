# فرصت‌های قابل استفاده برای شمش

## قابلیت‌هایی که رقیب دارد و باید در شمش بررسی شوند

| Opportunity ID | Source Feature or Flow | Observation | User Problem | Suggested Direction | Expected Impact | Implementation Complexity | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|
| OP-SH-001 | واریز چندروشی | ملی‌گلد روش‌های واریز را با سقف و زمان شارژ نشان می‌دهد | کاربر نمی‌داند کدام روش برای مبلغش مناسب است | انتخاب روش واریز با پیشنهاد هوشمند براساس مبلغ | High | Medium | Critical | Deposit screenshots |
| OP-SH-002 | تحویل فیزیکی | دو مسیر درب منزل و شعبه دارد | کاربر می‌خواهد طلای دیجیتال را واقعی دریافت کند | فلو تحویل شمش با محصول، شعبه، SLA و گواهی | High | High | Critical | Shipment screenshots |
| OP-SH-003 | صفحه محصول شمش | وزن، خلوص، پلمب، فاکتور رسمی نمایش داده می‌شود | کاربر به اصالت شمش شک دارد | صفحه محصول شمش شمش با سریال، گواهی، بسته‌بندی و فرآیند ضرب | High | Medium | Critical | Product page text |
| OP-SH-004 | رسید تراکنش | رسید واریز کامل و قابل اشتراک‌گذاری است | کاربر مدرک قابل پیگیری می‌خواهد | رسید استاندارد برای خرید، فروش، برداشت، تحویل و انتقال | High | Medium | High | History receipt |
| OP-SH-005 | سفارش خودکار | فرم خرید/فروش شرطی وجود دارد | کاربر قیمت هدف دارد اما نمی‌خواهد دائم چک کند | سفارش شرطی با status کامل و امکان لغو | Medium | Medium | Medium | Limit order text |
| OP-SH-006 | کارت هدیه | مسیر سفارش و فعال‌سازی کارت هدیه دارد | هدیه دادن طلا تجربه محصول را اجتماعی می‌کند | کارت هدیه با طرح، پیام، گیرنده و وضعیت استفاده | Medium | Medium | High | Gift-card text |
| OP-SH-007 | طرح زرگر | سپرده‌گذاری طلا با سود طلایی و دوره دارد | کاربر می‌خواهد طلا را غیرفعال نگه ندارد | اگر شمش مزیت تولید دارد، طرح مبتنی بر ضرب/تولید را شفاف طراحی کند | High | High | Medium | Zargar screenshots |
| OP-SH-008 | وام/اعتبار | محاسبه‌گر وثیقه و بازپرداخت دارد | کاربر نمی‌خواهد طلا بفروشد | فقط در صورت آمادگی حقوقی، وام با قرارداد و ریسک شفاف | Medium | High | Low | Credit calculator |

## قابلیت‌هایی که رقیب ندارد و می‌توانند مزیت شمش باشند

| Opportunity ID | Source Feature or Flow | Observation | User Problem | Suggested Direction | Expected Impact | Implementation Complexity | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|
| OP-SH-009 | انتقال طلا | لینک مستقل انتقال طلا پیدا نشد | کاربر می‌خواهد طلا را به دیگری منتقل کند | انتقال طلا با نمایش گیرنده، کارمزد، سقف و رسید | High | Medium | High | Services/history |
| OP-SH-010 | اصالت شمش | صفحه محصول درباره پلمب می‌گوید اما استعلام سریال در فلو PWA دیده نشد | کاربر می‌خواهد شمش دریافتی را استعلام کند | استعلام اصالت با شماره/QR شمش و گواهی | High | Medium | Critical | Product/Shipment |
| OP-SH-011 | هزینه تحویل | هزینه و SLA تحویل زود دیده نشد | کاربر قبل از خرید نمی‌داند دریافت فیزیکی چقدر هزینه/زمان دارد | محاسبه‌گر تحویل قبل از ثبت درخواست | High | Medium | High | Shipment |
| OP-SH-012 | پیش‌فاکتور خرید | پیش‌فاکتور رقیب تناقض عددی داشت | کاربر به محاسبه مالی حساس است | پیش‌فاکتور بدون ابهام با فرمول و تایمر | High | Low | Critical | Buy flow |
| OP-SH-013 | پشتیبانی contextual | پشتیبانی در پروفایل است نه کنار تراکنش حساس | کاربر هنگام خطای مالی نیاز به کمک فوری دارد | پشتیبانی contextual کنار خرید ناموفق، برداشت، تحویل و KYC | Medium | Medium | High | Support |

## الگوهای UX مناسب برای الگوبرداری

| Opportunity ID | Source Feature or Flow | Observation | User Problem | Suggested Direction | Expected Impact | Implementation Complexity | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|
| OP-SH-014 | روش‌های واریز | کارت‌های روش با سقف و زمان | تصمیم مالی پیچیده است | کارت‌های مقایسه‌ای + badge «پیشنهادی» | High | Low | High | Deposit |
| OP-SH-015 | تاریخچه | تب‌های تراکنش و رسید | پیگیری تراکنش سخت است | تاریخچه فیلترشده با search و receipt detail | High | Medium | High | History |
| OP-SH-016 | محاسبه‌گر وام | هزینه‌ها عددی نمایش داده شده‌اند | هزینه اعتباری مبهم است | هر قابلیت اعتباری باید قبل از CTA جدول محاسبه داشته باشد | Medium | Medium | Medium | Credit |
| OP-SH-017 | کاتالوگ تحویل | محصول با وزن و قیمت | انتخاب محصول فیزیکی نیاز به مقایسه دارد | فیلتر وزن/عیار/تحویل و مقایسه محصول | Medium | Medium | High | Shipment |

## اشتباهات و اصطکاک‌هایی که نباید در شمش تکرار شوند

| Opportunity ID | Source Feature or Flow | Observation | User Problem | Suggested Direction | Expected Impact | Implementation Complexity | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|
| OP-SH-018 | پیش‌فاکتور خرید | مقدار و مبلغ صفر اما CTA مبلغ‌دار | از دست رفتن اعتماد | تست سخت محاسبات و نمایش fallback | High | Low | Critical | Buy preview |
| OP-SH-019 | تحویل با موجودی صفر | بازخورد صریح کافی دیده نشد | کاربر نمی‌داند چقدر کم دارد | نمایش «برای این شمش X گرم کم دارید» | High | Low | High | Shipment |
| OP-SH-020 | FAQ ناپایدار | بعضی دسته‌ها محتوای سوال ندادند یا tel undefined دیده شد | اعتماد به پشتیبانی کاهش می‌یابد | QA محتوایی و لینک‌ها قبل از انتشار | Medium | Low | High | FAQ |
| OP-SH-021 | مفاهیم تخصصی | سوت، زرگر، وثیقه، شناسه‌دار توضیح لحظه‌ای کم دارند | کاربر تازه‌کار گیج می‌شود | microcopy و tooltip در نقطه استفاده | Medium | Low | High | Buy/Zargar/Credit |

