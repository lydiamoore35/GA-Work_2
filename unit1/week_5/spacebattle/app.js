////SPACE BATTLE////
//game requirements:
//6 alien ships that attack one at a time
//a game round would inlcude me attacking first 
    //if the ship survives, alien will attack me
    //if i survive, i will then attack the alien ship again
    //if it survives, then the alien will attcak me again
    //and so on...
    //if i destroy a ship then i have the option to attach the next ship or retreat
    //if i retreat then the game is over
    //i win the game when i destroy all 6 alien ships
    //i lose the game if i am destroyed by an alien ship

    ///////SHIP PROPERTIES////
    //hull = hitpoints, if hull reaches 0 or less, the ship is destroyed 
    //firepower = damage done to the hull
    //accuracy = is a scale of 0-1
    //everytime you use/invoke firepower we also need to calcualte accuracy from 0 to 1 using Math.random() 

////SETUP PSEUDO CODE////

//I need to create a class for my spaceship//
    //within the constructor i need name = LydiaWynning, hull = 20, firepower = 5, accuracy = .7
//const alienFleet = [];
class Game {

    hullStatus(alien, spaceship){
       if(this.hull <= 0){
           const hullStatus = prompt("You successfully hit the spaceship and killed the aliens!")
       }
    }   
   
    }   

class Spaceship {
    constructor(){
        this.name = "lydiaWynning";
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
 
    attack(alien){
        const initial = prompt("Earth has been attacked by a horde of aliens! You are the captain of the " + this.name + " on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers!" ,"Yes/No");
        if (Math.floor(((Math.random() * 3) + 6) / 10) <= alien.accuracy && initial === "Yes"){
            if(alien.hull >= 1){
            alien1.firepowerStatus();
                const tryAgain = prompt("Don't let them get away! Would you like to finish them off?" , "Yes/No");
                if(tryAgain === "Yes"){
                    lydiaWynning.attack();
                }else(tryAgain === "No")
                    alert("GAME OVER")
                }    
            }else if(alien.hull <= 0){
                alert("You successfully destroyed the alien ship!")
                lydiaWynning.attack(alien2) 
            } 
//is there a way to have the next alien ship populate and run in this method and replace alien 2 with alien 3  

        else{
            const nextShot = prompt("You missed! Do you want to take another shot??" , "Yes/No");
                if(nextShot === "Yes"){
                    if(Math.floor(((Math.random() * 3) + 6) / 10) <= alien.accuracy){
                     alert("You successfully hit the alien ship! The alien ship has " + (alien.hull -= this.firepower) + " life remaining. Would you like to attack the next alien ship?" , "Yes/No")       
                    }
                }else(nextShot === "No");{
                    alert("GAME OVER")

                }
        }
    }
}
const lydiaWynning = new Spaceship();
console.log(lydiaWynning);

//the methods i will have will be attack, and some method to update the damage done relfecting in the hull points 

class Alien {
    constructor(name){
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
    firepowerStatus(alien){
        this.hull -= this.firepower;
        alert("Your attack was successful. The alien has " + this.hull); 
        } 
}
const alien1 = new Alien("alien1");
//console.log(alien1);
lydiaWynning.attack(alien1);

const alien2 = new Alien("alien2");
//console.log(alien2);

const alien3 = new Alien("alien3");
//console.log(alien3);

const alien4 = new Alien("alien4");
//console.log(alien4);

const alien5 = new Alien("alien5");
//console.log(alien5);

const alien6 = new Alien("alien6");
//console.log(alien6);


//i need to use a method within the classes or a function within a while loop used to establish the act of attacking 
//attacking needs to factor in the classes methods: hull, firepower, and accuracy, for both lydiaWynning and the 6 alien spaceships 
    //QUESTION - we want nested loops - one for attacking and another for iterating over aliens??? keep it to one loop??