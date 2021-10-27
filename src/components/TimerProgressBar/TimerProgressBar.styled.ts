import styled from "styled-components";

interface TimerProgressBarContainerProps {
  progressCount: number;
}

const TimerProgressBarContainer = styled.div<TimerProgressBarContainerProps>`
  position: relative;
  display: flex;

  margin: 0 auto;
  margin-top: 15px;

  width: 98.8%;
  height: 35px;

  border: 5px solid #433f40;

  background-color: #da676a;

  transform: rotate(180deg);

  &::before {
    position: absolute;
    display: block;
    content: "";

    top: 0;
    left: 0;

    width: ${(props) => props.progressCount}%;
    height: 25px;

    transition: 500ms ease;

    background-color: #96c351;
  }
`;

export { TimerProgressBarContainer };
