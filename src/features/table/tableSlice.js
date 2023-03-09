import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTable = createAsyncThunk("list-product/table", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data;
})

export const tableSlice = createSlice({
    name: "table",
    initialState: {
        status: "idle",
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getTable.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getTable.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            });
    },
})

export default tableSlice.reducer;