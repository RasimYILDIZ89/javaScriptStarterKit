function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi : Ürün " + productName + " Adet "+quantity)
}

//addToCart()
addToCart("10")
//addToCart("15")
//let sayHello = 10 yaptığımda 10 değişkeni yerine o kısma altta arrow fuction olarak sen
//bir fonksiyonsun diyorum.
let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()
// bir fonksiyonu da değişkene atayabiliyoruz.
let sayHello2 = function (){
    console.log("Hello World2")
}

sayHello2()

function addToCart2 (productName,quantity,unitPrice){
   
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product){
console.log("ürün : "+product.productName)
console.log("Adet : "+product.quantity)
console.log("Fiyat : "+product.unitPrice)
}

addToCart3(product1)
let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)
console.log(sayi2)

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

function addToCart4(products){
console.log(products)
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)

function add(bisey,...numbers){//rest operatörü-- rest oparetörü dışında başka parametrelerin
    //varsa onları başa yaz çünkü rest operatörü herzaman sonda olur
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30,40,50)// ilk değer biseye atanır geriye kalanlar restten dolayı numberse atanır
//add(20,30,40)
//add(20,30,50,60)

let numbers = [30,10,500,600,120]   //separate= kelime anlamı ayır ayrıştırma çözme yapar.
console.log(numbers)//diziyi verir
console.log(...numbers)//diziyi ayırır ayrı ayrı verir
console.log(Math.max(...numbers))//diziyi ayırır ve max olanı seçer verir


let [İcAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

    console.log(İcAnadolu.name)
    console.log(İcAnadolu.population)
    console.log(icAnadoluSehirleri)
    console.log(marmaraSehirleri)

    let newProductName,newUnitPrice,newQuantity
    ({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} 
    = {productName:"Elma",unitPrice:10,quantity:5})

    console.log(newProductName)
    console.log(newUnitPrice)
    console.log(newQuantity)
