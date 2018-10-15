const express = require('express');
const router = express.Router();
const isUserAuthenticated = require('../middlewares/isUserAuthenticated');
const userController = require('../controllers/userController');


router.get('/', isUserAuthenticated, userController.findAll);
router.post('/', isUserAuthenticated, userController.create);

module.exports = router;