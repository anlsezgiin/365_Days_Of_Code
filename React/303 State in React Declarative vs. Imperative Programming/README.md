# 303. State in React - Declarative vs. Imperative Programming

- Bu derste uygulamarımızı nasıl daha etkileşimli hale getirebileceğimize bakacağız ve bunu State kullanarak yapacağız.

- State dediğimiz şey aslında suyun sıcaklıklarına göre buz veya sıvı olarak görünmesiyle aynı mantıkta. Yani bizim bileşenlerimiz belli duruma göre farklı görünsünler diye kullanıyoruz.

- Declarative Programming: Duruma bağlı olarak farklı koşullarda değişen.

- Imperative Programming: Dümdüz yazmak :D

- İki saattir bu kodun neden çalışmadığını çözmeye çalışıyorum meğersem Hooks kullanmak gerekiyormuş 
```jsx
import React from "react";

var isDone = false;

function strike() {
  isDone = true;
  console.log("State is true")
}

function unStrike() {
  isDone = false;
  console.log("State is false")
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
```

- Teoride yukarıdaki kod çalışır gibi gözüksede stil özelliği gibi özelliklerindeki değişikliklerin görülebilmesi için ekrana yeniden işlenmesi gerekiyor işte hooks bunun için varmış ve sonraki derste useState kullanacağız.