const express = require('express');
const app = express();
const PORT = 3000;

app.get('/greeting/:name/:name2/:name3', (req, res) => {
    console.log(req.params);
    res.send(`Hello ${req.params.name} and ${req.params.name2} and ${req.params.name3}`)
})
app.listen(PORT, () => {
    console.log('testing');
})
