const mongoose = require('mongoose');

const integrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    apiKey: {
        type: String,
        required: true,
    },
    apiSecret: {
        type: String,
        required: true,
    },
    sellerId: {
        type: String,
        required: true,
    },
    settings: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Integration', integrationSchema);
