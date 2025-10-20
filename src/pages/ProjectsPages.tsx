import React from "react";
import ProjectsCard from "@/components/ui/ProjectsCard";
import { ProjectsProps } from "@/types/types";
import Section from "@/components/atoms/Section";
import Heading from "@/components/atoms/Heading";
import { BlurFade } from "@/components/ui/BlurFade";
import Desc from "@/components/atoms/Desc";

const projects: ProjectsProps[] = [
  {
    title: "Luxe",
    imageSrc: "/images/luxe.png",
    desc: "A high-performance AI image enhancement web app built with RealESRGAN and optimized CPU tiling. It supports offline mode and OpenVINO backend for Intel iGPUs.",
    badgeFirst: "Website",
    badgeSecond: "Vite React",
    previewUrl: "https://upscale.yuusha.dev",
    sourceUrl: "https://github.com/yuusha/ai-upscaler",
  },
  {
    title: "Naturia",
    imageSrc: "/images/yandere-searcher.webp",
    desc: "A lightweight PyQt6 desktop app with a modern glass UI to search wallpapers from Yande.re, Wallhaven, and Unsplash with NSFW filtering and HD previews.",
    badgeFirst: "Website",
    badgeSecond: "PyQt6",
    sourceUrl: "https://github.com/yuusha/yandere-searcher",
  },
  {
    title: "News Portal CMS",
    imageSrc: "/images/chronicle-cms.webp",
    desc: "A Laravel + Filament-powered CMS for managing digital articles and school news, featuring a responsive layout, Mailpit integration, and secure admin control.",
    badgeFirst: "Laravel",
    badgeSecond: "Filament",
    previewUrl: "https://chronicle.yuusha.dev",
  },
  {
    title: "News Portal CMS",
    imageSrc: "/images/chronicle-cms.webp",
    desc: "A Laravel + Filament-powered CMS for managing digital articles and school news, featuring a responsive layout, Mailpit integration, and secure admin control.",
    badgeFirst: "Laravel",
    badgeSecond: "Filament",
    previewUrl: "https://chronicle.yuusha.dev",
  },
  {
    title: "News Portal CMS",
    imageSrc: "/images/chronicle-cms.webp",
    desc: "A Laravel + Filament-powered CMS for managing digital articles and school news, featuring a responsive layout, Mailpit integration, and secure admin control.",
    badgeFirst: "Laravel",
    badgeSecond: "Filament",
    previewUrl: "https://chronicle.yuusha.dev",
  },
  {
    title: "News Portal CMS",
    imageSrc: "/images/chronicle-cms.webp",
    desc: "A Laravel + Filament-powered CMS for managing digital articles and school news, featuring a responsive layout, Mailpit integration, and secure admin control.",
    badgeFirst: "Laravel",
    badgeSecond: "Filament",
    previewUrl: "https://chronicle.yuusha.dev",
  },
];

export default function ProjectsPages() {
  return (
    <Section>
      <div className="mb-12 text-center flex flex-col gap-3">
        <BlurFade inView>
          <Heading>Featured Projects</Heading>
        </BlurFade>
        <BlurFade inView delay={0.2}>
          <Desc>Haiiii</Desc>
        </BlurFade>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <BlurFade inView key={idx} delay={idx * 0.15}>
            <ProjectsCard {...project} />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
