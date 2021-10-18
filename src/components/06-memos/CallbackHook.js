import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  ///useCallback sends a function to a child component in similar way that useMemo
  //but is useful to send the memoized function as parameter to a child component
  //in this case memo does not work because the increment() call from ShowIncrement comp
  // executes the function in memory, so it will be rendered anyway, useCallback fix this
  // and allow to send memoized functions as parameters
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h2>useCallback Hook Example: {counter}</h2>
      <hr></hr>
      {/* the function increment() is sended it as argument */}
      <ShowIncrement increment={increment} />
    </div>
  );
};
//another use case is when a useEffect has a function has dependency, in that case
//send that function as argument with useCallback from a parent
