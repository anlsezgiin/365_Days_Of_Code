# 289. Javascript ES6 Import Export and Modules

- Herhangi bir javascript dosyasındaki bir şeyi farklı bir javascript dosyasında kullanmak için export ve import modüllerini kullanabiliriz. Dikkat edilmesi gereken nokta dışa aktarılan şeyi içe aktarırken ona istediğimiz ismi verebiliyor olmamızdır.

- Peki ya dışa aktarmak istediğimiz şeylerin sayısı birden fazla olsaydı? İşte o zaman küme parantezi şeklinde dışa aktarıcaktık: `export {doublePi, triplePi}`

- Tabi bunları böyle uzun uzadıya eklemek sıkıcı olurdu değil mi? O yüzden `import * as pi from "./math"` şeklinde kullanarak pi aracağılığı ile istediğimize ulaşabiliyoruz.