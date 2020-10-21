const path = require('path');

const express = require('express');

const recruiterController = require('../controllers/userController');

const router = express.Router();

router.get('/', recruiterController.getIndex);
router.get('/add-user', recruiterController.getNew);
router.post('/add-user', recruiterController.postCreate);

module.exports = router