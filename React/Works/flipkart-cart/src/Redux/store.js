import { configureStore } from "@reduxjs/toolkit";
import ApiRedux from "./ApiRedux";

export default configureStore({
    reducer:{
        products:ApiRedux
    }
})