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

class Spaceship {
    constructor(){
        this.name = lydiaWynning;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
}
//the methods i will have will be attack, and some method to update the damage done relfecting in the hull points 