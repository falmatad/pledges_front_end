import {
  LOAD_INDICATORS,
  LOAD_INDICTORS_ERROR,
  // UPDATE_NEW_INDICATOR,
  // DELETE_NEW_INDICATOR,
  SET_NEW_INDICATOR,
  ADD_INDICATOR_NAME_SOURCE_DESCRIPTION,
  ADD_INDICATOR_MEASUREMENT,
  EDIT_INDICATOR_MEASUREMENT,
  DELETE_INDICATOR_MEASUREMENT,
  SET_INDICATOR_BUDGET,
  SAVE_SUCCESS_INDICATOR_TO_DB,
  SAVE_FAILED_INDICATOR_TO_DB
} from "../actions/types";

const initialState = {
  myIndicators: {
    indicators: [],
    loading: true,
    errors: ""
  },
  indicator: {
    indicator_id: null,
    pillar: { id: null, title: "" },
    sector: { id: null, title: "" },
    outcome: { id: null, title: "" },
    output: { id: null, title: "" },
    indicator_title: "",
    indicator_description: "",
    source_of_data: [],
    measurements: [],
    budget: "",
    progress_type: "",
    logs: {
      budget: []
    },
    created_by: null,
    created_date: null,
    district_id: null,
    accademic_id: null,
    loading: true,
    error: ""
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_INDICATORS:
      return {
        ...state,
        myIndicators: {
          indicators: payload.result,
          loading: false,
          errors: ""
        },
        indicator: {}
      };
    case LOAD_INDICTORS_ERROR:
      return {
        ...state,
        myIndicators: {
          indicators: [],
          loading: false,
          errors: "Failed to load your Indicators"
        }
      };
    case SET_NEW_INDICATOR:
      return {
        ...state,
        indicator: {
          ...state.indicator,
          indicator_id: payload.indicator_id,
          ...payload.links,
          created_date: new Date(),
          loading: true,
          error: ""
        }
      };
    case ADD_INDICATOR_NAME_SOURCE_DESCRIPTION:
      return {
        ...state,
        indicator: {
          ...state.indicator,
          indicator_title: payload.title,
          indicator_description: payload.description,
          source_of_data: payload.source
        }
      };
    case ADD_INDICATOR_MEASUREMENT:
      return {
        ...state,
        indicator: {
          ...state.indicator,
          measurements: [...state.indicator.measurements, payload]
        }
      };
    case EDIT_INDICATOR_MEASUREMENT:
      let updatedMeasurements = state.indicator.measurements.map(item =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        indicator: {
          ...state.indicator,
          measurements: updatedMeasurements
        }
      };

    case DELETE_INDICATOR_MEASUREMENT:
      let newList = state.indicator.measurements.filter(
        item => item.id !== payload
      );
      return {
        ...state,
        indicator: {
          ...state.indicator,
          measurements: [...newList]
        }
      };

    case SET_INDICATOR_BUDGET:
      return {
        ...state,
        indicator: {
          ...state.indicator,
          ...payload,
          logs: {
            budget: [
              {
                date: new Date(),
                amount: payload.budget,
                created_by: payload.created_by
              }
            ]
          }
        }
      };

    case SAVE_SUCCESS_INDICATOR_TO_DB:
      return {
        ...state,
        indicator: {
          ...initialState.indicator,
          loading: false,
          error: "Data saved"
        }
      };
    case SAVE_FAILED_INDICATOR_TO_DB:
      return {
        ...state,
        indicator: {
          ...state.indicator,
          loading: false,
          error: "Failed to save data"
        }
      };
    default:
      return state;
  }
}
