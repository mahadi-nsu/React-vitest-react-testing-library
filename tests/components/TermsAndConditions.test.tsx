import { fireEvent, render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  it("should render terms and conditions", () => {
    render(<TermsAndConditions />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    // console.log("heading", heading);
    expect(heading).toHaveTextContent(/terms & conditions/i);
  });

  it("should render checkbox", () => {
    render(<TermsAndConditions />);
    const checkbox = screen.getByRole("checkbox");
    console.log("checkbox", checkbox);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("should render submit button", () => {
    render(<TermsAndConditions />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should enable the submit button when checkbox is checked", async () => {
    const user = userEvent.setup();

    render(<TermsAndConditions />);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).not.toBeDisabled();

    // checkbox.click();
    // expect(checkbox).toBeChecked();
    // expect(button).not.toBeDisabled();

    // fireEvent.click(checkbox);
    // expect(checkbox).toBeChecked();
    // expect(button).not.toBeDisabled();
  });
});
