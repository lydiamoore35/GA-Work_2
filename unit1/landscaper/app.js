////LANDSCAPER////

//you can spend the day cutting lawns and make $1 dollar
//to do this, you will be using your teeth, initially
//feel free to do this multiple times 
//i need to create a vaiable to keep track of money earned e.g. userWallet
//this wallet will begin with 0 dollars
//you need to add one dollar if you choose to cut grass with your teeth
//i need the value of current wallet to inlcude what the user chooses inorder to update the wallet correctly
//can i use a function for this like below on line 25?? 
//i need to create a variable that will give the user options once they meet certain finanical criteria
//once they reach 5 dollars they can purchase rusty scissors
    //they will make 5 dollars using rusty scissors
//once they reach 25 dollars they can purchase a push lawnmower
    //they will make 50 dollars using the push lawnmower
//once they reach 250 dollars they can purchase a battery-powered lawnmower
    //they will earn 100 dollars using the battery-powered lawnmower
//once they reach 500 dollars they can hire a team
    //they will earn 250 dollars using a team
    //once they reach 1000 dollars to the wallet - "You've won!"


const currentTool = ["teeth" , "rusty scissors" , "push lawnmower" + "battery-powered lawnmower" + "hire a team"]

const 

let currentWallet = 0;
let start = () => {
    alert("You are using " + currentTool[0] + " and have $" + currentWallet);
}
for(let currentWallet = 0; currentWallet <= 5; currentWallet++){
    yourAnswer = prompt("Would you like to cut grass with your teeth for $1?" , "Yes/No");
        if(yourAnswer == "Yes"){
                console.log(start());
            }else if(yourAnswer == "No"){
                userMoney;
                console.log("Lazy bones!")
            }else{
                console.log("Something went wrong")
    }}
const userMoney = () => {
    currentWallet++;

}

for(let currentWallet = 5; currentWallet >= 5; currentWallet++){
    yourAnswer = prompt("Would you like to cut grass using rusty scissors? This will cost you $5 and you will also earn $5!" , "Yes/No");
        if(yourAnswer == "Yes"){
                console.log(start());
            }else if(yourAnswer == "No"){
                userMoney;
                console.log("Lazy bones!")
            }else{
                console.log("Something went wrong")
    }}

for(let currentWallet = 5; currentWallet <= 5; currentWallet++){
    yourAnswer = prompt("Would you like to cut grass using a push lawnmower? This will cost you $25. You will earn $50!" , "Yes/No");
        if(yourAnswer == "Yes"){
                console.log(start());
            }else if(yourAnswer == "No"){
                userMoney;
                console.log("Lazy bones!")
            }else{
                console.log("Something went wrong")
    }}
    
for(let currentWallet = 5; currentWallet <= 5; currentWallet++){
    yourAnswer = prompt("Would you like to cut grass using a batter-powered lawnmower? This will cost you $250. You will earn $100!" , "Yes/No");
        if(yourAnswer == "Yes"){
                console.log(start());
            }else if(yourAnswer == "No"){
                userMoney;
                console.log("Lazy bones!")
            }else{
                console.log("Something went wrong")
    }}

for(let currentWallet = 5; currentWallet <= 5; currentWallet++){
    yourAnswer = prompt("Would you like hire a team to cut grass? This will cost you $500. You will earn $250!" , "Yes/No");
        if(yourAnswer == "Yes"){
                console.log(start());
            }else if(yourAnswer == "No"){
                userMoney;
                console.log("Lazy bones!")
            }else{
                console.log("Something went wrong")
    }}
//////ok this is what I have before I completely refractor after looking at what you added to the slack tech channel//////     
