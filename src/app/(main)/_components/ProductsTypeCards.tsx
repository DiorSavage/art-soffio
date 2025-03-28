import { pagesCards } from "@/constants/home.constant";
import { ProductTypeCard } from "./ProductTypeCard";

export const ProductsTypeCards = () => {
  return(
    <div className="flex flex-col items-center gap-y-10 w-full mb-4">
      <h1 className="font-semibold text-lg md:text-4xl text-[#555555]">Мир красоты и ухода</h1>
      <div className="grid grid-cols-2 gap-4 pl-4 lg:flex lg:justify-between w-full">
        {pagesCards.map((card, i) => {
          return <ProductTypeCard key={i} card={card} />
        })}
      </div>
    </div>
  );
};
