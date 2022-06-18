import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";

const HtmlContainer = styled(Html)`
  background-color: #1f2937;
  color: #fff;
`;

export default function Document() {
  return (
    <HtmlContainer>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </HtmlContainer>
  );
}
