const express = require('express');
const router = express.Router();
const bathroomController = require('../controllers/bathroomController');
const isUserAuthenticated = require('../middlewares/isUserAuthenticated');

router.get('/', isUserAuthenticated, bathroomController.findAll);
router.post('/', isUserAuthenticated, bathroomController.create);

router.get('/report/:id', isUserAuthenticated, bathroomController.findOneReport);
router.post('/report', isUserAuthenticated, bathroomController.createReport);

module.exports = router;