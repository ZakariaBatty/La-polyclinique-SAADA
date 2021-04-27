require('dotenv').config({ path: './app/config/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const doctor = require('./app/routers/doctor.routes');
const patient = require('./app/routers/patient.routes');

const app = express();

// middlewers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', doctor);
app.use('/', patient);

// connection
require('./app/config/connection/connection');

// port
const PORT = process.env.PORT || 3333;

// server
app.listen(PORT, () => {
  console.log(`server running at on port ${PORT}`);
});
