import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { demoTodos } from "../mockData/demoTodos";
import TodoApp from "../../../components/08-useReducer/TodoApp";

describe("Tests in <TodoApp />", () => {
  Storage.prototype.setItem = jest.fn(() => {});
  test("should render correctly the first time", () => {
    render(<TodoApp />);
    screen.debug();
    //just for check use the default value of todos,
    expect(screen.getByText("TodoApp (0)")).toBeInTheDocument();
    //also a REGEXP can be used to avoid the variable value of todos.lenght
    expect(screen.getByText(/TodoApp/)).toBeInTheDocument();
  });
  //I'm not been able to replicate this test in Fernando's video
  test("should add a TODO", () => {
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});
