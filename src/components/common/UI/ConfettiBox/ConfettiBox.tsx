import { ReactElement } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ConfettiBox = (): ReactElement => {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} />;
};

export default ConfettiBox;
