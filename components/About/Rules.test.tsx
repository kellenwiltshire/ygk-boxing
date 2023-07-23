import React from "react";
import { render, screen } from "@testing-library/react";
import Rules from "./Rules";

describe("Rules component", () => {
  test("renders all rules correctly", () => {
    render(<Rules />);

    const ruleElements = screen.getAllByRole("listitem");
    expect(ruleElements.length).toBe(16);

    const expectedRules = [
      "No BULLYING of any kind (ZERO TOLERANCE).",
      "Don't be late for class.",
      "No outside shoes worn on workout floor.",
      "Membership dues must be paid on time.",
      "Everyone must sign a liability waiver if participating in group exercise, workouts, and sparring.",
      "Absolutely no swearing, abusive language, or negativity",
      "Work hard to the best of your ability and if you can't do something based on limitation or injury please let the coaches know prior to the workout.",
      "Respect the coaches, club and other members because everyone is here for a different reason, please take your training seriously!",
      "We work, train and fight with a team mentality and no one is in it for themselves.",
      "No gum chewing.",
      "No jewellery to be worn that may cause injury to other members.",
      "Safely put away the equipment after use.",
      "No mobile phones or camera devices to be used to be used during the workout unless given permission.",
      "Sparring requires proper fitting shoes, headgear, mouth guard, 16 oz gloves and shirt, jock for men, signed liability waiver, and approval from coaches (no exceptions).",
      "Absolutely NO alcohol, drugs or steroids of any kind permitted on the premises. Any known activity of the following will be grounds for termination of your membership.",
      "HAVE FUN, STAY SAFE!"
    ];

    ruleElements.forEach((ruleElement, index) => {
      expect(ruleElement.textContent).toBe(expectedRules[index]);
    });

    const additionalRuleTextElement = screen.getByText(
      "Boxing is an art of self defence and is not to be used to street fight and intimidate. " +
      "If any member of YGK Boxing is found using boxing skills to street fight or intimidate " +
      "they will not be permitted to use the club and any boxing license will be withdrawn. No exceptions."
    );
    expect(additionalRuleTextElement).toBeInTheDocument();
  });
});