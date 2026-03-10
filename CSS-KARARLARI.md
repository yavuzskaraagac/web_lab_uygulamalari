# CSS Kararları

## 1. Breakpoint Secimi
- Neden 640px ve 1024px sectim?: Bu genişlikler güncel endüstri standartlarında en yaygın kullanılan mobil (640px altı), tablet (640px-1024px) ve masaüstü (1024px üstü) sınırlarını temsil eden tutarlı kırılım noktalarıdır.
- Icerigim bu noktalarda nasil degisiyor?: 640px altında içerikler tek sütun (dikey) formunda dizilirken; 640px üzerinde grid sistemleri 2 sütuna, 1024px üzerinde de daha ferah geniş alan kullanımları devreye girerek içeriklerin harita şeklinde yan yana yayılmasını sağlar.

## 2. Layout Tercihleri
- Header icin neden Flexbox sectim?: Header içyapısındaki logoyu sola, menü elemanlarını sağa hızlıca yaslamak, dikeyde mükemmel ortalamak ve aralarında esnek boşluklar bırakmak için (space-between) en dinamik yöntem Flexbox'tır.
- Proje kartlari icin neden Grid sectim?: Projeler gibi sayısı artabilecek yapıların satır ve sütunlar halinde 2 boyutlu çerçevede ekrana oturmasını yönetmek Grid yapısında çok daha kolay ve hatasız kontrol edilir.
- auto-fit mi auto-fill mi kullandim, neden?: `auto-fit` yapısını kullandım. Çünkü ekran boyutu genişlediğinde sahte/boş sütunlar yaratmak yerine, eldeki mevcut veri kartlarının ekranı tamamlamasını, esnemesini ve boşluksuz dolgun görünmesini sağladım.

## 3. Design Tokens
- Hangi renk paletini sectim ve neden?: Tasarıma premium ve güncel bir his katmak için koyu gri ve mor ağırlıklı Glassmorphism etkisini barındıran bir karanlık mod (Dark Mode) paleti seçtim. Modernliği simgelerken göz yormaz.
- Spacing skalasini nasil belirledim?: Tüm boşlukları CSS değişkenleriyle (`--spacing-sm`, `--spacing-md` vs.) ve birbirinin matematiksel katı (örneğin 0.5rem - 1rem - 2rem) şeklinde ayarladım. Böylece uygulamadaki tasarım ritmini her ortamda aynı kıldım.
- Fluid typography icin clamp degerlerini nasil ayarladim?: Font büyüklüklerinin her cihazda farklı görünmesi yerine akıcı olması amacı ile `clamp(min-size, vw-size, max-size)` metodolojisini uygulayıp ekranla beraber kademeli büyümeyi/küçülmeyi programladım.

## 4. Responsive Stratejiler
- Mobile-first yaklasimini nasil uyguladim?: Uygulamanın temel base CSS formunu önce kısıtlı mobil ekrana göre yazdım. Geniş ekranlar için gereken özel kodları ise sonradan `@media (min-width: ...)` içlerinde ekleyerek render performansını artırdım.
- Hangi elemanlar breakpoint'lerde degisiyor?: Ana yönlendirme çubuğu tablete geçişte birleşik listeden yan yana linklere geçerken, "Hakkımda" bölümü alt alta kalıbından yan yana metin bloğuna, Grid yapılı kart sistemi de farklı boyutlarda 1'den 3 sütuna dönüşür.
- Gorsel boyutlari nasil yonettim?: Görüntü bozulumlarını (distortion) engellemek amacıyla tüm imajlara ana containerları üzerinden `max-width: 100%` ve `height: auto` kombinasyonu verip container küçüldüğünde görselleri ölçeklendirdim.
