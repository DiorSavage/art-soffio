'use client'

import { useTypedSelector } from "@/hooks/typedHooks"
import { OrderFields } from "./_components/OrderFields"
import { Bounce, ToastContainer } from "react-toastify"
import { results } from "@/constants/order.constants"
import { ResultOrder } from "./_components/ResultOrder"

const Order = () => {

  const userInfo = useTypedSelector(state => state.userSlice)
  const summary = userInfo.basket.map(item => (item.price - (item.price * (item.discount / 100))) * item.quantity).reduce((a, b) => a + b, 0)
  const orderResultsPay = [
    summary, 1350.4444, summary + 1350.4444
  ]

  return (
    <div className="flex gap-x-5 py-[50px] text-[#555555] w-full">
      {userInfo.loading ? (<div>Загрузка...</div>) : (
        <>
          <div className="flex flex-col gap-y-[30px] w-3/5">
            <h1 className="font-semibold text-[25px]">Оформление заказа</h1>
            <OrderFields summary={summary} user={userInfo} />
          </div>
          <div className="flex flex-col w-[35%]">
            {results.map((result, i) => {
              return <ResultOrder key={i} header={result.header} title={result.title} summary={orderResultsPay[i]} />
            })}
          </div>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  )
}

export default Order