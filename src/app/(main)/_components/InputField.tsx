import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IINputField {
  placeholder: string;
  state: string;
  setState: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  title: string;
  type?: string;
  className?: string;
  isImportant?: boolean;
}

export const InputField = ({ placeholder, state, setState, name, title, type='text', className, isImportant = false }: IINputField) => {
  return(
    <div className="flex flex-col gap-y-2 my-1">
      <label className="font-bold text-[12px] leading-6 ml-[2px]" htmlFor={name}>{title.slice(0, 1).toUpperCase() + title.slice(1, title.length)}{isImportant && <span className="flex text-[12px] text-[#cc1616] w-full ml-[2px] text-start]">*</span>}</label>
      <input name={name} type={type} value={state} placeholder={placeholder} onChange={setState} className={`placeholder:text-xs text-sm font-medium w-[324px] rounded-sm py-2 px-2 border border-[#A2A6B0] ${className}`} />
    </div>
  );
};
