import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { demoTodos } from "../mockData/demoTodos";
import TodoList from "../../../components/08-useReducer/TodoList";
//import TodoListItem from "../../../components/08-useReducer/TodoListItem";

describe("Test en <TodoList />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  test("should render the component correctly", () => {
    render(
      <TodoList
        todos={demoTodos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    //TodoList show all the todos
    expect(screen.getByText("1. Learn React")).toBeInTheDocument();
    expect(screen.getByText("2. Learn Go concurrency")).toBeInTheDocument();
    screen.debug();
  });

  //   test("TodoList should show every todos", () => {
  //     render(
  //       <TodoList
  //         todos={demoTodos}
  //         handleDelete={handleDelete}
  //         handleToggle={handleToggle}
  //       />
  //     );
  //     //TodoList show all the todos
  //     expect(screen.getByText("1. Learn React")).toBeInTheDocument();
  //     expect(screen.getByText("2. Learn Go concurrency")).toBeInTheDocument();
  //     screen.debug();
  //   });
});
