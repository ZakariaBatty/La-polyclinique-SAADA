import doctorTypes from '../../types/doctorTypes';

const initialiState = {
  currentDoctor: null,
  doctors: [],
  doctorError: null,
  doctorSuccess: false,
  doctorMessage: null,
};

const doctorReducer = (state = initialiState, action) => {
  switch (action.type) {
    case doctorTypes.GETALLDOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };
    case doctorTypes.ADDNEWDOCTOR:
      return {
        ...state,
        doctorMessage: action.payload,
      };
    case doctorTypes.ERROR:
      return {
        ...state,
        doctorError: action.payload,
      };
    case doctorTypes.TOGGLE_SUCCESS:
      return {
        ...state,
        doctorSuccess: !state.doctorSuccess,
      };
    default:
      return state;
  }
};

export default doctorReducer;
