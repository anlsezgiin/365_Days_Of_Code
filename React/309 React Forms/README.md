# 309. React Forms

- `onChange={}` bu arkadaş input için bir script ve inputun içerisindeki değer her değiştiğinde çalışıyor ve bu abinin içerisinde çalışan fonksiyon bir event değeri alarak içeriğe ulaşmamızı sağlıyor.Bunun sayesinde inputtan aldığımız değeri useState ile kontrol ederek proje içerisinde kullanabiliriz.

- Burada dikkat edilmesi gereken nokta value değerinin useState içerisindeki name'den gelmesi gerektiğidir. Böylece bu value'yu diğer yerlerdede kullanabiliriz ve buna `Control Component` ismi verilir. Bunları bi araştılarım :)