import Desc from "@/components/atoms/Desc";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import React from "react";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { BlurFade } from "@/components/ui/BlurFade";

const educations = [
  {
    title: "SMK TI Bali Global Badung",
    imageSrc: "/images/smkti.jpg",
    content:
      "Developed responsive user interfaces and optimized performance across multiple browsers.",
    year: "Aug 2025 - Jan 2026",
  }
];

export default function EducationsPages() {
  return (
    <Section className="flex-col">
      <BlurFade delay={0.1} inView>
        <div className="flex flex-col gap-3">
          <Heading>Education</Heading>
          <Desc className="max-w-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laboriosam, nemo eveniet rem itaque rerum iusto quos eos
            reprehenderit quaerat corporis culpa tenetur praesentium in.
          </Desc>
        </div>
      </BlurFade>

      <div className="flex flex-col w-full gap-3 mt-8">
        {educations.map((exp, i) => (
          <BlurFade key={i} delay={0.2 + i * 0.1} inView>
            <ExperienceCard {...exp} />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
