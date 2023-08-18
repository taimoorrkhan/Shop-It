const express = require('express');
const router = express.Router();

const { getProduct, AddProduct } = require('../controllers/ProductController');


router.route('/products').get(getProduct);

router.route('/product/new').post(AddProduct);

module.exports = router;