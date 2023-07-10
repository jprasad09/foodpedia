import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../api/axios"
import { CUISINES_URL } from "../utils/constants"

export const CUISINES_STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

export const fetchCuisines = createAsyncThunk('cuisines/fetch', async () => {
    const { data: { meals } } = await axios.get(`${CUISINES_URL}`)
    return meals
})

const cuisineSlice = createSlice({
    name: 'cuisine',
    initialState: {
        cuisines: [],
        status: CUISINES_STATUSES.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCuisines.pending, (state, action) => {
                state.status = CUISINES_STATUSES.LOADING
            })
            .addCase(fetchCuisines.fulfilled, (state, action) => {
                state.cuisines = action.payload
                state.status = CUISINES_STATUSES.IDLE
            })
            .addCase(fetchCuisines.rejected, (state, action) => {
                state.status = CUISINES_STATUSES.ERROR
            })
    },
})

export default cuisineSlice.reducer