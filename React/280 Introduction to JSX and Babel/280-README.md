**Ara derslerde modül hakkında bilgi veriyor ve Sandbox isimli bir şeyi kullanacağından bahsediyor. Dersleri oradan takip edeceğiz ve plan şu: Sandboxta kurs ile birlikte uygula, localde pratiğini yap!**

# 280. Introduction to JSX and Babel

*React uygulamalarının çoğunda id="root" div'i bulunur ve bu temel olarak React uygulamalarının köküdür(rootudur). Yani react kullanarak oluşturduğumuz her şey bu div'in altına yerleştirilecek. [bu bayağı bi iddiali söz bunu araştırmakta fayda var.]*

- ReactDom.render() fonksiyonu 3 adet değer bunlar birincisi öğrenin nerede gösterileceğidir, ikincisi ne gösterileceği üçüncüsü ise isteğe bağlı bir callback funciton'ıdır. genelde bu callback render() fonksiyonunun ne zaman tamamlandığını bildirir.

- İşte React'ın kolaylıklarından birisi. HTML yazmadan HTML yazmak! Ve tüm bu işleri jsx yapıyor. Perde arkasında bu öğeler işleniyor ve bunlar import ettiğimiz React tarafından gerçekleştiriliyor.

- Bu React'ın içerisinde Babel denilen bir şey var ve Babel bir javascript compiler'ı (derleyicisi). Yani bir javascript kodunu her tarayıcının anlayabileceği bir sürümde çevirebiliyor! Tabi ki buna JSX'in JS'e çevrilmeside dahil. Yani hiç bir tırnak felan kullanmadan yazdığın o h1 öğesi varya, işte o babel kullanılarak JavaScripte Dönüştürülüyor ve sonucunda html'e eklenebilir jasavascript kodu haline geliyor. Biraz tuhaf bir cümle olduğunun farkındayım ama anladın bir kere işi kaçamazsın.

- Şunu unutma ki bu render öğresi yalnızca bir değer alabilir yani sen render ile yalnızca 1 tane h1 öğesi ekleyebilirsin üzerine paragraf ekliyim şunu ekliyim dersen olmuyor maalesef. *Ama tabii ki bununda bir çakallığı var eklemek istediğin öğeleri tek div içerisinde eklersen yalnızca tek bir öğre eklemiş olursun :D*
