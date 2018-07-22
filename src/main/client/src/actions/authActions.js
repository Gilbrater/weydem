import axios from 'axios';

import { GET_ERRORS, SET_CURRENT_USER } from './types';


const BASE_URL = "http://192.168.88.52:9114/";

//Register User

export const registerUser = (userData, history) => dispatch => {
  axios.post(`${BASE_URL}auth/signup`, userData)
  .then(res => history.push('/signin'))
  .catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  })
);
}


//Login -
export const loginUser = (userData) => dispatch => {
  axios.post(`${BASE_URL}auth/login`, userData)
  .then(res => {
    //save to local storage
    const loggedData = res.data;

    //set token to local storage
    localStorage.setItem('loggedData', loggedData);
    //set current user
    dispatch(setCurrentUser(loggedData));
  }).catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  })
);
}

//Set logged in user
export const setCurrentUser = (loggedData) => {
  return {
    type: SET_CURRENT_USER,
    payload: loggedData
  }
}

//Log User Out
export const logoutUser = () => dispatch => {
  //Remove Token from Local storage
  localStorage.removeItem('loggedData');
  //Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));

}
