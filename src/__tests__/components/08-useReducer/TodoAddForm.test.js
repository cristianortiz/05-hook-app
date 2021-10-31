import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { demoTodos } from "../mockData/demoTodos";
import TodoAddForm from "../../../components/08-useReducer/TodoAddForm";

const handleAddTodo = jest.fn();
describe("Tests in <TodoAddForm />", () => {
  beforeEach(() => {
    render(<TodoAddForm handleAddTodo={handleAddTodo} />);
  });

  test("should render the component correctly the first time", () => {
    expect(screen.getByText("Add TODO")).toBeInTheDocument();
    expect(screen.getByText("Add TODO").tagName).toBe("H3");
  });
  test("should not call submit on empty form ", () => {
    const submit_button = screen.getByRole("button");
    userEvent.click(submit_button);
    expect(handleAddTodo).not.toHaveBeenCalled();
  });
  test("should submit the form with a value and call handleAddTodo ", () => {
    const input = screen.getByRole("textbox");
    const inputValue = "Learn JavaScript";
    userEvent.type(input, inputValue);
    const submit_button = screen.getByRole("button");
    userEvent.click(submit_button);
    //if the function is called with an object
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    //now if the function was called with specific data, but the id changes every time
    //so, check if is a number will do the trick
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: inputValue,
      done: false,
    });

    //reset()of the useForm hook is called at the end of handleTodoAdd check their effects
    const input2 = screen.getByRole("textbox");
    //if you comment rest() called in TodoAddForm the test will fail
    expect(input2).toHaveValue("");
  });
});
