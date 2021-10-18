import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./styleTodo.css";

const TodoApp = () => {
  //first we are going to use a simple version of the useReducer, initial state obj and reducer function
  const initialState = [
    {
      id: new Date().getTime(),
      desc: "Aprender React Hooks",
      done: false,
    },
  ];
  const [todos] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {(i = 1)}. {todo.desc}
                </p>
                <button className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h3>Add TODO</h3>
          <hr />
          <form>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="aprender..."
            />
            <div class="d-grid gap-2">
              <button class="btn btn-outline-primary mt-2" type="button">
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
