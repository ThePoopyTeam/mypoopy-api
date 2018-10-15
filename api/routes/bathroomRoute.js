const express = require('express');
const router = express.Router();
const bathroomController = require('../controllers/bathroomController');

router.get('/', bathroomController.findAll);
router.post('/', bathroomController.create);

module.exports = router;