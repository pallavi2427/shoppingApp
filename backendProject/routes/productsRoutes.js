const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.post("/add-product", productController.addProduct);
router.get("/get-product", productController.getProduct);
router.get("/single-product", productController.singleProduct);

module.exports = router;
