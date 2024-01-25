"use client";

import classNames from "classnames";
import React from "react";
import { ButtonVariants } from "../../utils/enums";
import { ButtonProps } from "../../utils/interfaces";
import { scrollDown } from "../../utils/scrollDown";

const Button = ({ variant = ButtonVariants.PRIMARY, scrollDownOnClick, onClick: onClickHandler, children, ...rest }: ButtonProps) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (scrollDownOnClick) {
      scrollDown();
      return;
    }

    onClickHandler?.(event);
  };
  return (
    <button
      onClick={onClick}
      className={classNames(
        "rounded-md px-6 text-center md:border border-purple text-md tracking-[0.15em] leading-3 transition-colors duration-200 h-fit py-4",
        variant === ButtonVariants.PRIMARY && "text-white bg-purple hover:bg-transparent",
        variant === ButtonVariants.SECONDARY && "text-purple bg-transparent hover:bg-purple hover:text-white",
        variant === ButtonVariants.MOBILE && "text-purple bg-transparent border-2 text-2xl border-purple"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
