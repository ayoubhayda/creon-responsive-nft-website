import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[84px] flex flex-col gap-[20px] items-center justify-between px-[15px] py-[35px] lg:flex-row lg:px-[50px] xl:px-[100px] 2xl:px-[240px]">
    <section className="flex items-center gap-[90px]">
      <span className=" text-[16px] font-[400] leading-[130%] ">
        © Creon 2023. All rights reserved.
      </span>
      <div className="hidden lg:flex items-center gap-[10px] ml-[30px]">
        <Link
          href="#"
          className="size-[34px] flex items-center justify-center rounded-full border-2 border-white text-white text-[16px] hover:bg-white hover:text-black transition"
        >
          <FaTelegramPlane />
        </Link>
        <Link
          href="#"
          className="size-[34px] flex items-center justify-center rounded-full border-2 border-white text-white text-[16px] hover:bg-white hover:text-black transition"
        >
          <FaDiscord />
        </Link>
        <Link
          href="#"
          className="size-[34px] flex items-center justify-center rounded-full border-2 border-white text-white text-[16px] hover:bg-white hover:text-black transition"
        >
          <FaTwitter />
        </Link>
      </div>
    </section>

    <section className="flex items-center gap-[6px]">
      <span className="text-[16px] font-[400] leading-[130%] ">
        Powered by
      </span>
      <Image
        src={"./images/Niftables.svg"}
        width={101}
        height={18}
        alt="Niftables"
      />
    </section>

    <section className="absolute bottom-0 right-0 left-0 w-full h-[970px] z-[-10]">
    <div className="w-full h-full relative">
      <video
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-[-2] object-cover"
      >
        <source
          src={
            "https://res.cloudinary.com/duxego3ja/video/upload/v1714938639/front-end-tech-test/qe5cmiyoixoljbymrerj.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <img
        src="./images/black_shape.png"
        alt="shape"
        className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-[-1] object-cover"
      />
    </div>
  </section>
  </footer>
  );
};

export default Footer;
