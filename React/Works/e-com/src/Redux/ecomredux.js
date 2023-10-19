import { createSlice } from '@reduxjs/toolkit'

const ecomredux = createSlice({
    name: 'users',
    initialState: {
        productinfo:[]
    },
    reducers: {
        viewProducts: (state, action) => {
            state.productinfo.push(action.payload)
            console.log(action.payload);
        },
        // addproduct:(state,action)=>{
        //     state.productinfo.push()
        // }
        

        // remove data from local storage
        removeData:(state)=>{
            state.userInfo=[]
        }
    }

})
export const { viewProducts,removeData } = ecomredux.actions
export default ecomredux.reducer