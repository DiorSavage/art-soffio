'use client'

import { FormEvent, useEffect, useState } from "react"
import { InputField } from "../../_components/InputField"
import { CustomButton } from "@/features/CustomButton"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/config/firebase.config"
import { useRouter } from "next/navigation"
import { useTypedDispatch, useTypedSelector } from "@/hooks/typedHooks"
import { actions as userActions } from "@/store/userslice/user.slice"
import { useCreateUserByIdMutation } from "@/store/api/user.api"

const RegistrationPage = () =>{

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [createUser] = useCreateUserByIdMutation()
  const userInfo = useTypedSelector(state => state.userSlice)
  const dispatch = useTypedDispatch()
  const router = useRouter()

  const handleCreateUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password) // создание юзера с email и паролем 
        .then(({ user }) => {
          setEmail('')
          setPassword('')
          setConfirmPassword('') // удаление данных с состояний после успешной регистрации
          setPhone('')
          user.email && createUser({ id: user.uid, phone, email: user.email })
        })
        .catch((error) => console.log(error))
        router.push('/')
    }
  }

  useEffect(() => {
    if (userInfo.email) {
      router.push('/')
    }
  }, [userInfo])

  return (
    <div className="flex flex-col items-center w-full my-12">
      <form onSubmit={(e) => handleCreateUser(e)} className="flex flex-col items-center w-1/2 gap-y-12 py-6 px-4 bg-[#dddada] rounded-xl">
        <h1 className="font-bold text-3xl leading-10">Регистрация</h1>
        <div className="flex flex-col mb-24">
          <InputField type="email" name="email" title="Введите ваш email" placeholder="Введите ваш email" setState={(e) => setEmail(e.target.value)} state={email} className="mb-4" isImportant={true} />
          <InputField type="password" name="password" title="Введите ваш пароль" placeholder="Введите ваш пароль" setState={(e) => setPassword(e.target.value)} state={password} className="mb-4" isImportant={true} />
          <InputField type="password" name="confirmpassword" title="Подтвердите ваш пароль" placeholder="Подтвердите ваш пароль" setState={(e) => setConfirmPassword(e.target.value)} state={confirmPassword} className="mb-4" isImportant={true} />
          <InputField name="phone" title="Введите ваш номер телефона" placeholder="Введите ваш номер телефона" setState={(e) => setPhone(e.target.value)} state={phone} className="mb-4" />
        </div>
        <div className="flex flex-col gap-y-2 w-3/5">
          <CustomButton type="submit" title="Регистрация" className="bg-[#43BE65] w-full h-10 hover:text-[#43BE65] hover:bg-white border-2"/>
          <button onClick={() => router.push('/auth')} type="button" className="transition-all duration-300 hover:opacity-60 font-normal text-sm">Есть аккаунт?</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationPage