import React from "react";
import { Card } from "./base/Card";
import { HeadingVariant, Heading } from "./base/Heading";

export interface CardsProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  subline: string;
}

export const Cards = ({ headline, subline }: CardsProps) => {
  return (
    //TODO: Wenn man von 1024px runter scaled gehen die Karten kurz vor md aus dem Bild
    <div className="flex flex-col space-y-24 mt-44">
      <div className="flex flex-col gap-4">
        <Heading>{headline}</Heading>
        <div className="">
          <Heading variant={"H2"}>{subline}</Heading>
        </div>
      </div>
      <div className="flex flex-col  self-center lg:flex-row gap-20">
        <Card
          cardName={"Blueprint Vision"}
          cardTag={"think"}
          text={"Crafting your vision with expert planning and continuous collaboration, ensuring every project uniquely fits your needs."}
          imagePath={"/assets/CardDesign.svg"}
        />

        <Card
          cardName={"Excellence Embodied"}
          cardTag={"design"}
          text={"Our designs give life to your brand. Purple Tree combines aesthetics and functionality for a memorable first impression."}
          imagePath={"/assets/CardWebsite.svg"}
        />

        <Card
          cardName={"Mastery Craft"}
          cardTag={"develop"}
          text={
            "Mastering simple, spot-on digital solutions. We transform complex challenges into user-friendly experiences with technical finesse."
          }
          imagePath={"/assets/CardCode.svg"}
        />
      </div>
      ;
    </div>
  );
};
