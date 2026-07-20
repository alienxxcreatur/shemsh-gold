# فهرست کامپوننت‌ها

| گروه | کامپوننت | Stateهای الزامی | وابسته به فلو | وضعیت |
|---|---|---|---|---|
| Action | Button، Icon button، Link | default, pressed, focus, loading, disabled | همه | باز |
| Input | Text، Amount، Gold amount، OTP، Select | default, focus, filled, error, disabled | مالی/Auth | باز |
| Data | Price، Balance، Rate timer، Change | loading, stale, hidden | خانه/معامله | باز |
| Finance | Order summary، Fee row، Receipt | pending, success, failed | خرید/فروش | باز |
| Status | Badge، Timeline، Alert | info, warning, error, success | تراکنش/تحویل | باز |
| Navigation | App bar، Tab bar، Sidebar، Tabs | active, focus, badge | کل محصول | باز |
| Overlay | Sheet، Dialog، Toast | enter, exit, error, confirm | کل محصول | باز |
| Trust | License، Evidence card، Support entry | valid, expired? | اعتماد | باز |
| Physical | Bullion card، Pickup selector | available, unavailable | دریافت | باز |

هر کامپوننت باید Content constraints، دسترس‌پذیری و رفتار Responsive داشته باشد.
