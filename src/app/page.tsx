import { Link } from "@/components/Link/Link";
import * as styles from "./page.css";

export default function Home() {
  return (
    <div className={styles.linksContainer}>
      <Link
        href="https://www.linkedin.com/in/damian-veltkamp-209a57108/"
        text="Linkedin"
      />
      <Link href="https://github.com/damianveltkamp" text="Github" />
    </div>
  );
}
