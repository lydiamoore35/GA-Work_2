const mongoose = require('mongoose');
const Product = require("./products")
const productsArr = [
    {
      name: 'Corn',
      description: 'Enjoy fresh corn',
      img:'https://www.jessicagavin.com/wp-content/uploads/2019/05/how-to-cook-corn-on-the-cob-8-1200.jpg',
      price: 5,
      qty: 90
    }, {
      name: 'Peppers',
      description: 'Delicious peppers for sale!',
      img: 'https://heartcareimaging.com/wp-content/uploads/2019/08/canstockphoto24803002.jpg',
      price: 10,
      qty: 0
    }, {
      name: 'Spinach',
      description: 'A healthy snack anytime',
      img: 'https://post.healthline.com/wp-content/uploads/2020/09/spinach-732x549-thumbnail-732x549.jpg',
      price: 1000,
      qty: 5
    }, {
      name: 'Broccoli',
      description: 'Never frozen yummy broccoli',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg',
      price: 50,
      qty: 1
    }  
  ]

Product.create(productsArr, (err, data) => {
    // console.log(data)
  })