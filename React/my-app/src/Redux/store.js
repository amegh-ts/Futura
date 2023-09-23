import { configureStore } from "@reduxjs/toolkit";
import UserRedux from "./UserRedux";

export default configureStore({
    reducer:{
        users:UserRedux
    }
})