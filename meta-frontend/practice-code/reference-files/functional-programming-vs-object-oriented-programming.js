
//functional programming ////////////////////////////////////////////
/*keeps functions and data seperate and outside of objects. Also uses
pure functions (do not allow for side effects) and immutability to
make code easier to read and debug*/

let shoes = 100;
let stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

let toPay = totalPrice(shoes, stateTax);

console.log(toPay);


// object oriented programming /////////////////////////////////////////////
/* performs in reference to objects and organizes functions and data in
easily identifiable objects*/

let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        let calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();

let purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        let calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase2.totalPrice();