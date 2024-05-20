const express = require('express');
const {
    addIntegration,
    getIntegrations,
    getIntegrationById,
    updateIntegration,
    deleteIntegration,
} = require('../controllers/integrationController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, addIntegration)
    .get(protect, getIntegrations);

router.route('/:id')
    .get(protect, getIntegrationById)
    .put(protect, updateIntegration)
    .delete(protect, deleteIntegration);

module.exports = router;
