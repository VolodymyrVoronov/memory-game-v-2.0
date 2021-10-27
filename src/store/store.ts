import { configureStore } from "@reduxjs/toolkit";
import levelsReducer from "./levelsSlice/levelsSlice";
import gameReducer from "./gameSlice/gameSlice";

export const store = configureStore({
  reducer: {
    levelsReducer,
    gameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
