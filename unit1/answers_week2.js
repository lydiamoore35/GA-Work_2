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
//////quick question- answered and fixed it :) 

// for (let i = 1; i <= 100; i++){
//     console.log(i)
// }
// for (let i = 1; i <= 100; i++){
    
//     if(i % 3 === 0) {
//         console.log("Fizz");

//     }else if(i % 5 === 0) {
//         console.log("Buzz");

//     }else(i % 3 === 0 && i % 5 === 0);{
//         console.log("FizzBuzz");
//     }
//     }


////EXCITED KITTEN////////

// const kittenResponse = ["...human...why you taking pictures of me?..." , "...the catnip made me do it..." , "...why does the red dot always get away..."]
// let meow = 0;
// kittenResponse[meow];
// for (let i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         return kittenResponse[Math.floor(Math.random()*kittenResponse.length)];
//         console.log(meow)
//     }else{console.log("love me, pet me! HSSSSS!")}

// }
////////COME BACK TOO


//////WILD WILD LIFE///////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 5001;
// console.log(plantee);

// wolfy[3] = "Gotham City";
// console.log(wolfy);

// dart.push("Hawkins");
// console.log(dart);

// wolfy.shift();
// console.log(wolfy); //removed

// wolfy.unshift("Gameboy");
// console.log(wolfy);  //replaced with new name

///////YELL AT THE NINJA TURTLES////////

// const ninjaTurtles = ["Donatello" , "Leonardo" , "Raphael" , "Michaelangelo"];
// for (UpperCase of ninjaTurtles){
//     console.log(UpperCase);
// }

///////METHODS, REVISITED///////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// // console.log([8]);

// favMovies.sort();
// console.log(favMovies);

// favMovies.pop();
// console.log(favMovies);

// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);

// favMovies.reverse();
// console.log(favMovies);

// favMovies.shift();
// console.log(favMovies);

// favMovies.unshift("Beetlejuice"); //nothing unless I add a movie title in ()
// console.log(favMovies);

// console.log(favMovies[3]);

// favMovies.splice(3, 1, "Avatar");
// console.log(favMovies);

// const halfMovies = favMovies.slice(favMovies.indexOf(favMovies[favMovies.length / 2]));
// console.log(favMovies);

////come back to //////

///my notes - slice does not change an original array - array.slice(from, until)
///my notes - splice adds or removes elements and DOES change the array

/////WHERE IS WALDO////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
        
whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);

whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo);

console.log(whereIsWaldo[2][1][1]);
