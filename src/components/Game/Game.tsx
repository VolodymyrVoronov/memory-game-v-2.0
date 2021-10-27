import { ReactElement, useEffect, Fragment, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

import { RootState } from "../../store/store";

import {
  initGame,
  setGameLevel,
  setShuffling,
  shuffleCards,
} from "../../store/gameSlice/gameSlice";

import Paths from "./../../utils/paths";

import Cards from "../Cards/Cards";
import Timer from "../Timer/Timer";
import Button from "../common/UI/Button/Button";
import ConfettiBox from "../common/UI/ConfettiBox/ConfettiBox";

import { GameContainer, GameTitle, GameButton } from "./Game.styled";

const Game = (): ReactElement => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { gameLevel, shuffledCards, shuffling } = useSelector(
    (state: RootState) => state.gameReducer
  );

  useEffect(() => {
    if (gameLevel === 0) {
      history.replace(Paths.Levels);
    }
  }, []);

  useEffect(() => {
    if (shuffling) {
      dispatch(setShuffling(false));
    }
  }, [dispatch, shuffling]);

  const onNewGameButtonClick = useCallback(() => {
    history.push(Paths.Levels);

    dispatch(setGameLevel(0));
    dispatch(initGame());
    dispatch(shuffleCards());
  }, [dispatch, history]);

  const isGameEnd = shuffledCards.every((card) => card.correct === true);

  return (
    <GameContainer>
      {isGameEnd ? (
        <Fragment>
          <ConfettiBox />
          <GameTitle>You win!</GameTitle>
          <GameButton>
            <Button
              buttonText="Play again?"
              mt={50}
              onClick={onNewGameButtonClick}
            />
          </GameButton>
        </Fragment>
      ) : (
        <Fragment>
          <Timer gameLevel={gameLevel} />
          {shuffling ? (
            <div />
          ) : (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Cards shuffledCards={shuffledCards} />
            </motion.div>
          )}
          <GameButton>
            <Button
              buttonText="New game"
              mt={50}
              onClick={onNewGameButtonClick}
            />
          </GameButton>
        </Fragment>
      )}
    </GameContainer>
  );
};

export default Game;
