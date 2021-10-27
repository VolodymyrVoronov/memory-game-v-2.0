import { ReactElement } from "react";

import { TimerProgressBarContainer } from "./TimerProgressBar.styled";

interface TimerProgressBarProps {
  progressCount: number;
}

const TimerProgressBar = ({
  progressCount,
}: TimerProgressBarProps): ReactElement => {
  return <TimerProgressBarContainer progressCount={progressCount} />;
};

export default TimerProgressBar;
