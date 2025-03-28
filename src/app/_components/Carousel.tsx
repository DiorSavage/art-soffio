import { Image } from 'antd';
import { MouseEvent, ReactNode, useState } from 'react';

export const Carousel = ({ children }: { children: ReactNode }) => {

  const [countArrow, setCountArrow] = useState<number>(0)
  const [translate, setTranslate] = useState<number>(0)

  const handleArrow = (e: MouseEvent<HTMLDivElement>) => {
    const carousel = document.getElementById('carousel') as HTMLDivElement
    const productCard = carousel.querySelector('a[data-element="product-card"]') as HTMLLinkElement
    const arrow = e.currentTarget as HTMLDivElement
    if ((countArrow !== carousel.children.length - 4 && arrow.getAttribute('id') === 'arrow-right') || (countArrow !== 0 && arrow.getAttribute('id') === 'arrow-left')) {
      console.log('asdfsdf')
      arrow.getAttribute('id') === 'arrow-left' ? setCountArrow(countArrow  - 1) : setCountArrow(countArrow + 1)
      arrow.getAttribute('id') === 'arrow-left' ? setTranslate(translate - productCard.clientWidth - 50) : setTranslate(translate + productCard.clientWidth + 50)
    }
  }

  return(
    <div className="flex w-[80%] lg:w-[85%] xl:w-full my-12 items-center px-10 overflow-hidden">
      <div id='arrow-left' onClick={(e) => handleArrow(e)} className="transition-all duration-200 hover:scale-105 hover:bg-white bg-[#38383823] select-none absolute z-20 size-10 rounded-full flex items-center justify-center cursor-pointer">
        <Image src='/arrow_left.png' alt='arrow_left' width={12} height={10} preview={false} />
      </div>
      <div id='carousel' style={{ transform: `translateX(-${translate}px)` }} className="transition-all duration-200 relative z-10 flex w-[346px] md:w-[500px] lg:w-[612px] xl:w-[1116px] xl:-translate-x-8 items-center gap-x-10">
        {children}
      </div>
      <div id='arrow-right' onClick={(e) => handleArrow(e)} className="transition-all duration-200 hover:scale-105 hover:bg-white bg-[#38383823] select-none absolute right-[10%] z-20 size-10 rounded-full flex items-center justify-center cursor-pointer">
        <Image src='/arrow_right.png' alt='arrow_right' width={12} height={10} preview={false} />
      </div>
    </div>
  );
};
