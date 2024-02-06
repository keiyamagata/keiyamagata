"use client";

import Typography from "../Typography";
import Arrow from "../icons/Arrow";

type ProjectProps = {
  name: string;
  techStack: string[];
  link: string;
};

const Project: React.FC<ProjectProps> = ({ name, techStack, link }) => {
  return (
    <article className="border-t border-primary group">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="h-60 h- md:h-40 grid grid-cols-1 md:grid-cols-3 md:place-items-center">
          <Typography
            type="project-title"
            text={name}
            className="pt-4 md:pt-0"
          />
          <div>
            {techStack.map((item, i) => (
              <Typography
                key={item}
                type="paragraph"
                text={`${item}${i !== techStack.length - 1 ? "," : ""}`}
                className="inline-block pr-2"
              />
            ))}
          </div>
          <div className="flex items-center place-self-end md:place-self-auto pb-4 md:pb-0">
            <p className="text-xl md:text-2xl uppercase">Visit</p>
            <Arrow className="w-7 h-7 md:w-9 md:h-9 ml-4 group-hover:translate-x-3 duration-150" />
          </div>
        </div>
      </a>
    </article>
  );
};

export default Project;
