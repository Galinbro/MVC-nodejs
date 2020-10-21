const path = require('path');

const express = require('express');

const welcomeController = require('../controllers/welcomeController');

const router = express.Router();

router.get('/new', welcomeController.getNew);
router.get('/', welcomeController.getIndex);

module.exports = router;

