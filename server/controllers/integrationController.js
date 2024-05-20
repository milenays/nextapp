const asyncHandler = require('express-async-handler');
const Integration = require('../models/Integration');

// Entegrasyonları listeleme
exports.getIntegrations = asyncHandler(async (req, res) => {
    const integrations = await Integration.find({});
    res.json(integrations);
});

// Entegrasyon ekleme
exports.addIntegration = asyncHandler(async (req, res) => {
    const { name, apiKey, apiSecret, sellerId, settings } = req.body;

    const integration = new Integration({
        name,
        apiKey,
        apiSecret,
        sellerId,
        settings
    });

    const createdIntegration = await integration.save();
    res.status(201).json(createdIntegration);
});

// Entegrasyon güncelleme
exports.updateIntegration = asyncHandler(async (req, res) => {
    const integration = await Integration.findById(req.params.id);

    if (integration) {
        integration.name = req.body.name || integration.name;
        integration.apiKey = req.body.apiKey || integration.apiKey;
        integration.apiSecret = req.body.apiSecret || integration.apiSecret;
        integration.sellerId = req.body.sellerId || integration.sellerId;
        integration.settings = req.body.settings || integration.settings;

        const updatedIntegration = await integration.save();
        res.json(updatedIntegration);
    } else {
        res.status(404).json({ message: 'Integration not found' });
    }
});

// Entegrasyon silme
exports.deleteIntegration = asyncHandler(async (req, res) => {
    const integration = await Integration.findById(req.params.id);

    if (integration) {
        await integration.remove();
        res.json({ message: 'Integration removed' });
    } else {
        res.status(404).json({ message: 'Integration not found' });
    }
});

