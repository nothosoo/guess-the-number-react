import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GuessConfigContainer from "../containers/GuessConfigContainer";
import store from "../store";
import GuessTheNumberScreen from "./GuessTheNumber";

test("tests button", () => {
  const { container, debug } = render(
    <Provider store={store}>
      <GuessTheNumberScreen />
    </Provider>
  );

  const el = container.querySelector(".guess-config");

  expect(el).toBeInTheDocument();

  const lowerBoundInput = el?.querySelector(
    "input[placeholder='Enter lower bound']"
  );
  const upperBoundInput = el?.querySelector(
    "input[placeholder='Enter upper bound']"
  );

  fireEvent.change(lowerBoundInput!, { target: { value: "1" } });
  fireEvent.change(upperBoundInput!, { target: { value: "100" } });

  const button = screen.getByText("Reset game");

  fireEvent.click(button);

  const guide = screen.getByTitle("guide");
  const lastGuess = screen.getByTitle("last-guess");
  expect(guide).toBeInTheDocument();
  expect(guide).toHaveTextContent("Guess the number between 1 and 100");
  expect(lastGuess).toBeInTheDocument();
  expect(lastGuess).toHaveTextContent("Last guess:");

  let found = false;
  for (let i = 0; i < 101; i++) {
    const guessInput = screen.getByPlaceholderText("Enter your guess");
    fireEvent.change(guessInput, { target: { value: i } });
    const guessButton = screen.getByText("Make a Guess");
    fireEvent.click(guessButton);
    const result = screen.getByTitle("result");
    if (result.innerHTML === "You got it!") {
      found = true;
      break;
    }
  }
  expect(found).toBe(true);
});
