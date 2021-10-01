import { useEffect, useRef, useState } from "react";
//custom hook to request the API
const useFetch = (url) => {
  // keeps the reference to this custom hook when the component who is call it is still mounted  const isMounted= useRef(true)
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  //this effects is triggered when this component load the first time
  useEffect(() => {
    //when this component will be unMounted change the isMounted bool to false
    //and prevent to call and render the component inside another unmounted component
    return () => {
      //keep the reference when the component is umounted
      isMounted.current = false;
    };
  }, []);
  //this other effect triggers when url is changed in the component wich call useFetch
  useEffect(() => {
    //for showing 'Loading..' before a new quote is loaded from api
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //use this timeOut to check if the component is correctly unMounted using useRef hook
        //should not be  any error in console
        setTimeout(() => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data,
            });
          } else {
            console.log(
              "setState is not called, component correctly unMounted"
            );
          }
        }, 1000);
      });
  }, [url]);
  return state;
};

export default useFetch;
