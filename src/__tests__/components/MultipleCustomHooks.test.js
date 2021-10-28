import React from "react";
import { render, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../components/03-samples/MultipleCustomHooks";
import "@testing-library/jest-dom/extend-expect";
import useFetch from "../../components/hooks/useFetch";
import useCounter from "../../components/hooks/useCounter";

jest.mock("../../components/hooks/useFetch");
jest.mock("../../components/hooks/useCounter");

describe("Test in <MultipleCustomHooks />", () => {
  //mock the useCounter
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 1,
    });
  });
  test("should render the component correctly the first time", () => {
    //simulates the default data of useFetch custom hook
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    render(<MultipleCustomHooks />);
    //the text exists in the document
    expect(screen.getByText("Breaking Bad Quotes")).toBeInTheDocument();
    //the app title must be inside a h1 tag
    expect(screen.getByText("Breaking Bad Quotes").tagName).toBe("H1");
  });
  test("should render useFetch response data correctly", () => {
    //simulates the response data of useFetch custom hook when is called
    useFetch.mockReturnValue({
      data: [
        {
          author: "Goku",
          quote: "hello world!!",
        },
      ],
      loading: false,
      error: null,
    });
    //render the component again and debug the screen to check if the userFetch mock is working
    render(<MultipleCustomHooks />);
    expect(screen.getByText("hello world!!").tagName).toBe("P");
    expect(screen.getByText("Goku").tagName).toBe("FOOTER");

    screen.debug();
  });
});
