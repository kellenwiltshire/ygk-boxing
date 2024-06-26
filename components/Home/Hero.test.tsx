import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders the hero section correctly", () => {
    render(<Hero />);

    // Check if the title is rendered correctly
    const title = screen.getByText("YGK Boxing");
    expect(title).toBeInTheDocument();

    // Check if the description is rendered correctly
    const description = screen.getByText("A community-based boxing club founded on the principles of respect, responsibility, hard work and integrity.");
    expect(description).toBeInTheDocument();

    // Check if the "Get started" button is rendered correctly
    const getStartedButton = screen.getByText("Get started");
    expect(getStartedButton).toBeInTheDocument();

    // Check if the "Learn more" link is rendered correctly
    const learnMoreLink = screen.getByText("Learn more");
    expect(learnMoreLink).toBeInTheDocument();

  });
});