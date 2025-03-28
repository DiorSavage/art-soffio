import Link from 'next/link';

export const MorePages = () => {
  return(
    <div className='hidden lg:flex flex-col xl:flex-row w-full items-center justify-between gap-7 mb-3'>
      <div className="flex flex-col items-center justify-end w-[741px] h-[600px] gap-y-[10px] text-white pb-6 bg-[url('/catalog_bg.png')] bg-center bg-no-repeat bg-cover w-">
        <h1 className='font-semibold text-4xl leading-10'>Каталог</h1>
        <Link href='/catalog' className='transition-all duration-300 hover:opacity-50 font-semibold text-lg leading-10 border-b border-b-white'>Смотреть все каталоги</Link>
      </div>
      <div className="flex flex-col items-center justify-end w-[741px] h-[600px] gap-y-[10px] text-white pb-6 bg-[url('/stocks_bg.png')] bg-center bg-no-repeat bg-cover w-">
        <h1 className='font-semibold text-4xl leading-10'>Акции</h1>
        <Link href='/stocks' className='transition-all duration-300 hover:opacity-50 font-semibold text-lg leading-10 border-b border-b-white'>Смотреть все акции</Link>
      </div>
    </div>
  );
};
