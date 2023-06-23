const Product = require("../models/Product");

// get all product
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

// get single product
const product_details = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};

// add product
const product_create = async (req, res) => {
  const productData = new Product({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    details: req.body.details,
  });
  try {
    const saveProduct = await productData.save();
    res.send(saveProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// update product
const product_update = async (req, res) => {
  try {
    const productData = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      details: req.body.details,
    };
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: req.params.productId },
      productData
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

// delete product
const product_delete = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  product_all,
  product_details,
  product_create,
  product_update,
  product_delete,
};
