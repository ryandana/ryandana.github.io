import React, { ReactNode } from 'react'

type SectionProps = {
    id?: string,
    className?: string,
    children: ReactNode
}

export default function Section({children, className = "", id= ""}:SectionProps) {
  return (
    <section id={id} className={`max-w-5xl mx-auto w-full bg-background lg:px-0 py-12 px-6 ${className}`}>
        {children}
    </section>
  )
}