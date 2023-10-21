import { createSlice } from '@reduxjs/toolkit'

const ecomredux = createSlice({
    name: 'users',
    initialState: {
        productinfo: [],
    },
    reducers: {
        cartItems: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.productinfo.find(item => item.id === id);

            if (existingItem) {
                // If the item already exists, increase the quantity
                existingItem.quantity += 1;
            } else {
                // If it's a new item, add it to the cart
                state.productinfo.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            console.log(action.payload);
            const existingItem = state.productinfo.find(item => item.id === action.payload);
            console.log('first 0.1 ', action.payload);
            console.log('first check', existingItem);
            if (existingItem) {
                // If the item already exists, decrease the quantity by 1
                existingItem.quantity -= 1;

                // If the quantity becomes zero, remove the item
                if (existingItem.quantity === 0) {
                    // state.productinfo = state.productinfo.pop(item => item.id == id);
                    state.productinfo.splice(state.productinfo.findIndex((item) => item.id === action.payload), 1)
                }
            }
        },
    }
});

export const { cartItems, removeItem } = ecomredux.actions;
export default ecomredux.reducer;
