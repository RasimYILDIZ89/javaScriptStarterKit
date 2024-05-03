console.log("Merhaba Kodlama.io")

//JS type safe (tip güvenli) değildir.yani alttaki örnekteki dolarDun parametresini
//"Ahmet" string değeri olarak altına versek artık onun değeri ahmet olur hata vermez.

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 bunu yapamıyoruz çünkü const değişkeni değiştirilemez
console.log(euroDun)

//Array
//camelCasing : değişkenlerin yazım şekli
//PascalCasing : kelimelerin ilk harfleri büyük olur
let konutKredileri =["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")

for(let i=0;i<konutKredileri.length;i++){
console.log("<li>"+konutKredileri[i]+"</li>")
 }

 console.log("</ul>")


/*
//array
{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> }

*/