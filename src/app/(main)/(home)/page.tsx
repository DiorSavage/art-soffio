"use client"

import { Greeting } from "../_components/Greeting";
import "react-multi-carousel/lib/styles.css";
import { CarouselHome } from "../_components/CarouselHome";
import { MorePages } from "../_components/MorePages";
import { ProductsTypeCards } from "../_components/ProductsTypeCards";
import { socailMedias } from "@/constants/footer";
import { Image } from "antd";
import NewProducts from "../_components/NewProducts";

//! ЧТОБЫ ВЫЙТИ ИЗ АККА - signout

export default function Home() {

  return (
    <div className="flex flex-col w-full gap-y-10">
      <Greeting />
      <CarouselHome />
      <MorePages />
      <ProductsTypeCards />
      <div className="flex flex-col gap-y-3 md:hidden mx-auto mb-6">
        <h1 className="text-sm font-semibold">Мы в социальных сетях</h1>
        <div className="flex gap-x-2 mx-auto">
          {socailMedias.map(img => {
            return <Image key={img} src={img} preview={false} width={24} height={24}  />
          })}
        </div>
      </div>
      <NewProducts />
    </div>
  );
}