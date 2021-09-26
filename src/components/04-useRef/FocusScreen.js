import React, { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    //moves the focus to the input field and select any text in it
    //document.querySelector("input").select();

    //now replicates the previous line with the ref
    inputRef.current.select();
    //to see the input reference in consol
    console.log(inputRef);
  };
  return (
    <div style={{ padding: 50 }}>
      <h1>Focus Screen</h1>
      <hr></hr>
      <input
        ref={inputRef}
        className="form-control"
        placeholder="your name"
      ></input>
      <button className="btn btn-outline-primary mt-3" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
