"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useStore from "@/store";
import { navItems } from "./content";

const NavBar = () => {
  const currentView = useStore((state) => state.currentView);
  const [hoveredPath, setHoveredPath] = useState(currentView);

  return (
    <header>
      <nav className="w-[21.6rem] md:w-[29.3rem] fixed top-4 left-1/2 -translate-x-1/2 rounded-full border border-primary bg-secondary/50 backdrop-blur-sm z-[99]">
        <ul className="w-full relative py-2.5 flex justify-center items-center">
          {navItems.map((item) => {
            const isActive = item.path === currentView;

            return (
              <li key={item.path}>
                <Link
                  href={`#${item.path}`}
                  className="relative w-full px-3 md:px-6 py-2 rounded-full uppercase text-sm md:text-base text-primary focus-visible:outline focus-visible:outline-primary/80"
                  data-active={isActive}
                  onMouseOver={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(currentView)}
                >
                  <span>{item.name}</span>
                  {(item.path === hoveredPath || item.path === currentView) && (
                    <motion.div
                      aria-hidden="true"
                      className="absolute top-0 left-0 w-full h-full rounded-full -z-[1] bg-primary/10"
                      layoutId="navbar"
                      transition={{
                        type: "tween",
                        duration: 0.15,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
