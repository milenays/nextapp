const express = require('express');
const {
    addSupplier,
    getSuppliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier,
} = require('../controllers/supplierController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, addSupplier)
    .get(protect, getSuppliers);

router.route('/:id')
    .get(protect, getSupplierById)
    .put(protect, updateSupplier)
    .delete(protect, deleteSupplier);

module.exports = router;
