import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts } from '@/types/products.type';
import { firestore } from '@/config/firebase.config';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

//! ПРИ ИСПОЛЬЗОВАНИИ ЕБАННОГО FIREBASE У НАС НЕТ ПО ФАКТУ БАЗОВОГО URL, ПОЭТОМУ ПРИХОДИТСЯ ЮЗАТЬ queryFn

export const productsApi = createApi({
  baseQuery: fakeBaseQuery(), // так как ебанный firebase
  tagTypes: ['Products'],
  endpoints: builder => ({
    getAllProducts: builder.query<IProducts[], void>({
      async queryFn() {
        try {
          const ref = collection(firestore, 'products')
          const queryShapshot = await getDocs(ref)
          let products: IProducts[] = []
          queryShapshot?.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() } as IProducts)
          })
          return { data: products }
        } catch(error: any) {
          console.error(`Ошибка в API ДАУН ${error.message}`)
          return { error: error.message }
        }
      },
      providesTags: ["Products"]
    }),
    getProductById: builder.query({
      async queryFn(id: string) {
        // try {
        //   const ref = collection(firestore, 'products')
        //   const queryShapshot = await getDocs(ref)
        //   let products: IProducts[] = []
        //   queryShapshot?.forEach((doc) => {
        //     products.push({ id: doc.id, ...doc.data() } as IProducts)
        //   })
        //   return { data: products.filter((product) => product.id === id) }
        try {
          const ref = doc(firestore, 'products', id)
          const queryShapshot = await getDoc(ref)
          let product = { id: queryShapshot.id, ...queryShapshot.data() } as IProducts
          return { data: product }
        } catch (error: any) {
          console.error(`Ошибка в API ДАУН ${error.message}`)
          return { error: error.message }
        }
      },
      providesTags: ["Products"]
    }),
    addNewProducts: builder.mutation({
      async queryFn(newProducts) {
        try {
          await setDoc(doc(firestore, 'products', newProducts.id), newProducts)
          return { data: null }
        } catch(error: any) {
          console.error(error.message)
          return { error: error.message }
        }
      },
      invalidatesTags: ['Products']
    })
  })
})

export const { useGetAllProductsQuery, useAddNewProductsMutation, useGetProductByIdQuery } = productsApi