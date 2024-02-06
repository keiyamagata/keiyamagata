"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import useStore from "@/store";
import Typography from "@/components/Typography";
import { projectItems } from "./content";
import ProjectItem from "@/components/ProjectItem";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const setCurrentView = useStore((state) => state.setCurrentView);

  useEffect(() => {
    if (isInView) setCurrentView("projects");
  }, [isInView, setCurrentView]);

  return (
    <section
      ref={ref}
      id="projects"
      className="border border-primary p-8 rounded-3xl bg-secondary mt-16 pt-20"
    >
      <div className="mb-8 md:mb-24 overflow-hidden">
        <Typography type="section-title" text="Projects" />
      </div>

      {projectItems.map((item) => (
        <ProjectItem
          key={item.id}
          name={item.name}
          techStack={item.techStack}
          link={item.link}
        />
      ))}

      <div className="w-full h-60 flex items-center justify-center border-t border-primary">
        <Typography type="paragraph" text="More coming soon..." />
      </div>
    </section>
  );
};

export default Projects;
