import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../../components/hooks/useForm";

describe("Test in useForm custom hook", () => {
  const initialForm = {
    name: "Juanito",
    email: "juan@email.com",
  };
  test("should return a default form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    //destructuting as array check the return section in useForm
    const [values, handleInputChange, reset] = result.current;
    expect(values.name).toEqual("Juanito");
    expect(values.email).toEqual("juan@email.com");
    //the lines before also can be tested like this
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should change the name value of the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    const newValues = {
      name: "goku",
    };
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: newValues.name,
        },
      });
    });
    const [values] = result.current;
    console.log(values);
    //test if values.name has change
    expect(values.name).toEqual(newValues.name);
    //another way, test if the other properties in values has not change
    expect(values).toEqual({ ...values, name: newValues.name });
  });

  test("reset() should reset the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    const newValues = {
      name: "goku",
    };
    //to test reset() call it in act()
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: newValues.name,
        },
      });
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
