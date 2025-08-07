const express = require('express');
const { registerUser, authUser, getUserDetails, setuserAddress, setuserOrder } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/id', getUserDetails);
router.post('/address', setuserAddress);
router.post('/order', setuserOrder);


module.exports = router;

