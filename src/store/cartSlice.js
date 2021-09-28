import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalquantity: 0,
        totalPrice: 0,
        isexistingItem : false
    },
    reducers: {
        additemtocart(state,action) {
            const newitem = action.payload;
            const existingItem = state.items.find(item => item.id === newitem.id);
            state.totalquantity++
            if (!existingItem) {
                state.isexistingItem = false
            state.totalPrice =  state.totalPrice + newitem.price
                state.items.push({
                    id: newitem.id,
                    price: newitem.price,
                    quantity: 1,
                    productQuantity:newitem.productQuantity,
                    totalPrice: newitem.price,
                    name: newitem.name,
                    url:newitem.url
                });
            }
            else{
                state.isexistingItem = true;
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newitem.price
                state.totalPrice = state.totalPrice +  newitem.price
                
            }
        },

        removeItemtocart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalquantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
                state.totalPrice = state.totalPrice -  existingItem.price
            }
            else {
                existingItem.quantity--;
                state.totalPrice = state.totalPrice -  existingItem.price
            }
        },
    }
    
})

export const cartAction = Cart.actions;

export default Cart;


