"use client";

import { Montserrat } from "next/font/google";
import Header from "@/components/Navigation/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Footer from "@/sections/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Header />
      <main className={`${montserrat.className}`}>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
