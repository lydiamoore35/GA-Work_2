//////EASY GOING//////
//I intially had i = 0 but then see that the question asks for a loop logging 1-20 :)

// for (let i = 1; i <= 20; i++){
//     console.log(i);
// }

//////GET EVEN////////

// for (let i = 0; i <= 200; i++){
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

//////FIZZ BUZZ/////////
//////quick question- I tried using 'else if' and then 'else' and it came back with an error that 'else' was an unexpected token, but I don't understand why? 

for (let i = 1; i <= 100; i++){
    console.log(i)
}
for (let i = 1; i <= 100; i++){
    if(i % 3 === 0) {
        console.log("Fizz");

    if(i % 5 === 0) {
        console.log("Buzz");

    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    }
    }
}
