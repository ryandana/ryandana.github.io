import Section from "@/components/atoms/Section";
import Image from "next/image";
import React from "react";
import Heading from "@/components/atoms/Heading";
import {Button} from "@/components/atoms/Button";
import {IconArrowDown, IconQuestionMark} from "@tabler/icons-react";
import Link from "next/link";
import Desc from "@/components/atoms/Desc";
import {SparklesText} from "@/components/ui/SparklesText";
import {BlurFade} from "@/components/ui/BlurFade";

function HeroPages() {
    return (
        <Section id="home" className="flex flex-col items-center justify-center gap-y-6">
            <BlurFade delay={0}>
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
                <Desc>Hi!, I am a fullstack developer and like creating modern web applications.</Desc>
            </BlurFade>
            <div className="flex items-center gap-3">
                <BlurFade delay={0.3}>

                    <Link className="flex gap-1 items-center" href="#about">
                        <Button className="cursor-pointer" variant="default">Scroll for more<IconArrowDown
                            size={20}/></Button>
                    </Link>
                </BlurFade>
                <BlurFade delay={0.4}>

                    <Link className="flex gap-1 items-center" href="#contact">
                        <Button className="cursor-pointer" variant="secondary">Wanna Talk<IconQuestionMark
                            size={20}/></Button>
                    </Link>
                </BlurFade>
            </div>
        </Section>
    );
}

export default HeroPages;
