import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import { Small } from "./Small";
export const Memorize = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(10);

  return (
    <div>
      <h1>Memorize example</h1>
      <hr></hr>
      <h2>
        Counter : <Small value={counter} />
      </h2>
      <button onClick={increment} className="btn btn-primary m-3">
        Increment
      </button>
      <button
        className="btn btn-outline-primary m-3"
        onClick={() => setShow(!show)}
      >
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
