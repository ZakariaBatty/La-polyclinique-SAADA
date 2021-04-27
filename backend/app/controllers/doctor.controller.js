const { doctorValidation } = require('../validations/validations');
const DoctorSchema = require('../models/doctor');

// new patient
const addDoctor = async (req, res) => {
  //validation
  const { error } = doctorValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // if not error
  const Doctor = new DoctorSchema({ ...req.body });
  try {
    const doctor = await Doctor.save();
    return res.json({ message: 'A new doctor has been added', doctor: doctor });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

// get All doctor
const doctors = async (req, res) => {
  try {
    const doctors = await DoctorSchema.find();
    return res.json(doctors);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = { addDoctor, doctors };
