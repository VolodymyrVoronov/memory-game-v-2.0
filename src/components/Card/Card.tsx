import { ReactElement, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { RootState } from "../../store/store";

import {
  setClickedCard,
  setSelectedGroup,
  setCardsToUnclicked,
  setCorrectCardsGroup,
} from "../../store/gameSlice/gameSlice";

import { CardContainer, CardImage } from "./Card.styled";

interface CardProps {
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

const Card = ({
  id,
  imageNumber,
  group,
  correct,
  initPosition,
  endPosition,
  duration,
  clicked,
  backGroundColor,
}: CardProps): ReactElement => {
  const dispatch = useDispatch();

  const { groups } = useSelector((state: RootState) => state.gameReducer);

  const [cardDisabled, setCardDisabled] = useState(false);

  useEffect(() => {
    if (groups.length === 2 && groups[0] !== groups[1]) {
      setCardDisabled(() => true);

      const setCardsToUnclickedTimer = setTimeout(() => {
        dispatch(setCardsToUnclicked());
        setCardDisabled(() => false);

        clearTimeout(setCardsToUnclickedTimer);
      }, 1500);
    }

    if (groups.length === 2 && groups[0] === groups[1]) {
      dispatch(setCorrectCardsGroup(groups[1]));
    }
  }, [dispatch, group, groups]);

  const onCardClick = () => {
    dispatch(setClickedCard(id));
    dispatch(setSelectedGroup(group));
  };

  return (
    <motion.div
      key={id}
      initial={{ x: initPosition, y: initPosition, opacity: 0 }}
      animate={{ x: endPosition, y: endPosition, opacity: 1 }}
      transition={{ ease: "easeOut", duration }}
    >
      <CardContainer
        onClick={() => onCardClick()}
        clicked={clicked || correct}
        backGroundColor={backGroundColor}
        cardDisabled={cardDisabled}
        cardCorrect={clicked || correct}
      >
        <CardImage
          src={require(`../../assets/cards/${imageNumber}.png`).default}
        />
      </CardContainer>
    </motion.div>
  );
};

export default Card;
