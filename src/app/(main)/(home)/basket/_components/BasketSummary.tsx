import { CustomButton } from "@/features/CustomButton";
import { useRouter } from "next/navigation";

export const BasketSummary = ({ summary }: { summary: number }) => {

  const router = useRouter()

  return(
    <div className="flex flex-col gap-y-5 bg-[#F8F8F8] text-[#555555] px-7 py-6 w-[35%] h-1/2 rounded-[9px]">
      <h1 className="font-semibold text-2xl">Сумма заказов</h1>
      <div className="w-full flex justify-between text-[#888888]">
        <span className="font-normal text-sm">Стоимость</span><span className="font-normal text-sm">{summary.toFixed(2)} ₸</span>
      </div>
      <div className="w-full h-[2px] bg-[#E5E5E5]"></div>
      <div className="w-full flex justify-between text-[#888888]">
        <span className="font-bold text-sm">К оплате</span><span className="font-bold text-xl text-[#888888]">{summary.toFixed(2)} ₸</span>
      </div>
      <CustomButton clickFn={() => router.push('/order')} title="Оформить заказ" bgColor="#43BE65" className="hover:text-[#43BE65] hover:bg-transparent" />
    </div>
  );
};
