import { combineReducers } from "redux";
import testReducer from "../../features/sandbox/testReducer";
import eventReducer from "../../features/events/eventReducer";

// object to combine the reducers into one reducer
const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
});

export default rootReducer;
