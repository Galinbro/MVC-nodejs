const path = require('path');

const express = require('express');

const recruiterController = require('../controllers/userController');

const router = express.Router();

router.get('/', recruiterController.getIndex);
router.get('/add-user', recruiterController.getNew);
router.post('/add-user', recruiterController.postCreate);

router.post('/edit-user/:id', recruiterController.postEdit);
router.get('/edit-user/:id', recruiterController.getEdit);


module.exports = router