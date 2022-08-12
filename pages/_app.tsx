import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import { MainContainer, theme } from "@damianveltkamp/dvds";
import { ThemeProvider } from "@emotion/react";
import DamianLogo from "../src/icons/logo.svg";
import GithubLogo from "../src/icons/github-brands.svg";
import { Icon } from "../src/components/Icon/Icon";
import "../src/styles/globals.css";

const HeaderContainer = styled("header")`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

function MyApp({ Component, pageProps }: AppProps) {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <a
          aria-label="Damian Veltkamp logo"
          href="https://www.damianveltkamp.tech/"
        >
          <Icon width="45px" icon={DamianLogo} />
        </a>
        <a
          aria-label="Github logo"
          href="https://github.com/damianveltkamp"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={GithubLogo} />
        </a>
      </HeaderContainer>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </ThemeProvider>
  );
}

export default MyApp;
