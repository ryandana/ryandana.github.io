"use client";

import { cn } from "@/lib/utils";
import { TablerIcon } from "@tabler/icons-react";

interface SkillsCardProps {
  name: string;
  icon: TablerIcon;
  category?: string;
  className?: string;
}

export default function SkillsCard({
  name,
  icon: Icon,
  category,
  className,
}: SkillsCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
        <Icon
          className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110 relative z-10"
          stroke={1.5}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
      </div>

      <div className="relative z-10 text-center space-y-1">
        <h3 className="font-semibold text-sm bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
          {name}
        </h3>
        {category && (
          <p className="text-xs text-muted-foreground group-hover:text-foreground/60 transition-colors duration-300">
            {category}
          </p>
        )}
      </div>

      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
