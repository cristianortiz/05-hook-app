import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserContext from "../../../components/09-useContext/UserContext";
import Login from "../../../components/09-useContext/Login";
import userEvent from "@testing-library/user-event";

describe("Tests in <Login />", () => {
  const setUser = jest.fn();

  test("should render the component", () => {
    render(
      <UserContext.Provider value={{ setUser }}>
        <Login />
      </UserContext.Provider>
    );
    expect(screen.getByText("Login Page")).toBeInTheDocument();
    expect(screen.getByText("Login Page").tagName).toBe("H1");
  });

  test("should call setUSer with the right arguments ", () => {
    render(
      <UserContext.Provider value={{ setUser }}>
        <Login />
      </UserContext.Provider>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(setUser).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: "Juan",
    });
    screen.debug();
  });
});
