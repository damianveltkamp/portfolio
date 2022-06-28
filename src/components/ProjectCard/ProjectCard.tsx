import Image from "next/image";
import {
  ProjectCardContainer,
  ProjectCardContentContainer,
} from "./styles/ProjectCard";

type ProjectCardProps = {
  title: string;
  href: string;
  rel: string;
  target: string;
  image: {
    src: string;
    alt: string;
  };
};

export const ProjectCard = ({
  title,
  href,
  rel,
  target,
  image,
}: ProjectCardProps) => {
  return (
    <ProjectCardContainer href={href} rel={rel} target={target}>
      <Image layout="fill" src={image.src} alt={image.alt} />
      <ProjectCardContentContainer>
        <h3>{title}</h3>
      </ProjectCardContentContainer>
    </ProjectCardContainer>
  );
};
