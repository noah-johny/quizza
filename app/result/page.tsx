"use client";

import { useQuizContext } from "@/context/quiz-context";
import Link from "next/link";

const ResultPage: React.FC = () => {
  const { score, questions } = useQuizContext();
  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-24 px-8 bg-white">
      <div className="flex flex-col items-center gap-8 sm:gap-12">
        <span className="font-normal sm:text-xl text-md">You Scored</span>
        <div className="flex font-semibold text-9xl sm:text-[10rem] md:text-[12rem] xl:text-[16rem]">
          <span className="">{score.right}</span>
          <span className="font-extralight">/</span>
          <span className="">{questions.length}</span>
        </div>
      </div>
      <div className="flex flex-wrap-reverse gap-2 w-full justify-center">
        <Link
          href="/quiz"
          className="bg-dark text-white border-dark border-2 sm:px-24 text-center rounded-full hover:opacity-95 font-medium sm:text-xl md:text-2xl sm:w-80 text-nowrap text-lg w-full py-4"
        >
          Try Again
        </Link>
        <Link
          href="/"
          className="border-dark text-dark border-2 sm:px-24 text-center rounded-full hover:opacity-95 font-medium sm:text-xl md:text-2xl sm:w-80 text-nowrap text-lg w-full py-4"
        >
          Home
        </Link>
      </div>
    </main>
  );
};

export default ResultPage;
