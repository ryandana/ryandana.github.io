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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Optimized Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {badgeFirst && <Badge variant="default">{badgeFirst}</Badge>}
          {badgeSecond && <Badge variant="secondary">{badgeSecond}</Badge>}
        </div>

        <h3 className="text-lg font-semibold leading-snug tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3">{desc}</p>

        {/* Buttons (optional) */}
        {(previewUrl || sourceUrl) && (
          <div className="mt-3 flex flex-wrap gap-2">
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
    </article>
  );
}
