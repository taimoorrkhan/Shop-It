const Product = require('../models/product')

//Creating Product

exports.AddProduct = async (req, res, next) => {
  
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product
  })


}


exports.getProduct = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Show all products in database",
  });
};

