const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Schema;
const { Schema, model } = mongoose;

const reqCon = new Schema(
  {
    id_patient: { type: Schema.ObjectId, ref: 'patients' },
    id_doctor: { type: Schema.ObjectId, ref: 'doctors' },
    id_room: { type: Schema.ObjectId, ref: 'waiting-room' },
    numOrder: { type: Number, required: true },
    status: { type: String, required: true, default: 'En attente' },
  },
  { timstamps: true }
);

module.exports = model('request-consultation', reqCon);
