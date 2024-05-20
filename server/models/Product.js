const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    variantName: String,
    variantValue: String,
    modelCode: String,
    barcode: String,
    stockQuantity: Number,
    fakeStockQuantity: Number,
    criticalStockQuantity: Number,
    marketPrice: Number,
    salePrice: Number,
    purchasePrice: Number,
});

const productSchema = new mongoose.Schema({
    uniqueID: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    stockCode: {
        type: String,
        required: true,
    },
    barcode: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
    },
    description: String,
    desi: Number,
    stockQuantity: Number,
    fakeStockQuantity: Number,
    criticalStockQuantity: Number,
    marketPrice: Number,
    salePrice: Number,
    purchasePrice: Number,
    images: [String],
    rackCode: String,
    areaCode: String,
    channelPrices: [{
        channel: String,
        price: Number,
    }],
    integrations: [{
        platform: String,
        data: mongoose.Schema.Types.Mixed,
    }],
    variants: [variantSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
