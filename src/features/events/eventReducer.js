import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
} from "./eventConstants";

const initialState = {
  events: [],
};

export default function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      };
    case UPDATE_EVENT:
      console.log("before: " + JSON.stringify(state.events));
      const obj = {
        ...state,
        events: [
          ...state.events.filter((evt) => evt.id !== payload.id),
          payload,
        ],
      };

      console.log("After: " + JSON.stringify(obj.events));
      return obj;
    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((evt) => evt.id !== payload)],
      };
    case FETCH_EVENTS:
      return {
        ...state,
        events: payload,
      };
    default:
      return state;
  }
}
