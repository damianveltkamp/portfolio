import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";
import { ProjectCard } from "../src/components/ProjectCard/ProjectCard";
import { ProjectCardsContainer } from "../src/components/ProjectCard/styles/ProjectCard.styles";

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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Damian Veltkamp front-end webdeveloper portfolio</title>
        <meta name="description" content="Portfolio of Damian Veltkamp" />
      </Head>

      <MainContainer>
        <SectionContainer>
          <h1>Greetings, my name is Damian Veltkamp</h1>
          <p>
            I have around seven years of experience with building front-end
            projects, in which I have been working as a professional for about
            two years for multiple clients. In these seven years, I have done
            multiple internships for multiple companies where I worked full-time
            as a front-end developer in a multi-disciplinary team. Now I am
            working as a full-time remote front-end developer.
          </p>
        </SectionContainer>
        <SectionContainer>
          <h2>
            Currently working at{" "}
            <a
              href="https://www.deptagency.com/nl-nl/"
              rel="noreferrer "
              target="_blank"
            >
              DEPT®
            </a>
          </h2>
          <p>
            Where I work on creating design systems, improveing our client&#39;s
            websites, web apps, and development structure, and maintaining our
            client&#39;s websites and web apps.
          </p>
        </SectionContainer>
        <SectionContainer>
          <h2>On projects such as</h2>
          <ProjectCardsContainer>
            <ProjectCard
              title="Maandag"
              href="https://www.maandag.nl/"
              rel="noreferrer "
              target="_blank"
              image={{
                src: "/projects/maandag.png",
                alt: "Maandag homepage screenshot",
              }}
            />
            <ProjectCard
              href="https://design.maandag.nl/2b79382ac/p/56989d-overview"
              rel="noreferrer "
              target="_blank"
              image={{
                src: "/projects/maandag-design-system.png",
                alt: "Maandag homepage screenshot",
              }}
              title="Maandag design system"
            />
            <ProjectCard
              href="https://www.carucontainers.com/nl-nl"
              rel="noreferrer "
              target="_blank"
              image={{
                src: "/projects/caru-containers.png",
                alt: "Caru homepage screenshot",
              }}
              title="Caru"
            />
            <ProjectCard
              href="https://hortus.nl/"
              rel="noreferrer "
              target="_blank"
              image={{
                src: "/projects/hortus.png",
                alt: "Hortus homepage screenshot",
              }}
              title="Hortus"
            />
            <ProjectCard
              href="https://www.juridischloket.nl/"
              rel="noreferrer "
              target="_blank"
              image={{
                src: "/projects/hetjuridischloket.png",
                alt: "Het Juridisch Loket homepage screenshot",
              }}
              title="Het Juridisch Loket"
            />
          </ProjectCardsContainer>
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
            <a
              href="https://github.com/damianveltkamp/dotfiles"
              rel="noreferrer "
              target="_blank"
            >
              setup
            </a>
            :
          </h2>
          <p>
            Always looking at optimizing my workflow and automating repetitive
            tasks. Thats why I picked up skills like zsh scripting and work with
            tools such as{" "}
            <a href="https://neovim.io/" rel="noreferrer " target="_blank">
              Neovim
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/tmux/tmux/wiki"
              rel="noreferrer "
              target="_blank"
            >
              Tmux
            </a>
            . In my terminal I feel most confident and I don&#39;t need any
            other tool besides it.
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
    props: {},
  };
}

export default Home;
