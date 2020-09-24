const {Router} = require("express");
const router = Router();
const products = require("../models/products.js");

//Routes//

//Index//
router.get("/", (req, res) => {
    res.render("Index.jsx", {products});
});

//New//
router.get("/new", (req, res) => {
  res.render("../views/New.jsx");
}); 

// //Delete//
router.delete("/:index", (req, res) => {
    products.splice(req.params.index, 1);
    res.redirect("/");
});

//Update//
router.put("/:index", (req, res) => {
    products[req.params.index] = req.body.Index;
    res.redirect("/");
});  

//Create//
router.post("/", (req, res) => {
  products.push(req.body);
  res.redirect("/");
});

//Edit//
router.get("/:index/edit", (req, res) => {
  res.render("products/edit.jsx", {
    index: req.params.index,
    products: products[req.params.index],
  });
});

//Show//
router.get("/:index", (req, res) => {
    res.render("../views/Show.jsx", {
      products: products[req.params.index],
      Index: req.params.index,
    });
});

module.exports = router;