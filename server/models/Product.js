const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    stockCode: {
        type: String,
        required: true,
    },
    barcode: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    desi: {
        type: Number,
        required: true,
    },
    stockQuantity: {
        type: Number,
        required: true,
    },
    fakeStockQuantity: {
        type: Number,
    },
    criticalStockQuantity: {
        type: Number,
    },
    marketPrice: {
        type: Number,
        required: true,
    },
    salePrice: {
        type: Number,
        required: true,
    },
    purchasePrice: {
        type: Number,
        required: true,
    },
    images: [
        {
            type: String,
        }
    ],
    shelfCode: {
        type: String,
        required: true,
    },
    areaCode: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
