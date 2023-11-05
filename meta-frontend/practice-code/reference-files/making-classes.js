class Person {
    constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }

    getFullName(){
        return `${this.firstName}${this.lastName}`;
    };

    isAdult(){
        return this.age >= 18;
    };
};


const person1 = new Person("John","Doe", 30);
console.log(person1.getFullName());
console.log(person1.isAdult());


const person2 = new Person("Alice","Smith", 17);
console.log(person2.getFullName());
console.log(person2.isAdult());