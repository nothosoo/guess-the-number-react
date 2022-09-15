import { useState } from "react";
import { useDispatch } from "react-redux";
import GuessButton from "../components/GuessButton";
import GuessInput from "../components/GuessInput";
import { actions } from "../constants/actions";

function GuessConfigContainer() {
  const [lowerBound, setLowerBound] = useState<number>(1);
  const [upperBound, setUpperBound] = useState<number>(10);
  const dispatch = useDispatch();

  const resetGame = () => {
    dispatch({
      type: actions.RESET_NUMBER,
      payload: {
        lowerBoundNumber: lowerBound,
        upperBoundNumber: upperBound,
      },
    });
  };

  return (
    <div className="guess-config">
      <h3 className="mb-10">Game config</h3>
      <GuessInput
        label="Lower bound"
        placeholder="Enter lower bound"
        value={lowerBound}
        onChange={(el) => {
          if (el.target.value === "") {
            setLowerBound(NaN);
          } else {
            setLowerBound(parseInt(el.target.value));
          }
        }}
      />
      <GuessInput
        label="Upper bound"
        placeholder="Enter upper bound"
        value={upperBound}
        onChange={(el) => {
          if (el.target.value === "") {
            setUpperBound(NaN);
          } else {
            setUpperBound(parseInt(el.target.value));
          }
        }}
      />
      <GuessButton
        onClick={() => {
          resetGame();
        }}
        isDisabled={isNaN(lowerBound) || isNaN(upperBound)}
        text="Reset game"
      />
    </div>
  );
}

export default GuessConfigContainer;
