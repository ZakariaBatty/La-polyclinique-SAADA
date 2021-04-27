import authTypes from '../../types/authTypes';

const initialState = {
  currentAuth: null,
  error: null,
  success: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.AUTH:
      return {
        ...state,
        currentAuth: action.payload,
        error: null,
        success: !state.success,
      };
    case authTypes.CHECK_AUTH:
      return {
        ...state,
        currentAuth: action.payload,
      };
    case authTypes.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case 'TOGGLE_SUCCESS':
      return {
        ...state,
        success: !state.success,
      };
    default:
      return state;
  }
};

export default authReducer;
