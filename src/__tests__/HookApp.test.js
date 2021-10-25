import React from "react";
import { render, screen } from "@testing-library/react";
import HookApp from "../HookApp";
import "@testing-library/jest-dom/extend-expect";

describe("Tests in <HookApp />", () => {
  test("Must show component correctly the first time", () => {
    render(<HookApp />);

    //the text exists in the document
    expect(screen.getByText("Home Page")).toBeInTheDocument();
    //the app title must be inside a h2 tag
    expect(screen.getByText("Home Page").tagName).toBe("H1");
  });
});
