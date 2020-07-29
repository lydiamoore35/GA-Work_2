////LANDSCAPER////

////pseudo code////
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
   

//i will use an array of objects to list the tool, cost, and earned amount of money

// const cutGrassBy = [
//     {
//         tool: "teeth",
//         cost: 0,
//         reward: 1,
//     },
//     {
//         tool: "rusty scissors",
//         cost: 5,
//         reward: 5,
//     },
//     {
//         tool: "push lawnmower",
//         cost: 25,
//         reward: 50,
//     },
//     {
//         tool: "battery-powered lawnmower",
//         cost: 250,
//         reward: 100,
//     },
//     {
//         tool: "hire a team",
//         cost: 500,
//         reward: 250,
//     }
// ];
// //user needs to be able to purchase tool
// //need to prompt the user 25 dollar push mower 
// //user needs to be able to landscape and earn money
// //user needs to be able to purchase next tool

// let money = 0;
// let wallet = 0;

// const usePushMower = () => {
//     if(money >= 25){
//         purchasePushMower = prompt("Would you like to earn " + cutGrassBy[2].reward + " dollars cutting grass with " + cutGrassBy[2].tool + "?" , "Yes/No")
//         if(purchasePushMower == "Yes" && wallet >= 25){
//             wallet -= 25;
//             alert("You just purchased a " + cutGrassBy[2].tool + " and can now use your new push lawnmower to earn " + cutGrassBy[2].reward + " dollars!!");
//         }else if(purchasePushMower == "No"){
//             alert("LAME!");
//         if(wallet >= 25){
//             userUpdateScissors2 = prompt("Would you like to continue cutting grass with your " + cutGrassBy[2].tool + " and earn another " + cutGrassBy[2].reward + "?" , "Yes/No");
//         }else if(userUpdateScissors2 == "Yes"){
//             wallet += 25;
//             alert("You have " + wallet + " dollars in your wallet. Keep this momentum going, Rockstar!!!");
//         }
//         keepCutting();
//     }         
//     }
// }    
// if(wallet < 25){
//     userUpdateScissors = prompt("Would you like to earn " +cutGrassBy[1].reward + " dollars cutting grass with " + cutGrassBy[1].tool + "?" , "Yes/No");{
//     if(userUpdateScissors === "Yes"){
//         wallet += 5;
//         alert("You just earned " + cutGrassBy[1].reward + " dollars! You now have " + wallet + " dollars in your wallet. Keep going!!");
//         keepCutting();
//         if(userUpdateScissors === "No"){
//         alert("I am not worrying about my no's at this point with the mess of recursion I have gotten myself into so, sorry user, you're just going to keep cutting grass.")
//         }
//     }
//     }
// const keepCutting = () => {
//     if(wallet >= 25 && userUpdateScissors === "Yes"){
//         usePushMower();   
//         }
// }    
   
// const startCutting = () => {
//     money = cutGrassBy[0].reward;
//     wallet = (wallet + money);
//         startAnswer = prompt("Would you like to earn $1 by cutting grass with your teeth?" , "Yes/No");
//         if(startAnswer == "Yes" && wallet < 5){
//             alert("You just earned " + cutGrassBy[0].reward + " dollar. Great job! You now have " + wallet + " dollar(s) in your wallet.")
//             startCutting();
//         }else if(startAnswer == "No"){
//             alert("Lazy Bones!");
//             startCutting();
//         }else if(wallet >= 5){
//                 let userUpdate = prompt("Would you like to purchase a pair of " + cutGrassBy[1].tool + "?", "Yes/No");
//         if(userUpdate == "Yes"){
//             wallet -= 5;
//             alert("You have " + wallet + " dollars in your wallet and a lovely pair of rusty scissors, BUT now you can make more $ cutting with scissors!")
//         }else if(userUpdate == "No"){
//             alert("Ok, keep cutting grass with your teeth, weirdo.")
//         } 
//         keepCutting();   
//     } 
// }  
// startCutting();
// }   
    //i need to create another prompt listing the amount of money currently in wallet and then when they have at least $5 to have a follow up prompt asking if they would like to purchase a pair of rusty scissors
    //this needs to be condtioned based on if there is enough money in the wallet 
    //i will write a function that will ask for the user's input

    ////Landscaper Part II////

    const cutGrassBy = [
        {
            tool: "teeth",
            cost: 0,
            reward: 1,
        },
        {
            tool: "rusty scissors",
            cost: 5,
            reward: 5,
        },
        {
            tool: "push lawnmower",
            cost: 25,
            reward: 50,
        },
        {
            tool: "battery-powered lawnmower",
            cost: 250,
            reward: 100,
        },
        {
            tool: "hire a team",
            cost: 500,
            reward: 250,
        }
    ];
    
let wallet = 0
let money = 0
//money = cutGrassBy[0].reward;
wallet = (wallet + money);

for(i = 0; i < 5; i++){
    startAnswer = prompt("Would you like to earn " + cutGrassBy[0].reward + " dollar(s) cutting grass with your " + cutGrassBy[0].tool + "?" , "Yes/No");
        if(startAnswer === "Yes" && money < 5){
            wallet += 1;
            alert("You just earned " + cutGrassBy[0].reward + " dollar. Great job! You now have " + wallet + " dollar(s) in your wallet.")
    }
}     
    
