const express = require('express');
const {
    getIntegrations,
    addOrUpdateIntegration,
    deleteIntegration
} = require('../controllers/integrationController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .get(protect, admin, getIntegrations)
    .post(protect, admin, addOrUpdateIntegration);

router.route('/:id')
    .delete(protect, admin, deleteIntegration);

module.exports = router;
