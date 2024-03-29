"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import useStore from "@/store";
import FooterLink from "@/components/FooterLink";
import Typography from "@/components/Typography";
import { links } from "./content";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const setCurrentView = useStore((state) => state.setCurrentView);

  useEffect(() => {
    if (isInView) setCurrentView("contact");
  }, [isInView, setCurrentView]);

  return (
    <footer
      ref={ref}
      id="contact"
      className="relative h-[80dvh] bg-primary rounded-t-2xl mt-16 p-8 overflow-hidden"
    >
      <div className="overflow-hidden">
        <Typography
          type="section-title"
          text="Get in touch"
          className="text-secondary"
        />
      </div>
      <div className="pt-12 md:pt-32 flex flex-col items-start gap-4 md:hidden">
        {links.map((link) => (
          <div key={link.text} className="overflow-hidden">
            <FooterLink text={link.text} href={link.href} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-8 w-[calc(100%-4rem)] flex justify-center md:justify-between items-end">
        <p className="text-secondary text-sm">&copy; Kei Yamagata | 2023</p>
        <div className="hidden md:flex flex-col items-end gap-4">
          {links.map((link) => (
            <div key={link.text} className="overflow-hidden">
              <FooterLink text={link.text} href={link.href} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
