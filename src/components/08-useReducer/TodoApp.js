import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import useForm from "../hooks/useForm";
import "./styleTodo.css";
import TodoList from "./TodoList";

//this  function defines the initialState of the reducer
const init = () => {
  //get the todos items, and if is empty return an empty array
  return JSON.parse(localStorage.getItem("todos")) || [];
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: "Aprender React Hooks",
  //     done: false,
  //   },
  // ];
};

const TodoApp = () => {
  //the reducer keep the reference of TODO state and render again when action modify this state
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //using useForm custom hook to state the form input value, destructuring the only value of this form
  //from original formValues state object in useForm
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

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
  //function to process form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    //if input is empty
    if (description.trim().length <= 1) {
      return;
    }
    //create a new todo
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    //define the action
    const action = {
      type: "add",
      payload: newTodo,
    };
    //call de dispatch to send action to reducer
    dispatch(action);
    //reset the form usgina function from useForm hook
    reset();
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
          <h3>Add TODO</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="aprender..."
              value={description}
              onChange={handleInputChange}
            />
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary mt-2" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
