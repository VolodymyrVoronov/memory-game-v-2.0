import { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTimer } from "use-timer";
import { motion } from "framer-motion";

import { setShuffling, shuffleCards } from "../../store/gameSlice/gameSlice";

import TimerProgressBar from "./../TimerProgressBar/TimerProgressBar";

import { TimerContainer } from "./Timer.styled";

interface TimerProps {
  gameLevel: number;
}

const ONE_MIN_IN_SEC = 60;
const TIMEOUT_FOR_TIMERS = 4000;

const Timer = ({ gameLevel }: TimerProps): ReactElement => {
  const dispatch = useDispatch();

  const { time, start, pause, reset, status } = useTimer({
    initialTime: gameLevel * ONE_MIN_IN_SEC,
    timerType: "DECREMENTAL",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      start();
    }, TIMEOUT_FOR_TIMERS);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let timer2: NodeJS.Timeout;

    if (time === 0 && status !== "STOPPED") {
      dispatch(setShuffling(true));
      dispatch(shuffleCards());

      reset();
      pause();

      timer2 = setTimeout(() => {
        start();

        clearTimeout(timer2);
      }, TIMEOUT_FOR_TIMERS);
    }
  }, [dispatch, pause, reset, start, status, time]);

  const progress = Math.floor((time * 100) / (gameLevel * ONE_MIN_IN_SEC));

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <TimerContainer>
        Time to shuffle:
        {time}s
      </TimerContainer>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 1000 }}
        transition={{ duration: 1.5 }}
      >
        <TimerProgressBar progressCount={progress} />
      </motion.div>
    </motion.div>
  );
};

export default Timer;
