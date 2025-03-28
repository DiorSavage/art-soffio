export const ResultOrder = ({ header, title, summary }: { header: string, title: string; summary: number }) => {
  return(
    <div className="flex flex-col gap-y-5 bg-[#F8F8F8] text-[#555555] px-7 py-6 w-full h-56 rounded-[9px] mt-16">
      <h2 className="font-semibold text-2xl">{header}</h2>
      <span className="font-normal text-sm text-[#888888]">{title}</span>
      <div className="w-full h-[2px] bg-[#E5E5E5]"></div>
      <div className="w-full flex items-center justify-end">
        <span className="font-bold text-xl text-[#888888]">{summary.toFixed(2)} ₸</span>
      </div>
    </div>
  );
};
