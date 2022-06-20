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
    margin-bottom: 60px;
  }

  > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const CardsContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
`;

const Card = styled("a")`
  position: relative;
  background: #999;
  padding: 120px;
  color: #fff;
  overflow: hidden;

  & > span {
    transition: 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    & > span {
      transform: scale(1.1);
    }
  }
`;

const CardContentContainer = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
          <p>
            Where I work on creating design systems, improveing our client&#39;s
            websites, web apps, and development structure, and maintaining our
            client&#39;s websites and web apps.
          </p>
        </SectionContainer>
        <SectionContainer>
          <h2>On projects such as</h2>
          <CardsContainer>
            <Card href="https://www.maandag.nl/">
              <Image
                layout="fill"
                src="/projects/maandag.png"
                alt="Maandag homepage screenshot"
              />
              <CardContentContainer>
                <h3>Maandag</h3>
              </CardContentContainer>
            </Card>
            <Card href="https://design.maandag.nl/2b79382ac/p/56989d-overview">
              <Image
                layout="fill"
                src="/projects/maandag-design-system.png"
                alt="Maandag homepage screenshot"
              />
              <CardContentContainer>
                <h3>Maandag design system</h3>
              </CardContentContainer>
            </Card>
            <Card href="https://www.carucontainers.com/nl-nl">
              <Image
                layout="fill"
                src="/projects/caru-containers.png"
                alt="Maandag homepage screenshot"
              />
              <CardContentContainer>
                <h3>Caru</h3>
              </CardContentContainer>
            </Card>
          </CardsContainer>
        </SectionContainer>
        <SectionContainer>
          <h2>Where I mostly work with:</h2>
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
          <p>
            Always looking at optimizing my workflow and automating repetitive
            tasks. Thats why I picked up skills like zsh scripting and work with
            tools such as <a href="https://neovim.io/">Neovim</a> and{" "}
            <a href="https://github.com/tmux/tmux/wiki">Tmux</a>. In my terminal
            I feel most confident and I don&#39;t need any other tool besides
            it.
          </p>
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
