"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type Question = {
  id: number;
  question: string;
  answer: string;
  options: string[];
};

type Score = {
  right: number;
  wrong: number;
};

type QuizContextProps = {
  questions: Question[];
  nextQuestion: number;
  setNextQuestion: Dispatch<SetStateAction<number>>;
  score: Score;
  setScore: Dispatch<SetStateAction<Score>>;
  timerRunning: boolean;
  setTimerRunning: Dispatch<SetStateAction<boolean>>;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  showAnswer: boolean;
  setShowAnswer: Dispatch<SetStateAction<boolean>>;
  handleTimerEnd: () => void;
  handleNextQuestion: () => void;
  handleEndQuiz: () => void;
  checkAnswer: (selectedOption: string) => void;
};

const questions: Question[] = [
  {
    id: 0,
    question: "What is the capital of France?",
    answer: "Paris",
    options: ["Paris", "Berlin", "London", "Madrid"],
  },
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
  },
  {
    id: 2,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    options: [
      "Mark Twain",
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
    ],
  },
  {
    id: 3,
    question: "What is the smallest prime number?",
    answer: "2",
    options: ["0", "1", "2", "3"],
  },
];

const QuizContext = createContext<QuizContextProps>({
  questions: questions,
  nextQuestion: 0,
  setNextQuestion: () => {},
  score: { right: 0, wrong: 0 },
  setScore: () => {},
  timerRunning: true,
  setTimerRunning: () => {},
  selectedOption: "",
  setSelectedOption: () => {},
  showAnswer: false,
  setShowAnswer: () => {},
  checkAnswer: () => {},
  handleTimerEnd: () => {},
  handleNextQuestion: () => {},
  handleEndQuiz: () => {},
});

type QuizProviderProps = { children: React.ReactNode };

export const QuizContextProvider = ({ children }: QuizProviderProps) => {
  const [nextQuestion, setNextQuestion] = useState<number>(0);
  const [score, setScore] = useState<Score>({ right: 0, wrong: 0 });
  const [timerRunning, setTimerRunning] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const checkAnswer = (selectedOption: string) => {
    if (selectedOption === "") {
      return;
    } else if (selectedOption === questions[nextQuestion].answer) {
      setScore((prevScore) => ({ ...prevScore, right: prevScore.right + 1 }));
    } else {
      setScore((prevScore) => ({ ...prevScore, wrong: prevScore.wrong + 1 }));
    }
  };

  const router = useRouter();

  const handleEndQuiz = () => {
    checkAnswer(selectedOption);
    router.push("/result");
  };

  const handleNextQuestion = async () => {
    if (nextQuestion < questions.length - 1) {
      setTimerRunning(false);
      checkAnswer(selectedOption);
      setNextQuestion((prev) => prev + 1);
      setSelectedOption("");
      await new Promise((resolve) => setTimeout(resolve, 0));
      setShowAnswer(false);
      setTimerRunning(true);
    } else {
      handleEndQuiz();
    }
  };

  const handleTimerEnd = async () => {
    if (showAnswer === false) {
      setTimerRunning(false);
      await new Promise((resolve) => setTimeout(resolve, 0));
      setTimerRunning(true);
      setShowAnswer(true);
    } else if (showAnswer === true) {
      setShowAnswer(false);
      handleNextQuestion();
    } else {
      handleEndQuiz();
    }
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        nextQuestion,
        setNextQuestion,
        score,
        setScore,
        timerRunning,
        setTimerRunning,
        selectedOption,
        setSelectedOption,
        showAnswer,
        setShowAnswer,
        handleTimerEnd,
        handleNextQuestion,
        handleEndQuiz,
        checkAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
