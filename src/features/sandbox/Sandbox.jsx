import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment_action, decrement_action } from "./testReducer";
import { openModal } from "../../app/common/modals/modalReducer";

export default function Sandbox() {
  // allows to act upon actions on the store
  const dispatch = useDispatch();
  // this hook allows access to the redux store state
  // need test.data since we have a root reducer property as test for this data
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);
  const [target, setTarget] = useState(null);
  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        name='increment'
        onClick={(e) => {
          dispatch(increment_action(10));
          setTarget(e.target.name);
        }}
        content='Increment'
        color='green'
        loading={loading && target === "increment"}
      ></Button>
      <Button
        name='decrement'
        onClick={(e) => {
          dispatch(decrement_action(10));
          setTarget(e.target.name);
        }}
        content='Decrement'
        color='red'
        loading={loading && target === "decrement"}
      ></Button>
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        content='Open Modal'
        color='teal'
      />
    </>
  );
}
