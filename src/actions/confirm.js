import {
  SET_CONFIRM,
  SUCCESS_CONFIRM,
  LOGOUT,
  CLOSE_CONFIRM,
  CLEAR_CONFIRM
} from "./types";

// (title, body, action,type, theme, actionId, payload)
export const setConfirm = payload => dispatch => {
  dispatch({
    type: SET_CONFIRM,
    payload: payload
  });
};

export const closeConfirm = () => dispatch => {
  dispatch({
    type: CLOSE_CONFIRM
  });
};

export const successConfirm = actionId => dispatch => {
  dispatch({
    type: SUCCESS_CONFIRM,
    payload: actionId
  });
};

export const failedConfirm = actionId => dispatch => {
  dispatch({
    type: LOGOUT
  });
  dispatch({
    type: CLEAR_CONFIRM
  });
};
