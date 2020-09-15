const express = require("express");
const app = express();
const pokedex = require('./models/pokemon.js')
const PORT = process.env.PORT || 3000;

//middleware//
app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//index or main page//
app.get('/', (req, res) => {
    res.render('index.jsx', {data: pokedex});
    });

//routes//
app.get("/", (req, res) => {
    res.send("testing")
});

//show route//
app.get("/:index", (req, res) => {
    res.render("../views/show.jsx", {pokedex: pokedex[req.params.index]});
});

//server listener//
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });