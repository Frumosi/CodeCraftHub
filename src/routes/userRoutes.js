const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:username', userController.updateUserProfile);

module.exports = router;