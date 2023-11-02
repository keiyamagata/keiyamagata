import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type TypographyProps = {
  type: "section-title" | "sub-title" | "big-paragraph" | "paragraph";
  content: string;
  className?: string;
};

const Typography = ({ type, content, className }: TypographyProps) => {
  return (
    <>
      {type === "section-title" && (
        <h2
          className={`${montserrat.className} ${className} text-4xl md:text-8xl xl:text-9xl text-primary font-bold uppercase tracking-tight`}
        >
          {content}
        </h2>
      )}
      {type === "sub-title" && (
        <h3
          className={`${montserrat.className} ${className} text-xl md:text-2xl font-bold pb-4`}
        >
          {content}
        </h3>
      )}
      {type === "big-paragraph" && (
        <p
          className={`${montserrat.className} ${className} text-2xl leading-relaxed md:text-3xl md:leading-relaxed`}
        >
          {content}
        </p>
      )}
      {type === "paragraph" && (
        <p
          className={`${montserrat.className} ${className} text-lg leading-relaxed md:text-xl md:leading-relaxed`}
        >
          {content}
        </p>
      )}
    </>
  );
};

export default Typography;
