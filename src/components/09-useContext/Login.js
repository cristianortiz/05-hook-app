import React, { useContext } from "react";
import UserContext from "./UserContext";

const Login = () => {
  //get userContext reference
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Login Page</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 123, name: "Juan" })}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
