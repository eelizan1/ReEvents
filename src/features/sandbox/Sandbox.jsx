import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment_action, decrement_action } from "./testReducer";

export default function Sandbox() {
  // allows to act upon actions on the store
  const dispatch = useDispatch();
  // this hook allows access to the redux store state
  // need test.data since we have a root reducer property as test for this data
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment_action(10))}
        content='Increment'
        color='green'
      ></Button>
      <Button
        onClick={() => dispatch(decrement_action(5))}
        content='Decrement'
        color='red'
      ></Button>
    </>
  );
}
