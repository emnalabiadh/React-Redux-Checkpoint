import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { increment, decrement } from "../../Redux/Actions/Conter";

const Counter = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      {/* <Button variant="info" onClick={() => props.increment(5)}>Increment</Button> */}
      {/* <span className="counter">{props.counter}</span> */}
      {/* <Button variant="info" onClick={() => props.decrement(5)}>Decrement</Button> */}

      {/* With HOOKS */}
      <Button variant="info" onClick={() => dispatch(increment())}>
        +
      </Button>
      <span className="counter">{counter}0</span>
      <Button variant="info" onClick={() => dispatch(decrement())}>
        -
      </Button>
    </div>
  );
};

export default Counter;
