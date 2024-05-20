const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    settingName: {
        type: String,
        required: true,
    },
    settingValue: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
}, {
    timestamps: true,
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;
