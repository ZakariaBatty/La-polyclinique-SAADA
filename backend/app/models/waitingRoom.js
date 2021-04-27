const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const waitingRoom = new Schema(
  {
    date: { type: Date, resuired: true },
  },
  { timstamps: true }
);

module.exports = model('waiting-room', waitingRoom);
