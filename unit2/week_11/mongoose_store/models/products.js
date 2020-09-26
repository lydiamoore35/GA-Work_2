const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    description:  { type: String, required: true },
    img:  { type: String },
    price:  { type: Number, minimum: 0, required: true },
    qty:  { type: Number, minimum: 0, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;