////Dougie the Donut////
class Hero {
    constructor (name, health, weapons, catchPhrases){
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10,
        }
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories'] 
    } 
    talkSass(){
        console.log(randomNum(this.catchPhrases));
    }
    announceHealth(){
        console.log(this.health);
    } 
    fight(){
        console.log('i\'m ready to rumble'
        );
    }
}
const dougie = new Hero('Dougie',this.health,this.weapons,this.catchPhrases)
console.log(dougie);
