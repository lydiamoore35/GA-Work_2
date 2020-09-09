const express = require('express');
const app = express();
const PORT = 3000;

app.get('/greeting/:name/:name2/:name3', (req, res) => {
    console.log(req.params);
    res.send(`Hello ${req.params.name} and ${req.params.name2} and ${req.params.name3}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let amount = req.params.total
    let tipPercentage = req.params. tipPercentage
    let tipTotal = eval((tipPercentage/100) * amount)
    console.log(tipTotal); 
    res.send(`${tipTotal}`);
});

app.get('/magic/:question', (req, res) => {
    magicArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    const magicResults = magicArr[Math.floor(Math.random() * magicArr.length)];
    res.send(`<h1>${req.params.question} & ${magicResults}</h1>`);
})

app.listen(PORT, () => {
    console.log('testing');
});

