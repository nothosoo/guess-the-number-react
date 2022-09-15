import { useSelector } from "react-redux";

function GuessHint() {
  const lastGuessedNumber = useSelector(
    (state: any) => state.guess.lastGuessedNumber
  );
  const guessNumber = useSelector((state: any) => state.guess.guessNumber);
  if (lastGuessedNumber !== undefined) {
    return (
      <p title="result">
        {lastGuessedNumber > guessNumber
          ? "Nope. Lower"
          : lastGuessedNumber < guessNumber
          ? "Nope. Higher"
          : lastGuessedNumber == guessNumber
          ? "You got it!"
          : ""}
      </p>
    );
  } else {
    return null;
  }
}

export default GuessHint;
