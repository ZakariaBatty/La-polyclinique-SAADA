import authTypes from '../types/authTypes';
import axios from 'axios';
import { saveAuthToLocalStorage } from '../../helpers/auth';

//url
const url = 'http://localhost:1028';

// login
export const login = (auth) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth`, auth)
      .then((res) => {
        console.log(res.data.error);
        if (res.data.error) {
          dispatch({
            type: authTypes.ERROR,
            payload: res.data.error,
          });
        } else {
          saveAuthToLocalStorage(res.data);
          dispatch({
            type: authTypes.AUTH,
            payload: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
