
let cart  = [
    {id:1, productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2, productName:"Bardak",quantity:2,unitPrice:30},
    {id:3, productName:"Kalem",quantity:1,unitPrice:20},
    {id:4, productName:"Şarj Cihazı",quantity:2,unitPrice:100},
    {id:5, productName:"Kitap",quantity:3,unitPrice:30},
    {id:6, productName:"Pot",quantity:5,unitPrice:150}
]

//-----map fonksiyonu-----
//map elimizdeki cart nesnesinin içindeki elemanları gezmeye yarar
// fonksiyonda maple o an gezdiğimiz nesnelere product ismini verdik oraya herhangi bir şey
//mesela x de verebiliriz.
cart.map(product=>console.log(product.productName))//sepeti dolaş herbiri için ismini yazdır.
console.log("--------------------------------------")
console.log("<ul>")
cart.map(x=>{
    console.log("<li>" + x.productName + " : " + x.unitPrice * x.quantity + "</li>")
})
console.log("</ul>")

//reduce fonksiyonu
// bir diziyi tek bir değere indirgemeyi sağlar isteğe bağlı başlangıç değeri alır
//başlangıç değeri accumulate acc artık sabitlenmiş kısaltmadır herkes kullanır
//0 kısmı toplamaya kaçtan başlayayımdır acc nin ilk değeri olur
let total = cart.reduce((acc,product)=>acc+product.unitPrice*product.quantity,0)
console.log(total)

//-----Filter Fonksiyonu

let quantityOver2 = cart.filter(product=>product.quantity>2)
//cart sepetini filtrele her bir ürün için şartımız dataya uyuyorsa o zaman onu yepyeni bir
//array e ata bu array i filter oluşturur.hepsini dolaştıktan sonra quantityOver2 değişkeni
//nin içerisine atar
console.log(quantityOver2)

function addToCart (sepet){
    sepet.push({id:7, productName:"Ruhsat",quantity:1,unitPrice:20})
}

addToCart(cart)

console.log(cart)



