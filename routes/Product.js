const express = require('express');
const router = express.Router();

const { getProduct } = require('../controllers/ProductController');


router.route('/').get(getProduct);

module.exports = router;