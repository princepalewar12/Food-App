// import {  screen } from "react-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {

  // beforeAll(()=>{
  //   console.log("Before All");
  // })
  // beforeEach(()=>{
  //   console.log("Before Each");
  // })

  // afterAll(()=>{
  //   console.log("After All");
  // })
  // afterEach(()=>{
  //   console.log("After Each");
  // })
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside button component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //   Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    //   Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
