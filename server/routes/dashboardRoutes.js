const express = require('express');
const {
    getSalesData,
    getStockData,
    getPlatformSalesData,
    getCriticalStockData
} = require('../controllers/dashboardController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/sales', protect, getSalesData);
router.get('/stocks', protect, getStockData);
router.get('/platform-sales', protect, getPlatformSalesData);
router.get('/critical-stocks', protect, getCriticalStockData);

module.exports = router;
