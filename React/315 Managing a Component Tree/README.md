# 315 Managing a Component Tree

- Propslar read-only'dirler. Bunun sebebi React'ın tek yönlü veri akışını teşvik etmeye çalışmasıdır. Yani, bir bileşenin duşarıdan aldığı verilerin, bileşen içinde değiştirilmesi, uygulamanın karmaşık hale gelmesine ve hata ayıklamasının zorlaşmasına neden olabilir.

- Aşağıda bu derstte kullanılan örnek bir "üzerine tıklanınca çizgi çizen kod" örneği verilmiştir:

```jsx
import React, {useState} from "react";

function ToDoItem(props)
{
    const [click, setClick] = useState(false);
    function handleChange()
    {
        setClick(prevValue=> {
            console.log(prevValue);
            return !prevValue;
        });
    }
    return(
        <div onClick={handleChange}>
            <li style={{textDecoration: click ? "line-through" : "none"}}>{props.text}</li>
        </div>
    
    );
}

export default ToDoItem;
```

- Projedeki kod ise eklenen öğelerin üzerine tıklanınca silinmesi ile ilgili.

- Child Componentlere props iletebildiğimiz gibi function'da iletebiliriz.