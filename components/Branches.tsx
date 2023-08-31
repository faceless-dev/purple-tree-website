import React from "react";
import Image from "next/image";
import { HEADING_VARIANTS, Heading } from "./base/Heading";

export interface BranchProbs extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  subline: string;
}

export const Branches = ({ headline, subline }: BranchProbs) => {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-24 mt-44">
        <div className="flex flex-col gap-4">
          <Heading>{headline}</Heading>
          <div className="">
            <Heading variant={HEADING_VARIANTS.H2}>{subline}</Heading>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:pt-80 pt-36">
        <div className="flex flex-row justify-end">
          <div className="flex-col text-end lg:mr-[2rem] pl-10 mr-2 md:space-y-3">
            <label className="text-purple md:text-4xl text-xl">
              Logo Design
            </label>
            <p className=" text-white md:text-2xl text-xs">
              We create a Custom Logo that fits your company.
            </p>
          </div>
          <Image
            className="lg:w-[25rem]"
            src="/assets/Branch1.svg"
            width={150}
            height={65}
            alt="Purple Tree"
          ></Image>
        </div>
        <div className="flex flex-row md:mt-[-6rem] object-fit justify-start">
          <Image
            className="md:w-[28rem] md:h-[30rem]" //BROWSER DEV TOOLS -> RAHMEN MUSS GEFIXED WERDEN!
            src="/assets/Branch2.svg"
            width={90}
            height={50}
            alt="Purple Tree"
          ></Image>
          <div className="flex-col text-start md:ml-[-4rem] ml-2 pr-10 md:space-y-3">
            <label className="text-purple md:text-4xl text-xl">
              Logo Design
            </label>
            <p className=" text-white md:text-2xl text-xs">
              We create a Custom Logo that fits your company.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:mt-[-8rem] pl-10 justify-end">
          <div className="flex-col text-end lg:mr-[2rem] md:space-y-3">
            <label className="text-purple md:text-4xl text-xl">
              Logo Design
            </label>
            <p className=" text-white md:text-2xl text-xs">
              We create a Custom Logo that fits your company.
            </p>
          </div>
          <Image
            className="md:w-[20rem]"
            src="/assets/Branch3.svg"
            width={120}
            height={50}
            alt="Purple Tree"
          ></Image>
        </div>
      </div>
    </div>
  );
};
