require('dotenv').config({ path: '../app/config/.env' });
const Admin = require('../models/admin');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const auth = (req, res) => {
  // get one user
  Admin.findOne({ email: req.body.email }, (err, admin) => {
    if (err || !admin) return res.json({ error: 'Acune donnée trovée' });

    admin.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) {
        return res.json({ error: 'Email and password doesnot match' });
      }
      const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET);
      res.cookie('t', token, {
        expire: new Date() + 9999,
      });
      return res.json({
        token,
        admin,
      });
    });
  });
};

// register
const register = async (req, res) => {
  const admin = new Admin({ ...req.body });
  try {
    const save = await admin.save();
    res.json({ admin: save });
  } catch (error) {
    console.log(error);
  }
};

// singnout
const signout = (req, res) => {
  res.clearCookie('t');
  res.json({ message: 'Déconnecté' });
};

module.exports = {
  auth,
  signout,
  register,
};
