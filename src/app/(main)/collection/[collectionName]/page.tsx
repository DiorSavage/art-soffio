'use client'

import { Carousel } from "@/app/_components/Carousel"
import { ProductCard } from "@/app/setApi/_components/ProductCard"
// import { collectionResponsive, collections } from "@/constants/collection.constant"
import { CustomButton } from "@/features/CustomButton"
import { useGetCollectionByIdQuery } from "@/store/api/collection.api"
import { useGetAllProductsQuery } from "@/store/api/products.api"
import { Image } from "antd"
import { useParams } from "next/navigation"


const Collection = () =>{

  const collectionName = useParams().collectionName as string
  const { data: products, isLoading, isSuccess } = useGetAllProductsQuery()
  const { data: collection, isLoading: loadingCollection, isSuccess: collectionSuccess } = useGetCollectionByIdQuery(collectionName.slice(10))
  
  return (
    <div className="flex flex-col gap-y-10 items-center">
      {loadingCollection ? (<div>Загрузка...</div>) : collectionSuccess ? (
        <>
          <Image src={collection.image} preview={false} className="pointer-events-none" />
          <div className="flex flex-col gap-y-12 items-center mb-12">
            <h2 className="relative z-10 text-4xl font-semibold">О коллекции</h2>
            <p className="relative z-20 overflow-hidden w-[75%] text-[15px] font-normal text-center h-[70px]">{collection.description}</p>
            <CustomButton title="Подробнее" width={139} height={30}  className="bg-transparent border-0 !text-[#555555ab]" />
          </div>
          <Carousel>
            {
              isLoading ? (<div>Loading...</div>) : isSuccess ? products.filter(product => collection.products.includes(product.id)).map(product => {
                console.log()
                return <ProductCard discount={product.discount} image={product.image} price={product.price} text={product.title} key={product.id} /> 
              }) : (<div>Not found</div>)
            }
          </Carousel>
        </>
      ) : (<div>Коллекция не найдена</div>)}
    </div>
  )
}

export default Collection