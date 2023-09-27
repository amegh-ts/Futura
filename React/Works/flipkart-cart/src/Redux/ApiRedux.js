import {createSlice} from '@reduxjs/toolkit'

const CartApi=createSlice({
    name:'products',
    initialState:{
        productInfo:[],
        
    },
    reducers: {
        cartProducts: (state, action) => {
            state.productInfo.push(action.payload); // Push the entire product information
            console.log(action.payload);
        }
    }
})
export const{cartProducts}=CartApi.actions
export default CartApi.reducer
