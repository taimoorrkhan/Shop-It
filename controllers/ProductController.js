exports.getProduct = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Show all products in database",
  });
};

