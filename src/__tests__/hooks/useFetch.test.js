import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../../components/hooks/useFetch";

//this can be synchronus
describe("Tests on useFetch custom hook", () => {
  test("should return the default data in state", () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    //destructuring state object of useFetch custom hook
    const { data, loading, error } = result.current;
    //test the state default values
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });
  //this is async call to useFetch
  test("should return the API response data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    //the timeout is for the setTimeOut in useFetch
    await waitForNextUpdate({ timeout: 3000 });
    //destructuring state object of useFetch custom hook
    const { data, loading, error } = result.current;
    //test the state default values
    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  //this is async call to useFetch
  test("should handle an error in API call", async () => {
    //the url is altered intentionally
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apid/users?page=2`)
    );
    //the timeout is for the setTimeOut in useFetch
    await waitForNextUpdate({ timeout: 3000 });
    //destructuring state object of useFetch custom hook
    const { data, loading, error } = result.current;
    //test the state values in error case
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("There is an error loading data");
  });
});
