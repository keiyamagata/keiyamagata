import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kei Yamagata | Front-end developer",
  description:
    "As a dedicated front-end developer with nearly 2 years of expertise, I specialize in crafting modern, responsive websites and web applications using React and Vue.js. One of the aspects I truly enjoy about my work is being part of a team. Working alongside experienced developers allows me to learn from their wealth of knowledge and expertise, while also giving me the opportunity to share my own passion for front-end development with others.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
