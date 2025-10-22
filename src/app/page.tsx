import HeroPages from "@/pages/HeroPages";
import AboutPages from "@/pages/AboutPages";
import ProjectsPages from "@/pages/ProjectsPages";
import ExperiencePages from "@/pages/ExperiencePages";
import SkillsPages from "@/pages/SkillsPages";
import EducationsPages from "@/pages/EducationsPages";
import ContactPages from "@/pages/ContactsPages";

export default function Home() {
  return (
    <>
      <HeroPages />
      <AboutPages />
      <SkillsPages />
      <ProjectsPages />
      <ExperiencePages />
      <EducationsPages />
      <ContactPages />
    </>
  );
}
