# 287. React Components

- Vallahi geldi billahi geldi yanlış anlamadıysam sonunda bir projede birden fazla JS veya JSX dosyası kullanmayı öğreneceğiz vallahi geldi billahi geldi.

- React'ta baya baya HTML returnleyebilen functionlar yazabiliyoruz ki bununda örneği şu şekilde: 
```jsx
function Heading() // React'ta fonksiyon isimlerinin büyük harf ile başlamasına dikkat edelim.
{
  return <h1>My Favourite Foods</h1>;
}

ReactDOM.render(
  <div>
    <Heading></Heading>
    ...
```

- Bu arada etiket kapatmada bir ufak trickimiz var:
```jsx
<Heading></Heading> // bu aşağıdakine eşit
<Heading />
```

- İşimize yarayabilecek bir link: [airbnb](https://github.com/airbnb/javascript/tree/master/react)

- AAAA BAŞLIYO BAŞLIYO şimdi kod içerisinde yaptığımız Heading'i başka bir JSX dosyasi içerisinde oluştursak daha tatlı olurdu değil mi heh işte şimdi onu kullanacağız.

- Genelde React uygulamalarının içerisinde (index.jsx'te) herhangi bir HTML öğresi bulunmaz ve sadece `<App />` olur ve bu App.jsx içerisinde tüm importlarımız ve App() isimli bir fonksiyonumuz olur ve her şey bu App() fonksiyonu içinde döndürülür. Örnek için kodları incele!