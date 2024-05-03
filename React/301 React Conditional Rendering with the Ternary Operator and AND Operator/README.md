# 301. React Conditional Rendering with the Ternary Operator and AND Operator

- Bu derstte bir giriş akışı oluşturacakmışız. Derstte bazı koşullara bağlı olarak farklı React bileşenlerini gösterme tekniklerini öğreneceğiz.
- Bu dersin örneğinde kişi giriş yapmış ise ona hoşgeldin diyeceğiz, yapmamışsa kendisini giriş ekranına yönlendireceğiz.
- Bunu normal şartlarda bir fonksiyon içerisinde if'lerle yapardık lakin clean code açısından hiç hoş bir kullanım olmuyor dolayısı ile bunun yerine yapabileceğimiz farklı seçenekler mevcut.
- Bu derstte expressions vs statements (ifadeler vs durumlar) karşımıza tekrardan çıkıyor daha önce üzerinde durmuştuk ama yine bir tekrar etmekte fayda var.
- If yerine hani şu ? : olay vardıya onu kullanırsak sorunumuzu çözüyoruz.
```jsx
{isLogin ? KOŞUL SAĞLANIYORSA ÇALIŞACAK YER : SAĞLAMIYORSA ÇALIŞACAK YER}
```
- Eğer ki bu durumda aksi sonuçta herhangi bir şey eklemek istemiyorsak oraya `null` yazarız.
- Ek olarak şöyle bir kullanımda mevcuttur: 
```jsx
{time>17 && <h1>{time}</h1>}
```
- Bunun anlamı soldaki doğruysa sağdakini çalıştır.