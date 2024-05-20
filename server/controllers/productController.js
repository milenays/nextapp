const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

// Ürünleri listeleme
exports.getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// Ürün ekleme
exports.addProduct = asyncHandler(async (req, res) => {
    const {
        name,
        stockCode,
        barcode,
        category,
        brand,
        description,
        desi,
        stockQuantity,
        fakeStockQuantity,
        criticalStockQuantity,
        marketPrice,
        salePrice,
        purchasePrice,
        images,
        shelfCode,
        areaCode
    } = req.body;

    const product = new Product({
        name,
        stockCode,
        barcode,
        category,
        brand,
        description,
        desi,
        stockQuantity,
        fakeStockQuantity,
        criticalStockQuantity,
        marketPrice,
        salePrice,
        purchasePrice,
        images,
        shelfCode,
        areaCode
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// Ürün güncelleme
exports.updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        product.name = req.body.name || product.name;
        product.stockCode = req.body.stockCode || product.stockCode;
        product.barcode = req.body.barcode || product.barcode;
        product.category = req.body.category || product.category;
        product.brand = req.body.brand || product.brand;
        product.description = req.body.description || product.description;
        product.desi = req.body.desi || product.desi;
        product.stockQuantity = req.body.stockQuantity || product.stockQuantity;
        product.fakeStockQuantity = req.body.fakeStockQuantity || product.fakeStockQuantity;
        product.criticalStockQuantity = req.body.criticalStockQuantity || product.criticalStockQuantity;
        product.marketPrice = req.body.marketPrice || product.marketPrice;
        product.salePrice = req.body.salePrice || product.salePrice;
        product.purchasePrice = req.body.purchasePrice || product.purchasePrice;
        product.images = req.body.images || product.images;
        product.shelfCode = req.body.shelfCode || product.shelfCode;
        product.areaCode = req.body.areaCode || product.areaCode;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Ürün silme
exports.deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});
