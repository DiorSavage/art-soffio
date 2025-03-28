import { ProductCard } from "@/app/setApi/_components/ProductCard";
import { homeResponsive } from "@/constants/home.constant";
import { IProducts } from "@/types/products.type";
import { Image } from "antd"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';

interface IStocksBrand {
  heading: string
  image1: string
  image2: string
  products: IProducts[]
}

const StocksBrand = ({ heading, image1, image2, products }: IStocksBrand) =>{
  return (
    <div className="flex flex-col gap-y-10 w-full items-center">
      <h1 className="font-semibold text-4xl leading-10">{heading}</h1>
      <div className="flex w-full justify-between items-center">
        <Image src={image1} alt="Image1" preview={false} />
        <Image src={image2} alt="Image1" preview={false} />
      </div>
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
        infinite
        itemClass="px-2 sm:px-4 md:px-9 lg:px-8 xl:px-0"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
      >
        {products.map((product) => {
          return <ProductCard discount={product.discount} price={product.price} image={product.image} text={product.title} />
        })}
      </Carousel>
    </div>
  )
}

export default StocksBrand