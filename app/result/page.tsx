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
      <Link
        href="/quiz"
        className="bg-dark text-white sm:px-24 text-center rounded-full hover:opacity-95 font-medium sm:text-xl md:text-2xl sm:w-fit text-nowrap text-lg w-full py-6"
      >
        Try Again
      </Link>
    </main>
  );
};

export default ResultPage;
