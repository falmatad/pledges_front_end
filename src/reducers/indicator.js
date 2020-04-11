import {
  LOAD_INDICATORS,
  LOAD_INDICTORS_ERROR,
  UPDATE_NEW_INDICATOR,
  DELETE_NEW_INDICATOR
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
    indicator_name: "",
    indicator_description: "",
    source_of_data: [],
    measurements: [],
    budget: [],
    progress_type: "",
    logs: []
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
        }
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

    default:
      return state;
  }
}
