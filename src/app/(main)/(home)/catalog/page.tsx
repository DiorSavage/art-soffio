'use client'

import { catalogPages, catalogResponsive } from "@/constants/catalog.constants"
import { Image } from "antd"
import Link from "next/link"
import Carousel, { ArrowProps } from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import CatalogCard from "./_components/CatalogCard"
import { ProductCard } from "@/app/setApi/_components/ProductCard"

const CatalogPage = () =>{

  return (
    <div className="relative flex flex-col gap-y-[50px] mx-auto w-full mb-12 px-3 lg:px-0">
      <Image src='/catalog_greeting.png' alt="Catalog greeting" preview={false} height={373} className="hidden lg:block pointer-events-none" />
      <Image src='/catalog_greeting.png' alt="Catalog greeting" preview={false} height={232} className="lg:hidden block pointer-events-none" />
      {catalogPages.map(({ catalogs, heading, href }) => { 
        return (
          <div key={heading} className="flex flex-col gap-y-4 items-center w-full">
            <h1 className="font-semibold text-sm lg:text-4xl">{heading}</h1>
            <Link href={href} className="hidden md:block transition-all duration-300 hover:opacity-60 w-full text-end text-[#555555] font-semiboldtext-xl pr-6">Смотреть все</Link>
            <Carousel
              responsive={catalogResponsive}
              additionalTransfrom={0}
              removeArrowOnDeviceType={['mobile', 'tablet']}
              swipeable={true}
              autoPlaySpeed={3000}
              centerMode={false}
              className="w-3/4 md:w-4/5 xl:w-full"
              containerClass="container container-items-center"
              dotListClass=""
              draggable={true}
              focusOnSelect={false}
              infinite
              itemClass="px-2 sm:px-4 md:px-9 lg:px-8 xl:px-0"
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
            >
              {catalogs.map(({ href, image, title, productName, brand }) => {
                return <CatalogCard key={title} image={image} title={title} href={href} brand={brand} />
              })}
            </Carousel>
          </div>
        )
      })}
    </div>
  )
}

export default CatalogPage