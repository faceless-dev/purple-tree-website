import React from "react";
import Image from "next/image";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  cardName: string;
  cardTag: string;
  imagePath: string;
}

export const Card = ({ cardName, text, cardTag, imagePath }: CardProps) => {
  return (
    <div className="w-[18rem] min-h-[25rem] lg:w-auto lg:max-w-[22rem] lg:min-w-[352px] lg:min-h-[28rem] border-purple bg-purple shadow-card rounded-lg bg-opacity-[.04] backdrop-blur-xl backdrop-filter">
      <div className="flex max-w-full justify-between pt-10 px-10 h-[7rem] ">
        <Image
          src={imagePath}
          width={60}
          height={60}
          alt=""
        />

        <div className=" min-h-[2rem] px-5 flex justify-center w-fit h-fit self-center bg-white rounded-[37px]">
          <label className="self-center block text-black tracking-widest font-mono font-bold">{cardTag}</label>
        </div>
      </div>

      <label className="text-white ml-10 flex mt-11 text-xl tracking-[0.15em]">{cardName}</label>
      <p className="text-white flex text-sm mx-10 pt-3 pb-6 font-light tracking-widest leading-8">{text}</p>
    </div>
  );
};
