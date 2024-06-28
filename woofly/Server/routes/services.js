const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.post('/create', serviceController.createService);
router.get('/:providerId', serviceController.getServicesByProvider);

module.exports = router;

