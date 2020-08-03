////CALLBACKS////

const add = (Number.add) => {
    console.log(5 + 5)
};

////FUNCTION DEFINITION PLACEMENT////


const bar = () => {
    console.log('bar here');
}
bar();


const foo = () => {
    console.log('foo here');
}
foo();

foo();

const foo ()=>{
    console.log('hi');
}
//error - Missing initializer in const declaration - this means that the funtion name "foo" has not been established because there is no '=' after 'foo' before the first ().

////Section 3 Array Methods with Callbacks////

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

//EVERY
console.log(nums.filter(num => num >= 0))
console.log(panagrams.every(words => words.length < 8))

//FILTER
console.log(nums.filter(num => num < 4))
console.log(panagrams.filter(words => words.length % 2 === 0))

//FIND
console.log(nums.find(num => num % 5 === 0))
console.log(panagrams.find(words => words.length < 2))

//FIND INDEX
console.log(nums.findIndex(num => num / 3))
console.log(panagrams.findIndex(words => words.length < 2))

//FOR EACH
console.log(nums.forEach(num => num * 3))
panagrams.forEach((word) => {
    console.log(word + "!")
})

//MAP
console.log(nums.map(num => num * 100))
console.log(panagrams.map(words => words.toUpperCase()))

//SOME
console.log(nums.some(num => num % 7 === 0))
console.log(panagrams.some(words => words, "a"))