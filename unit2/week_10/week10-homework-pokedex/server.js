const express = require("express");
const app = express();
const pokedex = require('./models/pokemon.js')
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');

//middleware//
app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//index or main page//
app.get('/', (req, res) => {
    res.render('index.jsx', {pokedex});
    });

//routes//
app.get("/", (req, res) => {
    res.send("testing")
});

app.get("/new", (req, res) => {
    res.render("../views/new.jsx")
});

app.post("/", (req, res) => {
    console.log(req.body);
    pokedex.push(req.body);
    res.redirect("/");
})

//show route//
app.get("/:index", (req, res) => {
    res.render("../views/show.jsx", {pokedex: pokedex[req.params.index]});
});

//delete pokemon//
app.get("/:index/delete", (req, res) => {
    pokedex.splice(req.params.index, 1);
    res.redirect("/");
  });

//edit pokemon//
app.get("/:index/edit", (req, res) => {
    res.render("/Users/lydiamoore/Desktop/Lydia-Moore-seir-flex-homework/unit2/week_10/week10-homework-pokedex/views/edit.jsx", {
      index: req.params.index,
      pokedex: pokedex[req.params.index],
    });
  }); 

app.put("/:index", (req, res) => {
    pokedex[req.params.index] = req.body.pokedex;
    res.redirect("/{pokedex}/");
    });  

//server listener//
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });