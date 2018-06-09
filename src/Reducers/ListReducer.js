import {
FETCH_ATTEMP,
FETCH_ATTEMP_SUCCESS,
FETCH_ATTEMP_FAILURE } from '../Actions/types';

const INITIAL_STATE = {
  loading: false,
  error: '',
  data: '',
  success: false,
};

export default(state = INITIAL_STATE, action) => {
switch (action.type) {
  case FETCH_ATTEMP:
    return { ...state, loading: true, error: '', data: '', success: false };
  case FETCH_ATTEMP_SUCCESS:
    return { ...state, error: '', data: action.payload, loading: false, success: true };
  case FETCH_ATTEMP_FAILURE:
    return { ...state, error: 'Fetching data failed', loading: false, data: '', success: false };
  default:
    return state;
  }
};
