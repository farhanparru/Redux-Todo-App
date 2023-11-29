import { configureStore } from "@reduxjs/toolkit";
import todoslice from '../features/slice'
export const store=configureStore({
    reducer:{
        todo:todoslice
    }
})