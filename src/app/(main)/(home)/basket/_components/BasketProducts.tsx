'use client'

import { useGetAllProductsQuery } from '@/store/api/products.api';
import { BasketProduct } from './BasketProduct';
import { IProducts } from '@/types/products.type';
import { IBasket } from '@/types/user.type';

interface IBasketProducts {
  basket: IBasket[];
  loading: boolean;
}

export const BasketProducts = ({ basket, loading }: IBasketProducts) => {

  const { data: products, isLoading, isSuccess } = useGetAllProductsQuery()
  const filteredProducts: IProducts[] = (products && basket) ?
  basket.map(item => products.find(filt => filt.id === item.id)) : []

  return (
    <div className="flex flex-col px-5 py-4 gap-y-4 bg-[#F8F8F8] rounded-[9px] w-full">
      {isLoading ? <p>Загрузка...</p> : basket.length === 0 ? <p>Корзина пуста</p> : (
        <>
          <div className='flex gap-x-3'>
            <label className='flex items-center gap-x-2'>
              <input type="checkbox" className='size-[18px] cursor-pointer' />
              <span className='text-[#888888] text-base font-semibold'>ART SOFFIO</span>
            </label>
          </div>
          <div className='w-full h-[2px] bg-[#E5E5E5]'></div>
          {filteredProducts.map((product, i) => <BasketProduct key={i} product={product} quantity={basket[i].quantity} selectedTon={basket[i].selectedTon} />)}
        </>
      )}
    </div>
  );
};

