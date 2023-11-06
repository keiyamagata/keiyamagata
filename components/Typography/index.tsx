"use client";

import { useRef } from "react";
import { Montserrat } from "next/font/google";
import { motion, useInView } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });

type TypographyProps = {
  type: "section-title" | "sub-title" | "big-paragraph" | "paragraph";
  text: string;
  className?: string;
};

const animations = {
  initial: {
    y: "100%",
  },
  animate: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Typography = ({ type, text, className }: TypographyProps) => {
  const sectionTitleRef = useRef(null);
  const isInView = useInView(sectionTitleRef, { amount: 0.5, once: true });

  return (
    <>
      {type === "section-title" && (
        <h2
          ref={sectionTitleRef}
          className={`${montserrat.className} ${className} text-4xl md:text-8xl xl:text-9xl text-primary font-bold uppercase tracking-tight`}
        >
          <span className="sr-only">{text}</span>
          <motion.span
            variants={animations}
            initial="initial"
            animate={isInView ? "animate" : ""}
            className="inline-block"
          >
            {text}
          </motion.span>
          {/* {text.split(" ").map((word, i) => (
            <motion.span
              key={word + i}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ staggerChildren: 0.1 }}
              aria-hidden={true}
            >
              {word.split("").map((char, i) => (
                <motion.span
                  key={char + i}
                  variants={animations}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))} */}
        </h2>
      )}
      {type === "sub-title" && (
        <h3
          className={`${montserrat.className} ${className} text-xl md:text-2xl font-bold pb-4`}
        >
          {text}
        </h3>
      )}
      {type === "big-paragraph" && (
        <p
          className={`${montserrat.className} ${className} text-2xl leading-relaxed md:text-3xl md:leading-relaxed`}
        >
          {text}
        </p>
      )}
      {type === "paragraph" && (
        <p
          className={`${montserrat.className} ${className} text-lg leading-relaxed md:text-xl md:leading-relaxed`}
        >
          {text}
        </p>
      )}
    </>
  );
};

export default Typography;
