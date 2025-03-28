import { FormEvent, MouseEvent } from "react";

interface ICustomButton {
  width?: number;
  height?: number;
  submitFn?: (e: FormEvent<HTMLButtonElement>) => void;
  clickFn?: (e: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  bgColor?: string;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
}

export const CustomButton = ({ width, height, submitFn, clickFn, title, bgColor, className, type = 'button' }: ICustomButton) => {
  return(
    <button type={type} style={{ width: `${width}px`, height: `${height}px` }} onSubmit={submitFn} onClick={clickFn} className={`transition-all duration-300 border hover:border-[${bgColor}] text-white flex items-center justify-center py-2 font-normal text-lg leading-6 rounded-[19px] ${className} bg-[${bgColor}]`}>{title}</button>
  );
};
