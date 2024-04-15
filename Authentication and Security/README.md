# Authentication and Security

## 265. Introduction to Authentication

- Neden buna ihtiyacımız var? Çünkü her kullanıcı bir şeyler yapacak işte web uygulamanda beğeni, yorum zart zurt özetle her kullanıcının bir verisi olucak ve bu verileri veritabanında unique olarak tutmak gerekicek bu yüzden authentication'a ihtiyacımız var.

- Bir diğer sebep ise kullanıcının durumuna göre bazı verilere erişimini kısıtlamaktır (premium gibi özellikler)

- Authentication'ın zorluğuweb sitesi güvenli yapmaktan gelmektedir.

## 266. Level 1 - Registering Users with Email and Password

- Bu seviyede kullancıların kimlik doğrulamasını email ve password ile yapacağız bu yöntem en düşük güvenlikli olandır ancak bir yerden başlamak lazım öyle değil mi?

## 267. Level 2 - Encryption and Hashing

*Encryption:* Olay şu, diyelim ki bir şekilde hacklendin ve saldırganlar veritabanına erişti. Eğer orada bilgiler normal bir şekilde duruyorsa çatur çutur çalabilirler. Ancak biz bu verileri bir formatta şifrelersek bunu çözmeleri zor olucaktır ve verilerimzi daha ügvenli hale gelecektir. İşte bu verileri şifreleme işlemine Encryption denir.

- Günümüzde aes256 olarak adlandırılan bir şifreleme yöntemi kullanılıyor ve bunun bir sürü matematik uygulaması var ancak günün sonunda süreç hala aynı.

- Şifrelemen ne kadar güçlü olursa olsun eğer saldırgan encryption key'ini ele geçirirse ve yönetimini bulurlarsa decrypt etmeleri zor olmayacaktır. İşte buradaki en önemli nokta olan şifreleme anahtarının güvenliğini **hashing** ile sağlıyoruz. Hashing encryption key'e olan ihtiyacı ortadan kaldırır. Peki bir ekey'imiz yoksa şifremizi nasıl decrypt edeceğiz? İşte işin sırrı bunu yapamamakta. (Whaattt???) Ayrıca bir Hash'i tekrar şifreye dönüştürmek neredeyse imkansızdır. Peki bir şifreyi bu kadar hızlı Hash'e çevirmek mümkün iken tam tersini neden olmuyor? Bu nasıl mümkün? Şöyle ki, 377'nin asal sayı olup olmadığını kontrol etmeni istiyorum. Bu ne kadar zor olabilir ki? Uzun bir süre düşündükten sonra 13 ve 29 sayılarına bölündüğünü bulduk diyelim yani asal değil. Peki 12x29'u sorsaydım sana? Direkt olarak bilebilirdin değil mi? İşte aynı mantık dostum. Özetle ileriye doğru çok hızlı bir şekilde hesaplanabilirler ama geriye dönmek neredeyse imkansızdır.

- Hashin çalışma mantığı budur. Şifreyi girer, hashlenir ve saklanır. Eşleştirmeler hash'ler üzerinden yapılır. Şifreleri biz dahi bilmeyiz.

# 268. How to Hack Passwords

- Hash tablosu dediğimi bir şey var ve şu mantıkla çalışıyor: Diyelim ki bir veritabanına girdik ve kullanıcıların şifreleri hashlenmiş, dolayısı ile bunlara erişemiyoruz. En sık kullanılan şifrelerin bir hash tablosunu çıkartarak bu tabloyu veritabanı ile karşılaştırırız ve aynı olan hashlerden şifre çıkarımları yapabiliriz. Tabi bu durum yalnızca en sık kullanılan şifreleri kullanmış olan insanlar üzerinde çalışır.

- Basit şifrelerin yanı sıra zorlu şifreleri kırmak için yaklaşık 8 milyar hash kombinasyonu bulunmaktadır. Bunlar için büyük kelime tabloları, kombinasyonlar vs çıkarılmalıdır ve bu şifrelerin kırılması için ihtiyacımız olan şey ise GPU'dur. (Bitcoin mine etmek yerine hash üretmek için kullanacağız.) MD5 hash tabloları çok yaygındır.

- Peki çare ne? Şifremizi Burak Tuna gibi oluşturmaktır.

# 269. Level 3 - How to Salt Passwords for Improved Encryption

- Bu dersin içeriğinde önceki derslerde saydığımız güvenlik sorunlarının çözümüne odaklanacağız.
- Saltın yaptığı iş şu şekilde: güvenliği arttırmak için şifreleri hashlemeden önce onlara rastgelere karakterler ekleyerek hashliyoruz. Böylece şifrelerimizin hashi daha karmaşık bir hale geliyor ve çözümlenmesi zorlanıyor.

- Ancak bu tuzlar karmaşıklığı arttırsalarda ruh hastası manyak hacker bu tuzlarında bir tablosunu çıkartıp eğer kafayı size takmışlarsa bir şekilde şifrenizi kırabilirler. Burada güvenliği dahada arttırmak için MD5 hash yerine Bcrypt kullanacağız. Bcrypt parolalarımızı Blowfish algoritmasını kullanarak hash edebilmemizi sağlar.

## Salt Rounds

- Şifre + Tuz -> Hash Func = Hash, Hash + tuz -> Hash Func = Hash. İşte bu işleme Salt Rounds denir ve daha karmaşık hashler oluşturmamızı sağlar böyle kırılabilirlik oranları düşer.

-----

Dersin geri kalanında 9.2 projesinde çalışacağız.

----

# 270. Managing Cookies and Sessions

- Dersin içeriğinde cookies ve sessions(oturumlar) konuşacağız. 
- Cookieler çoğunluklu olarak web sitelerinde yaptığınız işlemleri bir oturum olarak aklında tutmak için kullanılır (amazonda sepete bir şey ekleme örneği.)
- Bir şeye baktığımızda bunun farklı bir sitede karşımıza çıkmasının sebebi cookielerdir.
- Bu cookiler çoğunlukla GET isteğinde saklanır. Tabi ilk olarak cookie'nin içeriğini POST ile göndermek gerekir :)

- Pek çok cookie türü vardır ancak en çok kullanılanı bir oturum oluşturmak ve sürdürmek için kullanılanlardır.

- Bu cookie ve session işini tabiki bir npm olan passport ile yapacağız.

- Bu noktada birden fazla yeni paketimiz var bunlardan ilki "express-session" ve bu arkadaş kullanıcının tarayıcısına bir çerez kaydetmemizi sağlayan bir oturumu etkinleştirmek içindir. *Kısacası, express-session paketi, Express.js uygulamalarında oturum yönetimi işlemlerini kolaylaştırmak için kullanılır ve kullanıcıların kimlik doğrulamasını ve oturumlarını güvenli bir şekilde yönetmeye yardımcı olur.*

- Passport ise tek bir projeye çok sayıda farklı kimlik doğrulama stratejisini kolayca eklememize olanak tanıyor. Şimdilik yerel oturum açma işlemleri için passport-local'i kullanacağız.

- Geri kalanı proje.

# 271. Level 5 - Hide your Secrets with Enviroment Variables

- Burda öğreneceğimiz şey .env dosyaları sanırım
- Bu enviroment variables denilen şey gizlememiz gereken gizlilikleri gizlememize yardımcı olur. Peki bunun sağladığı şey nedir? Birincisi kolaylık sağlar. Pek çok şey elimizin altında kolaylıkla kullanılabilir hale gelir. İkincisi ise güvenliktir. Bunu acı yoldan yaşadık biliyorsun :)
- Bu arkadaş gizlemek istediğimiz şeyleri kod tabanımızdan ayıran şeylerdir.
- dotenv npm paketini kullanacağız.
- Bu değişkenlerin önünde herhangi bir şey olmaz, dümdüz değişken adı ve değeri yazılır.
- .env dosyamızı gitignore'a eklediğimiz zaman TEBRİKLEER ARTIK GİZLİLİĞİNİZ DAHA YÜKSEK BİR SEVİYEDE diyebiliriz.

# 272-273. Level 6 - OAuth: Implement "Sıgn In with Google"

- OAuth nedir?: OAuth (Open Authorization), bir kullanıcının bir uygulamaya veya hizmete üçüncü bir uygulama veya servis aracılığıyla erişim verme protokolüdür. Özellikle internet tabanlı hizmetlerde kullanıcıların güvenli bir şekilde kimlik doğrulamasını sağlamak ve bu kullanıcıların belirli verilere erişim yetkisini denetlemek için kullanılır. Bu arkadaşın yaptığı iş aslında instagramda hesap açtığında numaranı girersin de rehberinde kayıtlı olanlar karşına çıkar ya aynı hesap yani.
- Bracebook örneğinden ilerlersek, bu işi yaptığımız zaman biz bracebook olarak bir GET isteği gönderiyoruz ve facebook bize kullanıcının arkadaşlarını ve eposta listesini içeren bir POST gönderiyor ve eğer bracebook ile eşleşen mailler bulursak BİNGO! HERE IS YOUR FRIENDSS!!
- Güvenlik açısından Google, Facebook Amazon vs. BigTech şirketler veri koruma işini büyük matematiksel şifrelemelerle yaptıkları için login işlemlerini bu arkadaşlar ile sağlamak çok daha güvenlidir.
- Sonuç olarak kendi sitemiz ile saydığımız login için gerekli siteleri birbirine bağlayan ve işlemesini sağlayan OAuth'tur.
- Bu işleri yapan farklı standartlarda vardır ancak OAuth'u özel kılan şeyler şu şekilde sıralanabilir:
1. Ayrıntılı Erişim Seviyesi (Granular Access Levels) vermemize izin verir. Bu kullanıcının facebook ile oturum açtığında facebook hesabından belirli şeyleri talep edebileceğimiz anlamına gelir (VERİ VERİ VERİİİİ). Neyi istediğimizi kendimiz belirleyebiliriz. Bu duruma göre sadece bir arkadaş listesiyken duruma göre annesinin kızlık soyadını bile isteyebiliriz (şaka yapıyorum :D)
2. Salt okunur/Salt okuma-yazma erişimine (Read/Read+Write Acces) izin vermesi. Yani hesabında paylaştıklarını okuma izni veya hesabında bir şeyler paylaşabilme izni. (zamani twitter botları :D)
3. Revoke Access: Sana verdiği erişim iznini kaldırabilir.       

----

Auth Code giriş başarılı bir şekilde oturum açıldığını doğrulamak için kullanılırken Access Token bu üçüncü tarafın web sitesindeki kullanıcının hesabında depolanan bilgilere örneğin epostalarına veya arkadaş listelerine erişmek için kullanacağımız şeydir.

Burdan sonrası uygulamayı anlatıyor.