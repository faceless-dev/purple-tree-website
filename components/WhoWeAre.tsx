"use client";

import React from "react";
import { HEADING_VARIANTS, Heading } from "./base/Heading";
import { InView } from "react-intersection-observer";
import classNames from "classnames";

//TODO: Letter Spacing doesnt work anymore

export const WhoWeAre = ({ ...rest }) => {
  return (
    <div
      className={classNames("flex mt-36 p-12 md:mt-36 lg:mt-40 flex-col mx-3 md:mx-9 lg:mx-80 space-y-3 md:space-y-4 lg:space-y-7")}
      {...rest}
    >
      <InView>
        {({ ref, inView }) => (
          <div
            ref={ref}
            className={classNames(
              "transition-all duration-1000 delay-100",
              inView ? "translate-y-0" : "translate-y-14",
              inView ? "opacity-100" : "opacity-0"
            )}
          >
            <Heading variant={HEADING_VARIANTS.H1}>Who are we?</Heading>
          </div>
        )}
      </InView>
      <InView>
        {({ ref, inView }) => (
          <div
            ref={ref}
            className={classNames("transition-opacity duration-1000 delay-200", inView ? "opacity-100" : "opacity-0")}
          >
            <Heading variant={HEADING_VARIANTS.H2}>get to know us.</Heading>
          </div>
        )}
      </InView>
      <InView>
        {({ ref, inView }) => (
          <p
            ref={ref}
            className={classNames(
              "text-white font-light text-xs md:text-base lg:text-lg text-center tracking-wider md:tracking-widest leading-6",
              "transition-opacity duration-1000 delay-300",
              inView ? "opacity-100" : "opacity-0"
            )}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore
          </p>
        )}
      </InView>
    </div>
  );
};
