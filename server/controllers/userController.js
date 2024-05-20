const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// Kullanıcıları listeleme
exports.getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

// Kullanıcı ekleme
exports.addUser = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = new User({
        name,
        email,
        password,
        role
    });

    const createdUser = await user.save();

    res.status(201).json({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        role: createdUser.role,
        token: generateToken(createdUser._id) // Bu satırı kontrol edelim
    });
});

// Kullanıcı güncelleme
exports.updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.role = req.body.role || user.role;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// Kullanıcı silme
exports.deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        await user.remove();
        res.json({ message: 'User removed' });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});
