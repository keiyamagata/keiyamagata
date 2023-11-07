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

const animation = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const Typography = ({ type, text, className }: TypographyProps) => {
  const sectionTitleRef = useRef(null);
  const sectionTitleisInView = useInView(sectionTitleRef, {
    amount: 0.5,
    once: true,
  });
  const bigParagraphRef = useRef(null);
  const bigParagraphisInView = useInView(bigParagraphRef, {
    amount: 0.5,
    once: true,
  });

  return (
    <>
      {type === "section-title" && (
        <h2
          ref={sectionTitleRef}
          className={`${montserrat.className} ${className} text-4xl sm:text-7xl lg:text-8xl xl:text-9xl text-primary font-bold uppercase tracking-tight`}
        >
          <span className="sr-only">{text}</span>
          <motion.span
            ref={sectionTitleRef}
            initial="hidden"
            animate={sectionTitleisInView ? "visible" : ""}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {text.split(" ").map((word, i) => (
              <span key={word + i} className="inline-block">
                {word.split("").map((char, i) => (
                  <motion.span
                    key={char + 1}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </motion.span>
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
        <motion.p
          ref={bigParagraphRef}
          initial={{ opacity: 0, y: 40 }}
          animate={
            bigParagraphisInView
              ? { opacity: 1, y: 0, transition: { duration: 0.3 } }
              : {}
          }
          className={`${montserrat.className} ${className} text-2xl leading-relaxed md:text-3xl md:leading-relaxed`}
        >
          {text}
        </motion.p>
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
