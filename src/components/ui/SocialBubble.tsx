"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconX,
  IconPhone,
} from "@tabler/icons-react";

interface SocialLink {
  href: string;
  icon: ReactNode;
  label?: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://instagram.com/ryandana",
    icon: <IconBrandInstagram size={22} />,
    label: "Instagram",
  },
  {
    href: "https://github.com/ryandana",
    icon: <IconBrandGithub size={22} />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/ryandana",
    icon: <IconBrandLinkedin size={22} />,
    label: "LinkedIn",
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
            className="bg-secondary text-secondary-foreground p-3 rounded-full shadow-md transition-transform"
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Social Menu"
        className="bg-secondary text-secondary-foreground p-3 rounded-full shadow-lg transition-transform"
      >
        {open ? <IconX size={22} /> : <IconPhone size={22} />}
      </button>
    </div>
  );
}
