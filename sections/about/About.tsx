"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import useStore from "@/store";
import Typography from "@/components/Typography";
import { skills, aboutText } from "./content";

const animation = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const setCurrentView = useStore((state) => state.setCurrentView);

  useEffect(() => {
    if (isInView) setCurrentView("about");
  }, [isInView, setCurrentView]);

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-[100dvh] border border-primary p-8 rounded-3xl bg-secondary grid md:grid-cols-3 md:gap-x-16 pt-20"
    >
      <div className="col-span-full mb-8 md:mb-24 overflow-hidden">
        <Typography type="section-title" text="About me" />
      </div>
      <div className="row-start-3 md:row-start-2 pt-8 md:pt-0">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation}
          >
            <Typography
              type="sub-title"
              text={skill.title}
              className={index !== 0 ? "pt-8 md:pt-12" : ""}
            />
            <Typography type="paragraph" text={skill.text} />
          </motion.div>
        ))}
      </div>
      <div className="row-start-2 md:col-start-2 md:col-span-2">
        {aboutText.map((text, index) => (
          <Typography
            key={text}
            type="big-paragraph"
            text={text}
            className={index !== 0 ? "pt-12" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
