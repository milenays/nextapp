const express = require('express');
const {
    addSupply,
    getSupplies,
    getSupplyById,
    updateSupply,
} = require('../controllers/supplyController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, addSupply)
    .get(protect, getSupplies);

router.route('/:id')
    .get(protect, getSupplyById)
    .put(protect, updateSupply);

module.exports = router;
