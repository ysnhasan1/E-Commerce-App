import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "../features/products/productsSlice"
import navbarSlice from './../features/navbar/navbarSlice'
import detailsSlice from './../features/details/detailsSlice'

export const store = configureStore({
    reducer: {
        productsReducer: productsSlice,
        navbarReducer: navbarSlice,
        detailsReducer: detailsSlice
    }
})