import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userslice/user.slice";
import { productsApi } from "./api/products.api";
import { collectionApi } from "./api/collection.api";
import { userApi } from "./api/user.api";

const reducers = combineReducers({
  userSlice: userSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [collectionApi.reducerPath]: collectionApi.reducer,
  [userApi.reducerPath]: userApi.reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware).concat(collectionApi.middleware).concat(userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch