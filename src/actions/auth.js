import axios from "axios";
import { API_URL, CONFIG } from "../utils/api";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_CONFIRM,
  PROFILE_UPDATE,
  CLEAR_AUTH_ERRORS,
  LOGIN_LOADING
} from "./types";

import setAuthToken from "../utils/setAuthToken";

// LOAD USER
export const loadUser = () => async dispatch => {
  console.log("LOAD USER EXECUTED");

  // // setAuthToken(localStorage.token);
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${API_URL}/users/me`, CONFIG);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    // console.log("[ERROR RES LOAD USER]: ", error);

    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);
    console.log("[API AUTH RESULT]:  ", res);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (error) {
    // display errors
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// lOGIN User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(
      `${API_URL}/auth/login`,
      {
        email: email,
        password: password
      },
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    console.log(res.data);
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errors
    });
  }
};

export const updateProfile = profile => dispatch => {
  dispatch({
    type: PROFILE_UPDATE,
    payload: profile
  });
};

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_ERRORS
  });
};

export const loginLoading = () => dispatch => {
  dispatch({
    type: LOGIN_LOADING
  });
};

// lOGOUT // clear profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_CONFIRM });
  dispatch({ type: LOGOUT });
};
