import React, { useEffect, useState } from "react";

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  //destructuring state data
  const { x, y } = coords;
  //implementing cleanup function for useEffect hook
  useEffect(() => {
    //callback func to to catpure  x and y position en every mouse move
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };
    window.addEventListener("mouseover", mouseMove);
    return () => {
      //remmove the callback function reference
      window.removeEventListener("mouseover", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Your Great!</h3>
      <p>
        x: {x} ; y: {y}
      </p>
    </div>
  );
};

export default Message;
