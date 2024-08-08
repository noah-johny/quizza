import { useQuizContext } from "@/context/quiz-context";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TimerProps {
  timeLimit: number;
}

const Timer = ({ timeLimit }: TimerProps) => {
  const { timerRunning, handleTimerEnd } = useQuizContext();

  return (
    <CountdownCircleTimer
      isPlaying={timerRunning}
      duration={timeLimit}
      colors={"#171717"}
      size={36}
      strokeWidth={4}
      onComplete={handleTimerEnd}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

export default Timer;