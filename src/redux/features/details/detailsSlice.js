import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// Axios
import axios from "axios"

const fetchFromLocalStorage = () => {

    let value = localStorage.getItem("details")
    if (value) {
        return JSON.parse(value)
    }
    else {
        return []
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem("details", JSON.stringify(data))
}

const initialState = {
    loading: false,
    value: fetchFromLocalStorage(),
    error: ""
}

export const getDetails = createAsyncThunk("getDetails", async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    return response.data
})

export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDetails.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getDetails.fulfilled, (state, action) => {
            state.loading = false
            state.value = action.payload
            storeInLocalStorage(state.value)
        })

        builder.addCase(getDetails.rejected, (state) => {
            state.error = "Bad fetching!"
        })
    }
})

export default detailsSlice.reducer