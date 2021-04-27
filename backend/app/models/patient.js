const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const PatientSchema = new Schema(
  {
    cin: { type: String, resuired: true, unique: true, trim: true },
    firstName: { type: String, resuired: true, trim: true },
    lastName: { type: String, resuired: true },
    telephone: { type: String, resuired: true },
    dtns: { type: Date, resuired: true },
  },
  { timstamps: true }
);

module.exports = model('patients', PatientSchema);
