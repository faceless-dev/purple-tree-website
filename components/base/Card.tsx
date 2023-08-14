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
    <div className="w-[18rem] h-[25rem] lg:w-auto lg:h-[28rem] border-purple shadow-card rounded-lg">
      <div className="flex max-w-full justify-between pt-10 px-10">
        <Image src={imagePath} width={60} height={60} alt="" />

        <div className="min-w-[6.25rem] min-h-[2rem] flex justify-center w-fit h-fit self-center bg-white rounded-[37px]">
          <label className="self-center block text-black leading-3 tracking-widest">
            {cardTag}
          </label>
        </div>
      </div>
      <label className="text-white ml-10 flex mt-11 text-xl tracking-[0.15em]">
        {cardName}
      </label>
      <p className="text-white flex text-sm mx-10  font-light tracking-widest leading-8">
        {text}
      </p>
    </div>
  );
};
