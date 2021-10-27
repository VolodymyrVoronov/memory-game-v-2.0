import { ReactElement, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { motion } from "framer-motion";

import { RootState } from "../../store/store";

import Paths from "./../../utils/paths";

import Level from "../Level/Level";

import { LevelsContainer, LevelsTitle, LevelsBox } from "./Levels.styled";
import Button from "../common/UI/Button/Button";

const Levels = (): ReactElement => {
  const history = useHistory();

  const { levelsTitleLetters, levels } = useSelector(
    (state: RootState) => state.levelsReducer
  );

  const [activeCard, setActiveCard] = useState<number>(0);

  const onStartButtonClick = useCallback(() => {
    history.push(Paths.Game);
  }, [history]);

  return (
    <LevelsContainer>
      <LevelsTitle>
        {levelsTitleLetters.map((levelsTitleLetter) => {
          const { id, letter, initY, endY, duration } = levelsTitleLetter;
          return (
            <motion.div
              key={id}
              animate={{ y: endY }}
              initial={{ y: initY }}
              transition={{ ease: "easeOut", duration }}
            >
              {letter}
            </motion.div>
          );
        })}
      </LevelsTitle>

      <LevelsBox>
        {levels.map((level) => {
          const {
            id,
            text,
            difficultyLevel,
            timeUntilShuffle,
            initPosition,
            endPosition,
            duration,
            color,
          } = level;

          return (
            <Level
              key={id}
              id={id}
              text={text}
              difficultyLevel={difficultyLevel}
              timeUntilShuffle={timeUntilShuffle}
              initPosition={initPosition}
              endPosition={endPosition}
              duration={duration}
              color={color}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          );
        })}
      </LevelsBox>

      {activeCard > 0 && (
        <Button buttonText="Start" onClick={onStartButtonClick} />
      )}
    </LevelsContainer>
  );
};

export default Levels;
