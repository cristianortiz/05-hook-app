import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import RealRefExample from "../../components/04-useRef/RealRefExample";

beforeEach(() => {
  render(<RealRefExample />);
});
describe("Test in <RealExampleRef /> component", () => {
  test("should render de comp correctly", () => {
    expect(screen.getByText("Real useRef Example")).toBeInTheDocument();
    //screen.debug();
  });

  test("should render <MultipleCustomHook /> component", () => {
    const button = screen.getByRole("button");
    userEvent.click(button);
    //to make it simple just testing if the h2 title og the <MultipleCustomHooks /> is loaded
    //after the click of show button
    expect(screen.getByText("Breaking Bad Quotes")).toBeInTheDocument();
    screen.debug();
  });
});
