import React, { useContext } from "react";
import UserContext from "./UserContext";

const HomePage = () => {
  //get usercontext reference and destructuring user object from it
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>Home Page</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default HomePage;
