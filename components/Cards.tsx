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
      <div className="flex flex-col  self-center lg:flex-row gap-20">
        <Card
          cardName={"Design Prowess"}
          cardTag={"create"}
          text={
            "With a keen eye for design trends and user behavior, our team creates visually engaging websites that tell your brand's story."
          }
          imagePath={"/assets/CardDesign.svg"}
        />

        <Card
          cardName={"Technical Mastery"}
          cardTag={"code"}
          text={
            "Our coders are fluent in the latest programming languages, ensuring your website is built on a solid, future-proof foundation."
          }
          imagePath={"/assets/CardCode.svg"}
        />

        <Card
          cardName={"Custom Templates"}
          cardTag={"customize"}
          text={
            "Expertise in tailoring website templates to fit your needs means you get a unique website quickly and cost-effectively."
          }
          imagePath={"/assets/CardWebsite.svg"}
        />
      </div>
      ;
    </div>
  );
};
