import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../api/axios"
import { RECIPES_BY_CATEGORY_URL, RECIPES_BY_CUSINE_URL, SEARCH_URL, RECIPE_BY_ID_URL } from "../utils/constants"

export const RECIPES_STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

export const SINGLE_RECIPE_STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

export const fetchRecipesByCategory = createAsyncThunk('recipes_by_category/fetch', async (category) => {
    const { data: { meals } } = await axios.get(`${RECIPES_BY_CATEGORY_URL}${category}`)
    return meals;
})

export const fetchRecipesByCusine = createAsyncThunk('recipes_by_cusine/fetch', async (cuisine) => {
    const { data: { meals } } = await axios.get(`${RECIPES_BY_CUSINE_URL}${cuisine}`)
    return meals;
})

export const fetchInitialRecipes = createAsyncThunk('initial_recipes/fetch', async () => {
    const { data: { meals } } = await axios.get(`${RECIPES_BY_CATEGORY_URL}Beef`)
    return meals;
})

export const fetchRecipesBySearchTerm = createAsyncThunk('recipes_by_search_term/fetch', async (searchTerm) => {
    const { data: { meals } } = await axios.get(`${SEARCH_URL}${searchTerm}`)
    return meals;
})

export const fetchRecipesById = createAsyncThunk('recipes_by_id_fetch', async (id) => {
    const { data: { meals } } = await axios.get(`${RECIPE_BY_ID_URL}${id}`)
    return meals[0];
})

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        recipes: [],
        status: RECIPES_STATUSES.IDLE,
        filterBy: "",
        singleRecipe: {},
        singleRecipeStatus: SINGLE_RECIPE_STATUSES.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipesByCategory.pending, (state, action) => {
                state.status = RECIPES_STATUSES.LOADING
                state.filterBy = "category"
            })
            .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
                state.recipes = action.payload
                state.status = RECIPES_STATUSES.IDLE
                state.filterBy = "category"
            })
            .addCase(fetchRecipesByCategory.rejected, (state, action) => {
                state.status = RECIPES_STATUSES.ERROR
                state.filterBy = "category"
            })
            .addCase(fetchRecipesByCusine.pending, (state, action) => {
                state.status = RECIPES_STATUSES.LOADING
                state.filterBy = "cuisine"
            })
            .addCase(fetchRecipesByCusine.fulfilled, (state, action) => {
                state.recipes = action.payload
                state.status = RECIPES_STATUSES.IDLE
                state.filterBy = "cuisine"
            })
            .addCase(fetchRecipesByCusine.rejected, (state, action) => {
                state.status = RECIPES_STATUSES.ERROR
                state.filterBy = "cuisine"
            })
            .addCase(fetchInitialRecipes.pending, (state, action) => {
                state.status = RECIPES_STATUSES.LOADING
                state.filterBy = "category"
            })
            .addCase(fetchInitialRecipes.fulfilled, (state, action) => {
                state.recipes = action.payload
                state.status = RECIPES_STATUSES.IDLE
                state.filterBy = "category"
            })
            .addCase(fetchInitialRecipes.rejected, (state, action) => {
                state.status = RECIPES_STATUSES.ERROR
                state.filterBy = "category"
            })
            .addCase(fetchRecipesBySearchTerm.pending, (state, action) => {
                state.status = RECIPES_STATUSES.LOADING
                state.filterBy = "search"
            })
            .addCase(fetchRecipesBySearchTerm.fulfilled, (state, action) => {
                state.recipes = action.payload
                state.status = RECIPES_STATUSES.IDLE
                state.filterBy = "search"
            })
            .addCase(fetchRecipesBySearchTerm.rejected, (state, action) => {
                state.status = RECIPES_STATUSES.ERROR
                state.filterBy = "search"
            })
            .addCase(fetchRecipesById.pending, (state, action) => {
                state.singleRecipeStatus = SINGLE_RECIPE_STATUSES.LOADING
            })
            .addCase(fetchRecipesById.fulfilled, (state, action) => {
                state.singleRecipe = action.payload
                state.singleRecipeStatus = SINGLE_RECIPE_STATUSES.IDLE
            })
            .addCase(fetchRecipesById.rejected, (state, action) => {
                state.singleRecipeStatus = SINGLE_RECIPE_STATUSES.ERROR
            })

    },
})

export default recipeSlice.reducer