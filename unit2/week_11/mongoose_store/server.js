const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const shopRouter = require("./controllers/shop.js");
const methodOverride = require("method-override");
const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://hello123:goodbye123@sei.iaisu.azure.mongodb.net/LydiaStore?retryWrites=true&w=majority"

mongoose.connect(mongoURI, {                useNewUrlParser: true, 
useUnifiedTopology: true});

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

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