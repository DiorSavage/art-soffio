import { ProductCard } from "@/app/setApi/_components/ProductCard"
import { useGetAllProductsQuery } from "@/store/api/products.api"
import { Image } from "antd"
import Link from "next/link"

const NewProducts = () =>{

  const { data: products } = useGetAllProductsQuery()

  return (
    <div className="hidden lg:flex items-center gap-x-7">
      <div className="flex flex-col items-center">
        <Image src="/newproducts-img.png" preview={false} alt="new products" className="pointer-events-none relative z-10" />
        <div className="flex flex-col items-center relative bottom-24 gap-y-[10px] text-white z-20">
          <h2 className="font-semibold text-4xl">Новинки</h2>
          <Link href={'/'} className="transition-all duration-300 border-b-2 border-b-[#ffffff] border-opacity-0 hover:border-opacity-95 text-lg font-semibold">Смотреть все новинки</Link>
        </div>
      </div>
      <div className="flex gap-x-7">
        {products && products.slice(0,2).map(({ discount, price, image, title, id, brand, manufactures }) => {
          return <ProductCard key={title} manufactures={manufactures} id={id} text={title} image={image} price={price} discount={discount} brand={brand} />
        })}
      </div>
    </div>
  )
}

export default NewProducts