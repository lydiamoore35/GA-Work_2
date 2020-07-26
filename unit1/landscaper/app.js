//you can spend the day cutting lawns and make $1 dollar
//to do this, you will be using your teeth, initially
//feel free to do this multiple times 
//i need to make a wallet with $0 to start 

const currentTool = ["teeth" , "rusty scissors" , "push lawnmower" + "battery-powered lawnmower" + "hire a team"]

let currentWallet = null;
let start = () => {
    alert("You are using " + currentTool + " and have $" + currentWallet);
}
yourAnswer = prompt("Would you like to cut grass for $1?" , "Yes/No");
    if(yourAnswer == "Yes"){
        prompt("Would you like to use your teeth and earn 1 dollar?" , "Yes/No");
        if(yourAnswer == "Yes"){
            currentWallet =+ 1;
            console.log(start);
        }else if(yourAnswer == "No"){
            currentWallet =+ 0
            console.log("Lazy bones!")
        }}else{
        console.log("Something went wrong")
    }






//you need to add a wallet starting with $0
//you need to add one dollar if you choose to cut grass with your teeth
