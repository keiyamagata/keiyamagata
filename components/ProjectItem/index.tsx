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
        <div className="h-40 grid grid-cols-3 place-items-center">
          <Typography type="project-title" text={name} />
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
          <div className="flex items-center">
            <p className="text-3xl">Visit</p>
            <Arrow className="w-12 h-12 ml-4 group-hover:translate-x-4 duration-150" />
          </div>
        </div>
      </a>
    </article>
  );
};

export default Project;
