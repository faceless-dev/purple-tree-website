import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { BUTTON_VARIANTS } from "../utils/enums";
import Button from "./base/Button";

const Hero = ({ imageRef }: { imageRef: React.RefObject<HTMLImageElement> }) => {
  return (
    <>
      <div className={classNames("p-2 max-w-[150px] md:max-w-[250px] flex items-center justify-center flex-col gap-8")}>
        <Image
          ref={imageRef}
          src="/assets/logo.svg"
          alt="Purple Tree"
          width={250}
          height={250}
        ></Image>
        {/* <Heading>purple tree</Heading> */}
      </div>

      <div className="self-center md:hidden mt-20">
        <Button
          scrollDownOnClick
          variant={BUTTON_VARIANTS.MOBILE}
        >
          contact us
        </Button>
      </div>
    </>
  );
};

export default Hero;
