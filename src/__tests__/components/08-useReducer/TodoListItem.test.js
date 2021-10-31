import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../mockData/demoTodos";

describe("test in <TodoListItem />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  test("should render the component correctly", () => {
    render(
      <TodoListItem
        todo={demoTodos[0]}
        i={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    expect(screen.getByText("1. Learn React")).toBeInTheDocument();
  });

  test("should call handleDelete function", () => {
    render(
      <TodoListItem
        todo={demoTodos[0]}
        i={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  test("should call handleToggle function", () => {
    render(
      <TodoListItem
        todo={demoTodos[0]}
        i={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    //get the text inside the paragrahp wich is clickeable
    const par = screen.getByText("1. Learn React");
    userEvent.click(par);
    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  test("should show the change of 'done' Todo property in class 'complete'", () => {
    const todo = demoTodos[0];
    todo.done = true;
    render(<TodoListItem todo={todo} i={0} />);
    expect(screen.getByText("1. Learn React")).toHaveClass("complete");
    screen.debug();
  });
});
