const Product = require('../models/Product');

// Depo ürünlerini listeleme
exports.getWarehouseProducts = async (req, res) => {
    try {
        const products = await Product.find().select('name stockCode rackCode areaCode stockQuantity');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Depo ürün detayını görüntüleme
exports.getWarehouseProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).select('name stockCode rackCode areaCode stockQuantity');
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Depo ürünü güncelleme
exports.updateWarehouseProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            product.rackCode = req.body.rackCode || product.rackCode;
            product.areaCode = req.body.areaCode || product.areaCode;
            product.stockQuantity = req.body.stockQuantity || product.stockQuantity;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
