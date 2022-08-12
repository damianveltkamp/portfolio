import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "@damianveltkamp/dvds";
import { ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
