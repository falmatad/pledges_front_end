import { LOAD_OUTPUTS, LOAD_OUTPUT_ERROR } from "../actions/types";
const initialState = {
  myOutputs: {
    outputs: [],
    loading: true,
    errors: ""
  },
  newOutput: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_OUTPUTS:
      return {
        ...state,
        myOutputs: {
          outputs: payload.result,
          loading: false,
          errors: ""
        }
      };
    case LOAD_OUTPUT_ERROR:
      return {
        ...state,
        myOutputs: {
          outputs: [],
          loading: false,
          errors: "Failed to load your plans"
        }
      };

    default:
      return state;
  }
}
