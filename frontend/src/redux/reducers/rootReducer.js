import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import doctorReducer from './doctor/doctorReducer';

// creta root
const rootReducer = combineReducers({
  auth: authReducer,
  doctor: doctorReducer,
});

export default rootReducer;
