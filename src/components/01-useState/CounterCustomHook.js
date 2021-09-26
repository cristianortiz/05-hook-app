import React from "react";
import useCounter from "../hooks/useCounter";

const CounterCustomHook = () => {
  //inport the custom hook, state and functions
  const { state, increment, decrement, reset } = useCounter(30);
  return (
    <>
      <h1>Counter With Custom Hook: {state}</h1>
      <p>This is only for spacing</p>
      <button onClick={() => increment(2)} className="btn btn-primary">
        {" "}
        + 1
      </button>
      <button onClick={() => decrement(2)} className="btn btn-secondary">
        {" "}
        - 1
      </button>
      <button onClick={() => reset()} className="btn">
        {" "}
        Reset Counter
      </button>
    </>
  );
};

export default CounterCustomHook;
