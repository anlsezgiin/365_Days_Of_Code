# 296 Mapping Components

- Şimdi bu ders içersinde oluşturduğumuz card'ları daha kısa nasıl yazabiliriz onu göreceğiz.

- Zaten bildiğim bir şeydi dolayı ile maplemek konusu kolayca öğrendim. Olay kısaca her şeyi daha kısa yapmak! Aradaki fark App.jsx dosyası içinde mevcut.

- Burada ekleyebileceğimiz nokta şu, componentlerden oluşturulan öğelere bir key, id gibi bir şey vermekte fayda çünkü ReactDOM üzerinde çalışırken düzenleme yapmak için kolaylık sağlar. Unutma iki tekrarlanan her componentte bu id benzersiz olmalıdır. Ayrıca bu keyler props olarak kullanılamazlar yani sen keyini bir paragraf içersinde gösteremezsin bu mümkün değildir. Tabii bu değişkenin ismini key olarak değil id olarak kullanırsan o zaman kullabilirsin. `Key` özel bir şey :)