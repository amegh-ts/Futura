import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'unknown',
    initialState: {
        userInfo: []
    },
    reducers: {
        loginUser: (state, action) => {
            state.userInfo.push(action.payload)
            // console.log('the action.payload......',action.payload);
        },

        logoutUser: (state) => {
            state.userInfo = []
        }
    }
})

export const { loginUser, logoutUser } = user.actions
export default user.reducer