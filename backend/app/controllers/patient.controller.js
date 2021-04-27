const { patientValidation } = require('../validations/validations');
const PatientSchema = require('../models/patient');
const WaitingRoom = require('../models/waitingRoom');
const reqCon = require('../models/req-consultation');
const moment = require('moment');

// add add new date
const addNewDate = async (req, res) => {
  const date = moment().format('YYYY-MM-DD');
  const waitingRoom = new WaitingRoom({ date });
  try {
    const WaitingRoom = await waitingRoom.save();
    return res.json({ error: null, WaitingRoom: WaitingRoom });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

// new patient
const newPatient = async (req, res) => {
  //validation
  const { error } = patientValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // if not error
  const Patient = new PatientSchema({ ...req.body });
  try {
    const patient = await Patient.save();
    res.json({ message: 'A new patient has been added', patient: patient });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// get aLL patient
const patients = async (req, res) => {
  try {
    const patients = await PatientSchema.find();
    return res.json({ error: null, patients: patients });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

// request consultation
const consultation = async (req, res) => {
  const consultation = new reqCon({ ...req.body });
  try {
    const Consultation = await consultation.save();
    return res.json({
      message: 'A new request consultation has been added',
      Consultation: Consultation,
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

// get All request Consultation
const getAllReqConsultation = async (req, res) => {
  try {
    const consultation = await reqCon
      .find()
      .populate('id_doctor', '-_id')
      .populate('id_patient', '-_id')
      .populate('id_room', '-_id');
    return res.json({ consultation: consultation });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = {
  newPatient,
  addNewDate,
  consultation,
  patients,
  getAllReqConsultation
};
