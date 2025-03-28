'use client'

import { redirect, useParams, usePathname, useSearchParams } from "next/navigation"
import { catalogPages } from "@/constants/catalog.constants"
import { Image } from "antd"
import CatalogCard from "../_components/CatalogCard"
import { useGetAllProductsQuery } from "@/store/api/products.api"
import { IProducts } from "@/types/products.type"
import { ProductCard } from "@/app/setApi/_components/ProductCard"

const Catalog = () =>{

  const { data: products, isLoading, isSuccess } = useGetAllProductsQuery()
  const params = useSearchParams()
  const path = usePathname()
  const brand = params.get('brand') as string
  const filteredProducts: IProducts[] | undefined = products?.filter(product => product.brand === brand)

  if (brand) {
    return (
      <div className="flex flex-col items-center gap-y-4 my-4 w-full">
        <h1 className="font-semibold my-6 text-4xl">{`Каталог бренда ${brand.slice(0, 1).toUpperCase() + brand.replace('-', ' ').slice(1).replace('/', '')}`}</h1>
        <div className="grid grid-cols-3 justify-center gap-y-2 gap-x-2 2xl:grid-cols-4 w-full mx-auto">
          {filteredProducts && filteredProducts.map(({ title, discount, price, image, id, brand, manufactures }) => {
            return <ProductCard id={id} discount={discount} text={title} image={image} price={price} key={title} brand={brand} manufactures={manufactures} />
          })}
        </div>
      </div>
    )
  } else {
    redirect('/catalog')
  }
}

export default Catalog