const productSchema = require("./../models/productModel");
const path = require("path");
const filePath = path.join(__dirname, "..", "assets");
const fs = require("fs");

const addProduct = async (req, res) => {
  try {
    const { title, category, description, amount, offpercentage, quantity } =
      req.body;
    const { image } = req.files;
    if (
      !title ||
      !category ||
      !description ||
      !amount ||
      !offpercentage ||
      !image ||
      !quantity
    ) {
      res.status(400).json({ message: "All Fields are required" });
    }
    image.mv(path.join(filePath, image.name));
    console.log(filePath);
    const product = new productSchema({
      title,
      category,
      description,
      amount,
      offpercentage,
      image: image.name,
      quantity,
    });
    await product.save();
    return res
      .status(201)
      .json({ message: "Product created successfully", product });
  } catch (err) {
    res.status(500).json({ message: "Error creating product", err });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await productSchema.find();
    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

const singleProduct = async (req, res) => {
  const { id } = req.query;
  try {
    const response = await productSchema.findOne({ _id: id });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

const addToCart = async (req,res) =>{
  
}

module.exports = { addProduct, getProduct, singleProduct };
