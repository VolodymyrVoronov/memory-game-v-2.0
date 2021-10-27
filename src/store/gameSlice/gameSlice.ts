import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uid from "uid2";

import getRandomColor from "../../utils/getRandomColor";
import getRandomNumberMaxRange from "../../utils/getRandomNumberMaxRange";

interface Card {
  id: string;
  imageNumber: number;
  group: number;
  correct: boolean;
  initPosition: number;
  endPosition: number;
  duration: number;
  clicked: boolean;
  backGroundColor: string;
}

interface Game {
  gameLevel: number;
  shuffledCards: Card[];
  shuffling: boolean;
  groups: number[];
}

const initialState: Game = {
  gameLevel: 0,
  shuffledCards: [],
  shuffling: false,
  groups: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameLevel(state, action: PayloadAction<number>) {
      return {
        ...state,
        gameLevel: action.payload,
      };
    },

    initGame(state) {
      const amountOfCards = 20;
      let newCards = [];

      for (let index = 1; index <= amountOfCards; index++) {
        const cardOne = {
          id: uid(10),
          imageNumber: index,
          group: index,
          correct: false,
          initPosition:
            getRandomNumberMaxRange(1000) - getRandomNumberMaxRange(1000),
          endPosition: 0,
          duration: getRandomNumberMaxRange(5),
          clicked: false,
          backGroundColor: getRandomColor(),
        };

        newCards.push(cardOne);

        const cardTwo = Object.assign({}, cardOne, {
          id: uid(10),
          backGroundColor: getRandomColor(),
        });

        newCards.push(cardTwo);
      }

      return {
        ...state,
        shuffledCards: newCards,
      };
    },

    shuffleCards(state) {
      const getShuffledArr = (arr: Card[]) => {
        const newArr = arr.slice();
        for (let i = newArr.length - 1; i > 0; i--) {
          const rand = Math.floor(Math.random() * (i + 1));
          [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr;
      };

      return {
        ...state,
        shuffledCards: getShuffledArr(state.shuffledCards),
      };
    },

    setShuffling(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        shuffling: action.payload,
      };
    },

    setClickedCard(state, action: PayloadAction<string>) {
      return {
        ...state,
        shuffledCards: state.shuffledCards.map((card) => {
          if (card.id === action.payload) {
            return {
              ...card,
              clicked: true,
            };
          }
          return card;
        }),
      };
    },

    setSelectedGroup(state, action: PayloadAction<number>) {
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    },

    setCardsToUnclicked(state) {
      return {
        ...state,
        shuffledCards: state.shuffledCards.map((card) => {
          return { ...card, clicked: false };
        }),
        groups: [],
      };
    },

    setCorrectCardsGroup(state, action: PayloadAction<number>) {
      return {
        ...state,
        groups: [],
        shuffledCards: state.shuffledCards.map((card) => {
          if (card.group === action.payload) {
            return {
              ...card,
              correct: true,
            };
          }
          return card;
        }),
      };
    },
  },
});

export const {
  setGameLevel,
  initGame,
  shuffleCards,
  setShuffling,
  setClickedCard,
  setSelectedGroup,
  setCardsToUnclicked,
  setCorrectCardsGroup,
} = gameSlice.actions;
export default gameSlice.reducer;
