import { combineReducers } from "redux";
import alert from "./alerts";
import auth from "./auth";
import confirm from "./confirm";
import plans from "./plan";
import output from "./output";
export default combineReducers({
  auth,
  alert,
  confirm,
  plans,
  output
});
