const express = require('express');
const router = express.Router();
const bathroomController = require('../controllers/bathroomController');
const isUserAuthenticated = require('../middlewares/isUserAuthenticated');

router.get('/', isUserAuthenticated, bathroomController.findAll);
router.post('/', isUserAuthenticated, bathroomController.create);

module.exports = router;