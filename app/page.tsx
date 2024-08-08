import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:gap-24 gap-16 px-8 bg-white self">
      <div className="flex flex-col items-center gap-4 sm:gap-6">
        <span className="font-normal sm:text-2xl text-md">Welcome</span>
        <span className="font-semibold sm:text-9xl text-5xl">Quizza.</span>
      </div>
      <Link
        href="/quiz"
        className="bg-dark text-white sm:px-24 text-center rounded-full hover:opacity-95 font-medium sm:text-xl md:text-2xl sm:w-fit text-nowrap text-lg w-full py-6"
      >
        Start Quiz
      </Link>
    </main>
  );
}
