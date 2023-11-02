import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SEO from "@/utils/seo.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container bg-secondary text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
