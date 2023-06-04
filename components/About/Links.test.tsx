import React from "react";
import { render, screen } from "@testing-library/react";
import Links from "./Links";
import { ILink } from "../../utils/types/AboutTypes";

describe("Links component", () => {
  test("renders all links correctly", () => {
    render(<Links />);

    const linkElements: Array<HTMLLinkElement> = screen.getAllByRole("link");
    expect(linkElements.length).toBe(4);

    const expectedLinks: Array<ILink> = [
      {
        text: "How to become an amateur boxer with Boxing Ontario",
        href: "https://boxingontario.com/athletes/how-to-become-a-boxer/"
      },
      {
        text: "Boxing Ontario's Policy and Constitution",
        href: "https://boxingontario.com/about-us/policy-constitution/"
      },
      {
        text: "Boxing Ontario's Club Safety and Security",
        href: "https://boxingontario.com/clubs/safety-and-security/"
      },
      {
        text: "Liability Waiver for YGK Boxing",
        href: "http://localhost/#"
      }
    ];

    linkElements.forEach((linkElement: HTMLLinkElement, index: number) => {
      expect(linkElement.href).toBe(expectedLinks[index].href);
      expect(linkElement.textContent).toBe(expectedLinks[index].text);
    });

    const waiverTextElement = screen.getByText(
      "Please bring the Liability Waiver signed to your first Workout at YGK Boxing"
    );
    expect(waiverTextElement).toBeInTheDocument();
  });
});