const express = require('express');
const router = express.Router();
const { predictFertilizerUsage } = require('../controllers/predictController');

// Define the prediction route
router.post('/predict', predictFertilizerUsage);

module.exports = router;