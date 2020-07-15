//DRY stands for Don't Repeat Yourself. We should pay attention to this because can write what would be hundreds of lines of code in just a few lines and keep our code succinct. We have larned about loops to perform repetative tasks like this. 
//let and const are local or block specific and var is global unless specified in a function. var can be updated and re-delcared within its scope and let can be updated but not re-declared. const can neither be updated nor re-delcared. 

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
const g = 0;

a < b
    console.log(a < b)
c > d
    console.log(c > d)
Name === Name
    console.log(Name === Name)
a < b < c
    console.log(a < b < c)
a == a < d
    console.log(a == a < d)
e != Kevin //Kelvin != Kevin, just put this here in case this was a typo
    console.log(e != Kevin)
48 == '48'
    console.log(48 == '48')
f != e
    console.log(f != e)

    console.log(g) 
g == b + c 
    console.log(g == b + c)
g == 10 

//I used let so that it would be local but also able to update if needed.
//I get a SyntaxError that says that 'g' has already been declared.
//When I write '10=g' I get a SyntaxError that says invalid left-hand side in assignment.

//Yes, this is an infiite loop becuase the expression would never become false and the loop would not end.
//If I'm understanding this loop correctly, it says run while runProgram variable is true. And then I beleive after the console message the variable is being reset to false. I spent a bit of time researching this one so I hope its correct!

let letters = "A";
//set 'letters' to equal "A"
let i = 0;
//the starting point for the loop will be "0"
while (i < 20) {
	letters += "A";
	i++;
}
//As long as 'i' is less than 20, add 1 to the value of "A" for each loop.
//The curly braces closes the loop and the loop will run until 'i' is >= 20.
console.log(letters);

//Section 4 - The main difference as I'm understanding it is that you would use a While Loop when you don't know how many times you want to loop through ahead of time. A For Loop would be used if we already know how many times we want to loop throuhg something.
//The first part of the control panel is the intial statement.
//The second part of the control panel is the condition.
//The third part of the control panel is the increment expression.

for (let i = 0; i <= 999){
    console.log("numbers 0 to 999")
}

//bonus challenge - I think the backslash\ will make additional quotes possible/readable in a string, so that you can write 'Jimmy\'s ball went far' without the string being interrupted by the additional apostrophe. 

for (let i = 99; i >= 0; i--){
    console.log("counting down from 999")
}

for (let i = 1; i <= 10; i++){
    console.log("sending" + "a" + "message")
}

//Iteration - 
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
    console.log(Han[0])
    console.log(C3PO[1])
    console.log(R2D2[2])
    console.log(Luke[3])
    console.log(Leia[4])
    console.log(Anakin[5])

//Section 5 - in terminal_homework.bash    