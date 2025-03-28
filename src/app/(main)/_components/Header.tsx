'use client'

import { auth } from "@/config/firebase.config";
import { headerLink } from "@/constants/header";
import { useTypedDispatch, useTypedSelector } from "@/hooks/typedHooks";
import { actions as userActions } from "@/store/userslice/user.slice";
import { Image } from "antd";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";
import { useEffect } from "react";

export const Header = () => {

  const userInfo = useTypedSelector((state) => state.userSlice)
  const dispatch = useTypedDispatch()
  const handleBurgerMenu = () => {
    const burgerMenu = document.querySelector('#burger') as HTMLDivElement
    burgerMenu.style.display === 'block' ? burgerMenu.style.display = 'none' : burgerMenu.style.display = 'block'
  }

  return(
    <header className="flex flex-col items-center justify-center h-24 lg:h-40 w-full lg:w-4/5 mx-auto">
      <div className="hidden lg:block absolute w-full top-[99px] h-[1px] bg-[#E5E5E5]"></div>
      <div className="hidden lg:block absolute w-full top-[156px] h-[1px] bg-[#E5E5E5]"></div>
      <div className="h-24 flex justify-around items-center w-full">
        <div className="hidden lg:flex flex-col items-center gap-y-1">
          <span className="font-normal font-base leading-6 cursor-default">+7 (747) 845 58 86</span>
          <button className="transition-all duration-300 hover:opacity-80 flex items-center justify-center h-[23px] w-full border border-[#555555] rounded-[19px] font-semibold text-xs">Заказать звонок</button>
        </div>
        <div className="lg:hidden block">
          <Image src="/burger_menu.png" alt="burger" preview={false} width={23} height={14} className="cursor-pointer" onClick={() => handleBurgerMenu()} />
        </div>
        <div id="burger" style={{ display: 'none' }} className="fixed lg:hidden flex flex-col w-96 top-16 left-0 gap-y-1 bg-black bg-opacity-25 rounded-3xl">
          {headerLink.map(link => {
            return <Link href={link.href} key={link.name} className="flex w-full py-2 px-2 font-semibold text-base leading-6">{link.name}</Link>
          })}
        </div>
        <div>
          <Link href='/' className="hidden lg:block">
            <Image src="/art-soffio_header.png" alt="art soffio" preview={false} width={290} height={56} className="cursor-pointer" />
          </Link>
          <Link href={'/'} className="block lg:hidden">
            <Image src="/art-soffio_header_mb.png" alt="art soffio" preview={false} width={145} height={26} className="cursor-pointer" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <Image src="/search_header.png" alt="Search" preview={false} className="transition-all duration-200 hover:opacity-60 cursor-pointer" />
          <Link className="transition-all duration-300 hover:opacity-60" href={`${userInfo.email ? '/basket' : '/auth'}`}>
            <Image src="/basket_header.png" alt="Basket" preview={false} className={`transition-all duration-200 hover:opacity-60 cursor-pointer ${userInfo.basket.length > 0 && "translate-y-[10px]"}`} />
            {userInfo.basket.length > 0 && <div className="relative bg-[#FF00FF] text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center left-4 -top-[24px]">{userInfo.basket.length}</div>}
          </Link>
          <Link href={`${userInfo.email ? '/profile' : '/auth'}`}>
            <Image src={`${userInfo.icon ? userInfo.icon : '/auth_icon.png'}`} alt="Auth" width={30} height={30} preview={false} className={`transition-all duration-200 ${userInfo.icon === undefined && 'opacity-50'} rounded-full hover:opacity-${userInfo.icon ? '60' : '30'} cursor-pointer`} />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center h-14 w-full gap-x-[84px]">
        {headerLink.map(link => {
          return <Link className="transition-all duration-300 hover:text-[#FF00FF] font-semibold text-xl leading-6" key={link.name} href={link.href}>{link.name}</Link>
        })}
      </div>
    </header>
  );
};
