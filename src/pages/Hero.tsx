import Section from "@/components/atoms/Section";
import Image from "next/image";
import React from "react";
import Heading from "@/components/atoms/Heading";
import {Button} from "@/components/atoms/Button";
import {IconArrowDown, IconQuestionMark} from "@tabler/icons-react";

function Hero() {
    return (
        <Section className="flex flex-col items-center justify-center gap-y-6">
            <Image
                src="/pfp.jpeg"
                alt="pfp"
                width="240"
                height="240"
                className="rounded-full aspect-square"
            />
            <Heading value="I Putu Ryan Dana Putra"/>
            <div className="flex items-center gap-3">
                <Button className="cursor-pointer" variant="default">Scroll for more <IconArrowDown size={20}/></Button>
                <Button className="cursor-pointer" variant="secondary">Wanna Talk?<IconQuestionMark size={20}/></Button>
            </div>
        </Section>
    );
}

export default Hero;
