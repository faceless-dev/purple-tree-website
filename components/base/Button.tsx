"use client";

import classNames from "classnames";
import React from "react";
import { BUTTON_VARIANTS } from "../../utils/enums";
import { ButtonProps } from "../../utils/interfaces";

const ButtonCTA = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  children,
  ...rest
}: ButtonProps) => {
  const scrollDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollDown}
      className={classNames(
        "rounded-md px-6 text-center md:border  border-purple text-md tracking-[0.15em] leading-3 transition-colors duration-200 h-fit py-4",
        variant === BUTTON_VARIANTS.PRIMARY &&
          "text-white bg-purple hover:bg-transparent",
        variant === BUTTON_VARIANTS.SECONDARY &&
          "text-purple bg-transparent hover:bg-purple hover:text-white",
        variant === BUTTON_VARIANTS.MOBILE &&
          "text-purple bg-transparent text-2xl"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
