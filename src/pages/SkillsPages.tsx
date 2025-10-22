"use client";

import Desc from "@/components/atoms/Desc";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import SkillsCard from "@/components/ui/SkillCard";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandFigma,
  IconBrandMysql,
  IconBrandLaravel,
  IconBrandUbuntu,
} from "@tabler/icons-react";

export default function SkillsPages() {
  const techStack = [
    { name: "Figma", icon: IconBrandFigma, category: "Design" },
    { name: "Tailwind CSS", icon: IconBrandTailwind, category: "Styling" },
    { name: "TypeScript", icon: IconBrandTypescript, category: "Language" },
    { name: "React", icon: IconBrandReact, category: "Frontend" },
    { name: "Next.js", icon: IconBrandNextjs, category: "Framework" },
    { name: "Laravel", icon: IconBrandLaravel, category: "Framework" },
    { name: "Node.js", icon: IconBrandNodejs, category: "Backend" },
    { name: "MySQL", icon: IconBrandMysql, category: "Database" },
    { name: "Linux", icon: IconBrandUbuntu, category: "Server" },
    { name: "Git", icon: IconBrandGit, category: "Version Control" },
  ];

  return (
    <Section>
      <div className="space-y-4 mb-8">
        <Heading>Skills</Heading>
        <Desc>
          Technologies and tools I use to bring ideas to life
        </Desc>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techStack.map((tech, index) => (
          <SkillsCard
            key={index}
            name={tech.name}
            icon={tech.icon}
            category={tech.category}
          />
        ))}
      </div>
    </Section>
  );
}