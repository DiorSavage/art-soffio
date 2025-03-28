import { firestore } from "@/config/firebase.config";
import { IUser } from "@/types/user.type";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["User"],
  endpoints: builder => ({
    getUserById: builder.query<IUser, string>({
      async queryFn(id: string) {
        try {
          if (id) {
            const ref = doc(firestore, 'users', id)
            const docShap = await getDoc(ref)
            let user: IUser = { ...docShap.data() } as IUser
            return { data: user }
          } else {
            return { data: null }
          }
        } catch(error: any) {
          console.error(`Ошибка в API ДАУН ${error.message}`)
          return { error: error.message }
        }
      }
    }),
    createUserById: builder.mutation<void,{ id: string, phone?: string; email: string }>({
      async queryFn({ id, phone, email }: { id: string, phone?: string, email: string }) {
        try {
          const collectionShap = await setDoc(doc(firestore, 'users', id), {
            phone: phone,
            basket: [],
            email: email,
            icon: '',
            name: '',
            surname: '',
            username: ''
          })
          return { data: collectionShap }
        } catch (error: any) {
          console.warn(error.message)
        }
      },
    }),
    updateUserById: builder.mutation<void,{ id: string; body: IUser}>({
      async queryFn({ id, body }: { id: string, body: IUser }) {
        try {
          const collectionShap = await setDoc(doc(firestore, 'users', id), body)
          return { data: body }
        } catch (error: any) {
          console.warn(error.message)
        }
      },
      invalidatesTags: ['User'],
    })
  })
})

export const { useGetUserByIdQuery, useCreateUserByIdMutation, useUpdateUserByIdMutation } = userApi