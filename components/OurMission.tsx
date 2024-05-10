import React from "react";
import Accordion from "./Accordion";
import { AccordionItems } from "@/constants";

const OurMission = () => {
  return (
    <section className="w-full min-h-[970px] flex flex-col 2xl:flex-row gap-[40px] 2xl:gap-[189px] justify-center pt-[115px] pb-[51px] px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[240px]">
      {/* Left Section */}
      <section className="relative flex-1">
        <p className="w-full 2xl:w-[699px] text-[28px] xl:text[32px] text-center xl:text-start 2xl:text-[38px] leading-[120%] uppercase font-[400] font-monument">
          Our vision is to support the innovation of AI blockchain projects{" "}
          <span className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
            while prioritizing communities and democratizing profits
          </span>
        </p>
        <img
          src={"./images/creon_logo.png"}
          alt="Creon"
          className="w-full 2xl:w-[836px] h-[502] -z-10 2xl:absolute 2xl:right-[-189px] 2xl:bottom-0"
        />
      </section>
      {/* Right Section */}
      <section className="min-w-[552px] flex-1 flex flex-col gap-[30px]">
       {AccordionItems.map((item, index)=><Accordion key={index} {...item} />)} 
      </section>
    </section>
  );
};

export default OurMission;