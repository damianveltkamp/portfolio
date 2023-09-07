import { HTMLAttributes } from "react";
import * as styles from "./Footer.css";

type FooterProps = HTMLAttributes<HTMLDivElement>;

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`${styles.container} ${className}`}>
      <p>Thanks for visiting! 🖤</p>
    </footer>
  );
};
