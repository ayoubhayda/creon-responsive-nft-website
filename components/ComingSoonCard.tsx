import { ComingSoonTypes } from "@/types";
import React from "react";

const ComingSoonCard = ({title, subtitle, image, description}:ComingSoonTypes) => {
  return (
    <div className="relative flex-1 flex flex-col min-w-[453px] max-w-[600px] h-[659px] pr-[30px] flex-shrink-0 bg-[#0b0e11] rounded-md 2xl:h-[659px]">
      <section className="flex flex-col gap-[15px] m-[30px] h-[119px]">
        <h2 className=" uppercase font-monument fon-[400] leading-[120%] text-[38px]">
          {title}
        </h2>
        <h3 className="text-[22px] font-[700] leading-[130%] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
          {subtitle}
        </h3>
      </section>
      <section className="relative self-start w-full h-[234px] rounded-tr-md rounded-br-md overflow-hidden">
      <img
        src={image}
        alt="token"
        className="absolute top-0 right-0 left-0 bottom-0 w-full h-full object-cover"
      />
      </section>
      <p className=" text-[18px] font-[400] leading-[130%] m-[30px]">
        {description}
      </p>
      <span className="absolute top-[-10px] right-[30px] bg-white text-black text-[12px] font-[700] uppercase leading-[110%] text-center px-[6px] py-[3px] rounded-[100px]">COMING SOON</span>
    </div>
  );
};

export default ComingSoonCard;
