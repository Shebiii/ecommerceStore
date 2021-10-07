import { createSlice } from "@reduxjs/toolkit"

const Cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalquantity: 0,
    totalPrice: 0,
  },
  reducers: {
    additemtocart(state, action) {
      const newitem = action.payload
      const existingItem = state.items.find((item) => item.id === newitem.id)
      if (!existingItem) {
        state.totalquantity++
        state.totalPrice = state.totalPrice + newitem.price
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: newitem.productQuantity,
          name: newitem.name,
          url: newitem.url,
        })
      } else {
        state.totalquantity++
        existingItem.quantity++
        state.totalPrice = state.totalPrice + newitem.price
      }
    },

    removeItemtocart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      if (existingItem.quantity === 1) {
        state.totalquantity--
        state.items = state.items.filter((item) => item.id !== id)
        state.totalPrice = state.totalPrice - existingItem.price
      } else {
        existingItem.quantity--
        state.totalPrice = state.totalPrice - existingItem.price
      }
    },

    clearCart(state) {
      state.items = []
      state.totalquantity = 0
      state.totalPrice = 0
    },
  },
})

export const cartAction = Cart.actions

export default Cart
