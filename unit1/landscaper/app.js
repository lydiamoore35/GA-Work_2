//you can spend the day cutting lawns and make $1 dollar
//to do this, you will be using your teeth, initially
//feel free to do this multiple times 
//i need to make a wallet with $0 to start 

//this is an object
const currentTool = {
    first: "teeth"
}
const wallet = () => {
    money = 0;
    tool = "teeth";
    askForChoice();
    }
const showStatus = () => {
    alert("You have " + money + " money and ")
}

//I will use a prompt to ask if you would like to cut grass
yourAnswer = prompt("Would you like to cut grass for $1?" , "Yes/No");
    if(yourAnswer == "Yes"){
        console.log("Thank you!");
    }else if (yourAnswer == "No"){
        console.log("No problem, maybe next time.");
    }else{
        console.log("Something went wrong")
    }
//you need to add a wallet starting with $0
//you need to add one dollar if you choose to cut grass with your teeth
