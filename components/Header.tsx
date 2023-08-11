import React from "react";
import Image from "next/image";
import ButtonCTA from "./base/Button";
import { BUTTON_VARIANTS } from "../utils/enums";

export const Header = () => {
  return (
    <div className="flex justify-between  py-2 px-5 border-b-2 border-purple bg-black ">
      <div className="hidden md:block">
        <Image
          src="/assets/logo_header.svg"
          width={142}
          height={65}
          alt="Purple Tree"
        ></Image>
      </div>
      <div className="md:hidden">
        <Image
          src="/assets/logo_header_mobile.svg"
          width={48}
          height={65}
          alt="Purple Tree"
        ></Image>
      </div>

      <div className="self-center hidden md:block">
        <ButtonCTA variant={BUTTON_VARIANTS.SECONDARY}>contact us</ButtonCTA>
      </div>
    </div>
  );
};
