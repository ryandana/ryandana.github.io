import Desc from "@/components/atoms/Desc";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import React from "react";

export default function ExperiencePages() {
  return (
    <Section className="flex-col">
      <div className="flex flex-col gap-3">
        <Heading>Education</Heading>
        <Desc className="max-w-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
          nemo eveniet rem itaque rerum iusto quos eos reprehenderit quaerat
          corporis culpa tenetur praesentium in.
        </Desc>
      </div>
    </Section>
  );
}
