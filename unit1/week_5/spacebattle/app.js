////SPACE BATTLE////

const alienArray = [];

const assembleShips = () => {
    const alien1 = new Alien("alien1");
    const alien2 = new Alien("alien2");
    const alien3 = new Alien("alien3");
    const alien4 = new Alien("alien4");
    const alien5 = new Alien("alien5");
    const alien6 = new Alien("alien6");
    alienArray.push(alien1);
    alienArray.push(alien2);
    alienArray.push(alien3);
    alienArray.push(alien4);
    alienArray.push(alien5);
    alienArray.push(alien6);
}

const startGame = () => {
    assembleShips();
    //not sure why this keeps popping up as 'alert not defined' in the vs code terminal, but it runs in the browser just fine and can't seem to get the error resovled, BUT it still works. 
    alert("Earth has been attacked by a horde of aliens! You are the captain of the lydiaWynning on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers!")
    const beginAttack = prompt("Would you like to attack the first alien ship?" , "Yes/No")
        if(beginAttack === "Yes"){
            lydiaWynning.attack();
        }
        else(beginAttack === "No");{
            gameOver();
    }
} 

const restartGame = () => {
    lydiaWynning.hull = 20;
    const alienArray = [];
    startGame();
}

const gameOver = () => {
    let userInput = prompt("The game has ended!!! Would you like to play again?" , "Yes/No")
        if(userInput === "Yes"){
            console.log(restartGame());
        }
        else if(userInput === "No"){
            prompt.close();
        } 
        else{
            alert("Enter a valid response please: Yes/No" )
            gameOver();
        }
    } 
   
class Game {
    hullStatus(alien, spaceship){
       if(alienArray[0].hull <= 0){
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
        alert("Time to battle. Get ready to destroy the alien ships with your lasers!");
        if(Math.random() < alienArray[0].accuracy){
            alienArray[0].firepowerStatus();
            if(alienArray[0].hull > 0){
                alert("The ship was not destroyed. Brace for counter attack!")
                alienArray[0].attack();   
            }else if(alienArray[0].hull <= 0){
                alert("You successfully destroyed " + alienArray[0].name + " ship!")
                const hitNextShip = prompt("Would you like to use your lasers to attack the next alien ship?" , "Yes/No")
                    if(hitNextShip === "Yes"){
                        alienArray.shift();    
                        lydiaWynning.attack();
                    }else{
                        gameOver();
                    }   
                }              
     }else{
         alert("You missed! Prepare to be attacked!")
         alienArray[0].attack(); 
            }
        }
    }  

const lydiaWynning = new Spaceship();

class Alien {
    constructor(name){
        this.name = name;
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
    firepowerStatus(alien){
        this.hull -= this.firepower;
        alert("Your attack was successful. The alien has " + this.hull + " life remaining."); 
    } 
    attack(input){
            if (Math.floor(((Math.random() * 3) + 6) / 10) <= this.accuracy && lydiaWynning.hull > 0){
                    alert("You were hit with " + alienArray[0].firepower + " firepower.")
                    alert("You have " + (lydiaWynning.hull -= alienArray[0].firepower));
                if(lydiaWynning.hull > 0){
                    alert("Get ready to fire back!")
                    lydiaWynning.attack();
                }else{
                     gameOver();
                }    
            }else alert("The aliens missed - wahoo! Prepare to attack!") 
            lydiaWynning.attack();   
    }
}

startGame();

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

//this.name was not affected, no need ot reset
    //this.firepower was not affected
    //the only thing that was affected was the hull to the hero/spaceship
        //this spaceship class inlcluding lydiaWynning.hull needs to be reset to 20, which means its setting itself equal to 20
//the methods i will have will be attack, and some method to update the damage done relfecting in the hull points 

//i need to use a method within the classes or a function within a while loop used to establish the act of attacking 

//QUESTION - we want nested loops - one for attacking and another for iterating over aliens??? keep it to one loop??