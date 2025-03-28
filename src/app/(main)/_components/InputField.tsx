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
    <div className="flex w-full flex-col gap-y-2 my-1">
      <label className="flex gap-x-2 text-gray-700 font-medium mb-1 ml-[2px]" htmlFor={name}>{title.slice(0, 1).toUpperCase() + title.slice(1, title.length)}{isImportant && <span className="flex text-[12px] text-[#cc1616] ml-[2px] text-start]">*</span>}</label>
      <input name={name} type={type} value={state} placeholder={placeholder} onChange={setState} className={`transition-all duration-150 p-2 border border-gray-300 rounded-md focus:border-green-500 focus:outline-none ${className}`} />
    </div>
  );
};
