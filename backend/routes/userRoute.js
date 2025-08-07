const express = require('express');
const { registerUser, authUser, getUserDetails, userAddress } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/id', getUserDetails);
router.post('/address', userAddress);


module.exports = router;

