const express = require('express');
const router = express.Router();
const {singIn} = require('../controller/singInController');

router.get('/', singIn);

module.exports = router;