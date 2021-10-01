import React, { useState } from "react";
import MultipleCustomHooks from "../03-samples/MultipleCustomHooks";

const RealRefExample = () => {
  //state to conditionally render a component
  const [show, setShow] = useState();

  return (
    <div style={{ padding: 50 }}>
      <h2>Real useRef Example</h2>

      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-outline-primary mt-3"
        onClick={() => setShow(!show)}
      >
        Show / Hide
      </button>
    </div>
  );
};

export default RealRefExample;
