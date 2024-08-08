"use client";

import Timer from "@/components/timer";
import { useQuizContext } from "@/context/quiz-context";
import Link from "next/link";
import { useEffect } from "react";

const QuizPage = () => {
  const {
    nextQuestion,
    setNextQuestion,
    questions,
    handleTimerEnd,
    selectedOption,
    setSelectedOption,
    setScore,
    showAnswer,
    setShowAnswer,
    timerRunning,
  } = useQuizContext();

  useEffect(() => {
    setScore({ right: 0, wrong: 0 });
    setNextQuestion(0);
    setShowAnswer(false);
  }, []);

  const handleOptionClick = async (option: string) => {
    setSelectedOption(option);
    await handleTimerEnd();
  };

  const handleNextClick = async () => {
    setSelectedOption("");
    await handleTimerEnd();
  };

  return (
    <div className="h-dvh w-full bg-white p-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 max-w-7xl flex justify-between flex-col items-center mx-auto">
      <div className="w-full flex justify-between items-center text-bold">
        <span className="font-bold text-3xl text-left">Quizza.</span>
        <div className="flex gap-4 items-center sm:gap-6 md:gap-8">
          <span className="flex gap-[2px] items-baseline font-medium text-left text-sm">
            <span className="font-bold text-2xl text-left">
              {nextQuestion + 1}
            </span>
            <span>/</span>
            <span>{questions.length}</span>
          </span>
          <div className="font-semibold text-sm">
            {timerRunning && <Timer timeLimit={5} />}
          </div>
        </div>
      </div>

      <div className="py-12 w-full h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-normal text-base w-full text-left">
            Question {nextQuestion + 1}
          </span>
          <span className="text-dark font-semibold text-3xl w-full text-left">
            {questions[nextQuestion].question}
          </span>
        </div>

        <div className="flex z-10 flex-col gap-2 sm:gap-4 lg:gap-6 items-center font-medium">
          {questions[nextQuestion].options.map((option, index) => {
            const isCorrectOption = option === questions[nextQuestion].answer;
            const isSelectedOption = selectedOption === option;
            const isWrongOption =
              showAnswer && isSelectedOption && !isCorrectOption;

            return (
              <button
                key={index}
                disabled={showAnswer}
                onClick={() => handleOptionClick(option)}
                className={`border-dark border-2 py-2 sm:py-4 md:py-6 w-full rounded-xl disabled:cursor-default ${
                  showAnswer && selectedOption === ""
                    ? isCorrectOption
                      ? "border-green text-green"
                      : isWrongOption
                      ? "border-rose text-rose"
                      : "bg-transparent text-dark"
                    : isSelectedOption
                    ? isCorrectOption
                      ? "bg-green text-white border-green"
                      : "bg-rose text-white border-rose"
                    : "bg-transparent text-dark"
                }`}
                style={{
                  border:
                    showAnswer && selectedOption === ""
                      ? isCorrectOption
                        ? "2px solid green"
                        : "2px solid red"
                      : "2px solid black",
                }}
              >
                {option}
              </button>
            );
          })}
        </div>

        <Link
          href={nextQuestion === questions.length - 1 ? "/result" : ""}
          className="bg-dark text-white rounded-full px-16 py-4 text-center font-medium hover:opacity-95 sm:py-6 sm:w-64 sm:ml-auto sm:text-xl"
          onClick={handleNextClick}
        >
          {nextQuestion === questions.length - 1 ? "Finish" : "Next"}
        </Link>
      </div>
    </div>
  );
};

export default QuizPage;
