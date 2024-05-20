const express = require('express');
const {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, addProduct)
    .get(getProducts);

router.route('/:id')
    .get(getProductById)
    .put(protect, updateProduct)
    .delete(protect, deleteProduct);

module.exports = router;
