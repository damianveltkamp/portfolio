import "../styles/globals.css";
import { Footer } from "@/components/Footer/Footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import * as styles from "./layout.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Damian Veltkamp",
  description: "Portfolio showcasing Damian Veltkamps work",
  icons: "/logo/favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${styles.body}`}>
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
      </body>
    </html>
  );
}
