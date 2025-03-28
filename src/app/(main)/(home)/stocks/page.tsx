'use client'

import { useGetAllProductsQuery } from "@/store/api/products.api"
import StocksGreeting from "./_components/StocksGreeting"
import { brands } from "@/constants/stocks.constant"
import StocksBrand from "./_components/StocksBrand"

const Stocks = () => {

  const { data: products, isLoading, isSuccess } = useGetAllProductsQuery()
  products && console.log(products.filter(product => product.brand === 'art-soffio').filter(product => product.discount > 0)) // по акции и по определенным брендам

  return (
    <div className="flex flex-col gap-y-10 w-full">
      <StocksGreeting />
      {isLoading ? (<div>Loading...</div>) : isSuccess ? brands.map((brandEl) => {
        return <StocksBrand heading={brandEl.heading} image1={brandEl.image1} image2={brandEl.image2} products={products.filter(product => product.brand === brandEl.brand)} key={brandEl.heading} />
      }) : (<div>Not Found</div>)}
    </div>
  )
}

export default Stocks