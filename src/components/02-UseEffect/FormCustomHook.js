import React from "react";
import useForm from "../hooks/useForm";

const FormCustomHook = () => {
  //calling the custom hook state and functions
  const [formState, handleInputChange, handleSubmit] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formState;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Form with Custom Hook</h1>
      <p>This is only for spacing</p>
      <div className="form-group">
        <input
          type="type"
          name="name"
          className="form-control"
          placeholder="your name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="type"
          name="email"
          className="form-control"
          placeholder="your @mail"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="use a secure password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default FormCustomHook;
