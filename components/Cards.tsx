import React from "react";
import { Card } from "./base/Card";
import { HEADING_VARIANTS, Heading } from "./base/Heading";

export interface CardsProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  subline: string;
}

export const Cards = ({ headline, subline }: CardsProps) => {
  return (
    //Wenn man von 1024px runter scaled gehen die Karten kurz vor md aus dem Bild
    <div className="flex flex-col space-y-24 mt-44">
      <div className="flex flex-col gap-4">
        <Heading>{headline}</Heading>
        <div className="">
          <Heading variant={HEADING_VARIANTS.H2}>{subline}</Heading>
        </div>
      </div>
      <div className="flex flex-col self-center lg:flex-row gap-10">
        <Card
          cardName={"Design"}
          cardTag={"create"}
          text={"Lorem ipsum dolor sit amet"}
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
      </div>
      ;
    </div>
  );
};

//Auskommentiert
