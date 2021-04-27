const express = require('express');
const router = express.Router();

const {
  newPatient,
  addNewDate,
  consultation,
  patients,
  getAllReqConsultation
} = require('../controllers/patient.controller');
const { auth, signout, register } = require('../controllers/auth');

router.post('/new/patient', newPatient);
router.post('/add/date', addNewDate);
router.post('/consultation', consultation);
router.get('/pations', patients);
router.get('/get/All/Req/Consultation', getAllReqConsultation);

router.post('/register', register);
router.post('/auth', auth);
router.get('/signout', signout);

module.exports = router;
