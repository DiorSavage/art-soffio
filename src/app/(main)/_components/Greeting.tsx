"use client"

import { Image } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Greeting = () => {

  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    const windowWidth = window.innerWidth * 0.95
  }, [])

  return(
    <>
      <div className="flex flex-col items-center xl:hidden w-full pointer-events-none">
        <Image src='/home_greeting_mb.png' width={windowWidth} preview={false} alt="greeting" />
        <Link className="relative bottom-10 transition-all duration-300 hover:opaticy-80 flex items-center justify-center w-[114px] h-[25px] border border-[#555555] rounded-[19px] font-semibold text-xs md:text-lg pointer-events-auto" href={'/'}>Купить</Link>
      </div>
      <div className="hidden xl:flex items-center justify-end w-full pointer-events-none">
        <Image src="/home_greeting_image.jpeg" preview={false} alt="greeting" />
        <Link className="absolute right-[24.5%] top-56 transition-all duration-300 hover:opacity-80 flex items-center justify-center h-[21px] border border-[#555555] rounded-[19px] w-[74px] font-semibold text-xs pointer-events-auto" href='/'>Купить</Link>
      </div>
    </>
  );
};