import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// Axios
import axios from "axios"

const initialState = {
    loading: false,
    value: [],
    error: ""
}

export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await axios.get("https://dummyjson.com/products")
    const products = response.data.products
    const filteredProducts = products.filter(product => product.title !== "Chicken Meat" && product.title !== "Calvin Klein CK One" && product.title !== "Dolce Shine Eau de")
    return filteredProducts
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.value = action.payload
        })

        builder.addCase(getProducts.rejected, (state) => {
            state.error = "Bad fetching!"
        })
    }
})

export default productsSlice.reducer