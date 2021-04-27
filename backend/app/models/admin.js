const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema, model } = mongoose;

const Admin = new Schema(
  {
    email: { type: String, required: true, unique: true },
    salt: String,
    hashed_password: { type: String, required: true },
  },
  { timestamps: true }
);

// create virtual password and crypted password
Admin.virtual('password')
  .get(function () {
    return this._password;
  })
  .set(function (password) {
    this._password = password;
    let salt = (this.salt = bcrypt.genSaltSync(10));
    this.hashed_password = bcrypt.hashSync(password, salt);
  });

// compare password is err or is Match
Admin.methods.comparePassword = function (passwordToCheck, cb) {
  bcrypt.compare(
    passwordToCheck,
    this.hashed_password,
    function (err, isMatch) {
      if (err) cb(err);
      cb(null, isMatch);
    }
  );
};

module.exports = model('admin', Admin);
