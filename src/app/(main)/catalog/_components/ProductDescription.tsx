import { ProductCard } from "@/app/setApi/_components/ProductCard";
import { homeResponsive } from "@/constants/home.constant";
import { useGetAllProductsQuery } from "@/store/api/products.api";
import { IProducts } from "@/types/products.type";
import { MouseEvent, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

export const ProductDescription = ({ product }: { product: IProducts }) => {

  const [text, setText] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const { data: products, isLoading, isSuccess } = useGetAllProductsQuery()
  products && products.filter(prod => prod.type === product.type)

  const handleDesc = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement
    setText(Number(button.dataset.desc))
    const buttons = document.querySelectorAll(`button[data-desc]`) as NodeListOf<HTMLButtonElement>
    buttons.forEach((btn) => {
      btn.style.color = "#838181"
      btn.style.borderColor = 'transparent'
    })
  }

  const showMore = () => {
    const description = document.getElementById('description') as HTMLUListElement
    description.style.overflow = isOpen ? 'visible' : 'hidden'
    description.style.height = isOpen ? 'auto' : '32px'
    description.style.color = isOpen ? '#555555' : '#C4C2C2'
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const button = document.querySelector(`button[data-desc="${text}"]`) as HTMLButtonElement
    button.style.color = "#555555"
    button.style.borderColor = '#A19C9C'
  }, [text])

  return(
    <div className="flex flex-col items-center gap-y-7 w-full text-[#555555]"> {/* ПО СУТИ ДОЛЖНО ИДТИ ИЗ АПИ, НО БЛЯТЬ ДОБАВЛЯТЬ НОВЫЕ ПРОДУКТЫ В ЕБАННУЮ БД К КАЖДОМУ ТОВАРУ МНЕ СЛИШКОМ ЛЕНЬ */}
      <div className="flex w-full items-center justify-between">
        <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleDesc(e)} data-desc='0' className="transition-all duration-300 font-normal border-b-2 border-transparent text-[30px] text-[#838181]">Описание товара</button>
        <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleDesc(e)} data-desc='1' className="transition-all duration-300 font-normal border-b-2 border-transparent text-[30px] text-[#838181]">Как пользоваться</button>
        <button onClick={(e: MouseEvent<HTMLButtonElement>) => handleDesc(e)} data-desc='2' className="transition-all duration-300 font-normal border-b-2 border-transparent text-[30px] text-[#838181]">Ингредиенты</button>
      </div>
      <div className="flex flex-col gap-y-3 w-3/5">
        <p style={{ display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical" }} className="h-12 overflow-hidden text-ellipsis text-base font-normal">{product.description.heading}</p>
        <ul id="description" className="flex flex-col gap-y-1 overflow-hidden h-8 text-[#C4C2C2]">
          {product.description.fullInfo.map((info) => {
            return <li key={info} className="transition-all duration-300 font-normal text-base list-disc ml-4">{info}</li>
          })}
        </ul>
        <button onClick={() => showMore()} className="transition-all duration-300 hover:opacity-60 font-normal text-sm leading-10">Подробнее</button>
      </div>
      <div className="flex flex-col w-full gap-y-12 items-center">
        <h1 className="text-4xl font-semibold text-[#555555]">Похожие товары</h1>
        {isLoading ? (<div>Loading</div>) : isSuccess ? (
          <Carousel
            responsive={homeResponsive}
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
            itemClass="px-2 sm:px-4 md:px-9 lg:px-8 xl:px-4"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
          >
            {products.filter(prod => prod.type === product.type && prod.brand === product.brand).map(prod => {
              return <ProductCard key={prod.id} brand={prod.brand} discount={prod.discount} id={prod.id} image={prod.image} manufactures={prod.manufactures} price={prod.price} text={prod.title} />
            })}
          </Carousel>
        ) : (<div>Not Found</div>)}
      </div>
    </div>
  );
};
