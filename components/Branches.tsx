import React from "react";
import Image from "next/image";
import { HeadingVariant, Heading } from "./base/Heading";

export interface BranchProbs extends React.HTMLAttributes<HTMLDivElement> {}

//TODO BILD von Branch 2 gehört gewechselt weil Das Bild größer als das SVG ist
export const Branches = ({}: BranchProbs) => {
  return (
    <div className="w-full">
      <Heading className="pt-32 md:pt-52">our branches</Heading>
      <Heading
        className="mt-1 md:mt-2"
        variant="H2"
      >
        full service for all your needs
      </Heading>

      <div className="flex flex-col pt-20 md:pt-32">
        <div className="flex flex-row justify-end">
          <div className="flex-col text-right lg:mr-[2rem] md:w-[30%] w-[50%] mr-2 md:space-y-3">
            <Heading>think</Heading>

            <p className=" text-white md:text-2xl text-xs">
              Unveil a new face for your business with our custom logo design service. Tailored to embody your brand&apos;s ethos, our logos
              are crafted to make a lasting impression.
            </p>
          </div>

          <Image
            className="md:w-[25rem]"
            src="/assets/Branch1.svg"
            width={150}
            height={65}
            alt="Purple Tree"
          />
        </div>
        <div className="flex flex-row md:mt-[-6rem] object-fit justify-start">
          <Image
            className="md:w-[15rem] md:h-[30rem]" //BROWSER DEV TOOLS -> RAHMEN MUSS GEFIXED WERDEN!
            src="/assets/Branch2.svg"
            width={90}
            height={50}
            alt="Purple Tree"
          />

          <div className="flex-col md:w-[30%] w-[50%] text-start md:ml-8 ml-2 md:space-y-3">
            <Heading>design</Heading>

            <p className=" text-white  md:text-2xl  text-xs">
              Step into the spotlight with bespoke web designs that blend functionality with aesthetics, optimized for engagement and
              conversion.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:mt-[-8rem] pl-10 justify-end">
          <div className="flex-col text-end lg:mr-[2rem] md:w-[30%] mr-2 md:space-y-3">
            <Heading>develop</Heading>

            <p className="text-white md:text-2xl  text-xs">
              Transform your ideas into reality with our custom web app solutions, designed for performance and user experience.
            </p>
          </div>

          <Image
            className="md:w-[20rem]"
            src="/assets/Branch3.svg"
            width={120}
            height={50}
            alt="Purple Tree"
          />
        </div>
      </div>
    </div>
  );
};
