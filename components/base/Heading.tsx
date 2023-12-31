import React from "react";

export enum HEADING_VARIANTS {
  H1 = "h1",
  H2 = "h2",
}

export interface HeadingProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  variant?: HEADING_VARIANTS;
}

export const Heading = ({
  children,
  variant = HEADING_VARIANTS.H1,
  ...rest
}: HeadingProps) => {
  if (variant === HEADING_VARIANTS.H2)
    return (
      <h2
        className="font-normal text-white tracking-[0.15em] md:text-2xl text-center"
        {...rest}
      >
        {children}
      </h2>
    );

  return (
    <h1
      className="uppercase font-bold tracking-[0.3em] md:text-5xl text-purple text-center text-2xl"
      {...rest}
    >
      {children}
    </h1>
  );
};
