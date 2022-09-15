import GuessConfigContainer from "../containers/GuessConfigContainer";
import GuessFormContainer from "../containers/GuessFormContainer";

function GuessTheNumberScreen() {
  return (
    <div className="guess-screen">
      <h2 className="mb-20">Guess the Number</h2>
      <GuessFormContainer />
      <GuessConfigContainer />
    </div>
  );
}

export default GuessTheNumberScreen;
