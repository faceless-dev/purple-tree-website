import React from "react";
import { HEADING_VARIANTS, Heading } from "./base/Heading";

//Letter Spacing doesnt work anymore

export const Desc = () => {
  return (
    <div className="flex mt-36 p-12 md:mt-36 lg:mt-40 flex-col mx-3 md:mx-9 lg:mx-80 space-y-3 md:space-y-4 lg:space-y-7">
      <div className="">
        <Heading variant={HEADING_VARIANTS.H1}>Who we are</Heading>
      </div>
      <div className="">
        <Heading variant={HEADING_VARIANTS.H2}>Get to Know Us:</Heading>
      </div>
      <p className="text-white font-light text-xs md:text-base lg:text-lg text-center tracking-wider md:tracking-widest leading-6">
        At Purple Tree, we are a vibrant team dedicated to empowering small to
        medium-sized businesses in their digital journey. Our mission is to
        bridge the IT gap by offering bespoke and affordable web solutions. With
        a blend of creativity and technical expertise, we translate your vision
        into a digital identity that resonates with your audience.{" "}
      </p>
    </div>
  );
};
