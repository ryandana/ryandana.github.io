import React from 'react'
import Section from "@/components/atoms/Section";
import Heading from "@/components/atoms/Heading";
import Desc from "@/components/atoms/Desc";
import Link from "next/link";

export default function About() {
    return (
        <Section id="about" className="flex flex-col py-12">
            <div className="flex w-full justify-between">
                <div className="flex flex-col gap-4">
                    <Heading>About Me!</Heading>
                    <Desc className="max-w-xl text-justify">
                        I am a high school IT student at TI Global Badung. I’ve
                        always been a tech enthusiast who loves
                        staying up to date with the latest technology. I also have experience participating in, and even
                        winning, <Link className="text-foreground font-semibold underline" href="#competition">several competitions.</Link></Desc>
                </div>
            </div>
        </Section>
    )
}


