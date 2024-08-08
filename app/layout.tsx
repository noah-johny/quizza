import type { Metadata } from "next";
import "./globals.css";
import { QuizContextProvider } from "@/context/quiz-context";

const Author = {
  name: "Noah Johny",
  email: "noahjoh11@gmail.com",
};

export const metadata: Metadata = {
  title: "Quizza.",
  description: "Take a quick quiz and test your knowledge on various topics.",
  authors: [Author],
  keywords: ["Quizza", "Quiz App", "Noah Johny", "CST - Cyber Sapient"],
  manifest: "/favicons/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-dark antialiased font-primary bg-white">
        <QuizContextProvider>{children}</QuizContextProvider>
      </body>
    </html>
  );
}
