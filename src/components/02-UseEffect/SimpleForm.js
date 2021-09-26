import React, { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;
  //with no dependencys the useEffect will trigger always if the state changes
  useEffect(() => {
    console.log("hello...");
  }, []); //with an empty dependency the useEffect will trigger only once

  //this only executes if formState as their dependecy has change
  useEffect(() => {
    console.log("formState has change");
  }, [formState]);

  //this only executes if email as their dependecy has change
  useEffect(() => {
    console.log("the email field has change");
  }, [email]);

  //to handle the changae in inpur form field
  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
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

      {
        //conditionally component load
        name === "123" && <Message />
      }
    </>
  );
};

export default SimpleForm;
