import React, { useState } from "react";

const CounterApp = () => {
  //useState
  const [counter, setCounter] = useState({
    c1: 10,
    c2: 20,
    c3: 32,
    c4: 44,
  });
  const { c1, c2 } = counter;
  console.log(counter);
  return (
    <>
      <h1>Counter1 : {c1}</h1>
      <h1>Counter2 : {c2}</h1>
      <p>This is only for space</p>
      <button
        onClick={() => {
          setCounter({
            //copy of actual state
            ...counter,
            c1: c1 + 1,
          });
        }}
        className="btn btn-primary"
      >
        {" "}
        +1
      </button>
    </>
  );
};

export default CounterApp;
