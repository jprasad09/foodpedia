import React, { useEffect } from 'react'
import styles from './recipeList.module.css'
import RecipeCard from './recipeCard/RecipeCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialRecipes } from '../../../store/recipeSlice'

const RecipeList = () => {

  const dispatch = useDispatch()

  const { recipes } = useSelector((state) => state.recipe)

  useEffect(() => {
    dispatch(fetchInitialRecipes())
  }, [])

  return (
    <main className={styles.recipeList}>
      { recipes ? 
        recipes?.map(({ idMeal, strMeal, strMealThumb }) => {
          return <RecipeCard key={idMeal} name={strMeal} image={strMealThumb} recipeId={idMeal} />
        }) 
        : 
        <h3 className={styles.notfound}>Not Found!</h3>
      }
    </main>
  )
}

export default RecipeList