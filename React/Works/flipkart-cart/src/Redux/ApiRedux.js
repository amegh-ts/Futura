import {createSlice} from '@reduxjs/toolkit'

const CartApi=createSlice({
    name:'products',
    initialState:{
        productInfo:[],
        
    },
    reducers:{
        cartProducts:(state,action)=>{
            state.productInfo.push(action.payload)
            console.log(action.payload);
        }
    }
})
export const{cartProducts}=CartApi.actions
export default CartApi.reducer
