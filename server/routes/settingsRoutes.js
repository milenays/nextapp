const express = require('express');
const {
    updateExchangeRate,
    getExchangeRate
} = require('../controllers/settingsController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/exchange-rate')
    .put(protect, updateExchangeRate)
    .get(protect, getExchangeRate);

module.exports = router;
