import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
  searchQuery: '',
}

const cartAndWishlistSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addToCartItem: (state, action) => {
      const isInCart = state.cart.find((el) => el.id === action.payload.id)
      if (isInCart) {
        state.cart = state.cart.filter((el) => el.id !== action.payload.id)
      } else {
        state.cart.push(action.payload)
        state.wishlist = state.wishlist.filter(
          (el) => el.id !== action.payload.id
        )
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },
    addToWishlistItem: (state, action) => {
      const isInWishList = state.wishlist.find(
        (el) => el.id === action.payload.id
      )
      if (isInWishList) {
        state.wishlist = state.wishlist.filter(
          (el) => el.id !== action.payload.id
        )
      } else {
        state.wishlist.push(action.payload)
        state.cart = state.cart.filter((el) => el.id !== action.payload.id)
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    changeCartItemQuantity: (state, action) => {
      const isInCart = state.cart.find((el) => el.id === action.payload.id)
      isInCart && (isInCart.quantity = action.payload.quantity)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
      localStorage.setItem('searchQuery', JSON.stringify(state.searchQuery))
    },
  },
})

export const {
  addToCartItem,
  addToWishlistItem,
  changeCartItemQuantity,
  setSearchQuery,
} = cartAndWishlistSlice.actions

export const selectCart = (state) => state.items.cart
export const selectWishlist = (state) => state.items.wishlist
export const selectSearch = (state) => state.items.searchQuery

export default cartAndWishlistSlice.reducer
