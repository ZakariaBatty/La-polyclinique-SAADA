const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const DoctorSchema = new Schema(
  {
    firstName: { type: String, resuired: true, trim: true },
    lastName: { type: String, resuired: true },
    specialty: { type: String, resuired: true },
    matricule: { type: String, resuired: true },
    maxConsultation: { type: Number, resuired: true },
  },
  { timstamps: true }
);

module.exports = model('doctors', DoctorSchema);
