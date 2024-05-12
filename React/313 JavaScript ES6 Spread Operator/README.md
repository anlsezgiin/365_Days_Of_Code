# 313 JavaScript ES6 Spread Operator

- Bu ders içerisinde son derstte yazdığım kodu kısaltmanın yollarını öğreneceğiz ve bunu büyük ölçüde spread operatöründen bahsederek yapacağız.

- Bu aslında daha önceden karşımıza çıkmış bir şey. Örnek olarak gösterirsek hatırlayacağımıza eminim:

```javascript
const citrus = ("lime", "lemon", "Orange"];
const fruits = ["Apple","banana","coconut",...citrus]
```

) Yukarıdaki kodun anlamı fruits içerisinde son öğe olarak tüm citrus'u eklemek anlamına geliyor ve bu da bizim daha kısa kod yazmamızı sağlıyor.

- Bu arada "Spread: Yaymak, yayılmış, genişlemiş" anlamlarına geliyor kelime anlamı olarak.

```javascript
const fullName = {
    fName: "James",
    lName: "Bond"
};

const user = {
    ...fullName,
    id: 1,
    username: "jamesbond007"
};
```

- Yukarıdaki kod nesnelerin Spread şeklinde kullanımını göstermektedir.

- Son yaptığımız örneğe bu bilgilerimi uyarlamaya çalıştığımız zaman enteresan bir şekilde `name: value` eklediğimizde tam istediğimiz gibi çalışmıyor lakin aşağıdaki gibi yaparsak sihirli bir şekilde çalışmaya başlıyor:
```jsx
setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
```
- [Ama neden?](https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1)

- Sonuç olarak bu durumu ya yukarıdaki şekilde(önerilir) kullanabilirsin ya da dahada kısa olucak şekilde:
```jsx
setContact(prevValue => ({...prevValue, [name]:value}));
```