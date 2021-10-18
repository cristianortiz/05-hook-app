import React from "react";
export const ShowIncrement = React.memo(({ increment }) => {
  console.log("I was called and render again");

  return (
    <div>
      <button
        onClick={() => {
          increment(5);
        }}
        className="btn btn-primary m-3"
      >
        Increment
      </button>
    </div>
  );
});
