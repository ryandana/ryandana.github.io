import React from "react";
import Section from "@/components/atoms/Section";
import Heading from "@/components/atoms/Heading";
import Desc from "@/components/atoms/Desc";
import Link from "next/link";
import { BlurFade } from "@/components/ui/BlurFade";

export default function About() {
  return (
    <Section id="about" className="flex flex-col py-12">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-4">
          <BlurFade inView>
            <Heading>About Me!</Heading>
          </BlurFade>
          <BlurFade inView>
            <Desc className="max-w-xl text-justify">
              I am a high school IT student at TI Global Badung. I’ve always
              been a tech enthusiast who loves staying up to date with the
              latest technology and exploring how it shapes our daily lives. I
              have hands on experience in web development, API integration, and
              fullstack projects using JavaScript, TypeScript, and PHP. You
              can check some of my{" "}
              <Link
                className="text-foreground font-semibold underline"
                href="#projects"
              >
                personal projects.
              </Link>{" "}
              I also have experience participating in{" "}
              <Link
                className="text-foreground font-semibold underline"
                href="#competition"
              >
                several competitions
              </Link>
              , which helped me develop teamwork, creativity, and
              problem-solving skills.
            </Desc>
          </BlurFade>
        </div>
      </div>
    </Section>
  );
}
