import React from "react";
import useForm from "../hooks/useForm";

const TodoAddForm = ({ handleAddTodo }) => {
  //using useForm custom hook to state the form input value, destructuring the only value of this form
  //from original formValues state object in useForm
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
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
    //add the new to using function referenced from TodoApp />
    handleAddTodo(newTodo);
    //reset the form using function from useForm hook
    reset();
  };

  return (
    <>
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
    </>
  );
};

export default TodoAddForm;
