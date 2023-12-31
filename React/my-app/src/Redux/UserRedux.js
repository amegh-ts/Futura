import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'users',
    initialState: {
        userInfo: [],
        // productinfo:[]
    },
    reducers: {
        loginUser: (state, action) => {
            state.userInfo.push(action.payload)
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
export const { loginUser,removeData } = user.actions
export default user.reducer