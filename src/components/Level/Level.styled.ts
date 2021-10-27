import styled, { keyframes, css } from "styled-components";

const moving = keyframes`
  0% { 
    transform: translateY(-15px);
  }

  50% { 
    transform: translateY(0px);
  }

  100% { 
    transform: translateY(-15px);
  }
`;

interface LevelContainerProps {
  bgColor?: string;
  isActive: boolean;
}

const LevelContainer = styled.div<LevelContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 450px;

  margin: 0 30px;

  box-shadow: -15px 0 0 0 #433f40, 15px 0 0 0 #433f40, 0 -15px 0 0 #433f40,
    0 15px 0 0 #433f40;

  background-color: ${(props) => props.bgColor};

  transition: 0.5s ease;

  &:hover {
    cursor: pointer;

    transform: translateY(-15px);

    transition: 0.5s ease;
  }

  ${(props) =>
    props.isActive &&
    css`
      animation: ${moving} 1.25s ease infinite;
    `}
`;

const LevelTitle = styled.h2`
  display: block;

  font-size: 48px;
  line-height: 54px;
  text-align: center;

  color: #ffffff;

  text-shadow: 5px 5px #000000;
`;

const LevelIconIcons = styled.div`
  display: flex;

  margin-top: 25px;
`;

const LevelIcon = styled.img`
  display: block;

  width: 50px;
  height: 50px;

  margin: 0 5px;
`;

export { LevelContainer, LevelTitle, LevelIconIcons, LevelIcon };
