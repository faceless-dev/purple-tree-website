import React from "react";
import { Card } from "./base/Card";
import { HEADING_VARIANTS, Heading } from "./base/Heading";

export interface CardsProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  subline: string;
}

export const Cards = ({ headline, subline }: CardsProps) => {
  return (
    <div className="flex flex-col  space-y-24 mt-44 ">
      <div className="flex flex-col ">
        <Heading>{headline}</Heading>
        <Heading variant={HEADING_VARIANTS.H2}>{subline}</Heading>
      </div>
    </div>
  );
};

//Auskommentiert
<div className="flex md:flex-col md:justify-center md:space-y-20 sm:flex-col sm:justify-center sm:space-y-20 lg:flex-row lg:items-stretch lg:space-x-20">
  <Card
    cardName={"Design"}
    cardTag={"create"}
    text={
      "Lorem ipsum dolor sit amet irmod tempor invidunt ut labore et dolore magna aliquyam erat, sed dia voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stetclita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit"
    }
    imagePath={"/assets/CardDesign.svg"}
  />

  <Card
    cardName={"Code"}
    cardTag={"coding"}
    text={"Lorem ipsum dolor sit amet "}
    imagePath={"/assets/CardCode.svg"}
  />

  <Card
    cardName={"Website Templates"}
    cardTag={"easy"}
    text={"Lorem ipsum dolor sit amet"}
    imagePath={"/assets/CardWebsite.svg"}
  />
</div>;
