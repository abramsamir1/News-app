import firebase from 'firebase';
import {
  LOGIN_ATTEMP,
  LOGIN_ATTEMP_SUCCESS,
  LOGIN_ATTEMP_FAILURE,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
    };
};

export const passwordChanged = (text) => {
  return {
  type: PASSWORD_CHANGED,
  payload: text
    };
};

export const logIn = ({ email, password }) => {
return (dispatch) => {
  dispatch({ type: LOGIN_ATTEMP });
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
    };
};

const loginUserFail = (dispatch) => {
  console.log('failed');
  dispatch({ type: LOGIN_ATTEMP_FAILURE });
};

const loginUserSuccess = (dispatch, user) => {
  console.log('success');
  dispatch({
    type: LOGIN_ATTEMP_SUCCESS,
    payload: user
  });
};
