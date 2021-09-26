import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (submitedValues) => {
    console.log(submitedValues);
  };
  return [values, handleInputChange, handleSubmit];
};

export default useForm;
