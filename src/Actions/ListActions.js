import axios from 'axios';
import {
  FETCH_ATTEMP,
  FETCH_ATTEMP_SUCCESS,
  FETCH_ATTEMP_FAILURE
  } from './types.js';

export const fetchList = () => {
return (dispatch) => {
    dispatch({ type: FETCH_ATTEMP });
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5f62facb2078455fb9f2131a7db77f35')
    .then(response => fetchSuccess(dispatch, response.data))
    .catch(() => fetchFailed(dispatch));
  };
};

const fetchSuccess = (dispatch, data) => {
  dispatch({
  type: FETCH_ATTEMP_SUCCESS,
  payload: data,
});
};

const fetchFailed = (dispatch) => {
  dispatch({
  type: FETCH_ATTEMP_FAILURE
});
};
