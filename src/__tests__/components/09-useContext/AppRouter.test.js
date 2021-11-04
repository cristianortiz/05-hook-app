import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserContext from "../../../components/09-useContext/UserContext";
import AppRouter from "../../../components/09-useContext/AppRouter";

describe("Tests in <AppRouter />", () => {
  const user = {
    name: "jon",
    email: "jon@email",
  };
  test("should render correctly", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <AppRouter />
      </UserContext.Provider>
    );
    screen.debug();
  });
});
