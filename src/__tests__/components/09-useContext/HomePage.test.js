import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "../../../components/09-useContext/HomePage";
import UserContext from "../../../components/09-useContext/UserContext";

describe("Tests in <HomePage />", () => {
  const user = {
    name: "jon",
    email: "jon@email",
  };

  test("should render the component", () => {
    //the entire component html and data is rendered check it with screen.debug()
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();
  });
});
