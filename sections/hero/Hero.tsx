"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import useStore from "@/store";
import Background from "@/components/Background";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });
  const setCurrentView = useStore((state) => state.setCurrentView);

  useEffect(() => {
    if (isInView) setCurrentView("home");
  }, [isInView, setCurrentView]);

  const transition = {
    duration: 0.7,
    ease: "easeOut",
    delay: 1,
  };

  return (
    <section
      ref={ref}
      id="home"
      className="h-[100dvh] px-2 md:px-0 flex items-center"
    >
      <Background />
      <div className="w-full md:w-4/5 mx-auto">
        <div className="text-md lg:text-2xl pl-[0.15rem] sm:pl-[0.2rem] md:pl-[0.25rem] lg:pl-[0.3rem] xl:pl-[0.58rem] overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            Kei Yamagata
          </motion.h2>
        </div>
        <h1 className="sr-only">Front-end developer</h1>
        <div
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tight"
          aria-hidden="true"
        >
          <motion.span
            initial={{ opacity: 0, x: 150 }}
            animate={{
              opacity: 1,
              x: 0,
              transition,
            }}
            className="block"
          >
            Front-end
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -150 }}
            animate={{
              opacity: 1,
              x: 0,
              transition,
            }}
            className="block text-right"
          >
            Developer
          </motion.span>
        </div>
        <div className="text-md lg:text-2xl overflow-hidden text-right">
          <motion.h2
            initial={{ y: "-100%" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            Based in Antwerp, Belgium
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
