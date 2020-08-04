////SECTION 1: PROGRAMMING FUNDAMENTALS////

////DRY
//Don't repeat yourself in lines of code when you could use contructs such as loops, functions, classes, etc., in order to keep your code efficient. 

////KISS
//Keep it(your code) simple, stupid, in order to have fewer bugs, less write time, and easier modifications.

////AVOID YAGNI
//The principle "you aren't going to need it" means you should add functionality to your code as you go not code it preemptively.

////SIMPLEST THING
//Don't make your code or use contructs that are unecessary  and just use the simplest method you can think of.

////DON'T MAKE ME THINK
//Our code should be easy to read with minimal effort required and if its not, it could probably stand to be simpilified. 

////CODE FOR THE MAINTAINER
//Write your code with the understanding that it may and likely will be updated by someone else so practice writing code that is easily modified.  

////SINGLE RESPONSIBILITY PRINCIPLE
//Every class or function should have it's own purpose or responsibility not coupled with something else that should be changed or executed at a different time. 

////AVOID PREMATURE OPTIMIZATION
//Don't try to optimize your code until its working, but maybe a little slower than you'd like. 

////SEPARATION OF CONCERNS
//This principle is meant to separate out sections of code that have a common concern. 

//It seems like the 'single responsibility principle' and 'separation of concerns' are very similar and wondering if I am correct to assume based on what I read that 'separation of code' is more specific to a block of code rather than a specific construct like a function or loop, but rather a group of related loops would fall under the separation of conerns principle?

////COMMENTING CODE////

const f = l => {
//the arrow function 'f' is passing 'l' as a parameter    
    let es = 0, p = 0, c = 1, n = 0
//setting up variables with the block scope of let to 'es', 'p', 'c', and 'n' all equal to 0     
    while (c <= l) {
//using a while loop that sets 'c' less than or equal to 'l'        
      n = c + p;
//the variable 'n' is equal to 'c' plus 'p'      
      [c, p] = [n, c]
//the array holding 'c' and 'p' is equal to the array holding 'n' and 'c'      
      es += (c % 2 === 0) ? c : 0
    }//if the variable 'c' is even then it will be added to the value of the 'es' variable but if not then the variable 'c' will remain the same
    return es
//we are asking for the return value of the vaiable 'es'    
  }
  console.log(f(55))
//passing the value of the integer 55 through the funtion 'f' to return the value of 'es'.

//Answer with comments//
//It makes more semantic sense to change f2 to 'find'
//the way that f2 is setup makes more sense to me to work from and add to.
//The semi-colon is necessary b/c without it you get 'Invalid left-hand side in assignment' and the code will not run.