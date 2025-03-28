'use client'

import { Carousel } from "@/app/_components/Carousel"
import { useGetProductByIdQuery } from "@/store/api/products.api"
import { Image } from "antd"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { TonSelector } from "../../_components/TonSelector"
import { CustomButton } from "@/features/CustomButton"
import { ProductParam } from "../../_components/ProductParam"
import { ProductDescription } from "../../_components/ProductDescription"

const ProductPage = () => {

  const params = useSearchParams()
  
  const productId = params.get('productId') as string
  const { data: product, isLoading, isSuccess } = useGetProductByIdQuery(productId)

  return (
    <div className="w-full flex flex-col gap-y-16 items-center my-12">
      {isLoading ? (<div>Loading...</div>) : isSuccess ? (
        <>
          <ProductParam product={product} />
          <ProductDescription product={product} />
        </>
      ) : (<div>Not found</div>)}
    </div>
  )
}

export default ProductPage