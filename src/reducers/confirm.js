import {
  SET_CONFIRM,
  SUCCESS_CONFIRM,
  CANCELED_CONFIRM,
  CLOSE_CONFIRM,
  CLEAR_CONFIRM
} from "../actions/types";

const initialState = {
  active: false,
  title: "",
  body: "",
  action: null,
  type: null,
  theme: "",
  actionId: null,
  payload: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CONFIRM:
      return {
        active: true,
        title: payload.title,
        body: payload.body,
        action: null,
        type: payload.type,
        theme: payload.theme,
        actionId: payload.actionId,
        payload: payload.payload
      };
    case SUCCESS_CONFIRM:
      return {
        ...state,
        action: true,
        active: false,
        actionId: payload
      };
    case CLOSE_CONFIRM:
    case CANCELED_CONFIRM:
      return {
        ...state,
        active: false,
        title: "",
        body: "",
        action: null,
        type: null,
        theme: "",
        actionId: "",
        payload: ""
      };
    case CLEAR_CONFIRM:
      return {
        ...state,
        active: false,
        title: "",
        body: "",
        action: null,
        type: null,
        theme: "",
        actionId: "",
        payload: ""
      };
    default:
      return state;
  }
}
