"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconX,
  IconMail,
  IconMenu2,
} from "@tabler/icons-react";
import { Button } from "../atoms/Button";

interface SocialLink {
  href: string;
  icon: ReactNode;
  label?: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "mailto:puturyandana@gmail.com",
    icon: <IconMail size={35} />,
    label: "Email",
  },
  {
    href: "https://instagram.com/ryandnp_",
    icon: <IconBrandInstagram size={35} />,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/in/ryandanaputra",
    icon: <IconBrandLinkedin size={35} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ryandana",
    icon: <IconBrandGithub size={35} />,
    label: "GitHub",
  },
];

export default function SocialBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end gap-3 z-50">
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {socialLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            target="_blank"
            aria-label={link.label}
          >
            <Button variant={"secondary"}>{link.icon}</Button>
          </Link>
        ))}
      </div>

      <Button
        variant={"secondary"}
        onClick={() => setOpen(!open)}
        aria-label="Toggle Social Menu"
      >
        {open ? <IconX size={35} /> : <IconMenu2 size={35} />}
      </Button>
    </div>
  );
}
