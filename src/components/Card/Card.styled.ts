import styled, { keyframes, css } from "styled-components";

interface CardContainerProps {
  clicked: boolean;
  backGroundColor: string;
  cardDisabled: boolean;
  cardCorrect: boolean;
}

const cardIn = keyframes`
    0% { 
      transform: scale(1);
    }

    50% { 
      transform: scale(0.5);
    }

    50% { 
      transform: scale(1.2);
    }

    100% { 
      transform: scale(1);
    }
`;

const CardContainer = styled.div<CardContainerProps>`
  position: relative;
  display: flex;

  width: 105px;
  height: 105px;

  margin: 10px;

  box-shadow: -2.5px 0 0 0 #433f40, 2.5px 0 0 0 #433f40, 0 -2.5px 0 0 #433f40,
    0 2.5px 0 0 #433f40;

  background-color: #f2f2f2;

  ${(props) =>
    props.cardDisabled &&
    css`
      pointer-events: none;
    `}

  ${(props) =>
    props.cardCorrect &&
    css`
      pointer-events: none;
    `}

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.clicked
      ? css`
          animation: ${cardIn} 1s ease;
        `
      : css`
          &::before {
            position: absolute;
            content: "";
            display: block;

            width: 105px;
            height: 105px;

            background-color: ${props.backGroundColor};
          }
        `}
`;

const CardImage = styled.img`
  display: block;

  padding: 10px;
`;

export { CardContainer, CardImage };
