import React, { ReactNode } from 'react'

type SectionProps = {
    id?: string,
    className?: string,
    children: ReactNode
}

export default function Section({children, className = ""}:SectionProps) {
  return (
    <section className={`max-w-7xl mx-auto w-full bg-background min-h-dvh lg:px-0 md:px-2 sm:px-4 px-6 ${className}`}>
        {children}
    </section>
  )
}