import axios from "axios";
import { API_URL, CONFIG } from "../utils/api";
import { LOAD_PLANS, LOAD_PLAN_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

// import { setAlert } from "./alert";
// import setAuthToken from "../utils/setAuthToken";

// LOAD USER
export const loadPlans = () => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const res = await axios.get(`${API_URL}/plans/myplans`, CONFIG);

    dispatch({
      type: LOAD_PLANS,
      payload: { result: res.data.result }
    });
  } catch (error) {
    dispatch({
      type: LOAD_PLAN_ERROR
    });
  }
};
