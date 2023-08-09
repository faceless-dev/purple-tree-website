import React from "react";
import Image from "next/image";
import ButtonCTA from "./base/Button";
import { BUTTON_VARIANTS } from "../utils/enums";

export const Header = () => {
  return (
    <div className="flex justify-between py-5 px-10 border-b-2 border-b-purple shadow-card border-opacity-50">
      <Image
        src="/assets/logo_header.svg"
        width={142}
        height={65}
        alt="Purple Tree"
      ></Image>
      <div className="my-auto">
        <ButtonCTA variant={BUTTON_VARIANTS.SECONDARY}>contact us</ButtonCTA>
      </div>
    </div>
  );
};
