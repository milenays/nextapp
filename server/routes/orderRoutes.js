const express = require('express');
const {
    addOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
} = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, addOrder)
    .get(protect, getOrders);

router.route('/:id')
    .get(protect, getOrderById)
    .put(protect, updateOrder)
    .delete(protect, deleteOrder);

module.exports = router;
