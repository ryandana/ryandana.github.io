"use client";

import ContactCard from "@/components/ui/ContactCard";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";
import Heading from "@/components/atoms/Heading";
import Desc from "@/components/atoms/Desc";
import Section from "@/components/atoms/Section";
import { BlurFade } from "@/components/ui/BlurFade";

export default function ContactPages() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      href: "https://linkedin.com/in/yourprofile",
      username: "@yourprofile",
    },
    {
      name: "GitHub",
      icon: IconBrandGithub,
      href: "https://github.com/yourusername",
      username: "@yourusername",
    },
    {
      name: "Instagram",
      icon: IconBrandInstagram,
      href: "https://instagram.com/yourhandle",
      username: "@yourhandle",
    },
    {
      name: "Email",
      icon: IconMail,
      href: "mailto:your@email.com",
      username: "your@email.com",
    },
  ];

  return (
    <Section className="flex-col">
      <BlurFade delay={0.1} inView>
        <div className="flex flex-col gap-3">
          <Heading>Get In Touch</Heading>
          <Desc className="max-w-xl">
            Feel free to reach out to me through any of these platforms. I&apos;m
            always open to discussing new projects and opportunities.
          </Desc>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
        {contacts.map((contact, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.1} inView>
            <ContactCard
              name={contact.name}
              icon={contact.icon}
              href={contact.href}
              username={contact.username}
            />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
