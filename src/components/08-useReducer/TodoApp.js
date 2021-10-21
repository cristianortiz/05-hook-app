import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

import "./styleTodo.css";
import TodoList from "./TodoList";
import TodoAddForm from "./TodoAddForm";

//this  function defines the initialState of the reducer
const init = () => {
  //get the todos items, and if LocalStorage is is empty return an empty array
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  //the reducer keep the reference of TODO state and render again when action modify this state
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //effect to write in localStorage when the TODO list is updated
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    //console.log("this is ", id);
    //delete action
    const action = {
      type: "delete",
      payload: id,
    };
    //call de dispatch to send action to reducer
    dispatch(action);
  };
  const handleToggle = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };
  const handleAddTodo = (newTodo) => {
    //call de dispatch to send action to reducer
    dispatch({ type: "add", payload: newTodo });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAddForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
