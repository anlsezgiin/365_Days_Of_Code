# 309. React Forms

- `onChange={}` bu arkadaş input için bir script ve inputun içerisindeki değer her değiştiğinde çalışıyor ve bu abinin içerisinde çalışan fonksiyon bir event değeri alarak içeriğe ulaşmamızı sağlıyor.Bunun sayesinde inputtan aldığımız değeri useState ile kontrol ederek proje içerisinde kullanabiliriz.

- Burada dikkat edilmesi gereken nokta value değerinin useState içerisindeki name'den gelmesi gerektiğidir. Böylece bu value'yu diğer yerlerdede kullanabiliriz ve buna `Control Component` ismi verilir. Bunları bi araştılarım :)

- Buradaki kodda `event.preventDefault()` isimli bir kod var. Bu kod form gönderildikten sonra HTML'in kendini yenilemesini engelliyor böylece gönderilen verilerimiz aynı sayfa içerisinde işlenebiliyor. Bunun amacı olayın varsayılan davranışını engellemektir. Örneğin siz bir form gönderdiğiniz zaman genelde ya başka bir sayfaya gidersiniz ya da sayfa yenilenir. İşte bunu engellemeye yarıyor. Tabii istersen bunun dışında button'a onClick atayarakta yapabilirsin ama genelde submit olarak kullanacağımız için bu projedeki olay şimdilik böyle.