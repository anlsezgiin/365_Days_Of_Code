# 311 Changing Complex State

- Bu ders içerisinde karmaşık durumları yönetmenin yollarından konuşacağız.

*event kullanımını unutmuşuz kendimize çok fazla pratik yapmak için vakit ayırmalıyız dostum!*

```jsx
function App() {
  const [fName, setName] = useState("");
  const [surname,setSurname] = useState("");
  function changeName(event)
  {
    const firstName=event.target.value;
    setName(firstName)
  }
  function changeSurname(event)
  {
    const lastName=event.target.value;
    setSurname(lastName)
  }
  return (
    <div className="container">
      <h1>Hello {fName} {surname}</h1>
      <form>
        <input 
        onChange={changeName} 
        name="fName" 
        value={fName} 
        placeholder="First Name" />

        <input 
        onChange={changeSurname} 
        name="lName" 
        value={surname} 
        placeholder="Last Name" />
        
        <button>Submit</button>
      </form>
    </div>
  );
}
```

- Yukarıdaki kodda yaptığımız iş inputa yazı yazdıkça gelen yazının h1'de değişmesiyle ilgiliydi ancak burada birden fazla useState ve fonksiyon kullanımının çok doğru olmadığından bahsediliyor. Buradaki ana konu "fName ve surname"i tek bir nesnede toplamak ki bu çok mantıklı değil mi?

- React kontrollü ve kontrolsüz bileşenler arasındaki farkı araştıralım dostum.

```jsx
function handleChange(event)
  {
    const newValue = event.target.value;
    const inputName = event.target.name;
    if(inputName === "fName")
      {
        setFullName({fName: newValue})
      }
      else if(inputName ==="lName")
      {
        setFullName({surname: newValue})
      }
    console.log(fullName);
  }
```

- handleChange fonksiyonumuzu yukarıdaki gibi güncelledik lakin bir sorunumuz var. fName girince lName siliniyor lName girince fName siliniyor. ReactDevTools yardımımıza koşş!!! DevTools'ta biraz inceleme yaptığımız zaman şunu görüyoruz bir objeye değer verdiğimiz zaman bu enayi diğerini unutuyor. Ne alaka?????? Sorunumuz şuymuş bu kod içerisinde yapılan iş bizim state'teki nesnemizi değil yalnızca bir özelliği olan nesneyle değiştirmekmiş. O yüzden kodumuzu şu şekilde güncelliyoruz:
```jsx
function handleChange(event) {
    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value
        };
      }
    });
  }
```

- Şu yukarıdaki prevValue fonksiyonu bize nesneye erişim sağladığı için kullanılıyor. Yani sanırım nesne kullanırken set fonksiyonu içinde fonksiyon kullanacağız.