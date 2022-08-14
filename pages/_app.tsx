import type { AppProps } from "next/app";
import { Footer, Header, MainContainer, theme } from "@damianveltkamp/dvds";
import { ThemeProvider } from "@emotion/react";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
