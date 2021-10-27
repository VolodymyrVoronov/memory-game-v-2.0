import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { setGameLevel } from "../../store/gameSlice/gameSlice";

import StarIcon from "./../../assets/common/start.png";

import {
  LevelContainer,
  LevelTitle,
  LevelIconIcons,
  LevelIcon,
} from "./Level.styled";

interface LevelProps {
  id: number;
  text: string;
  difficultyLevel: number;
  timeUntilShuffle: number;
  initPosition: number;
  endPosition: number;
  duration: number;
  color: string;

  activeCard: number;
  setActiveCard: (id: number) => void;
}

const Level = ({
  id,
  text,
  difficultyLevel,
  timeUntilShuffle,
  initPosition,
  endPosition,
  duration,
  color,

  activeCard,
  setActiveCard,
}: LevelProps): ReactElement => {
  const dispatch = useDispatch();

  const onCardClick = (id: number) => {
    setActiveCard(id);

    dispatch(setGameLevel(timeUntilShuffle));
  };

  return (
    <motion.div
      key={id}
      animate={{ x: endPosition, y: endPosition, opacity: 1 }}
      initial={{ x: initPosition, y: initPosition, opacity: 0 }}
      transition={{ ease: "easeOut", duration }}
    >
      <LevelContainer
        onClick={() => onCardClick(id)}
        bgColor={color}
        isActive={id === activeCard}
      >
        <LevelTitle>{text}</LevelTitle>
        <LevelIconIcons>
          {[...Array(difficultyLevel)].map((_, index) => {
            return <LevelIcon key={index} src={StarIcon} />;
          })}
        </LevelIconIcons>
      </LevelContainer>
    </motion.div>
  );
};

export default Level;
