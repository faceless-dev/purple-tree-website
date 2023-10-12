import React from "react";
import { Card } from "./base/Card";
import { HEADING_VARIANTS, Heading } from "./base/Heading";

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
          <Heading variant={HEADING_VARIANTS.H2}>{subline}</Heading>
        </div>
      </div>
      <div className="flex flex-col  self-center lg:flex-row gap-20">
        <Card
          cardName={"Design Prowess"}
          cardTag={"create"}
          text={
            "Our designs breathe life into your brand. Purple Tree's creative solutions capture the essence of your company, combining aesthetics with functionality. We ensure your first digital impression is striking and memorable, so your business stands out."
          }
          imagePath={"/assets/CardDesign.svg"}
        />

        <Card
          cardName={"Technical Mastery"}
          cardTag={"code"}
          text={
            "Coding might seem like a foreign language, but to us, it's poetry. We transform complex code into seamless web experiences. Purple Tree's technical expertise means robust performance under the hood of your stylish new website, ensuring it runs smoothly for every visitor."
          }
          imagePath={"/assets/CardCode.svg"}
        />

        <Card
          cardName={"Custom Templates"}
          cardTag={"customize"}
          text={
            "We believe in simplicity without compromising on quality. Our range of website templates offers a fast track to online presence for businesses and individuals alike. Choose a template, and we'll tailor it to suit your unique brand, giving you a custom feel without the custom price tag."
          }
          imagePath={"/assets/CardWebsite.svg"}
        />
      </div>
      ;
    </div>
  );
};
