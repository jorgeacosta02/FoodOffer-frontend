import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../slices/menuSlice'
import adminReducer from '../slices/adminAuthSlice'
import messageReducer from '../slices/messageSlice'
import userReducer from '../slices/userAuthSlice'
import premiumAdvReducer from '../slices/premiumAdvSlice'
import categoriesReducer from '../slices/categoriesSlice'
import detailReducer from '../slices/detailSlice'


export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    admin: adminReducer,
    user: userReducer,
    message: messageReducer,
    premiumAdv: premiumAdvReducer,
    categories: categoriesReducer,
    detail: detailReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;