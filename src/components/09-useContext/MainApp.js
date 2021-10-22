import React from "react";
import AppRouter from "./AppRouter";
import UserContext from "./UserContext";

const MainApp = () => {
  const user = { id: 123, name: "joni" };
  return (
    <div>
      <UserContext.Provider value={user}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
};

export default MainApp;
