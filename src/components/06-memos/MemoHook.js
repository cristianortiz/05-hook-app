import React, { useMemo, useState } from "react";
import useCounter from "../hooks/useCounter";

export const MemoHook = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(1000);

  //dummy func, just for memo demonstration
  const heavyDuty = (iterations) => {
    for (let i = 0; i < iterations; i++) {
      console.log("..lopping just for fun");
    }
    return `${iterations} looping finished.!`;
  };
  //   returns a memoized results of heavy duty() every time that counter changes, then if
  //   is called with the same parameter, that recorded or cached results are returned
  //   without actually call the function
  const memoHeavyDuty = useMemo(() => heavyDuty(counter), [counter]);

  return (
    <div>
      <h2>MemoHook Example</h2>
      <h3>
        Counter : <small>{counter}</small>
      </h3>
      <hr></hr>
      <p>{memoHeavyDuty}</p>
      <button onClick={increment} className="btn btn-primary m-3">
        Increment
      </button>
      <button
        // before memoized, onClick function also trigger heavyDufty(),
        // even if it is execution has nothing to do or change in the heavyDuty parameters and their results
        // affecting app perfomance with unnecesary functions calls, but using memoized,
        // onClick  will return a previous 'recorded' or cached results of the heavyDuty()
        // if their parameters do'nt change preventing the re-render of heavyDuty() when
        // Show/Hide button is clicked
        className="btn btn-outline-primary m-3"
        onClick={() => setShow(!show)}
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
