import { createSlice } from "@reduxjs/toolkit";

interface LevelsTitleLetters {
  id: number;
  letter: string;
  initY: number;
  endY: number;
  duration: number;
}

interface Level {
  id: number;
  text: string;
  difficultyLevel: number;
  timeUntilShuffle: number;
  initPosition: number;
  endPosition: number;
  duration: number;
  color: string;
}

interface Levels {
  levelsTitleLetters: LevelsTitleLetters[];
  levels: Level[];
}

const initialState: Levels = {
  levelsTitleLetters: [
    { id: 1, letter: "M", initY: -150, endY: 0, duration: 1 },
    { id: 2, letter: "e", initY: -155, endY: 0, duration: 1.1 },
    { id: 3, letter: "m", initY: -160, endY: 0, duration: 1.2 },
    { id: 4, letter: "o", initY: -165, endY: 0, duration: 1.3 },
    { id: 5, letter: "r", initY: -170, endY: 0, duration: 1.4 },
    { id: 6, letter: "y", initY: -175, endY: 0, duration: 1.5 },
    { id: 7, letter: "", initY: -180, endY: 0, duration: 1.6 },
    { id: 8, letter: "G", initY: -185, endY: 0, duration: 1.7 },
    { id: 9, letter: "a", initY: -190, endY: 0, duration: 1.8 },
    { id: 10, letter: "m", initY: -195, endY: 0, duration: 1.9 },
    { id: 11, letter: "e", initY: -200, endY: 0, duration: 2 },
  ],
  levels: [
    {
      id: 1,
      text: "Easy ",
      difficultyLevel: 1,
      timeUntilShuffle: 3,
      initPosition: 250,
      endPosition: 0,
      duration: 2,
      color: "#96c351",
    },
    {
      id: 2,
      text: "Medium",
      difficultyLevel: 2,
      timeUntilShuffle: 2,
      initPosition: 350,
      endPosition: 0,
      duration: 2,
      color: "cornflowerblue",
    },
    {
      id: 3,
      text: "Hard",
      difficultyLevel: 3,
      timeUntilShuffle: 1,
      initPosition: 450,
      endPosition: 0,
      duration: 2,
      color: "#b74a4a",
    },
  ],
};

export const levelsSlice = createSlice({
  name: "levels",
  initialState,
  reducers: {},
});

export default levelsSlice.reducer;
