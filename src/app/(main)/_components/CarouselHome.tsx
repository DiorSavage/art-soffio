'use client'

import { ProductCard } from "@/app/setApi/_components/ProductCard";
import { homeResponsive } from "@/constants/home.constant";
import { useGetAllProductsQuery } from "@/store/api/products.api";
import Link from "next/link";
import Carousel from "react-multi-carousel";

export const CarouselHome = () => {

  const { data: products, isLoading, isSuccess } = useGetAllProductsQuery()

  return(
    <>
      {isLoading ? (<div>Загрузка</div>) : isSuccess ? (
        <div className="relative w-full flex flex-col gap-y-12">
          <h1 className="font-semibold text-lg md:text-4xl w-full text-center text-[#555555]">Хит продаж</h1>
          <Link href='/' className="hidden md:block transition-all duration-300 hover:opacity-60 w-full text-end text-[#555555] font-semibold text-xl pr-6">Смотреть все</Link>
          <Carousel
            responsive={homeResponsive}
            removeArrowOnDeviceType={['mobile', 'tablet']}
            autoPlay={false}
            arrows
            className="ml-12 md:ml-16 lg:ml-24 2xl:ml-0 flex flex-row"
            pauseOnHover
            customTransition="all .5s"
            transitionDuration={500}
          >
            {products.map(({ discount, price, image, title, id, brand, manufactures  }) => {
              return <ProductCard key={title} manufactures={manufactures} id={id} discount={discount} price={price} image={image} text={title} brand={brand}  />
            })}
          </Carousel>
        </div>
      ) : (<div>Товары не найдены</div>)}
    </>
  );
};
