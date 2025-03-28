import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICollection } from "@/types/collection.type";
import { firestore } from '@/config/firebase.config';
import { doc, getDoc } from "firebase/firestore";

export const collectionApi = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Collection"],
  reducerPath: 'CollectionApi',
  endpoints: builder => ({
    getCollectionById: builder.query({
      async queryFn(id: string) {
        try {
          const ref = doc(firestore, 'collection', id)
          const docShap = await getDoc(ref)
          let collection: ICollection = { id: docShap.id, ...docShap.data() } as ICollection
          return { data: collection }
        } catch (error: any) {
          console.error(`Ошибка в API ДАУН ${error.message}`)
          return { error: error.message }
        }
      },
      providesTags: ["Collection"]
    })
  })
})

export const { useGetCollectionByIdQuery } = collectionApi