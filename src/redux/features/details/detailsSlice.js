import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function fetchFromLocalStorage() {
    let value = localStorage.getItem("details");
    if (value) {
        return JSON.parse(value);
    }
    else {
        return []; // empty array
    }
}

function storeInLocalStorage(data) {
    localStorage.setItem("details", JSON.stringify(data));
}

const initialState = {
    loading: false,
    value: fetchFromLocalStorage(),
    error: ""
}

export const getDetails = createAsyncThunk("getDetails", async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    // console.log(response);
    // console.log(response.data); // Returns an object
    return response.data;
})

export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDetails.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload; // api'den gelen verileri value'ya doldurma işlemi
            storeInLocalStorage(state.value);
        })

        builder.addCase(getDetails.rejected, (state, action) => {
            state.error = "Bad fetching!"
        })
    }
});

export default detailsSlice.reducer;