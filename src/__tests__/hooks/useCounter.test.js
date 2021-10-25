import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../../components/hooks/useCounter";

describe("Test of useCounter custom hook", () => {
  test("should return default values and functions", () => {
    const { result } = renderHook(() => useCounter());
    //show the hook default values and functions
    //console.log(result.current);
    //test the default value of counter state
    expect(result.current.counter).toBe(10);
    //test if increment,decrement and rest are  functions
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("should return new values for counter state object", () => {
    const { result } = renderHook(() => useCounter(100));

    //test the new value value of counter state
    expect(result.current.counter).toBe(100);
  });

  test("increment() should increment counter  in +1 unit", () => {
    const { result } = renderHook(() => useCounter(100));
    //destructuring increment function
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    //test if counter has been incremented
    expect(counter).toBe(101);
  });

  test("decrement() should decrement counter  in -1 unit", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test("reset() should restore counter value to 100 ", () => {
    const { result } = renderHook(() => useCounter(100));

    const { reset, decrement } = result.current;
    act(() => {
      //for change the value and test if reset restore the initialized value
      decrement();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
