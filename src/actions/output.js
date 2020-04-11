import axios from "axios";
import { API_URL, CONFIG } from "../utils/api";
import { LOAD_OUTPUTS, LOAD_OUTPUT_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

// import { setAlert } from "./alert";
// import setAuthToken from "../utils/setAuthToken";

// LOAD USER
export const loadMyOutputs = districtId => async dispatch => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const res = await axios.post(
      `${API_URL}/output/outputs`,
      { districtId: districtId },
      CONFIG
    );

    dispatch({
      type: LOAD_OUTPUTS,
      payload: { result: res.data.result }
    });
  } catch (error) {
    dispatch({
      type: LOAD_OUTPUT_ERROR
    });
  }
};
