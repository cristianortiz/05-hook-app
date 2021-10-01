import React from "react";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const MultipleCustomHooks = () => {
  //the value o counter will be the 'id'parameter for API url
  const { counter, increment } = useCounter(1);
  //api retrieved data requested by custom hook, remember, a change in url
  //will trigger the second useEffect in useFetch custom hook and call the API again
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  //!!data && data[0]--> if data has any value return the first one
  //if data is empty loading is still true, and author and data are undefined
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading..</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer style={{ margin: 10 }} className="blockquote-footer">
            {author}
          </footer>
        </blockquote>
      )}

      <button onClick={increment} className="btn btn-primary">
        Next Quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
