import { createSlice } from '@reduxjs/toolkit'

const ecomredux = createSlice({
    name: 'users',
    initialState: {
        productinfo: [],
    },
    reducers: {
        cartItems: (state, action) => {
            state.productinfo.push(action.payload);
            console.log(action.payload);
        },
        removeData: (state) => {
            state.productinfo = []; // Clear the productinfo array
        },
    }
});

export const { cartItems, removeData } = ecomredux.actions;
export default ecomredux.reducer;
