import UserService from "../services/userService.js"
import User from "../models/user.js"
import { MongoLogger,BaseLogger, ElasticLogger, } from "../crossCuttingConcerns/logging/logger.js"


console.log("User Component Yüklendi.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)


let user1 = new User(1,"Engin","Demiroğ","Ankara",40)
let user2 = new User(2,"Baran","Gökçekli","Muğla",25)
userService.add(user1)
userService.add(user2)
userService.list()
userService.getById(1)

//console.log(userService.list())
//console.log(userService.getById(1))

let customer = { id: 1, firstName: "Engin" }
//prototyping sonradan değer ekleme
customer.lastName = "Demiroğ"
console.log(customer.lastName)




/*
import Customer from "../models/customer.js"

let customer = {id:1, firstName:"Engin"}

console.log("--------------------------")
userService.load()


let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
//22.00 Dersteyiz*/