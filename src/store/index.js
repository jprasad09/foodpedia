import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from './recipeSlice'
import categoryReducer from './categorySlice'
import cuisineReducer from './cuisineSlice'

const store = configureStore({
    reducer: {
        recipe: recipeReducer,
        category: categoryReducer,
        cuisine: cuisineReducer,
    },
})

export default store