import React from "react";
import { Card } from "./base/Card";
import { HEADING_VARIANTS, Heading } from "./base/Heading";

export interface CardsProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  subline: string;
}

export const Cards = ({ headline, subline }: CardsProps) => {
  return (
    <div className="flex flex-col space-y-24 mt-24">
      <div className="flex flex-col space-y-10">
        <Heading>{headline}</Heading>
        <Heading variant={HEADING_VARIANTS.H2}>{subline}</Heading>
      </div>
      <div className="flex items-stretch space-x-20">
        <Card
          label={"Design"}
          slabel={"create"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam "
          }
          imagepath={"/assets/CardDesign.svg"}
        />

        <Card
          label={"Code"}
          slabel={"coding"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam "
          }
          imagepath={"/assets/CardCode.svg"}
        />

        <Card
          label={"Website Templates"}
          slabel={"easy"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam "
          }
          imagepath={"/assets/CardWebsite.svg"}
        />
      </div>
    </div>
  );
};
