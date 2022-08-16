import type { NextPage } from "next";
import Head from "next/head";
import {
  ContentBlock,
  Heading,
  Link,
  List,
  Paragraph,
  ProjectCard,
  ProjectContainer,
} from "@damianveltkamp/dvds";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Damian Veltkamp webdeveloper portfolio</title>
        <meta
          name="description"
          content="Webdeveloper portfolio of Damian Veltkamp"
        />
      </Head>
      <ContentBlock>
        <Heading lvl="h1">
          Greetings, my name is Damian Veltkamp and I am a webdeveloper
        </Heading>
        <Paragraph>
          I have around seven years of experience in building front-end and
          back-end projects, in which I have been working as a professional for
          about three years for multiple clients.
        </Paragraph>
        <Paragraph>
          In these seven years, I have done four internships for three different
          companies where I worked full-time as a front-end developer in a
          multi-disciplinary team. Now I am working as a full-time remote
          front-end developer.
        </Paragraph>
      </ContentBlock>
      <ContentBlock>
        <Heading lvl="h2">
          Currently working at{" "}
          <Link
            text="DEPT®"
            href="https://www.deptagency.com/nl-nl/"
            isExternal={true}
          />
        </Heading>
        <Paragraph>
          Where I work on creating design systems, improveing our client&#39;s
          websites, web apps, and development structure, and maintaining our
          client&#39;s websites and web apps.
        </Paragraph>
      </ContentBlock>
      <ContentBlock>
        <Heading lvl="h2">On projects such as</Heading>
        <ProjectContainer>
          <ProjectCard
            title="Maandag"
            href={{
              url: "https://www.maandag.nl/",
              isExternal: true,
            }}
            image={{
              src: "/projects/maandag.png",
              alt: "Maandag homepage screenshot",
            }}
          />
          <ProjectCard
            href={{
              url: "https://design.maandag.nl/2b79382ac/p/56989d-overview",
              isExternal: true,
            }}
            image={{
              src: "/projects/maandag-design-system.png",
              alt: "Maandag homepage screenshot",
            }}
            title="Maandag design system"
          />
          <ProjectCard
            href={{
              url: "https://www.carucontainers.com/nl-nl",
              isExternal: true,
            }}
            image={{
              src: "/projects/caru-containers.png",
              alt: "Caru homepage screenshot",
            }}
            title="Caru"
          />
          <ProjectCard
            href={{
              url: "https://hortus.nl/",
              isExternal: true,
            }}
            image={{
              src: "/projects/hortus.png",
              alt: "Hortus homepage screenshot",
            }}
            title="Hortus"
          />
          <ProjectCard
            href={{
              url: "https://www.juridischloket.nl/",
              isExternal: true,
            }}
            image={{
              src: "/projects/hetjuridischloket.png",
              alt: "Het Juridisch Loket homepage screenshot",
            }}
            title="Het Juridisch Loket"
          />
        </ProjectContainer>
      </ContentBlock>
      <ContentBlock>
        <Heading lvl="h2">Where I mostly work with:</Heading>
        <List
          items={[
            "Typescript",
            "NextJs",
            "React",
            "Storybook",
            "Styled components",
            "Html",
            "Scss",
          ]}
        />
      </ContentBlock>
      <ContentBlock>
        <Heading lvl="h2">
          I like tinkering with my development{" "}
          <Link
            text="setup"
            href="https://github.com/damianveltkamp/dotfiles"
            isExternal={true}
          />
        </Heading>
        <Paragraph>
          Always looking at optimizing my workflow and automating repetitive
          tasks. Thats why I picked up skills like zsh scripting and work with
          tools such as{" "}
          <Link text="Neovim" href="https://neovim.io/" isExternal={true} /> and{" "}
          <Link
            text="Tmux"
            href="https://github.com/tmux/tmux/wiki"
            isExternal={true}
          />
          . In my terminal I feel most confident and I don&#39;t need any other
          tool besides it.
        </Paragraph>
      </ContentBlock>
      <ContentBlock>
        <Heading lvl="h2">Communication and multimedia design</Heading>
        <Paragraph>
          I graduated in Communication and multimedia design where I followed a
          more broad curriculum that handled subjects like:
        </Paragraph>
        <List
          items={[
            "Front-end development",
            "Back-end development",
            "Data visualization",
            "User experience",
            "Visual design",
          ]}
        />
      </ContentBlock>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
