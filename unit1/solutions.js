// Parameters modify the behavior of a function by giving () input. The argument is the input and the parameter is how the input is represented in the function.
// const func = (parameter) => {
//     ////code
// }
// func(argument);

// There is no output with console.log, while it happended and arguments were passed there is no result. The return statement gives you the value of the function. Alex's butler example in class helped me understand this a bit better. If you ask the bulter to get you oj and they do (console.log) that's great but if they don't bring it to you (return) then you still don't have the result of getting your oj. 

const checkPalindrome = (string) => {
    const letter = string.split("").reverse().join("").toLowerCase();
    if(string.toLowerCase() === letter){
        return true
    }else{
        return false
    }
    }

console.log(checkPalindrome("Radar"))
console.log(checkPalindrome("Borscht"))
