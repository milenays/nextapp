const Setting = require('../models/Setting');

// Döviz kuru ayarlarını güncelleme
exports.updateExchangeRate = async (req, res) => {
    const { currency, rate } = req.body;

    let setting = await Setting.findOne({ key: 'exchangeRate' });

    if (setting) {
        setting.value[currency] = rate;
    } else {
        setting = new Setting({
            key: 'exchangeRate',
            value: { [currency]: rate },
        });
    }

    const updatedSetting = await setting.save();

    res.json(updatedSetting);
};

// Döviz kuru ayarlarını alma
exports.getExchangeRate = async (req, res) => {
    const setting = await Setting.findOne({ key: 'exchangeRate' });

    if (setting) {
        res.json(setting.value);
    } else {
        res.status(404).json({ message: 'Exchange rate settings not found' });
    }
};
