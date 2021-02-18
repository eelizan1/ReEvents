const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// action creators
// takes in the payload
export function increment_action(amount) {
  return {
    type: INCREMENT_COUNTER,
    payload: amount,
  };
}

export function decrement_action(amount) {
  return {
    type: DECREMENT_COUNTER,
    payload: amount,
  };
}

const initialState = {
  data: 42,
};

// reducer function to update store
// theyc can take the store inital state, the action type to perform on the store, then a payload
// payload can be some data that we want to do something with with out store
export default function testReducer(state = initialState, action) {
  // do 'action' on the store data
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state, // return original sate
        data: state.data + action.payload, // do the action upon the state and set it to data which is a property of the store
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
}
