import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../api/axios"
import { CATEGORIES_URL } from "../utils/constants"

export const CATEGORIES_STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

// fetching categories
export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
    const { data: { categories } } = await axios.get(`${CATEGORIES_URL}`)
    return categories;
})

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        status: CATEGORIES_STATUSES.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = CATEGORIES_STATUSES.LOADING
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
                state.status = CATEGORIES_STATUSES.IDLE
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = CATEGORIES_STATUSES.ERROR
            })
    },
})

export default categorySlice.reducer