import {createSlice} from '@reduxjs/toolkit'

const user=createSlice({
    name:'users',
    initialState:{
        userInfo:[],
    },
    reducers:{
        // loginStart:(state)=>{
        //     state.loading=true
        //     state.error=false
        // },
        loginUser:(state,action)=>{
            state.userInfo.push(action.payload)
            console.log(action.payload);
        }
        
    }
    
})
export const{loginUser}=user.actions
export default user.reducer