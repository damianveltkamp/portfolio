import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { MainContainer, theme } from "@damianveltkamp/dvds";
import { ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ThemeProvider>
  );
}

export default MyApp;
