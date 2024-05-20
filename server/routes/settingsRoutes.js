const express = require('express');
const {
    getSettings,
    addOrUpdateSetting,
    deleteSetting
} = require('../controllers/settingsController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .get(protect, admin, getSettings)
    .post(protect, admin, addOrUpdateSetting);

router.route('/:id')
    .delete(protect, admin, deleteSetting);

module.exports = router;
