import { LOAD_PLANS, LOAD_PLAN_ERROR } from "../actions/types";
const initialState = {
  myPlans: {
    plans: [],
    loading: true,
    errors: ""
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PLANS:
      return {
        ...state,
        myPlans: {
          plans: payload.result,
          loading: false,
          errors: ""
        }
      };
    case LOAD_PLAN_ERROR:
      return {
        ...state,
        myPlans: {
          plans: [],
          count: 0,
          loading: false,
          errors: "Failed to load your plans"
        }
      };

    default:
      return state;
  }
}
