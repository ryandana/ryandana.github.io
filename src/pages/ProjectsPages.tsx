import React from "react";
import ProjectsCard from "@/components/ui/ProjectCard";
import { ProjectsProps } from "@/types/types";
import Section from "@/components/atoms/Section";
import Heading from "@/components/atoms/Heading";
import { BlurFade } from "@/components/ui/BlurFade";
import Desc from "@/components/atoms/Desc";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { IconBrandGithub } from "@tabler/icons-react";

const projects: ProjectsProps[] = [
  {
    title: "Luxe",
    imageSrc: "/images/luxe.png",
    desc: "A high-performance AI image enhancement web app built with RealESRGAN and optimized CPU tiling. It supports offline mode and OpenVINO backend for Intel iGPUs.",
    badgeFirst: "Website",
    badgeSecond: "Vite React",
    previewUrl: "https://luxury-brands-three.vercel.app",
  },
  {
    title: "Naturia",
    imageSrc: "/images/naturia.png",
    desc: "A lightweight PyQt6 desktop app with a modern glass UI to search wallpapers from Yande.re, Wallhaven, and Unsplash with NSFW filtering and HD previews.",
    badgeFirst: "Website",
    badgeSecond: "Tailwind",
    previewUrl: "https://naturia-kappa.vercel.app",
  },
  {
    title: "News Portal CMS",
    imageSrc: "/images/chronicle-cms.webp",
    desc: "A Laravel + Filament-powered CMS for managing digital articles and school news, featuring a responsive layout, Mailpit integration, and secure admin control.",
    badgeFirst: "Laravel",
    badgeSecond: "Filament",
    previewUrl: "https://chronicle.yuusha.dev",
  }
];

export default function ProjectsPages() {
  return (
    <Section id="projects">
      <div className="flex justify-between items-center w-full">
        <div className="mb-10 flex flex-col gap-3">
          <BlurFade inView delay={0.1}>
            <Heading>Featured Projects</Heading>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <Desc className="max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              libero ratione ducimus aliquam esse optio.
            </Desc>
          </BlurFade>
        </div>
        <Link
          className="md:flex hidden"
          target="_blank"
          href="https://github.com/ryandana"
        >
          <Button className="cursor-pointer" variant={"default"}>
            <IconBrandGithub />
            Visit Github
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {projects.map((project, idx) => (
          <BlurFade inView key={idx} delay={idx * 0.15}>
            <ProjectsCard {...project} />
          </BlurFade>
        ))}
      </div>
      <div className="flex w-full">
        <Link
          className="md:hidden w-full justify-center flex mt-6"
          target="_blank"
          href="https://github.com/ryandana"
        >
          <Button className="cursor-pointer" variant={"default"}>
            <IconBrandGithub />
            Visit Github
          </Button>
        </Link>
      </div>
    </Section>
  );
}
