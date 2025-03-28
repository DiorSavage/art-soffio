"use client"

import { useGetUserByIdQuery } from "@/store/api/user.api"
import { Footer } from "./_components/Footer"
import { Header } from "./_components/Header"
import { useEffect, useState } from "react"
import { auth } from "@/config/firebase.config"
import { useTypedDispatch, useTypedSelector } from "@/hooks/typedHooks"
import { userSlice } from "@/store/userslice/user.slice"
import { onAuthStateChanged } from "firebase/auth"

export default function MainLayout({ children }: { children: React.ReactNode }) {

  const { id: uid, loading, ...userInfo } = useTypedSelector(state => state.userSlice)
  const { data: userData, isLoading, isSuccess } = useGetUserByIdQuery(uid)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userSlice.actions.setUser([ 'id', user.uid ]))
        userData && Object.keys(userData).map((key) => {
          dispatch(userSlice.actions.setUser([ key, userData[key as keyof object] ]))
        })
        userData && dispatch(userSlice.actions.setUser([ 'loading', false ]))
      }
    })
    return () => {
      listen()
    }
  }, [userData])

  return (
    <>
      <Header />
      <main className="md:w-4/5 w-full mx-auto">
        {children}
      </main>
      <Footer />
    </>
  )
}