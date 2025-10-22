"use client";

import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { ExternalLink } from "lucide-react";
import { ProjectsProps } from "@/types/types";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

export default function ProjectsCard({
  title,
  imageSrc,
  desc,
  badgeFirst,
  badgeSecond,
  previewUrl,
  sourceUrl,
}: ProjectsProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-1">
      {/* Decorative gradient overlay on card */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
      
      {/* Optimized Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5]" />
        <Image
          src={imageSrc}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Image overlay shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-3 p-5 z-10">
        <div className="flex flex-wrap gap-2">
          {badgeFirst && (
            <Badge 
              variant="default" 
              className="transition-transform duration-300 group-hover:scale-105"
            >
              {badgeFirst}
            </Badge>
          )}
          {badgeSecond && (
            <Badge 
              variant="secondary"
              className="transition-transform duration-300 group-hover:scale-105"
            >
              {badgeSecond}
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold leading-snug tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
          {desc}
        </p>

        {/* Buttons (optional) */}
        {(previewUrl || sourceUrl) && (
          <div className="mt-3 flex flex-wrap gap-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {previewUrl && (
              <Button asChild size="sm" className="gap-2">
                <Link href={previewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Preview
                </Link>
              </Button> 
            )}
            {sourceUrl && (
              <Button asChild size="sm" variant="outline" className="gap-2">
                <Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub className="h-4 w-4" />
                  Source
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Decorative corner glow */}
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </article>
  );
}