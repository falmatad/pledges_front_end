// REGISTER_SUCCESS,
// REGISTER_FAIL,
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_AUTH,
  PROFILE_UPDATE,
  CLEAR_AUTH_ERRORS,
  LOGIN_LOADING
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  district: null,
  errors: [],
  loginLoading: false
};

// registration
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
        district: payload.district,
        errors: []
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        errors: [],
        loginLoading: false
      };
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        district: null,
        errors: payload,
        loginLoading: false
      };
    case AUTH_ERROR:
    case LOGOUT:
    case CLEAR_AUTH:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        district: null,
        errors: [],
        loginLoading: false
      };
    case PROFILE_UPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          username: payload.username,
          names: payload.names,
          dob: payload.dob,
          gender: payload.gender,
          activated: 1
        }
      };
    case CLEAR_AUTH_ERRORS:
      return {
        ...state,
        errors: [],
        loginLoading: false
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true
      };
    default:
      return state;
  }
}
