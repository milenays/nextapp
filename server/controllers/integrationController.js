const Integration = require('../models/Integration');

// Entegrasyon ekleme
exports.addIntegration = async (req, res) => {
    try {
        const integration = new Integration(req.body);
        const savedIntegration = await integration.save();
        res.status(201).json(savedIntegration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Entegrasyonları listeleme
exports.getIntegrations = async (req, res) => {
    try {
        const integrations = await Integration.find();
        res.json(integrations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Entegrasyon detay görüntüleme
exports.getIntegrationById = async (req, res) => {
    try {
        const integration = await Integration.findById(req.params.id);
        if (integration) {
            res.json(integration);
        } else {
            res.status(404).json({ message: 'Integration not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Entegrasyon güncelleme
exports.updateIntegration = async (req, res) => {
    try {
        const integration = await Integration.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (integration) {
            res.json(integration);
        } else {
            res.status(404).json({ message: 'Integration not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Entegrasyon silme
exports.deleteIntegration = async (req, res) => {
    try {
        const integration = await Integration.findByIdAndDelete(req.params.id);
        if (integration) {
            res.json({ message: 'Integration removed' });
        } else {
            res.status(404).json({ message: 'Integration not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateIntegrationSettings = async (req, res) => {
    const integration = await Integration.findById(req.params.id);

    if (integration) {
        integration.apiKey = req.body.apiKey || integration.apiKey;
        integration.apiSecret = req.body.apiSecret || integration.apiSecret;
        integration.sellerId = req.body.sellerId || integration.sellerId;
        integration.settings = req.body.settings || integration.settings;

        const updatedIntegration = await integration.save();

        res.json(updatedIntegration);
    } else {
        res.status(404).json({ message: 'Integration not found' });
    }
};
