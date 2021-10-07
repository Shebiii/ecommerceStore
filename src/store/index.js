import { configureStore } from "@reduxjs/toolkit"
import Cart from "./cartSlice"
import productslice from "./Productslice"
import userValidation from "./user"

const store = configureStore({
  reducer: {
    cart: Cart.reducer,
    user: userValidation.reducer,
    product: productslice.reducer,
  },
})

export default store
