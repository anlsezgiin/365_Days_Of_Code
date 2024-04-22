# 285. Inline Styling for React Elements

- Inline CSS uygulamaları maalesef JSX uygulamalarında her zaman yaptığımız gibi değil. Normal şartlarda inlince css'si şöyle yazardık değil mi?:
```html
<h1 style="color: red">Hello World!</h1>
```
- Yukarıdaki kullanım JSX'te işe yaramıyor çünkü JSX bunu bir JavaScript nesnesi olarak istiyor ki bu çok doğal, sonuçta biz HTML'i JavaScript'e dönüştürüyoruz. Doğru kullanım aşağıdaki gibi olmalı:

```html
<h1 style="{{color: red}}">Hello World!</h1>
```
- Peki bunun anlamı nedir? İlk süslü parantezler JavaScript enjekte etmenin parantezleridir, ardından gelen parantezler ise bizim JavaScript nesnemizin parantezleridir. Kapiş?

- Tabii bunu tek kullanmanın yolu bu değil. Sonuç olarak JavaScript nesnesi kullanıyorsak eğer JSX içerisinde bir nesne oluşturup bunu kullanabiliriz değil mi? Örneğin:
```jsx
const randomStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
}
ReactDOM.render(<h1 style={randomStyle}>Hello World</h1>,document.getElementById("root"));
```
- Bunun güzelliği güncelleme kolaylığı olmasıdır. Örneğin:
```jsx
randomStyle.color = "blue";
```