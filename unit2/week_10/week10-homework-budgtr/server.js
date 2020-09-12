const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
    // res.send("hello world")
    res.render("../views/index.jsx");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})