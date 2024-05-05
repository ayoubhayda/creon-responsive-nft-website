import React from "react";

const Hero = () => {
  return (
    <section className="flex w-full h-[752px] lg:h-[866px] items-end justify-center px-[15px] py-[58px] lg:px-[50px] xl:px-[240px] lg:py-[102px]">
      <div className="flex flex-col gap-[20px] lg:gap-[40px] z-0">
        <h1 className="uppercase text-white text-[32px] lg:text-[68px] font-[400] leading-[110%] font-monument max-w-[1440px]">
          The {`world's`} first platform for Tokenizing AI blockchain projects
        </h1>
        <div className="w-fit">
          <div className="h-[1px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] w-full" />
          <p className="w-fit text-[18px] lg:text-[22px] font-[700] leading-[130%] pt-[7px] pb-[12px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-transparent bg-clip-text">
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </p>
          <div className="h-[1px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] w-full" />
        </div>
      </div>
      <video
        width="100%"
        height="970"
        autoPlay
        muted
        loop
        className=" absolute top-0 right-0 left-0 w-full h-[810px] lg:h-[970px] z-[-2] object-cover"
      >
        <source
          src={"https://res.cloudinary.com/duxego3ja/video/upload/v1714938555/front-end-tech-test/qpdncruxkeipceeapx4p.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 right-0 left-0 w-full h-[970px] z-[-1] object-cover bg-gradient-to-t from-black via-blue-600 to-purple-800 mix-blend-soft-light" />
    </section>
  );
};

export default Hero;
