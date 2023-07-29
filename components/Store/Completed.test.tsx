import React from "react";
import { render, screen } from "@testing-library/react";
import Completed from "./Completed";

describe("Completed Component", () => {
  test("renders correct content", () => {
    render(<Completed />);

    // Check if "Payment successful" text is present
    expect(screen.getByText("Payment successful")).toBeInTheDocument();

    // Check if "Thanks for ordering" text is present
    expect(screen.getByText("Thanks for ordering")).toBeInTheDocument();

    // Check if the image is rendered with the correct alt attribute
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.getAttribute("src")).toBe("/pictures/ygklogo.jpg");

    // Check if "Continue Shopping" link is present and has the correct href
    const continueShoppingLink = screen.getByText("Continue Shopping");
    expect(continueShoppingLink).toBeInTheDocument();
    expect(continueShoppingLink.getAttribute("href")).toBe("/store");
  });
});