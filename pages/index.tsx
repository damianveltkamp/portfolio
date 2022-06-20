import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";

const MainContainer = styled("main")`
  max-width: 680px;
  margin: 0 auto;
`;

const SectionContainer = styled("section")`
  padding: 0 20px;
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Damian Veltkamp</title>
        <meta name="description" content="Portfolio of Damian Veltkamp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <SectionContainer>
          <h1>Greetings, my name is Damian Veltkamp</h1>
          <p>
            I have around seven years of experience with building front-end
            projects, in which I have been working as a professional for about
            two years for multiple clients. In these seven years, I have done
            two half-year Internships for two different companies where I worked
            full-time as a front-end developer in a multi-disciplinary team. Now
            I am working as a full-time remote front-end developer.
          </p>
        </SectionContainer>
        <SectionContainer>
          <h2>
            Currently working at{" "}
            <a href="https://www.deptagency.com/nl-nl/">DEPT®</a>
          </h2>
          <ul>
            <li>Creating design systems.</li>
            <li>
              Improving our client&#39;s websites, web apps, and development
              structure.
            </li>
            <li>Maintaining our client&#39;s websites and web apps.</li>
          </ul>
        </SectionContainer>
        <SectionContainer>
          <h2>What I mostly work with:</h2>
          <ul>
            <li>Typescript</li>
            <li>React</li>
            <li>NextJs</li>
            <li>Storybook</li>
            <li>Jest</li>
            <li>Html</li>
            <li>Scss</li>
          </ul>
        </SectionContainer>
        <SectionContainer>
          <h2>
            I like tinkering with my development{" "}
            <a href="https://github.com/damianveltkamp/dotfiles">setup</a>:
          </h2>
          <ul>
            <li>
              <a href="https://neovim.io/">Neovim</a>
            </li>
            <li>
              <a href="https://github.com/tmux/tmux/wiki">Tmux</a>
            </li>
            <li>Zsh scripting</li>
            <li>Automation</li>
          </ul>
        </SectionContainer>
        <SectionContainer>
          <h2>Communication and multimedia design</h2>
          <p>
            I graduated in Communication and multimedia design where I followed
            a more broad curriculum that handled subjects like:
          </p>
          <ul>
            <li>User experience</li>
            <li>Visual design</li>
            <li>Front-end development</li>
            <li>Back-end development</li>
          </ul>
        </SectionContainer>
        <SectionContainer>
          <h2>Degree&#39;s</h2>
          <ul>
            <li>
              Bachelor&#39;s degree{" "}
              <a href="https://www.hva.nl/">
                Communication and multimedia design at the HVA
              </a>
            </li>
            <li>
              VMBO level 4{" "}
              <a href="https://www.regiocollege.nl/">
                Application developer at ROC
              </a>
            </li>
          </ul>
        </SectionContainer>
      </MainContainer>

      <footer></footer>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
