import { render, screen } from "@testing-library/react";
import GuessButton from "./GuessButton";

test("tests button", () => {
  render(
    <GuessButton
      onClick={() => {}}
      text="Text to be tested"
      isDisabled={true}
    />
  );

  const button = screen.getByText("Text to be tested");
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("disabled");
});
