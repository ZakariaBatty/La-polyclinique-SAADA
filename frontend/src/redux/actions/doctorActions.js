import doctorTypes from '../types/doctorTypes';
import axios from 'axios';

//url
const url = 'http://localhost:1028';

export const addNewDoctor = (doctor) => {
  return (dispatch) => {
    axios
      .post(`${url}/doctor`, doctor)
      .then((res) => {
        if (res.data.error) {
          console.log(res.data.message);
          dispatch({
            type: doctorTypes.ERROR,
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: doctorTypes.ADDNEWDOCTOR,
            payload: res.data.message,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

// get all doctor
export const getAllDoctor = (req, res) => {
  return (dispatch) => {
    axios
      .get(`${url}/doctors`)
      .then((res) => {
        if (res.data.error) {
          dispatch({
            type: doctorTypes.ERROR,
            payload: res.data.error,
          });
        } else {
          dispatch({
            type: doctorTypes.GETALLDOCTORS,
            payload: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
