import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card caption="Funny Picture" totalNum="3" />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card caption="Sad" totalNum="5" />);
  expect(asFragment()).toMatchSnapshot();
});
