import { LOGIN_ATTEMP,
LOGIN_ATTEMP_SUCCESS,
LOGIN_ATTEMP_FAILURE,
EMAIL_CHANGED,
PASSWORD_CHANGED } from '../Actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  success: false,
  user: 'null'
};

export default(state = INITIAL_STATE, action) => {
switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, email: action.payload, error: '', success: false };
  case PASSWORD_CHANGED:
    return { ...state, password: action.payload, error: '', success: false };
  case LOGIN_ATTEMP:
    return { ...state, loading: true, error: '', success: false };
  case LOGIN_ATTEMP_SUCCESS:
    return { ...state, error: '', user: action.payload, loading: false, success: true };
  case LOGIN_ATTEMP_FAILURE:
    return { ...state, error: 'Logging in failed', loading: false, success: false };
  default:
    return state;
  }
};
