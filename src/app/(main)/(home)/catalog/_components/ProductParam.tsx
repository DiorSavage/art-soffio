'use client'

import { CustomButton } from "@/features/CustomButton";
import { IProducts } from "@/types/products.type";
import { Image } from "antd";
import { TonSelector } from "./TonSelector";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { use, useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "@/hooks/typedHooks";
import { IBasket } from "@/types/user.type";
import { useUpdateUserByIdMutation } from "@/store/api/user.api";
import { actions as userActions} from "@/store/userslice/user.slice";

export const ProductParam = ({ product }: {product: IProducts}) => {

  const { basket, ...userInfo } = useTypedSelector(state => state.userSlice)
  const [tonId, setTonId] = useState<number>(1)
  const dispatch = useTypedDispatch()
  const [updateUser] = useUpdateUserByIdMutation()

  const handleAddBasket = () => {
    const newProduct: IBasket = {
      id: product.id,
      quantity: 1,
      selectedTon: tonId,
      price: product.price,
      discount: product.discount
    } 
    basket.length !== 0 ? basket.map(prod => {
      if ((prod.id === newProduct.id && tonId === prod.selectedTon)) {
        return
      } else {
        const newBasket = [...basket, newProduct]
        updateUser({ id: userInfo.id, body: { ...userInfo, basket: newBasket } }).then(({ data }) => dispatch(userActions.setUser(['basket', data.basket])))
      }
    }) : updateUser({ id: userInfo.id, body: { ...userInfo, basket: [newProduct] } }).then(({ data }) => dispatch(userActions.setUser(['basket', data.basket])))
  }

  return(
    <div className="w-full flex items-center gap-x-8 text-[#888888]">
      <div className="hidden sm:flex flex-col gap-y-12 justify-between items-center w-1/2">
        <Image src={product.image} alt="product image" height={438} preview={false} className="pointer-events-none" />
        <Carousel
          responsive={{
            'superLargeDesktop': {
              breakpoint: { max: 4000, min: 1330 },
              items: 4
            },
            'desktop': {
              breakpoint: { max: 1330, min: 1060 },
              items: 3
            },
            'tablet': {
              breakpoint: { max: 1060, min: 500 },
              items: 2
            }
          }}
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          className="w-3/4"
          removeArrowOnDeviceType={['mobile', 'tablet']}
          containerClass="container container-items-center"
          dotListClass=""
          draggable={true}
          focusOnSelect={false}
          infinite
          transitionDuration={200}
          itemClass="px-2 sm:px-4 md:px-4 lg:px-8 xl:px-4"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
          {[product.image, product.image, product.image, product.image, product.image, product.image, product.image, product.image, product.image, product.image].map((img, i) => {
            return <Image src={img} preview={false} alt="product image" width={76} height={76} key={i} className="pointer-events-none" />
          })}
        </Carousel>
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <span className={`${new Date(product.entrance).getTime() > new Date().getTime()  ? 'text-[#FF6B74] border-[#FF6B74]' : 'text-[#43BE65] border-[#43BE65]' } select-none rounded-md text-[9px] font-semibold leading-6 px-2 border`}>{new Date(product.entrance).getTime() > new Date().getTime() ? 'ВРЕМЕННО НЕТ В НАЛИЧИИ' : 'В НАЛИЧИИ'}</span>
        {new Date(product.entrance).getTime() > new Date().getTime() ? (
          <span className="text-[11px] font-normal leading-6">Поступление ожидается: {`${new Date(product.entrance).getDate()}.${(new Date(product.entrance).getMonth() + 1) < 10 ? `0${new Date(product.entrance).getMonth() + 1}` : new Date(product.entrance).getMonth() + 1}.${new Date(product.entrance).getFullYear()}`}</span>
        ) : ''}
        <span className="text-xs font-normal leading-6">{product.brand.replace('-', ' ').toUpperCase()}</span>
        <h2 className="font-semibold text-2xl leading-8 w-[80%] text-[#555555] h-[65px] overflow-hidden text-ellipsis whitespace-normal">{product.title}</h2>
        <div className="w-full flex items-center justify-between">
          <span className="text-[11px] font-normal">{product.weight}</span>
          <div className="flex items-center gap-x-6">
            <span className="font-normal max-w-[137px] xl:max-w-[264px] text-[10px] text-[#555555] text-lg leading-6 my-1">{product.discount > 0 ? (product.price - (product.price * (product.discount * 0.01))).toFixed(2) : product.price}₸</span>
            {product.discount > 0 && <span className="font-normal max-w-[137px] xl:max-w-[264px] text-[10px] text-[#555555] text-lg leading-6 my-1 line-through">{product.price}₸</span>}
          </div>
        </div>
        <TonSelector tons={product.tons} tonId={tonId} setTonId={setTonId} />
        <CustomButton clickFn={handleAddBasket} title={basket.filter(filt => filt.id === product.id && filt.selectedTon === tonId).length === 0 ? 'Добавить в коризну' : 'Добавлено'} className="w-full h-10 bg-[#43BE65] text-white text-lg font-normal border-2 hover:text-[#43BE65] hover:bg-white" />
      </div>
    </div>
  );
};
