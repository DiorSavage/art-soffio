'use client'

import { useTypedDispatch, useTypedSelector } from "@/hooks/typedHooks"
import type { IBasket, IUserData } from "@/types/user.type"
import { useEffect, useMemo, useState } from "react"
import { InputField } from "../../_components/InputField"
import { CustomButton } from "@/features/CustomButton"
import { Image } from 'antd'
import { actions as userActions } from "@/store/userslice/user.slice"
import { useUpdateUserByIdMutation } from "@/store/api/user.api"
import { signOut } from "firebase/auth"
import { auth } from "@/config/firebase.config"
import { useRouter } from "next/navigation"

const Profile = () => {

  const router = useRouter()
  const { basket, loading: isLoading, id, ...userInfo } = useTypedSelector(state => state.userSlice)
  const [defaultData, setDefaultData] = useState<IUserData>()
  const dispatch = useTypedDispatch()
  const [updateUserInfo] = useUpdateUserByIdMutation()

  const handleUpdateUser = () => {
    updateUserInfo({ id, body: { ...userInfo, basket } })
    setDefaultData(userInfo)
  }

  const handleDropNewInfo = () => {
    defaultData && Object.keys(defaultData).map((key) => {
      const inputField = document.querySelector(`input[name="${key}"`) as HTMLInputElement
      inputField.value = defaultData[key as keyof object]
      dispatch(userActions.setUser([ key, defaultData[key as keyof object] ]))
    })
  }

  useMemo(() => {
    if (userInfo.email) {
      setDefaultData(userInfo)
    }
  }, [isLoading])

  const handleExitAccount = () => {
    dispatch(userActions.exitUser())
    signOut(auth)
    router.push('/')
  }

  return (
    <div className="flex flex-col items-center my-6 gap-y-3">
      <h1 className="text-3xl font-semibold">Данные пользователя</h1>
      {userInfo.email ? (
        <div className="flex items-center justify-center gap-x-12">
          <div className="flex flex-col items-center gap-y-3">
            <Image src={userInfo.icon ? userInfo.icon : '/auth_icon.png'} width={200} height={200} className="rounded-full pointer-events-none" preview={false} alt="profile" />
            <h2 className="font-semibold text-lg">{userInfo.username}</h2>
          </div>
          <div className="flex flex-col gap-y-3 items-center my-6 rounded-[50px]">
            <form className="grid grid-cols-3 gap-x-5">
              {Object.keys(userInfo).map((key, i) => {
                return (
                  <InputField
                    key={i}
                    name={key}
                    state={String(userInfo[key as keyof IUserData])}
                    placeholder={`Введите ${key}`}
                    title={key}
                    setState={(e) => dispatch(userActions.setUser([ key, e.target.value ]))}
                  />
                )
              })}
            </form>
            <div className="flex justify-between w-full px-4">
              <CustomButton clickFn={handleDropNewInfo} title="Сбросить" className="bg-[#2816c7] text-sm mt-6 px-9 py-1 hover:bg-transparent hover:text-[#2816c7] w-1/4" type="submit" />
              <CustomButton clickFn={handleUpdateUser} title="Сохранить" className="bg-[#43BE65] text-sm mt-6 px-9 py-1 hover:bg-transparent hover:text-[#43BE65] w-1/4" type="submit" />
              <CustomButton clickFn={handleExitAccount} title="Выйти из аккаунта" className="bg-[#e21b1b] text-sm mt-6 px-9 py-1 hover:bg-transparent hover:text-[#e21b1b] w-1/4" type="submit" />
            </div>
          </div>
        </div>
      ) : isLoading ? (<div>Loading...</div>) : (<div>Not found</div>)}
    </div>
  )
}

export default Profile