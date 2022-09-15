import { configureStore } from "@reduxjs/toolkit";
import { guessReducer } from "./guessReducer";

export default configureStore({
  reducer: {
    guess: guessReducer,
  },
});
