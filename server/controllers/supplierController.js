const Supplier = require('../models/Supplier');

// Tedarikçi ekleme
exports.addSupplier = async (req, res) => {
    try {
        const supplier = new Supplier(req.body);
        const savedSupplier = await supplier.save();
        res.status(201).json(savedSupplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Tedarikçileri listeleme
exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tedarikçi detay görüntüleme
exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (supplier) {
            res.json(supplier);
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tedarikçi güncelleme
exports.updateSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (supplier) {
            res.json(supplier);
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Tedarikçi silme
exports.deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndDelete(req.params.id);
        if (supplier) {
            res.json({ message: 'Supplier removed' });
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
