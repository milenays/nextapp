const asyncHandler = require('express-async-handler');
const Integration = require('../models/Integration');

// Entegrasyonları listeleme
exports.getIntegrations = asyncHandler(async (req, res) => {
    const integrations = await Integration.find({});
    res.json(integrations);
});

// Entegrasyon ekleme veya güncelleme
exports.addOrUpdateIntegration = asyncHandler(async (req, res) => {
    const { name, type, apiKey, apiSecret, settings } = req.body;

    let integration = await Integration.findOne({ name });

    if (integration) {
        integration.type = type;
        integration.apiKey = apiKey;
        integration.apiSecret = apiSecret;
        integration.settings = settings;
        integration = await integration.save();
    } else {
        integration = new Integration({ name, type, apiKey, apiSecret, settings });
        integration = await integration.save();
    }

    res.status(201).json(integration);
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
