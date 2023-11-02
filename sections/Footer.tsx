"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import FooterLink from "@/components/FooterLink";
import useStore from "@/store";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const setCurrentView = useStore((state) => state.setCurrentView);

  useEffect(() => {
    if (isInView) setCurrentView("contact");
  }, [isInView, setCurrentView]);

  const links = [
    { text: "email", href: "mailto:kei.yamagata@icloud.com" },
    { text: "github", href: "https://github.com/keiyamagata" },
    {
      text: "linkedin",
      href: "https://www.linkedin.com/in/kei-yamagata-14150920a/",
    },
  ];

  return (
    <footer
      ref={ref}
      id="contact"
      className="relative h-[80dvh] bg-primary rounded-t-2xl mt-16 p-8"
    >
      <h2 className="text-4xl md:text-8xl xl:text-9xl text-secondary font-bold uppercase tracking-tight">
        Get in touch
      </h2>
      <div className="pt-12 md:pt-32 flex flex-col items-start gap-4 md:hidden">
        {links.map((link) => (
          <FooterLink key={link.text} text={link.text} href={link.href} />
        ))}
      </div>
      <div className="absolute bottom-8 left-8 w-[calc(100%-4rem)] flex justify-between items-end">
        <p className="text-secondary text-sm text-center md:text-left">
          &copy; Kei Yamagata | 2023
        </p>
        <div className="hidden md:flex flex-col items-end gap-4">
          {links.map((link) => (
            <FooterLink key={link.text} text={link.text} href={link.href} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
