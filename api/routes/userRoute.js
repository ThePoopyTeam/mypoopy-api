const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.findAll);
router.post('/', userController.create);

module.exports = router;