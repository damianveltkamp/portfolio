import { HTMLAttributes } from "react";
import * as styles from "./Link.css";

type LinkProps = HTMLAttributes<HTMLAnchorElement> & {
  text: string;
  href: string;
};

export const Link = ({ text, href }: LinkProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
      {text}
    </a>
  );
};
