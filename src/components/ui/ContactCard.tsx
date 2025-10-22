"use client";

import { cn } from "@/lib/utils";
import { TablerIcon } from "@tabler/icons-react";
import Link from "next/link";

interface ContactCardProps {
  name: string;
  icon: TablerIcon;
  href: string;
  username?: string;
  className?: string;
}

export default function ContactCard({
  name,
  icon: Icon,
  href,
  username,
  className,
}: ContactCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex items-center gap-4 p-5 rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />

      <div className="relative z-10 flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-md scale-0 group-hover:scale-150 transition-transform duration-500" />
        <div className="relative p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 ring-2 ring-primary/20 group-hover:ring-primary/40">
          <Icon
            className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            stroke={1.75}
          />
        </div>
      </div>

      <div className="relative z-10 flex-1 min-w-0">
        <h3 className="font-bold text-base mb-0.5 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary/90 group-hover:to-primary/70 transition-all duration-300">
          {name}
        </h3>
        {username && (
          <p className="text-xs text-muted-foreground group-hover:text-primary/80 transition-colors duration-300 truncate">
            {username}
          </p>
        )}
      </div>

      <div className="relative z-10 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <svg
          className="w-5 h-5 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>

      <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-1 h-1 rounded-full bg-primary" />
          <div className="w-1 h-1 rounded-full bg-primary" />
          <div className="w-1 h-1 rounded-full bg-primary" />
          <div className="w-1 h-1 rounded-full bg-primary" />
        </div>
      </div>
    </Link>
  );
}
