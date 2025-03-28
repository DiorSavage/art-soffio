'use client'

import { Image } from "antd"
import Link from "next/link"
import { useRef } from 'react'

const CatalogCard = ({ image, title, href, productName, brand }: { image: string; title: string; href: string; productName?: string; brand: string }) => {
  
  const CatCard = useRef<HTMLAnchorElement>(null)
  const width = CatCard.current && CatCard.current?.clientWidth / 2
  console.log(width) 
  return (
    <Link href={{
      pathname: href,
      query: {
        brand: brand
      }
    }} ref={CatCard} className={`ml-[50px] flex flex-col gap-y-[2px] xl:gap-y-2 select-none cursor-pointer mx-auto justify-center`}>
      <div className="hidden xl:block ">
        <Image src={image} alt="image" width={300} height={300}  preview={false} className="pointer-events-none" />
      </div>
      <div className="xl:hidden block w-[107px]">
        <Image src={image} alt="image" width={107} height={107} preview={false} className="pointer-events-none" />
      </div>
      <h2 className="flex font-normal text-[8px] xl:text-base w-[107px] xl:w-[267px]">{title}</h2>
    </Link>
  )
}

export default CatalogCard