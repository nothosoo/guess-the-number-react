import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GuessButton from "../components/GuessButton";
import GuessHint from "../components/GuessHint";
import GuessInput from "../components/GuessInput";
import { actions } from "../constants/actions";

function GuessFormContainer() {
  const lastGuessedNumber = useSelector(
    (state: any) => state.guess.lastGuessedNumber
  );
  const lowerBoundNumber = useSelector(
    (state: any) => state.guess.lowerBoundNumber
  );
  const upperBoundNumber = useSelector(
    (state: any) => state.guess.upperBoundNumber
  );
  const dispatch = useDispatch();
  const [guessNumber, setGuessNumber] = useState<number>(NaN);

  const makeGuess = () => {
    dispatch({
      type: actions.GUESS_NUMBER,
      payload: guessNumber,
    });
  };

  return (
    <div className="guess-form mb-20">
      <p title="guide">
        Guess the number between {lowerBoundNumber} and {upperBoundNumber}
      </p>
      <p title="last-guess">Last guess: {lastGuessedNumber}</p>
      <GuessHint />
      <GuessInput
        label="Guess:"
        placeholder="Enter your guess"
        value={guessNumber}
        onChange={(el) => {
          setGuessNumber(parseInt(el.target.value));
        }}
      />
      <GuessButton
        onClick={() => {
          makeGuess();
        }}
        isDisabled={isNaN(guessNumber)}
        text="Make a Guess"
      />
    </div>
  );
}

export default GuessFormContainer;
