import { actions } from "../constants/actions";

export interface GuessState {
  guessNumber?: number;
  lastGuessedNumber?: number;
  lowerBoundNumber?: number;
  upperBoundNumber?: number;
}

const getRandomNumber = (lower: number, upper: number) => {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

export const initialGuessState: GuessState = {
  guessNumber: getRandomNumber(1, 10),
  lastGuessedNumber: undefined,
  lowerBoundNumber: 1,
  upperBoundNumber: 10,
};

const resetNumber = (payload: any) => {
  if (payload.lowerBoundNumber && payload.upperBoundNumber) {
    return getRandomNumber(payload.lowerBoundNumber, payload.upperBoundNumber);
  } else {
    return undefined;
  }
};

export const guessReducer = (state = initialGuessState, action: any) => {
  switch (action.type) {
    case actions.RESET_NUMBER:
      return {
        ...state,
        lastGuessedNumber: undefined,
        lowerBoundNumber: action.payload.lowerBoundNumber,
        upperBoundNumber: action.payload.upperBoundNumber,
        guessNumber: resetNumber(action.payload),
      };

    case actions.GUESS_NUMBER:
      return {
        ...state,
        lastGuessedNumber: action.payload,
      };

    default:
      return state;
  }
};
