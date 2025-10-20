import React, {ReactNode} from "react";

type Heading = {
  children: ReactNode,
  className?: string
};

export default function Heading({ children, className="" }: Heading) {
  return <h1 className={`md:text-5xl text-3xl font-semibold text-foreground tracking-tight scroll-m-20 text-balance ${className}`}>{children}</h1>;
}
