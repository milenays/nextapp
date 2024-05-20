const express = require('express');
const {
    getIntegrations,
    addIntegration,
    updateIntegration,
    deleteIntegration
} = require('../controllers/integrationController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .get(protect, admin, getIntegrations)
    .post(protect, admin, addIntegration);

router.route('/:id')
    .put(protect, admin, updateIntegration)
    .delete(protect, admin, deleteIntegration);

module.exports = router;
