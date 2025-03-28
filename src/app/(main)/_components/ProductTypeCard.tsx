import { IPagesCards } from '@/constants/home.constant';
import { Image } from 'antd';
import Link from 'next/link';

export const ProductTypeCard = ({ card }: { card: IPagesCards }) => {
  return(
    <Link href={card.href} style={{ backgroundColor: card.bgColor }} className="transition-all duration-300 hover:scale-105 flex w-[100%] lg:w-[24%] flex-col items-center justify-around h-[217px] lg:h-[423px]">
      <Image src={card.image} alt={card.title} preview={false} width={150} height={237} className='lg:block hidden mt-12' />
      <Image src={card.image} alt={card.title} preview={false} width={93} height={148} className='block lg:hidden' />
      <h1 className="text-[#555555] text-base xl:text-2xl font-normal mb-3">{card.title}</h1>
    </Link>
  );
};