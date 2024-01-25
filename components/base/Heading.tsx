import classNames from "classnames";
import React from "react";

export const HeadingVariant = {
  H1: "H1",
  H2: "H2",
} as const;

export interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  variant?: keyof typeof HeadingVariant;
}

export const Heading = ({ children, variant = "H1", className, ...rest }: HeadingProps) => {
  if (variant === HeadingVariant.H2)
    return (
      <h2
        className={classNames("font-normal text-white tracking-[0.15em] md:text-2xl text-center", className)}
        {...rest}
      >
        {children}
      </h2>
    );

  return (
    <h1
      className={classNames(
        "uppercase font-bold tracking-[0.3em] md:text-5xl text-purple text-center drop-shadow-header text-2xl",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};
