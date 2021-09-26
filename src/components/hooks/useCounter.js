import { useState } from "react";

//custom hook to implements and abstracting the counter funcionality
const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(counter);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
