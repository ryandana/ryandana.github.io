import Section from "@/components/atoms/Section";
import Image from "next/image";
import React from "react";
import Heading from "@/components/atoms/Heading";
import { Button } from "@/components/atoms/Button";
import { IconArrowDown, IconQuestionMark } from "@tabler/icons-react";
import Link from "next/link";
import Desc from "@/components/atoms/Desc";
import { SparklesText } from "@/components/ui/SparklesText";
import { BlurFade } from "@/components/ui/BlurFade";

function HeroPages() {
  return (
    <Section id="home" className="flex justify-between items-center">
      {/* <BlurFade delay={0}>
                <Image
                    src="/pfp.jpeg"
                    alt="pfp"
                    width="240"
                    height="240"
                    className="rounded-full aspect-square"
                />
            </BlurFade>
            <BlurFade delay={0.1}>
                <SparklesText sparklesCount={4}><Heading>Ryan Dana</Heading></SparklesText>
            </BlurFade>
            <BlurFade delay={0.2}>
                <Desc className="md:text-start text-center">Hi!, I am a fullstack developer and i love creating modern web applications.</Desc>
            </BlurFade>
            <div className="flex items-center gap-3">
                <BlurFade delay={0.3}>

                    <Link className="flex gap-1 items-center" href="#about">
                        <Button className="cursor-pointer" variant="default">Download CV<IconArrowDown
                            size={20}/></Button>
                    </Link>
                </BlurFade>
                <BlurFade delay={0.4}>

                    <Link className="flex gap-1 items-center" href="#contact">
                        <Button className="cursor-pointer" variant="secondary">Wanna Talk<IconQuestionMark
                            size={20}/></Button>
                    </Link>
                </BlurFade>
            </div> */}
      <div className="flex flex-col gap-5">
        <BlurFade delay={0.1}>
          <SparklesText className="flex gap-1" sparklesCount={4}>
            <Heading>Ryan Dana</Heading>
          </SparklesText>
        </BlurFade>
        <BlurFade delay={0.2}>
          <Desc className="md:max-w-xl sm:max-w-lg max-w-xs text-justify">
            Crafting digital experiences with code and creativity. Specialized
            in building modern web applications with cutting-edge technologies.
          </Desc>
        </BlurFade>
        <div className="flex items-center gap-3">
          <BlurFade delay={0.3}>
            <Link className="flex gap-1 items-center" href="#about">
              <Button className="cursor-pointer" variant="default">
                Download CV
                <IconArrowDown size={20} />
              </Button>
            </Link>
          </BlurFade>
          <BlurFade delay={0.4}>
            <Link className="flex gap-1 items-center" href="#contact">
              <Button className="cursor-pointer" variant="secondary">
                Wanna Talk
                <IconQuestionMark size={20} />
              </Button>
            </Link>
          </BlurFade>
        </div>
      </div>
      <BlurFade delay={0}>
        <Image
          src="/pfp.jpeg"
          alt="pfp"
          width={240}
          height={240}
          className="rounded-full aspect-square w-30 sm:w-32 md:w-40 lg:w-60"
        />
      </BlurFade>
    </Section>
  );
}

export default HeroPages;
