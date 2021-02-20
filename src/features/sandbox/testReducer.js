import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../app/async/asyncReducer";
import { delay } from "../../app/common/util/util";
import { toast } from "react-toastify";

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// action creators
// takes in the payload
export function increment_action(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    // actual code to execute
    try {
      // delay allows a delay on store actions
      await delay(1000);
      dispatch({ type: INCREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
}

export function decrement_action(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    // actual code to execute
    try {
      await delay(1000);
      throw "oops";
      dispatch({ type: DECREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast(error);
    }
  };
}

const initialState = {
  data: 42,
};

// reducer function to update store
// theyc can take the store inital state, the action type to perform on the store, then a payload
// payload can be some data that we want to do something with with out store
export default function testReducer(state = initialState, { type, payload }) {
  // do 'action' on the store data
  switch (type) {
    case INCREMENT_COUNTER:
      return {
        ...state, // return original sate
        data: state.data + payload, // do the action upon the state and set it to data which is a property of the store
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - payload,
      };
    default:
      return state;
  }
}
