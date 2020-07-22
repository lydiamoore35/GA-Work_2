// Parameters modify the behavior of a function by giving () input. The argument is the input and the parameter is how the input is represented in the function.
// const func = (parameter) => {
//     ////code
// }
// func(argument);

// There is no output with console.log, while it happended and arguments were passed there is no result. The return statement gives you the value of the function. Alex's butler example in class helped me understand this a bit better. If you ask the bulter to get you oj and they do (console.log) that's great but if they don't bring it to you (return) then you still don't have the result of getting your oj. 

/////Palindrome///////

// const checkPalindrome = (string) => {
//     const letter = string.split("").reverse().join("").toLowerCase();
//     if(string.toLowerCase() === letter){
//         return true
//     }else{
//         return false
//     }
//     }

// console.log(checkPalindrome("Radar"))
// console.log(checkPalindrome("Borscht"))

// ////////SUM ARRAY////////

// const sumArray = (Array) => {
//     let sum = 0;
//     for (let i = 0; i < Array.length; i++){
//        sum += Array[i]; 
//     }
//     return sum;
// };
// console.log(sumArray([1,2,3,4,5,6]));


//////PRIME NUMBERS///////

const checkPrime = (num) => {
    for(let i = 0; i <= Math.sqrt(num); i++) {
        if(num % 1 === 0) {
            return false;
        }
    }
    checkPrime(5);
}
const printPrimes = (num) => {
    for(let i = 0; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false; {
            }
        }
    }console.log(printPrimes(95));
}

/////Rock Paper Scissors////////
//create a function to get a random move
    //inside of this function i would want an array of options
    //i would create a variable to satisfy the three choices and i would call that randomNum to get the index
    //i would return the array with the randonNum variable 
    const randomMove = () => {
        const choiceArray = ["rock" , "paper" , "scissors"]
        const randomNum = Math.floor(Math.random()*(choiceArray.length))
        //console.log(randomNum)//do this first to check if it works before moving on
        //return choiceArray[randomNum]
        console.log(choiceArray[randomNum])
    }
    randomMove();

//create a function called rockPaperScissors
//this function rockPaperScissors needs to run one round of the game
//the function rockPaperScissors needs to accept two arguments (computerMove, usersMove)
//i need to assign variables to the arguments??
//this rockPaperScissors function needs to compare the two arguments 
    //computer chose rock and user chose paper so user wins
    //computer chose paper and user chose rock so computer wins
    //computer chose scissors and user chose paper so computer wins
    //user chose rock and computer chose scissors so user wins
    //Ouch my brain lol - this really does help Veronica -THANK YOU!!!
//this rockPaperScissors function needs to return who the winner is

const rockPaperScissors = (computerMove, userMove) => {
    let computerMove = randomMove();
    let userMove = randomMove();
    if(computerMove === userMove){
        return "The game is a tie";{
        }else{ //I'm getting stuck with the postioning of my 'if else' statements, but at elast wanted to submit what I have, I will keep working on this b/c I do want to get it! I also looked up what you mentioned about using switch with cases 0-2, which seemed cleaner but was concerned about starting over ...again
            if(computerMove === "paper" && userMove === "rock"){
        return "The computer wins";{
    if(computerMove === "scissors" && userMove === "rock"){
        return "You win";{
    if(computerMove === "scissors" && userMove === "paper"){
        return "The computer wins";{
    if(computerMove === "rock" && userMove === "paper"){
        return "You win";{
    if(computerMove === "rock" && userMove === "scissors"){
        return "The computer wins";
    }        
        }
    }        
        }
    }        
        }
    }        
        }
    }
////OSCAR MENTION//////
//Hello! I stopped after spending about 4+ hours on the Oscar assignment so I know it's not complete and I would be more than willing to go back and do more. This is really the first time in this class when I felt like I actually enjoyed what I was doing haha. I do know that I would need to add 3 more box elements for the text on the 3 images and make the width the same as the images. I never really understood when programmers would say "just play around with css" until this assignment so thank you because this lifted my spirits as far as my potential ability to acutally do this. I did struggle with getting the photos to be within thier border, which I thought was odd, and would love additional help to make this happen so I know for future projects. I also need to work on applying which tags where like whether a <p> would be more appropriate vs. <div> or <span>, so I realize that my code as is in not very pretty but I will keep working on it. As always thank you for all your help, Veronica! I know my questions can get a little much sometimes lol so thank you for your patience!!