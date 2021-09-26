import { useEffect, useState } from "react";
//custom hook to request the API
const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    //for showing 'Loading..' before a new quote is loaded from api
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);
  return state;
};

export default useFetch;
