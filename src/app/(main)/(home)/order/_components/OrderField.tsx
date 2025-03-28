'use client'

import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { Dropdown, MenuProps } from "antd";
import { IValues } from "./OrderFields";

interface IOrderField {
  type: string;
  isImportant: boolean;
  title: string;
  value: string;
  setValue: Dispatch<SetStateAction<IValues>>;
  fieldName: string;
  placeholder: string;
  options?: MenuProps['items'];
}

const OrderField = ({fieldName, type, isImportant, title, value, setValue, placeholder, options }: IOrderField) => {

  if (options) {
    return (
      <div className="flex flex-col gap-y-[10px]">
        <label className="font-semibold text-base">{isImportant ? (<>{title}<span className="font-semibold text-red-500 text-base ml-1 leading-6">*</span></>) : title}</label>
        <Dropdown 
          menu={{
            items: options,
            selectable: true,
            defaultValue: value,
            onClick: (e) => setValue(e)
          }}
          arrow
          trigger={['click']}
          className="w-3/5 px-4 py-[6px] h-9 border  text-[#555555] border-[#CCCCCC] placeholder:text-[#C4C2C2] bg-transparent text-base placeholder:text-base font-medium rounded-sm"
        >
          <span className="cursor-pointer">{value}</span>
        </Dropdown>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-y-[10px]">
      <label className="font-semibold text-base">{isImportant ? (<>{title}<span className="font-semibold text-red-500 text-base ml-1 leading-6">*</span></>) : title}</label>
      {type === 'textarea' ?
        <textarea name={fieldName} placeholder={placeholder} className={`w-3/5 px-2 py-2 h-80 overflow-y-scroll border  text-[#555555] border-[#CCCCCC] placeholder:text-[#C4C2C2] bg-transparent text-base placeholder:text-base font-medium rounded-sm`} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e)} value={value} /> :
        <input name={fieldName} placeholder={placeholder} className={`w-3/5 px-4 py-2 h-9 border  text-[#555555] border-[#CCCCCC] placeholder:text-[#C4C2C2] bg-transparent text-base placeholder:text-base font-medium rounded-sm`} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e)} type="text" value={value} />
      }
    </div>
  )
}

export default OrderField