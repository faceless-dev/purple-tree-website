import React from "react";
import Image from "next/image";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  label: string;
  slabel: string;
  imagepath: string;
}

export const Card = ({ label, text, slabel, imagepath }: CardProps) => {
  return (
    <div className="w-[22.375rem] h-[28.438rem] border-purple shadow-card rounded-[9px]">
      <div className="flex max-w-full justify-between pt-10 px-10">
        <Image className="" src={imagepath} width={60} height={60} alt="" />

        <div className="min-w-[6.25rem] min-h-[2rem] flex justify-center w-fit h-fit self-center bg-[#FFF] rounded-[37px]">
          <label className="self-center block text-black ">{slabel}</label>
        </div>
      </div>
      <label className="text-white flex mt-11 ml-10 text-2xl tracking-[0.15em]">
        {label}
      </label>
      <p className="text-white flex ml-12 mr-10 text-sm font-light tracking-widest leading-8">
        {text}
      </p>
    </div>
  );
};
