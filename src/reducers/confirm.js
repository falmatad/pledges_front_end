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
  payload: null,
  function: null,
  agruments: null
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
        function: payload.function,
        parameter: payload.parameter
      };
    case SUCCESS_CONFIRM:
      return {
        ...state,
        action: true,
        active: false,
        function: null,
        parameter: null
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
        function: null,
        parameter: null
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
        function: null,
        parameter: null
      };
    default:
      return state;
  }
}
