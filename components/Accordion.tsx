import Image from "next/image";
import React from "react";
import { AccordioTypes } from "@/types";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ icon, title, arrow, content }: AccordioTypes) => {
  return (
    <div className="w-full flex items-start gap-[28px] pb-[30px] border-b border-[#13171D]">
      <Image src={icon} alt="icon" width={100} height={114} />
      <div className="w-full">
        <h4 className="text-[22px] font-[700] leading-[130%] py-[28px] flex items-center justify-between flex-1">
          <span>{title}</span>
          {arrow == "up" ? (
            <IoIosArrowUp className="text-[16px]" />
          ) : (
            <IoIosArrowDown className="text-[16px]" />
          )}
        </h4>
        <p className="text-[18px] leading-[130%]">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
