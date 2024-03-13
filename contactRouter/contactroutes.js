const express = require('express');
const router = express.Router();
const contactController = require('../contactCon.js/contactController');

// Submit contact form
router.post('/contact', contactController.submitContactForm);

module.exports = router;
