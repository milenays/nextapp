const mongoose = require('mongoose');

const supplyItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
});

const supplySchema = new mongoose.Schema({
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true,
    },
    supplyItems: [supplyItemSchema],
    totalCost: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending',
    },
    receivedAt: {
        type: Date,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Supply', supplySchema);
