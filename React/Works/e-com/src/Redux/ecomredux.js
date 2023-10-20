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
        removeItem: (state,action) => {
            const { id } = action.payload;
            const existingItem = state.productinfo.find(item => item.id === id);

            if (existingItem) {
                // If the item already exists, decrease the quantity by 1
                existingItem.quantity -= 1;

                // If the quantity becomes zero, remove the item
                if (existingItem.quantity === 0) {
                    state.productinfo = state.productinfo.filter(item => item.id !== id);
                }
            }        },
    }
});

export const { cartItems, removeItem } = ecomredux.actions;
export default ecomredux.reducer;
