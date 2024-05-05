# 304 React Hooks - useState

*Bu ders kritik bir ders, çünkü içeriği önemli. Bu dosya içerisinde sadece tuttuğum notlar olmayacak. Ekstradan araştırmalar yapıp Hooks konusu hakkında ciddi bir araştırma yapıp burada paylaşacağım.*

- Bu dersin başlangıç kodların tuhaf olarak kodumuz App içinde değil index.jsx içerisinde bulunuyor ve bunun bir nedeni varmış umarım öğrenebiliriz.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

let count = 0;
function increase()
{
  count++;
  console.log(count);
}

root.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>
);
```

- Yukarıdaki kod aslında çok basit bir şekilde butona her tıkladığımızda increase fonksiyonunu çalıştırarak count'u bir arttırıyor ama bu artış UI'a yansımıyor. Peki neden?

- Çünkü burada yapılan iş HTML öğeleri oluşturmak! Eğer ben bu HTML öğelerini güncellemek istiyorsam tüm bu öğeleri tekrar renderlamam lazım! KAPİŞ?????? Değil mi? Peki o zaman şunu dene, git Bu kodu oluşturduğumuz increase fonksiyonu içerisinde yaz. Bak bakalım o zaman çalışıyor mu çalışmıyor mu? Ama böyle bir kod yazmakta çok enayice değil mi?

- İşte bu noktada Hooks devreye giriyor ve useState isimli Hook bu için mükemmeldir.

- Peki bu useState kavramı tam olarak nedir?

- Eğer ki useState'in döndürdüğü değeri loglarsak `[undefined, function]` şeklinde bir şey logladığını görürüz. Eğer ki `useState(0)` şeklinde kullanırsak undefined yerine bizim girdiğimiz değer gelir. Bu verdiğimiz değer temelde başlangıç durumumuzdur ve bu durum aracılığıyla bu değeri elde etmek istersek basitçe `state[0]` kullanabiliriz.

- Lakin bu state'in state[0] şeklindeki kullanımı çok iğrenç dolayısı ile daha önce öğrendiğimiz dizi dağıtımını kullancağız. Gerisi kodda!

- Sonuç olarak useState bize bir durumu kontrol etmeyi ve bu durumu tekrardan renderlamadan UI'da göstermemizi sağlar. Lakin bunu daha detaylı öğrenmek için docslara bakacağım bu dersin notları bu kadardı!

