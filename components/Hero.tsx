import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { ButtonVariants } from "../utils/enums";
import Button from "./base/Button";

const Hero = ({ imageRef }: { imageRef: React.RefObject<HTMLImageElement> }) => {
  return (
    <div className={classNames("p-2 items-center flex justify-center flex-col gap-8 max-w-[200px] max-h-[200px] -z-50")}>
      <Image
        ref={imageRef}
        src="/assets/logo.svg"
        alt="Purple Tree"
        // fill
        width={250}
        height={250}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Hero;
