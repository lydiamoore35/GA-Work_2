const {Router} = require("express");
const router = Router();
const Product = require("../models/products.js");
const productsSeed = require('../models/productsSeed');

//Routes//

//Index//
router.get("/", (req, res) => {
    Product.find({}, (error, inventory) => {
        res.render("Index", {inventory});
    });
});

//New//
router.get("/new", (req, res) => {
  res.render("../views/New.jsx");
}); 

//Delete//
router.get("/:id/delete", (req, res) => {
    Product.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect("/");
    })
});

//Update//
router.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedProduct) => {
        res.redirect("/");
    })
});  

//Create//
router.post("/", (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
      console.log(req.body)
        res.redirect("/");
  })
});

//Edit//
router.get("/:id/Edit", (req, res) => {
    Product.findById(req.params.id, (error, editedProduct) => {
      res.render("Edit.jsx", {editedProduct})
  });
});

//Show//
router.get("/:id", (req, res) => {
    Product.findById(req.params.id, (error, showProduct) => {
        console.log("id", req.params.id);
        console.log("show", showProduct);
        console.log("error", error);
        res.render("Show.jsx", {showProduct})
    });
});

// //Buy//
// router.put("/:id/Buy", (req, res) => {
//     Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedProduct) => {
//         res.redirect("/");
//     })
// });  

module.exports = router;