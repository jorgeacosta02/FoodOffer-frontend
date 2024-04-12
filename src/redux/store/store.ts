import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../slices/menuSlice'
import adminReducer from '../slices/adminAuthSlice'
import messageReducer from '../slices/messageSlice'
import userReducer from '../slices/userAuthSlice'

export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    admin: adminReducer,
    user: userReducer,
    message: messageReducer,
  }
})