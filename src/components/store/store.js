import { configureStore } from '@reduxjs/toolkit'
import cartAndWishlistSlice from '../../slices/CartSlice'

export const store = configureStore({
  reducer: {
    items: cartAndWishlistSlice,
  },
})
