const express = require("express");
const app = express();
const budget = require("./models/budget.js")
const PORT = process.env.PORT || 3000;
// const Layout = require("./components/Layout.jsx");

app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    // res.send("hello world")
    res.render("../views/index.jsx", {budget});
});

app.get("/new", (req, res) => {
    res.render("../views/new.jsx")
});

app.post("/", (req, res) => {
    console.log(req.body);
    budget.push(req.body);
    res.redirect("/");
})

//show route
app.get("/:index", (req, res) => {
    res.render("../views/show.jsx",{
        budget: budget[req.params.index]
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});