import User from "./user.js"

export default class Customer extends User{
    constructor(id,firsName,lastName,city,age,creditCardNumber){
        super(id,firsName,lastName,city,age)
        this.creditCardNumber = creditCardNumber
    }
}
