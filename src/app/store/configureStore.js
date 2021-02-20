import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export function configureStore() {
  // redux thunk acts as middleware that allows us to the the dispatch function inside our action creators
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
