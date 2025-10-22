import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/atoms/Card";
import { ExprienceProps } from "@/types/types";
import { Badge } from "@/components/atoms/Badge";

export default function ExperienceCard({
  title,
  imageSrc,
  content,
  year,
}: ExprienceProps) {
  return (
    <Card className="group relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border border-muted/50 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-muted/30 group-hover:ring-primary/50 transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Image shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12 z-20" />

        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 80px, 96px"
        />
      </div>

      <CardContent className="flex-1 p-0 space-y-2 relative z-10">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <CardTitle className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
            {title}
          </CardTitle>
          {year && (
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300"
            >
              {year}
            </Badge>
          )}
        </div>

        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {content}
        </p>

        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </CardContent>
    </Card>
  );
}
