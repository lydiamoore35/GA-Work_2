// ////light switch////
// => datatype: Boolean
// => data structure exmaple: let switch = true
// ////user's email address////
// => datatype: strings in an array
// => data structure example: const email = ["lydiamoore35@gmail.com"]
// ////spaceship////
// => datatype: strings in an array
// => data structure example: const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"]
// ////student names////
// => datatype: strings in an array
// => data structure example: const studentNames = ["Jennie" , "Heather" , "Bill"]
// ////student names and location////
// => datatype: object with strings as the value for each key (am I using the verbiage correctly?)
// => data structure example: const studentInfo = {
//                                 Jennie: "Denver"
//                                 Heather: "Castle Rock"
//                                 Bill: "Lonetree"
// ////student names, location, and tv show////
// => datatype: an array that holds multiple objects in the form of strings
// => data structure example: const studentInfo = [
//         { name: "Jennie" , location: "Denver" , faveTvShow: "Friends"}
// ]

////take it easy////
// const rainbowColors = ["red" , "orange" , "yellow" , "green" , "blue" , "indigo" , "violet"]
// console.log(rainbowColors[4]);

// const LydiaMoore = {
//     food: "pasta",
//     hobby: "yoga",
//     town: "Erie",
//     dataType: "strings"
// }
// console.log(LydiaMoore.hobby)

////crazy object////
const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }
  console.log(crazyObject.taco[1].salsa[5]);//really helpful for me to console.log things one at a time bc i got stuck on this one but i figured it out - wahoo!
  console.log(crazyObject.larry.quotes[0]);
  console.log(crazyObject.larry.characters[2].favourtieHobby)
  console.log(crazyObject.larry.nicknames[1])
  console.log(crazyObject.larry.characters[1])
  crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
  console.log(crazyObject.larry.quotes)