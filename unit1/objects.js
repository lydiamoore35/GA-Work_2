////Hampster////
class Hamster {
    constructor (owner, name, price){
    this.owner = owner;
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
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName(){
        return this.name;
    }
    getAge(){
        console.log(this.age);
    }
    getWeight(){
        console.log(this.weight);
    }
    greet(){
        console.log("Timmy");
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
        this.bankAccount += 10;
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}
const timmy = new Person("Timmy");
for(let i = 0; i < 5; i++){
    timmy.ageUp();
}
for(let i = 0; i < 9; i++){
    timmy.ageUp();
}
for(let i = 0; i < 15; i++){
    timmy.ageUp();
}
timmy.getAge()
for(let i = 0; i < 5; i++){
    timmy.eat();
}
timmy.eat();
timmy.eat();
for(let i = 0; i < 5; i++){
    timmy.exercise();
}
timmy.exercise();
timmy.exercise();

const Pet2 = new Hamster("Timmy", "Gus", 15);
console.log(Pet2);
timmy.buyHamster(Pet2);
console.log(timmy);

// getName();
// getAge();
// getWeight();
// greet();
// eat();
// exercise();
// ageUp();
// buyHamster();

//I used both the for loop and calling the method for the instructions, but realize just calling the method is not DRY. I also changed a few of the returns to console.log even though the instructions say 'return' so that I could see my results in the console. 