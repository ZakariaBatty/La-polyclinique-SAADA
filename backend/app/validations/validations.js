const Joi = require('joi');

// validation doctor
const doctorValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(4).max(30),
    lastName: Joi.string().required().min(3).max(30),
    specialty: Joi.string().required(),
    matricule: Joi.string().required(),
    maxConsultation: Joi.number().required(),
  });
  return schema.validate(data);
};

// validation doctor
const patientValidation = (data) => {
  const schema = Joi.object({
    cin: Joi.string().required().trim(),
    firstName: Joi.string().required().min(4).max(30),
    lastName: Joi.string().required().min(3).max(30),
    telephone: Joi.string().required(),
    dtns: Joi.date().required(),
  });
  return schema.validate(data);
};

module.exports = {
  doctorValidation,
  patientValidation,
};
