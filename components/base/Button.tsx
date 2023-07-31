import classNames from "classnames";
import React from "react";

export enum BUTTON_VARIANTS {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANTS;
}

export const ButtonCTA = ({ onClick, variant = BUTTON_VARIANTS.PRIMARY, children, ...rest }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "rounded-md px-6 text-center border border-purple text-md tracking-[0.15em] transition-colors duration-200 h-fit py-2",
        variant === BUTTON_VARIANTS.PRIMARY && "text-white bg-purple hover:bg-transparent",
        variant === BUTTON_VARIANTS.SECONDARY && "text-purple bg-transparent hover:bg-purple hover:text-white"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
