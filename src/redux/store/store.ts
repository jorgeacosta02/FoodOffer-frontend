import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../slices/menuSlice'
import adminReducer from '../slices/adminAuthSlice'
import messageReducer from '../slices/messageSlice'
import userReducer from '../slices/userAuthSlice'
import advertisingReducer from '../slices/advertisingSlice'
import categoriesReducer from '../slices/categoriesSlice'
import categoryCodeReducer from '../slices/categoryCodesSlice'
import filtersReducer from '../slices/fltersSlice'
import detailReducer from '../slices/detailSlice'


export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    admin: adminReducer,
    user: userReducer,
    message: messageReducer,
    advertising: advertisingReducer,
    categories: categoriesReducer,
    categoryCode: categoryCodeReducer,
    filters: filtersReducer,
    detail: detailReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;