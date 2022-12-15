const express = require('express');
const router = express.Router();
const registerController = require('../controller/registerController');

router.get('/', registerController.getRegister);

module.exports = router;