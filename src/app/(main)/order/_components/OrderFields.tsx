'use client'

import { IUser } from "@/types/user.type";
import OrderField from "./OrderField";
import { FormEvent, useEffect, useState } from "react";
import { fields, selectValues } from "@/constants/order.constants";
import { CustomButton } from "@/features/CustomButton";
import Link from "next/link";

interface IOrderFields {
  summary: number;
  user: IUser;
}

export interface IValues {
  pay: string;
  delivery: string;
  city: string;
  firstname: string;
  surname: string;
  phone: string;
  email: string;
  comment: string;
}

export const OrderFields = ({ summary, user }: IOrderFields) => {

  const [values, setValues] = useState<IValues>({
    pay: 'Tinkoff',
    delivery: 'Доставка',
    city: 'Москва',
    firstname: user.name || '',
    surname: user.surname || '',
    phone: user.phone || '',
    email: user.email,
    comment: ''
  })

  const handleOrder = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(values)
  }
  
  return(
    <form onSubmit={(e) => handleOrder(e)} className="flex flex-col py-4 px-5 bg-[#F8F8F8] gap-y-7">
      {/* <OrderField title="ФИО" value="Иванов Иван Иванович" type="text" setValue={() => console.log('adfasdf')} isImportant />
      <OrderField title="ФИО" value="Иванов Иван Иванович" type="text" setValue={() => console.log('adfasdf')} isImportant /> */}
      {fields.map(field => {
        if(field.key === 'delivery' || field.key === 'pay' || field.key === 'city') {
          return <OrderField placeholder={field.placeholder} fieldName={field.key} key={field.key} title={field.title} isImportant={field.important} options={selectValues[field.key]} value={values[field.key as keyof typeof values]} setValue={(e) => setValues({
            ...values,
            [field.key]: e.key
          })} type={field.type} />
        } else {
          return <OrderField placeholder={field.placeholder} fieldName={field.key} key={field.key} title={field.title} isImportant={field.important} value={values[field.key as keyof typeof values]} setValue={(e) => setValues({
            ...values,
            [field.key]: e.target.value
          })} type={field.type} />
        }
      })}
      <div className="w-[55%] flex flex-col gap-y-5 mt-8">
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold text-lg">К оплате</span>
          <span className="text-[#888888] text-2xl font-bold">{summary} ₸</span>
        </div>
        <div className="flex flex-col items-center gap-y-1 w-full">
          <CustomButton type="submit" title="Подтвердить заказ" bgColor="#43BE65" className="text-white hover:text-[#43BE65] hover:bg-transparent rounded-full w-full text-lg font-semibold h-12" />
          <span className="font-normal text-xs">Подтверждая заказ вы соглашаетесь с <Link className="transition-all duration-300 hover:text-[#43BE65] underline" href={'/'}>политикой конфедициальности</Link></span>
        </div>
      </div>
    </form>
  );
};