import React, { useEffect } from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'

import styles from './recipeList.module.css'
import RecipeCard from './recipeCard/RecipeCard'
import { fetchInitialRecipes } from '../../../store/recipeSlice'
import { RECIPES_STATUSES } from '../../../store/recipeSlice'

const RecipeList = () => {

  const { recipes, status } = useSelector((state) => state.recipe)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInitialRecipes())
  }, [])
  
  // scrolling to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [recipes])

  // showing loading animation while resolving or rejecting promise
  if(status === RECIPES_STATUSES.LOADING){
    return <MagnifyingGlass glassColor = 'white' color = 'black'/>
  }

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