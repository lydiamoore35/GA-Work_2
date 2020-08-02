////Hampster////
class Hamster {
    constructor (owner, name, price){
    this.owner = name;
    this.name = name;
    this.price = price;
}
wheelRun(){
    console.log("squeak squeak");
}
eatFood(){
    console.log("nibble nibble");
}
getPrice(){
    console.log(this.price);
}
}
const Pet = new Hamster('Lydia','Oreo',15);
console.log(Pet);
Pet.wheelRun();
Pet.eatFood();
Pet.getPrice();

////Person////
class Person {
    constructor(name, age, height, weight, mood, hamster, bankAccount){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamster = [];
        this.bankAccount = 0;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log("Amy");
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+10;
    }
    buyHamster(hamster){
        this.hamster.push[Hamster];
        this.mood++;
        getPrice(this.price)
    }
}
getName();
getAge();
getWeight();
greet();
eat();
exercise();
ageUp();
buyHamster();
