/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import useStore from "@/store";
import Typography from "@/components/Typography";

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
  }, [isInView]);

  const skills = [
    {
      title: "Programming Languages",
      text: "HTML, CSS/SCSS, JavaScript (+ES6), TypeScript",
    },
    {
      title: "Libraries & Frameworks",
      text: "React, Next.js, Vue.js, Nuxt, React Query, React Hook Form, Tailwind CSS, GSAP, Framer Motion, Material UI, Zustand, Pinia, Three.js",
    },
    {
      title: "Tools & Platforms",
      text: "Git, GitHub, Figma, Storyblok, Contentful, Supabase, Vercel, Netlify",
    },
    {
      title: "Testing",
      text: "Cypress, Jest",
    },
    {
      title: "Other",
      text: "Agile/Scrum",
    },
    {
      title: "Currently learning",
      text: "Node.js",
    },
  ];

  const aboutText = [
    "Hi, I'm Kei Yamagata, a front-end developer based in Antwerp, Belgium. With a passion for technology and a knack for turning ideas into reality, I've dedicated myself to creating seamless, user-friendly web experiences.",
    "I'm drawn to front-end development because it's the bridge between design and functionality. It's where creativity meets technical precision. I enjoy the challenge of taking a static design and breathing life into it, making it come alive on the web. User interfaces that are not only beautiful but also intuitive and efficient have been my driving force.",
    "Constant learning is the key to success in this ever-evolving field. Staying updated with the latest trends, tools, and best practices is essential to delivering high-quality work. Collaboration and communication are also crucial to me, as they lead to more successful projects and a better overall experience for everyone involved.",
    "When I'm not in front of a computer screen, you can find me strolling through beautiful Antwerp with a cup of coffee or playing with my cat Maurice. I believe in a balanced life that nurtures creativity and keeps me inspired.",
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-[100dvh] border border-primary p-8 rounded-3xl bg-secondary grid md:grid-cols-3 md:gap-x-16 pt-20"
    >
      <div className="col-span-full mb-8 md:mb-24 overflow-hidden">
        <Typography type="section-title" text="About me" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="row-start-3 md:row-start-2 pt-8 md:pt-0"
      >
        {skills.map((skill, index) => (
          <motion.div key={skill.title} variants={animation}>
            <Typography
              type="sub-title"
              text={skill.title}
              className={index !== 0 ? "pt-8 md:pt-12" : ""}
            />
            <Typography type="paragraph" text={skill.text} />
          </motion.div>
        ))}
      </motion.div>
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
