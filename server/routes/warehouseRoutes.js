const express = require('express');
const {
    getWarehouseProducts,
    getWarehouseProductById,
    updateWarehouseProduct,
} = require('../controllers/warehouseController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .get(protect, getWarehouseProducts);

router.route('/:id')
    .get(protect, getWarehouseProductById)
    .put(protect, updateWarehouseProduct);

module.exports = router;
