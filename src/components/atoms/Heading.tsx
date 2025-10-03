import React from "react";

type Heading = {
  value: string;
};

export default function Heading({ value }: Heading) {
  return <h1 className="md:text-5xl text-3xl font-semibold text-foreground">{value}</h1>;
}
