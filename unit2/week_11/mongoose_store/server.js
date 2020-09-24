const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const shopRouter = require("./controllers/shop.js");
const methodOverride = require("method-override");
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://SEI:SEI@sei.iaisu.azure.mongodb.net/LydiaStore?retryWrites=true&w=majority"

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

const products = require("./models/products.js")

//Middleware//
app.use(express.static("public"));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//Route to shop.js//
app.use("/", shopRouter);

app.listen(PORT, ()=>{
    console.log('listening');
});