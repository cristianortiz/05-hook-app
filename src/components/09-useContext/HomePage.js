import React, { useContext } from "react";
import UserContext from "./UserContext";

const HomePage = () => {
  const userFromContext = useContext(UserContext);
  console.log(userFromContext);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
