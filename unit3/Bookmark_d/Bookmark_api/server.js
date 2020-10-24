const express = require('express')
const app = express()
const PORT = 5500
const bookmarksController = require('./controllers/bookmarks.js')
const mongoose = require('mongoose')
const cors = require("cors");

// Error 
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

app.use(cors());

// Middleware
app.use(express.json()); 

mongoose.connect('mongodb+srv://SEI:AndrewMaren@sei.iaisu.azure.mongodb.net/Bookmarkd?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

app.use('/bookmarks', bookmarksController)

app.listen(PORT, () => {
  console.log('Bookmark running on port', PORT)
})