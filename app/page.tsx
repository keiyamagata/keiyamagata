"use client";

import { Montserrat } from "next/font/google";
import Header from "@/components/Navigation/Navbar";
import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Footer from "@/sections/footer/Footer";
import Projects from "@/sections/projects/Projects";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Header />
      <main className={`${montserrat.className}`}>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
