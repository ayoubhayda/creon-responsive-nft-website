import Image from "next/image";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const OurMission = () => {
  return (
    <section className="w-full min-h-[970px] flex flex-col xl:flex-row gap-[40px] xl:gap[15px] items-center justify-between px-[15px] lg:px-[50px] xl:px-[240px]">
      {/* Left Section */}
      <section className=" flex-1">
        <p className="w-full xl:w-[699px] text-[30px] text-center xl:text-start xl:text-[38px] leading-[120%] uppercase font-[400] font-monument">
          Our vision is to support the innovation of AI blockchain projects{" "}
          <span className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
            while prioritizing communities and democratizing profits
          </span>
        </p>
        <img
          src={"./assets/images/creon_logo.png"}
          alt="Creon"
          className="w-full xl:w-[836px] h-[502]"
        />
      </section>
      {/* Right Section */}
      <section className="w-full xl:w-[552px] flex flex-col gap-[30px]">
        {/* 1 */}
        <div className="w-full flex items-start gap-[28px] pb-[30px] border-b border-[#13171D]">
          <Image
            src={"./assets/images/icon_1.svg"}
            alt="icon"
            width={100}
            height={114}
          />
          <div>
            <h4 className="text-[22px] font-[700] leading-[130%] py-[28px] flex items-center justify-between">
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
          <div>
            <h4 className="text-[22px] font-[700] leading-[130%] py-[28px] flex items-center justify-between">
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
          <div>
            <h4 className="text-[22px] font-[700] leading-[130%] py-[28px] flex items-center justify-between">
              <span>Launching the
future</span>
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
          <div>
            <h4 className="text-[22px] font-[700] leading-[130%] py-[28px] flex items-center justify-between">
              <span>Limitless Possibilities of AI
& Crypto</span>
              <IoIosArrowDown className="text-[16px]" />
            </h4>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurMission;
