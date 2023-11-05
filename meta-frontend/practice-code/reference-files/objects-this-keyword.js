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
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        let calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}
purchase2.totalPrice();

/* "this" refers to the object itself. the benefit of using "this" saves
 the trouble of having to rename every calculation to "purchase1" and
 "purchase2" and you can copy paste the calculation without making
 any changes and the code will work as intended.*/