import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("counter starts at 0", () => {
  render(<App />);
  // screen object 이용해서 원하는 element 에 접근 ( id 통해 접근 )
  const counterElement = Number(screen.getByTestId("counter").textContent);
  // expect(counterElement.textContent).toBe(0);
  expect(counterElement).toBe(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const minusElement = screen.getByTestId("minus-button");
  expect(minusElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const plusElement = screen.getByTestId("plus-button");
  expect(plusElement).toHaveTextContent("+");
});

test("when the plus button is pressed, counter have to change +1", () => {
  render(<App />);
  const plusElement = screen.getByTestId("plus-button");
  fireEvent.click(plusElement);
  const counterElement = Number(screen.getByTestId("counter").textContent);
  expect(counterElement).toBe(1);
});

test("when the minus button is pressed, counter have to change -1", () => {
  render(<App />);
  const minusElement = screen.getByTestId("minus-button");
  fireEvent.click(minusElement);
  const counterElement = Number(screen.getByTestId("counter").textContent);
  expect(counterElement).toBe(-1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const onoffElement = screen.getByTestId("onoff-button");
  expect(onoffElement).toHaveStyle({ backgroundColor: "blue" });
});

test("prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onoffElement = screen.getByTestId("onoff-button");
  fireEvent.click(onoffElement);
  const plusElement = screen.getByTestId("plus-button");
  expect(plusElement).toBeDisabled();
});
