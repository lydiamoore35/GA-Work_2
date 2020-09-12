const express = require('express');
const app = express();
const PORT = 3000;

let amount = 99

app.get('/', (req, res) => {
    res.send(`99 bottles of beer on the wall<br><a href = "http://localhost:3000/98">take one down, pass it around</a>`)
    amount -= 1;
})

// app.get('/98',(req, res) => {
//     res.send(`${amount} Bottles of beer on the wall`)
//     //amount -= 1;
// })

app.get('/:number_of_bottles', (req, res) => {
    let updateBottles = req.params.number_of_bottles;
        if(updateBottles >= 0){
            updateBottles -= 1;
            res.send(`${updateBottles} Bottles of beer on the wall<br><a href = "http://localhost:3000/${updateBottles}"> take one down, pass it around</a>`)
        }else{
                res.send(`You drank all the beer<br><a href = "http://localhost:3000/">Drink more</a>`)
            }
})

app.listen(PORT, () => {
    console.log("i am listening");
})

