import { FutureItemTypes } from "@/types";
import React from "react";

const FutureCard = ({title, description, image}:FutureItemTypes) => {
  return (
    <div className="flex-1 flex flex-col-reverse max-w-[650px] min-w-[450px] min-h-[700px] justify-between bg-[#13171D]/60 rounded-md overflow-hidden h-fit xl:flex-row xl:max-w-full xl:min-h-fit">
      {/* Right Section*/}
      <div className="flex-1 flex flex-col gap-[15px] p-[40px]">
        <h2 className="text-[26px] font-[400] leading-[120%] uppercase font-monument xl:text-[38px]">{title}</h2>
        <p className="text-[16px] font-[400] leading-[130%] xl:text-[18px]">
          {description}
        </p>
      </div>

      {/* Image Section*/}
      <div className="relative min-h-[302px] min-w-[453px]">
      <img src={image} alt="AI Prospects" className="absolute top-0 right-0 left-0 bottom-0 w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default FutureCard;
