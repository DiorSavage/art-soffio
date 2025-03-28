import { homeResponsive } from "@/constants/home.constant";
import { greeting, stocksGreetingResp } from "@/constants/stocks.constant"
import { Image } from "antd"
import Link from "next/link"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';

const StocksGreeting = () =>{
  return (
    <>
      {/* <Carousel
        responsive={stocksGreetingResp}
        additionalTransfrom={0}
        removeArrowOnDeviceType={['superLargeDesktop']}
        swipeable={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className="w-full"
        containerClass="container container-items-center"
        dotListClass=""
        draggable={true}
        focusOnSelect={false}
        // infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
      >
        {greeting.map(greet => {
          return (
            <div className="flex flex-col items-center gap-y-3 w-[235px] h-[220px]">
              <Image src={greet.image} alt="stocks greeting" preview={false} />
              <span className="font-semibold text-[9px]">{greet.span}</span>
              <h2 className="font-semibold text-sm">{greet.title}</h2>
              <Link href={greet.href} className="transition-all duration-300 hover:opacity-60 font-semibold text-[10px] leading-10 text-[#555555a9]">СМОТРЕТЬ</Link>
            </div>
          )
        })}
      </Carousel> */}
      <div className="hidden lg:flex gap-x-14 items-center justify-center w-full">
        {greeting.map(greet => {
          return (
            <div className="flex flex-col items-center gap-y-3">
              <Image src={greet.image} alt="stocks greeting" preview={false} />
              <span className="font-semibold text-xs">{greet.span}</span>
              <h2 className="font-semibold text-xl">{greet.title}</h2>
              <Link href={greet.href} className="transition-all duration-300 hover:opacity-60 font-semibold text-sm leading-10 text-[#555555a9]">СМОТРЕТЬ</Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default StocksGreeting