import Image from "next/image";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
          src={"./assets/images/creon_logo.png"}
          alt="Creon"
          className="w-full 2xl:w-[836px] h-[502] -z-10 2xl:absolute 2xl:right-[-189px] 2xl:bottom-0"
        />
      </section>
      {/* Right Section */}
      <section className="min-w-[552px] flex-1 flex flex-col gap-[30px]">
        {/* 1 */}
        <div className="w-full flex items-start gap-[28px] pb-[30px] border-b border-[#13171D]">
          <Image
            src={"./assets/images/icon_1.svg"}
            alt="icon"
            width={100}
            height={114}
          />
          <div className="w-full">
            <h4 className="text-[22px] font-[700] leading-[130%] py-[28px] flex items-center justify-between flex-1">
              <span>Profitability and Growth</span>
              <IoIosArrowUp className="text-[16px]" />
            </h4>
            <p className="text-[18px] leading-[130%]">
              At Creon, we handpick cutting-edge AI projects and offer our
              community and token holders early access and investment
              opportunities. Our community actively contributes to the growth
              and profitability of these projects, creating a dynamic ecosystem
              of innovation and shared success.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="w-full flex items-start gap-[28px] pb-[30px] border-b border-[#13171D]">
          <Image
            src={"./assets/images/icon_2.svg"}
            alt="icon"
            width={100}
            height={114}
          />
          <div className="w-full">
            <h4 className="text-[22px] font-[700] leading-[130%] py-[28px] flex items-center justify-between flex-1">
              <span>Transparent & Fair Decentralized Earnings</span>
              <IoIosArrowDown className="text-[16px]" />
            </h4>
          </div>
        </div>

        {/* 3 */}
        <div className="w-full flex items-start gap-[28px] pb-[30px] border-b border-[#13171D]">
          <Image
            src={"./assets/images/icon_3.svg"}
            alt="icon"
            width={100}
            height={114}
          />
          <div className="w-full">
            <h4 className="text-[22px] font-[700] leading-[130%] py-[28px] flex items-center justify-between flex-1">
              <span>Launching the future</span>
              <IoIosArrowDown className="text-[16px]" />
            </h4>
          </div>
        </div>

        {/* 4 */}
        <div className="w-full flex items-start gap-[28px] pb-[30px] border-b border-[#13171D]">
          <Image
            src={"./assets/images/icon_4.svg"}
            alt="icon"
            width={100}
            height={114}
          />
          <div className="w-full">
            <h4 className="text-[22px] font-[700] leading-[130%] py-[28px] flex items-center justify-between flex-1">
              <span>Limitless Possibilities of AI & Crypto</span>
              <IoIosArrowDown className="text-[16px]" />
            </h4>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurMission;