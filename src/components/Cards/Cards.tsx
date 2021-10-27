import { ReactElement } from "react";

import { CardsContainer } from "./Cards.styled";

import Card from "../Card/Card";

const Cards = ({ shuffledCards }: any): ReactElement => {
  return (
    <CardsContainer>
      {shuffledCards.map(
        (card: {
          id: string;
          imageNumber: number;
          group: number;
          correct: boolean;
          initPosition: number;
          endPosition: number;
          duration: number;
          clicked: boolean;
          backGroundColor: string;
        }) => {
          const {
            id,
            imageNumber,
            group,
            correct,
            initPosition,
            endPosition,
            duration,
            clicked,
            backGroundColor,
          } = card;
          return (
            <Card
              key={id}
              id={id}
              imageNumber={imageNumber}
              group={group}
              correct={correct}
              initPosition={initPosition}
              endPosition={endPosition}
              duration={duration}
              clicked={clicked}
              backGroundColor={backGroundColor}
            />
          );
        }
      )}
    </CardsContainer>
  );
};

export default Cards;
