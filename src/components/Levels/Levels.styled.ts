import styled, { keyframes } from "styled-components";

const LevelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
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

const LevelsTitle = styled.h1`
  display: flex;

  font-size: 56px;
  line-height: 60px;
  letter-spacing: 5px;

  color: #383535;

  text-shadow: 5px 5px tomato;

  animation: ${blink} 5s ease infinite;

  div {
    &:nth-child(6) {
      margin-right: 25px;
    }
  }
`;

const LevelsBox = styled.section`
  display: flex;
  justify-content: space-around;

  margin-top: 100px;
`;

export { LevelsContainer, LevelsTitle, LevelsBox };
