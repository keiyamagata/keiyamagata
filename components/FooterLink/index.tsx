import Link from "next/link";
import Arrow from "./Arrow";

const FooterLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden w-fit rounded-full focus-visible:outline-4 focus-visible:outline-secondary"
    >
      <div className="w-fit flex items-center px-6 md:px-12 py-2 md:py-4 rounded-full border border-secondary text-secondary footer-link-bg">
        <p className="text-3xl md:text-5xl uppercase">{text}</p>
        <Arrow className="w-12 h-12 ml-4 group-hover:-rotate-45 duration-150" />
      </div>
    </Link>
  );
};

export default FooterLink;
