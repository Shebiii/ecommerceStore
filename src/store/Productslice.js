import { createSlice } from "@reduxjs/toolkit"

const productslice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    addProduct(state, action) {
      const newProduct = action.payload
      state.items.push({
        id: newProduct.id,
        price: newProduct.price,
        productQuantity: newProduct.productQuantity,
        url: newProduct.url,
        name: newProduct.name,
        description: newProduct.description,
      })
    },
    setProduct(state, action) {
      const newProduct = action.payload
      state.items = newProduct
    },
    Wishlist(state, action) {
      const newProduct = action.payload
      state.items[newProduct.id].wish = !state.items[newProduct.id].wish
    },
  },
})

export const productAction = productslice.actions
export default productslice
