import styled, { keyframes } from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 1000px;

  margin: 0 auto;
  margin-top: 25px;
`;

const blink = keyframes`
  0% { 
    text-shadow: 5px 5px rgba(255, 99, 71, 0.35);
  }
  25% { 
    text-shadow: 5px 5px rgba(255, 99, 71, 1);
  }
  50% { 
    text-shadow: 5px 5px rgba(255, 99, 71, 0.35);
  }
  75% { 
    text-shadow: 5px 5px rgba(255, 99, 71, 1);
  }
  100% { 
    text-shadow: 5px 5px rgba(255, 99, 71, 0.35);
  }
`;

const GameTitle = styled.h3`
  display: flex;
  justify-content: center;

  font-size: 52px;
  line-height: 56px;
  text-align: center;

  color: #383535;

  text-shadow: 5px 5px tomato;

  animation: ${blink} 5s ease infinite;
`;

const GameButton = styled.div`
  display: flex;
  justify-content: center;
`;

export { GameContainer, GameTitle, GameButton };
