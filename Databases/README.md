# Databases

- Bu dosya içerisinde Databases konusunu dinlerken tuttuğum notlar bulunmaktadır.

-----

Temel olarak Veritabanı dediğimiz şey verilerin geçici depolamak yerine kalıcı olarak depolamımızı sağlar. Yani şimdiye kadar yaptığımız uygulamalarda (ToDo List bunun için çok iyi bir örnek) server'ı kapatıp açtığımızda verilerimiz sıfırlanmış olurdu. Bunun önüne geçmek için database'ler kullanacağız.

- Temelde SQL DB ve NoSQL DB olmak üzere iki çeşit database türü vardır.

- SQL = Structed Query Language anlamına gelmektedir. Türkçesi Yapılandırılmış Sorgu Dili anlamındadır. Sanırım bu SQL ve NoSQL arasındaki farkı ucundan fark etmemizi sağladı değil mi?

## SQL Databases

- SQL veritabanları ebemizin örekesinden beri kullanılan veri tabanlarıdır ve en büyük özelliklerinden birisi tablosal şekilde olmalarıdır. Aynı bir excel tablosu gibi, İsim Soyisim Numara Sınıf zart zurt bilgileri bir tablo şeklinde tutabiliyoruz.
- Bu veritabanına aynı zamanda **ilişkisel** veritabanıda denir bunun en büyük sebebi farklı tablolardaki verileri birbirlerine bağlayabiliyor olmamızdır. Örneğin Anıl ismindeki arkadaş bir kitap yazmış ve kitabın farklı farklı özellikleri farklı bir tabloda tutuluyor. İşte bu tablo ile bir önceki maddede örnek verdiğim tablo ilişkilendirilerek verilere ulaşımın kolaylığı sağlanıyor.
- Dünyada en çok kullanılan (şirketler tarafından) veri tabanı Oracle'dır ancak kendileri 50k$ para istedikleri için biz ücretsiz ve **açık kaynak kodlu** olan **PostgreSQL**'e yöneleceğiz. Bunun yanı sıra SqlLite, mySQL blabla gibi farklı veritabanı markalarıda bulunmaktadır.

## NoSQL Databases

- Bunların en büyük avantajı ise esnek olmalarıdır.
- Veri tabanını değiştirmek zorunda kalmadan verilerimizin yapısını sonradan değiştirebiliriz.
- Örneğin SQL'de oluşturduğumuz bir tabloda X isimli kişiye bir özellik eklemek istediğimizde bunu tüm tabloya eklemek zorundayız yani dolaylı yoldan diğer kişilerede bu özelliği vermemiz gerekir ancak NoSQL'de böyle bir sorunumuz olmaz yalnızca X isimli kişiye yeni bir özellik ekleyebiliriz.
- Verilerimizi anında değiştirebiliriz.
- NoSQL SQL'i daha kolaylıştırmak ve SQL'deki bazı sorunlardan kurtulmak için oluşturulmuştur.
- Karşılaşabileceğimiz en popüler NoSQL veritabanlarından bazıları MongoDB, DynamoDB ve Redis'dir.

---

## SQL Commands: CREATE Table and INSERT Data

Her bir veritabanı türüyle yapacağımız ana şeyler basitçe CREATE (oluşturmak) READ (okumak) UPDATE (güncellemek) DESTROY (yok etmek) olucaktır ki bunlarada baş harflerinin birleşiminden oluşan CRUD işlemleri denir.

### CREATE kullanım örneği

Dümdüz bir tablo yaratmak için :D

```sql
CREATE TABLE musteriler (
    musteri_id SERIAL PRIMARY KEY,
    adi VARCHAR(50),
    soyadi VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    telefon VARCHAR(20)
);
```

Dümdüz tabloya veri eklemek için :D

### INSERT INTO kullanım örneği
```sql
INSERT INTO products 
VALUES (1,"Pen",1.20)

// Peki ya veri atlamak istersek?

INSERT INTO products
VALUES (2,"Pencil") // -> boş bırakmak o değeri null olarak atayacaktır.
// Tabii bu durum yalnızca NOT NULL yazmadığımız değerlerde geçerli olur diğer türlü hata verir.
```

---

## SQL Commands: READ, SELECT and WHERE

### SELECT kullanım örneği

Dümdüz seçmek yani okumak için :D
```sql
SELECT * FROM "products" // tüm tabloyu verir
```

```sql
SELECT * FROM products WHERE id=1 // tüm tablodan id'si 1 olanları verir.
```

---

## Updating Single Values and Adding Columns in SQL

### UPDATE kullanım örneği

Dümdüz güncelleme yapmak için :D

```sql
UPDATE products
SET price = 0.80
WHERE id=2
```
Peki ya tüm tabloyu değiştirmemiz gerekseydi? Ya da bir sütun eklemek isteseydik?

```sql
ALTER TABLE products
ADD stock INT
```

Şimdi bu stock sütununa değer ekleyelim.

```sql
UPDATE products
SET stock = 32
WHERE id = 1
```

```sql
UPDATE products
SET stock = 12
WHERE id = 2
```

## SQL Commands: DELETE

Dümdüz bişeyleri silmek için :D

### DELETE kullanım örneği
```sql
DELETE FROM products
WHERE id = 2
```

Sakın where yazmadan DELETE kullanma hatta hiç bir şeyi WHERE'siz kullanma tüm tablonun içinden geçersin ve inan bana bunu istemessin :D

---

## Understanding SQL Relationships, Foreign Keys and Inner Joins

- Foreign Key tüm tabloları birbirine bağlayacak olan anahtardır. Yani Foreign Keyler iki tabloda ortak olarak bulunan değerlerdir. Bunu somut bir şekilde örnekleyecek olursak bir satış tablosu ve bir müşteri tablosu düşünelim. Müşteri tablosundaki Anıl isimli kişinin id'si 1 olsun ve Satış tablosu müşteri tablosunun id'lerini içersin. Yani zaten böyle olmalı değil mi yoksa siparişi veren kişinin bilgilerine nasıl ulaşacağız :D? İşte burada id Foreign Key olarak geçer ve tabloları birbirlerine bağlar. Örnek bir Foreign Key tanımı syntax'ı vereceğim lakin bunu öğrenmek için pratik yapmak önemli bunun için w3schools üzerinden pratik yapabiliriz.

```sql
FOREIGN KEY (customer_id) REFERENCES customers(id),
FOREIGN KEY (product_id) REFERENCES products (id)
```

- Tabloları birleştirmek için JOIN keywordü kullanılır (bunuda w3schoolsdan çalışmalıyız) ve en yaygın olarak kullanılan INNER JOIN'dir.

---

# PostgreSQL

## Introduction to Postgres

Postgres'i kullanmak için gereken kod inanılmaz derecede basittir çünkü Postgres'i node ile kullanmak için *pg* isimli bir npm paketi vardır.

**Bu derste ufak bir kod parçası var ancak ileride zaten detaylı olarak bakılacağı için not alma gereği duymuyorum**

## 249. Understand how to use keys, Postgres types and keywords

*PostgreSQL'de `PRIMARY KEY` tanımında ek olarak `SERIAL` sözcüğü vardır ve bunun anlamı bir sonraki öğenin id'sini otomatik olarak tamamlayacağı anlamına gelmektedir. Örneğin id=1'den sonra id=2'nin gelmesi gibi.*

**varchar ile char veri tipleri, karakter dizilerini depolamak için kullanılan iki farklı veri tipidir. Aralarındaki fark ise şu şekildedir: varchar(10) ve char(10) değerleri olsun ve içeriğine "Anıl" yazalım. char(10) "Anıl" + 6 boşluk ile her zaman 10 karakter içerir ancak varchar(10) sadece kullanılan karakter sayısını yani "Anıl" isminin 4 karakterini tutar. Genel olarak varchar kullanmak daha faydalıdır.**

Son zamanlarda varchar yerine text kullanılmaya başlanmış ki bu da bir tercih. textin farkı ise maksimum değer belirlemiyor oluşu.

[PostgreSQL veri tipleri](https://www.postgresql.org/docs/current/datatype.html)

## 251. Use pgAdmin to CREATE a TABLE

**CSV: Comma-Separated Values" (Virgülle Ayrılmış Değerler) kısaltmasıdır. CSV dosya formatı, verilerin tablolar halinde düzenlenmiş bir biçimde metin dosyalarında depolanmasını sağlayan bir dosya formatıdır. CSV dosyalarında her satır genellikle bir veri kaydını temsil eder ve sütunlar ise bu kayıtlardaki farklı özellikleri veya alanları içerir. Örnek:
Ad,Soyad,Yaş
Ahmet,Yılmaz,30
Ayşe,Kaya,25
Mehmet,Çelik,35**

Bu dersin içeriği çoğunlukla pgAdmin üzerinden ilerliyor dolayısı ile alacağım notlar madde madde olabilir.

- pgAdmin içerisinde SQL sorgunu yazmak için veri tabanına tıkladıktan sonra sağ üstteki query tool işaretine tıklayabilirsin.
- Bir CREATE TABLE komutunda parantezi kapattıktan sonra noktalı virgül kullanmak önemli. Ayrıca parantez içerisinde değerleri tanımlarken virgül kullanırız ancak son değerde virgül kullanılmaz.
- pgAdmin'de import/export data kullanarak csv içerisindeki verileri tablomuza aktarabiliyoruz lakin dikkat etmemiz gereken nokta bu aktarımın ayarlar kısmındaki *header* seçeneğidir. Eğer ki CSV dosyanız içerisinde bir header varsa bu seçeneği işaretlemelisiniz aksi takdirde header'ı bir veri olarak görür ve bu hiç hoş olmaz.
- Tablodaki isimler ile CSV'deki isimler birebir aynı olmak zorundadır. Büyük küçük harf duyarlılığı vardır eğer aynı olmaz ise sorun yaşayabilirsiniz.

## 252. READ data from a Postgres database

- Bu dersin içeriğinde bir Quiz uygulaması yapacağız. Bu uygulama özetle bir başkentin hangi ülkeye ait olduğunu soracak ve eğer kullanıcı doğru cevaplarsa puanı yükselicek.
- pg npm paketi ile çalışacağız.
- `.trim()` fonksiyonu JavaScript'te gereksiz boşluklardan arındırmaya yarar. (Biraz araştırsak mı?)
- Bu dersin projesine World Capital Quiz klasörü içerisinden erişebilirsiniz. Projenizde dikkat etmeniz gereken yerler yorum satırlarında belirtirlmiştir.

## 253. Query data using SELECT, WHERE and LIKE

Bu derste veri sorgulama üzerinde duracağız. Aslında bir önceki derste yaptığımız şeyde buydu ancak bu derste işin daha derine inip daha spesifik sorgulamalar yapacağız.

- Bu noktada dikkat edilmesi bir yer var. CSV dosyası içerisinde id bulunmuyor dolayısı ile pgAdmin'e import ederken id'yi kaldırmalıyız. Yoksa kötü şeyler oluyor.

- Burada LIKE önemli bir kullanıma sahip ayrıca yeni bir şey olduğu için notunu alıyorum. Diyelim ki veritabanımızda Amerika'yı "United States" olarak mı yoksa "United States of America" mı olarak kaydettik hatırlamıyoruz veya "United" ile başlayan tüm değerlere erişmek istiyoruz. Bunun için LIKE kullanılır ve sınır % işareti ile tanımlanır. Örneğin `SELECT country FROM world_food WHERE country LIKE 'U%';` sorgusu bana U harfi ile başlayan tüm ülkeleri getirir. Veya `SELECT country FROM world_food WHERE country LIKE 'U' || '%';` şeklindede kullanılabilir.

## 254. UNIQUE and NOT NULL | Travel Tracker Part 1

- Bu ders içerisinde Travel Tracker klasöründeki projeyi kullanacağız.
- Uygulamanın temelde yaptığı iş gittiğimiz ülkeleri (1) işaretleyebildiğimiz bir uygulama yapmak.
- **NOT NULL ifadesi o değişkenin değerinin boş olamayacağı anlamına geliyor.**
- **UNIQUE deger ise o değerin farklı bir değişkendede olmaması için kullanılır**
- Bir sonraki derstte veri tabanına node ve express kullanarak manuel olarak veri eklemenin yollarını göreceğiz.

## 255. INSERT and add Data | Travel Tracker Part 2

- Projeyi tamamladık

## 257. One to One Relationships & Inner Joins

- Yanlış anlamadıysam eğer Foreign Key iki tablo arasındaki ilişkiyi tutan key olarak kullanılıyor ve foreign keyler primary key'leri gösterirler.
- Postgrede örnek bir foreign key tanımı şu şekildedir:
```sql
CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);

-- One to One --
CREATE TABLE contact_detail (
  id INTEGER REFERENCES student(id) UNIQUE,
  tel TEXT,
  address TEXT
);
```

- Gayet güzel şekilde ilişkili tablomuzu oluşturduk. Peki iki tabloyu tekte görüntülemek istersek ne yapacağız? Bunun için JOIN kullanacağız ve JOIN kullanımı "bu tabloyu şu tabloya ŞUNA göre birleştir" anlamına gelmektedir ve ŞUNA kısmı ON sözcüğü ile sağlanır. Örnek:
```sql
SELECT * 
FROM student
JOIN contact_detail
ON student.id = contact_detail.id
```

- (!) Bu yalnızca görünümde birleşik gelir. Yani yaptığımız şey iki tabloyu birleştirmek değil, birleşmiş halini görmektir.

## 258. One to Many Relationships

- Herhalde en çok kullanılan ilişkilerden biri bire çok ilişki türüdür.
- Bu ilişkilerde gösterim şekli tek olan - ile çoklu olanlar ise kaz ayağı gibi -< bir şeyle gösterilirler

## 259. Many to Many Relationships

- Çok bir şey yokmuş aslında öğrenci -> sınıf örneği verildi ancak burada önemli nokta Aliases: using the AS keyword kullanımı ki bu da takma ad koymaya yarayan bir komut. Örneğin:
```sql
SELECT s.id AS id, first_name, last_name, title AS sinif
FROM enrollment AS e
JOIN student AS s ON s.id = e.student_id
JOIN class AS c ON c.id = e.class_id;
```

## 261. How to update and delete data & tables

### ALTER TABLE

- ALTER TABLE genellikle şemaları değiştirmek için kullanılır. Bir örnek kullanılımı:
```sql
ALTER TABLE student
  RENAME TO user;
```

- İki katmanlı ALTER örneği: (first_name'in type'ını varchar(20) olarak değiştirir.)
```sql
ALTER TABLE user
  ALTER COLUMN first_name TYPE VARCHAR(20);
```

- Şemaya sütun eklemek:
```sql
ALTER TABLE contact_detail
  ADD email TEXT
```

- *NOT: ALTER'in türkçesi değiştirmek anlamına gelmektedir.*
- *Özetle ALTER TABLE'lar bir takım değişiklikleri gerçekleştirmek için kullanılırlar.*

### DROP TABLE

- DROP TABLE direkt olarak bir TABLE'ı veritabanından düşürür ve çok tehlikelidir dostum anlarsın ya. DROP kullanımı pgAdmin'de silmek ile aynı anlama gelmektedir.

```sql
DROP TABLE IF EXISTS visited_countries, users;
```

### UPDATE DATA

- Verileri güncellemek amaçlı kullanılır. Örnek:
```sql
UPDATE users
SET name = 'Alper Burak Ali'
WHERE id=1;
```

### ORDER BY

- Belirli bir koşula göre sıralanmayı sağlar. Bu çok ahım şahım bir şey değil gibi duruyor ona göre hallederiz.
```sql
SELECT * FROM users
ORDER BY id ASC; 
```

### DELETE DATA

- Veri silmek için kullanılır, tablo değil, veri.

```sql
DELETE FROM visited_countries
WHERE id = 6
```
