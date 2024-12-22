import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { appReducer, appSlice } from "./appSlice"
import { baseApi } from "./baseApi"

export const store = configureStore({
  reducer: {
    // [tasksSlice.name]: tasksReducer,
    // [todolistsSlice.name]: todolistsReducer,
    [appSlice.name]: appReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
