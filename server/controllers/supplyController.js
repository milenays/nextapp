const Supply = require('../models/Supply');
const Product = require('../models/Product');

// Tedarik işlemi ekleme
exports.addSupply = async (req, res) => {
    try {
        const { supplyItems, supplier, totalCost } = req.body;

        const supply = new Supply({
            supplier,
            supplyItems,
            totalCost,
        });

        const createdSupply = await supply.save();

        for (const item of supplyItems) {
            const product = await Product.findById(item.product);
            product.stockQuantity += item.quantity;
            await product.save();
        }

        res.status(201).json(createdSupply);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Tedarik işlemlerini listeleme
exports.getSupplies = async (req, res) => {
    try {
        const supplies = await Supply.find().populate('supplier', 'name').populate('supplyItems.product', 'name');
        res.json(supplies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tedarik işlemi detay görüntüleme
exports.getSupplyById = async (req, res) => {
    try {
        const supply = await Supply.findById(req.params.id).populate('supplier', 'name').populate('supplyItems.product', 'name');
        if (supply) {
            res.json(supply);
        } else {
            res.status(404).json({ message: 'Supply not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tedarik işlemi güncelleme
exports.updateSupply = async (req, res) => {
    try {
        const supply = await Supply.findById(req.params.id);
        if (supply) {
            supply.status = req.body.status || supply.status;
            supply.receivedAt = req.body.receivedAt || supply.receivedAt;

            const updatedSupply = await supply.save();
            res.json(updatedSupply);
        } else {
            res.status(404).json({ message: 'Supply not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
