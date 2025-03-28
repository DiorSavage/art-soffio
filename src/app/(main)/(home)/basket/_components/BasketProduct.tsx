import { useTypedDispatch, useTypedSelector } from '@/hooks/typedHooks';
import { IProducts } from '@/types/products.type';
import { Image } from 'antd';
import { actions as userActions } from '@/store/userslice/user.slice';
import { useUpdateUserByIdMutation } from '@/store/api/user.api';

export const BasketProduct = ({ product, quantity, selectedTon }: { product: IProducts; quantity: number; selectedTon: number }) => {
  
  const selectedTonName = product.tons.find(t => t.id === selectedTon);
  const { basket, ...userInfo } = useTypedSelector(state => state.userSlice)
  const dispatch = useTypedDispatch()
  const [updateUser] = useUpdateUserByIdMutation()
  const handleDeleteProduct = () => {
    const delProd = basket.filter(prod => prod.id === product.id && prod.selectedTon === selectedTon)
    const newBasket = basket.filter(prod => prod !== delProd[0])
    updateUser({ id: userInfo.id, body: { ...userInfo, basket: newBasket } })
    dispatch(userActions.setUser(['basket', newBasket]))
  }

  return (
    <div className='flex justify-between w-full my-3'>
      <div className='flex items-center gap-x-6'>
        <label>
          <input id={product.brand} type="checkbox" className='size-[18px] cursor-pointer'/>
        </label>
        <Image src={product.image} preview={false} width={116} height={166} />
      </div>
      <div className='flex flex-col gap-y-2 text-[#555555] w-[414px]'>
        <h1 className='font-semibold text-xl text-ellipsis whitespace-nowrap overflow-hidden w-full'>{product.title}</h1>
        <p className='text-lg font-semibold'>Тон {Number(selectedTon) < 10 ? '0' + Number(selectedTon) : Number(selectedTon)} - {selectedTonName && selectedTonName.ton}</p>
        <p className='text-lg font-semibold'>Вес Нетто: {product.weight}.</p>
        <div className='flex gap-x-3'>
          <span className="font-semibold max-w-[137px] text-[#555555] xl:max-w-[264px] text-[10px] lg:text-[13px] xl:text-xl leading-6 my-1">{product.discount > 0 ? (product.price - (product.price * (product.discount * 0.01))).toFixed(2) : product.price}₸</span>
          {product.discount > 0 ? <span className="font-normal max-w-[137px] xl:max-w-[264px] text-[10px] lg:text-[13px] xl:text-xl leading-6 my-1 text-[#888484] line-through">{product.price}₸</span> : null}
        </div>
      </div>
      <div className='flex flex-col items-end gap-y-4'>
        <Image onClick={handleDeleteProduct} src='/musor.png' preview={false} width={20} height={20} className='transition-all duration-300 hover:opacity-60 cursor-pointer' />
        <div className='flex items-center gap-x-[5px]'>
          <span className='transition-all duration-300 hover:bg-white hover:text-[#A19C9C] size-[22px] flex items-center justify-center rounded-full bg-[#A19C9C] text-white text-xl cursor-pointer'>{"-"}</span>
          <span className='font-normal text-base text-[#555555]'>{quantity}</span>
          <span className='transition-all duration-300 hover:bg-white hover:text-[#A19C9C] size-[22px] flex items-center justify-center rounded-full bg-[#A19C9C] text-white text-xl pl-[1px] pb-[2px] cursor-pointer'>{"+"}</span>
        </div>
      </div>
    </div>
  );
};
