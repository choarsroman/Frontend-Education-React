import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
}

const cartAndWishlistSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addToCartItem: (state, action) => {
      const isInCart = state.cart.find((el) => el.id === action.payload.id)
      isInCart
        ? (state.cart = state.cart.filter((el) => el.id !== action.payload.id))
        : state.cart.push(action.payload)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    addToWishlistItem: (state, action) => {
      const isInWishList = state.wishlist.find(
        (el) => el.id === action.payload.id
      )
      isInWishList
        ? (state.wishlist = state.wishlist.filter(
            (el) => el.id !== action.payload.id
          ))
        : state.wishlist.push(action.payload)
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },
    changeCartItemQuantity: (state, action) => {
      const isInCart = state.cart.find((el) => el.id === action.payload.id)
      isInCart && (isInCart.quantity = action.payload.quantity)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
})

export const { addToCartItem, addToWishlistItem, changeCartItemQuantity } =
  cartAndWishlistSlice.actions

export const selectCart = (state) => state.items.cart
export const selectWishlist = (state) => state.items.wishlist

export default cartAndWishlistSlice.reducer
