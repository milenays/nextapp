const asyncHandler = require('express-async-handler');
const Settings = require('../models/Settings');

// Ayarları listeleme
exports.getSettings = asyncHandler(async (req, res) => {
    const settings = await Settings.find({});
    res.json(settings);
});

// Ayar ekleme veya güncelleme
exports.addOrUpdateSetting = asyncHandler(async (req, res) => {
    const { settingName, settingValue } = req.body;

    let setting = await Settings.findOne({ settingName });

    if (setting) {
        setting.settingValue = settingValue;
        setting = await setting.save();
    } else {
        setting = new Settings({ settingName, settingValue });
        setting = await setting.save();
    }

    res.status(201).json(setting);
});

// Ayar silme
exports.deleteSetting = asyncHandler(async (req, res) => {
    const setting = await Settings.findById(req.params.id);

    if (setting) {
        await setting.remove();
        res.json({ message: 'Setting removed' });
    } else {
        res.status(404).json({ message: 'Setting not found' });
    }
});
