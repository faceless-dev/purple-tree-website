"use client";

import React from "react";
import { HeadingVariant, Heading } from "./base/Heading";
import classNames from "classnames";

//TODO: Letter Spacing doesnt work anymore

export const WhoWeAre = ({ ...rest }) => {
  return (
    <div
      className={classNames("flex p-12 md:mt-36 lg:mt-40 flex-col mx-3 md:mx-9 lg:mx-80")}
      {...rest}
    >
      <div className={classNames("transition-all duration-1000 delay-200")}>
        <Heading variant={"H1"}>Who we are</Heading>
      </div>

      <div className={classNames("transition-opacity duration-1000 delay-200 mt-1 md:mt-2")}>
        <Heading variant={"H2"}>get to know us</Heading>
      </div>

      <p
        className={classNames(
          "text-white font-light text-xs md:text-base lg:text-lg text-center tracking-wider md:tracking-widest leading-6 mt-6 md:mt-8",
          "transition-opacity duration-1000 delay-300"
        )}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore
      </p>
    </div>
  );
};
