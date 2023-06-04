import React from "react";
import { render } from "@testing-library/react";
import MapComponent from "./MapComponent";

describe("MapComponent", () => {
  test("renders map with marker correctly", () => {
    render(<MapComponent />);
  });
});