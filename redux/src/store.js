import {configureStore } from '@reduxjs/toolkit'
import todoreducer from "../src/features/todo/todoslice.js";
export const store=configureStore({
    reducer:todoreducer
})