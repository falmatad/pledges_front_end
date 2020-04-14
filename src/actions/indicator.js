import {
  SET_NEW_INDICATOR,
  ADD_INDICATOR_NAME_SOURCE_DESCRIPTION,
  ADD_INDICATOR_MEASUREMENT,
  EDIT_INDICATOR_MEASUREMENT,
  DELETE_INDICATOR_MEASUREMENT,
  SET_INDICATOR_BUDGET,
  SAVE_FAILED_INDICATOR_TO_DB,
  SAVE_SUCCESS_INDICATOR_TO_DB
} from "./types";
import { v4 as uuid4 } from "uuid";
import axios from "axios";
import { API_URL, CONFIG } from "../utils/api";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

export const createNewIndicator = data => dispatch => {
  dispatch({
    type: SET_NEW_INDICATOR,
    payload: {
      indicator_id: uuid4(),
      links: data
    }
  });
};

export const addIndicatorTileDescriptionSource = data => dispatch => {
  dispatch({
    type: ADD_INDICATOR_NAME_SOURCE_DESCRIPTION,
    payload: {
      title: data.title,
      description: data.description,
      source: data.source
    }
  });
};

export const addIndicatorMeasurement = data => dispatch => {
  dispatch({
    type: ADD_INDICATOR_MEASUREMENT,
    payload: {
      ...data,
      id: uuid4()
    }
  });
};

export const editIndicatorMeasurement = data => dispatch => {
  dispatch({
    type: EDIT_INDICATOR_MEASUREMENT,
    payload: data
  });
};

export const deleteIndicatorMeasurement = id => dispatch => {
  dispatch({
    type: DELETE_INDICATOR_MEASUREMENT,
    payload: id
  });
};

export const addIndicatorBudget = data => dispatch => {
  dispatch({
    type: SET_INDICATOR_BUDGET,
    payload: {
      budget: data.budget,
      progress_type: data.progress_type,
      created_by: data.user_id
    }
  });
};

// LOAD USER
export const saveIndicatorToDB = (data, history) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // prepare the data
    let dataDb = {
      indicator_id: data.indicator_id,
      output_id: data.output.id,
      indicator_title: data.indicator_title,
      indicator_description: data.indicator_description,
      measurements: data.measurements,
      district_id: data.district_id,
      created_by: data.created_by,
      progress_type: data.progress_type,
      created_date: data.created_date,
      source_of_data: data.source_of_data,
      logs: data.logs,
      budget: data.budget
    };

    const res = await axios.post(`${API_URL}/indicator`, dataDb, CONFIG);
    dispatch({
      type: SAVE_SUCCESS_INDICATOR_TO_DB,
      payload: res.data
    });
    setAlert("The indicator has been inserted!", "success");
    history.push("/indicators");
  } catch (error) {
    dispatch({
      type: SAVE_FAILED_INDICATOR_TO_DB
    });

    setAlert("Failed to store data!", "danger");
  }
};
