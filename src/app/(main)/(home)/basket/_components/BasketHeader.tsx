export const BasketHeader = ({ countProducts }: { countProducts: number }) => {
  return(
    <div className="flex flex-col justify-center px-5 py-8 gap-y-8 w-full h-36 bg-[#F8F8F8]">
      <h1 className="font-bold text-2xl leading-6">Корзина ({countProducts})</h1>
      <form className="flex items-center gap-x-2">
        <input className="size-[18px] cursor-pointer" name="allProd" type="checkbox" />
        <label className="text-[#888888] font-normal text-sm" htmlFor="allProd">Выбрать все</label>
      </form>
    </div>
  );
};
