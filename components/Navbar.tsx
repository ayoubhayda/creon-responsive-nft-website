"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { NavLinks } from "@/constants";


const Navbar: React.FC = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-[15px] py-[20px] lg:px-[50px] lg:py-[30px] z-0">
        {/* Logo*/}
        <Link href={"/"} className="relative z-50">
          <Image
            src={"./images/Logo.svg"}
            width={120}
            height={33}
            alt="Creon"
          />
        </Link>
        
        {/* Nav menu and connect buttons section */}
        <section className="flex items-center gap-[62px] z-[2]">
          {/* Nav Menu section*/}
        <ul className="hidden list-none lg:flex items-center justify-center gap-[40px] ">
              {NavLinks.map((navLink, index)=>(
                <li key={index} className="flex gap-[4px] font-bold text-[18px] leading-[110%]">
                  <Link href={navLink.link} className="hover:text-[#AB23FF] transition">{navLink.label}</Link>
                  {navLink.badge && <span className="bg-black flex items-center text-[#AB23FF] text-[10px] font-bold leading-[110%] px-[4px] rounded-[100px] mb-[6px]">{navLink.badge}</span>}
                </li>
              ))}
            </ul>

        {/* Buttons section */}
        <section className="flex items-center gap-[15px]">
          <button className="w-[110px] h-[38px] flex items-center justify-center rounded-md border-2 border-white font-bold hover:bg-white hover:border-none hover:text-black transition">
            Connect
          </button>
          <button onClick={()=>setSideMenuOpen(true)} className="size-[38px] flex items-center justify-center lg:hidden rounded-md bg-white text-black hover:bg-transparent hover:border-2 border-white hover:text-white transition">
            <FiMenu className="text-2xl" />
          </button>
        </section>

        {/* sidebar mobile menu */}
        <div className={`fixed w-screen h-full top-0 right-0 bg-[#0D131C]/70 backdrop-blur-[5px] lg:hidden transition-all ${sideMenuOpen? "-translate-x-0": "translate-x-full"} z-[2]`}>
          <section className={`absolute top-0 right-0 bottom-0 h-screen w-[208px] bg-black flex flex-col justify-between z-[3] py-[20px]`}>
            <div>
            <section className="flex items-center justify-end gap-[15px] mr-[15px]">
              <button className="w-[110px] h-[38px] flex items-center justify-center rounded-md border-2 border-white font-bold hover:bg-white hover:border-none hover:text-black transition">
                Connect
              </button>
              <button onClick={()=>setSideMenuOpen(false)} className="size-[38px] flex items-center justify-center rounded-md bg-[#3D8BFF] text-white hover:bg-transparent hover:border-2 border-white hover:text-white transition">
                <MdOutlineClose className="text-2xl" />
              </button>
            </section>

            <ul className="flex flex-col list-none ml-[30px] mt-[30px] border-b border-[#13171D]">
              {NavLinks.map((navLink, index)=>(
                <li key={index} className="flex gap-[4px] w-[178px] py-[16px] border-t border-[#13171D] font-bold leading-[110%]">
                  <Link href={navLink.link} className="hover:text-[#AB23FF] transition">{navLink.label}</Link>
                  {navLink.badge && <span className="bg-black flex items-center text-[#AB23FF] text-[10px] font-bold leading-[110%] px-[4px] rounded-[100px] mb-[6px]">{navLink.badge}</span>}
                </li>
              ))}
            </ul>
            </div>

            <div className="flex items-center gap-[10px] ml-[30px]">
              <Link href="#" className="size-[34px] flex items-center justify-center rounded-full border-2 border-white text-white text-[16px] hover:bg-white hover:text-black transition"><FaTelegramPlane/></Link>
              <Link href="#" className="size-[34px] flex items-center justify-center rounded-full border-2 border-white text-white text-[16px] hover:bg-white hover:text-black transition"><FaDiscord/></Link>
              <Link href="#" className="size-[34px] flex items-center justify-center rounded-full border-2 border-white text-white text-[16px] hover:bg-white hover:text-black transition"><FaTwitter/></Link>
            </div>
          </section>

        </div>
        </section>
      </nav>
  );
};

export default Navbar;
