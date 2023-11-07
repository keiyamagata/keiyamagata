"use client";

import Link from "next/link";
import Arrow from "./Arrow";
import { motion } from "framer-motion";

const linksAnimation = {
  initial: {
    y: "100%",
  },
  animate: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

const FooterLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-fit rounded-full focus-visible:outline-4 focus-visible:outline-secondary"
    >
      <motion.div
        variants={linksAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-fit flex items-center px-6 md:px-12 py-2 md:py-4 rounded-full border border-secondary text-secondary"
      >
        <p className="text-3xl md:text-5xl uppercase">{text}</p>
        <Arrow className="w-12 h-12 ml-4 group-hover:-rotate-45 duration-150" />
      </motion.div>
    </Link>
  );
};

export default FooterLink;
