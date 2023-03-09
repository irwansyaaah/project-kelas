import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBestSeller = createAsyncThunk("list-product/best-seller", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return response.data;
})

export const bestSellerSlice = createSlice({
    name: "bestSeller",
    initialState: {
        status: "idle",
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getBestSeller.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getBestSeller.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            });
    },
})

export default bestSellerSlice.reducer;