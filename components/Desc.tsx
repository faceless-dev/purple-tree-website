import React from "react";
import { HEADING_VARIANTS, Heading } from "./base/Heading";

export const Desc = () => {
  return (
    <div className="flex mt-36 flex-col ml-80 mr-80 space-y-7">
      <label className="text-white text-3xl tracking-widest self-center">
        Who are we?
      </label>
      <p className=" text-white font-light text-base text-center tracking-widest leading-9">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore{" "}
      </p>
    </div>
  );
};
