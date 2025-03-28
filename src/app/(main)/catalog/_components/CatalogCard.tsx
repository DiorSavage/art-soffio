'use client'

import { Image } from "antd";
import Link from "next/link";

const CatalogCard = ({ image, title, href, productName, brand }: { image: string; title: string; href: string; productName?: string; brand: string }) => {

  return (
    <Link href={{
      pathname: href,
      query: {
        brand: brand
      }
    }} className="flex flex-col gap-y-[2px] xl:gap-y-4 select-none cursor-pointer mx-auto justify-center">
      <div className="hidden xl:block w-[264px]">
        <Image src={image} alt="image" width={264} height={264} preview={false} className="pointer-events-none" />
      </div>
      <div className="xl:hidden block w-[107px]">
        <Image src={image} alt="image" width={107} height={107} preview={false} className="pointer-events-none" />
      </div>
      <h2 className="flex font-normal text-[8px] xl:text-base w-[107px] xl:w-[267px]">{title}</h2>
    </Link>
  )
}

export default CatalogCard