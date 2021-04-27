const express = require('express');
const router = express.Router();

const { addDoctor, doctors } = require('../controllers/doctor.controller');

router.post('/doctor', addDoctor);
router.get('/doctors', doctors);

module.exports = router;
