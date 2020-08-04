////Dougie the Donut////
class Hero {
    constructor (name, health, weapons, catchPhrases){
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10,    
        };
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories'] 
    } 
    talkSass(){
        console.log(this.catchPhrases[Math.floor(Math.random())]);
        //console.log(this.catchPhrases[Math.floor(Math.random()*this.catchPhrases.length)])
    }
    announceHealth(){
        console.log(this.health);
    } 
    fight(){
        console.log('i\'m ready to rumble');
        console.log(this.weapons[Math.floor(Math.random())]);
        console.log(this.weapons.sprinkleSpray);
        console.log(this.weapons.sugarShock);
        //const enemy = () => {
        // console.log(announceHealth() -= damage);

        }
    }    
const dougie = new Hero('Dougie',this.health,this.weapons,this.catchPhrases);
console.log(dougie);

////Enemy class////
class Enemy {
    constructor (name, health, weapons, catchPhrases) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10,    
        };
        this.catchPhrases = [
            'i\'m youtube famous',
            'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack(){
        console.log(this.catchPhrases[Math.floor(Math.random())]);
    }
    announceHealth(){
        console.log(this.health);
    }
    fight(enemy){
        console.log('i\'m gonna flatten you like a slice of pepperoni!');
        console.log(this.weapons.pepperoniStars);
        console.log(this.weapons.cheeseGrease);
        const damage = this.weapons.pepperoniStars;

        console.log(announceHealth() - damage);
        //console.log(this.weapons[Math.floor(Math.random())]);

    }
}
const pizzaRat = new Enemy('Pizza Rat',this.health,this.weapons,this.catchPhrases);
console.log(pizzaRat);

// dougie.talkSass();
// pizzaRat.talkSmack();
// dougie.announceHealth();
// pizzaRat.announceHealth();

dougie.fight(pizzaRat);
pizzaRat.fight(dougie);
