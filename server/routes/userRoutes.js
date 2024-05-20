const express = require('express');
const {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    updateUserProfile
} = require('../controllers/userController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .get(protect, admin, getUsers)
    .post(protect, admin, addUser);

router.route('/:id')
    .put(protect, admin, updateUser)
    .delete(protect, admin, deleteUser);

router.route('/profile').put(protect, updateUserProfile);

module.exports = router;
