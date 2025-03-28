import { CustomButton } from "@/features/CustomButton";
import { Image } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ProductCard = ({ id, image, text, price, discount, brand, manufactures }: { id: string; image: string, text: string, price: number, discount: number; brand: string; manufactures: string; }) => {

  return(
    <Link data-element="product-card" href={{
      pathname: `/catalog/${manufactures}/product`,
      query: {
        productId: id,
        brand: brand
      }
    }} as={`/catalog/${manufactures}/product?productId=${id}&brand=${brand}`} className="flex flex-col gap-y-1 w-[137px] lg:w-[264px] h-[303px] lg:h-[420px] cursor-pointer px-2">
      <div className="hidden xl:flex items-center justify-center">
        <Image src={image} width={220} height={220} preview={false} alt="Product Card"/>
      </div>
      <div className="xl:hidden flex items-center justify-center">
        <Image src={image} width={130} height={130} preview={false} alt="Product Card"/>
      </div>
      <span className="font-normal text-[10px] xl:text-[10px] leading-6 text-[#888888]">ART SOFFIO</span>
      <h2 className="font-normal max-w-[137px] xl:max-w-[264px] text-[10px] lg:text-[12px] xl:text-[15px] overflow-hidden text-ellipsis whitespace-nowrap max-h-10 leading-6 text-[#555555]">{text}</h2>
      <div className="w-full flex items-center gap-x-8">
        <span className="font-normal max-w-[137px] xl:max-w-[264px] text-[10px] lg:text-[13px] xl:text-xl leading-6 my-1">{discount > 0 ? (price - (price * (discount * 0.01))).toFixed(2) : price}₸</span>
        {discount > 0 ? <span className="font-normal max-w-[137px] xl:max-w-[264px] text-[10px] lg:text-[13px] xl:text-xl leading-6 my-1 text-[#888484] line-through">{price}₸</span> : null}
      </div>
      <CustomButton bgColor="#A19C9C" title="Добавить" width={264} height={34} className='xl:flex hidden text-lg hover:bg-white hover:text-[#888484]' />
      <CustomButton bgColor="#A19C9C" title="Добавить" width={137} height={23} className='flex xl:hidden text-xs hover:bg-white hover:text-[#888484]' />
    </Link>
  );
};
